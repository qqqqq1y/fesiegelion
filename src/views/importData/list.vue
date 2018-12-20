<template>
  <div class="container">
    <div class="title">
      <p class="title-text">导入数据</p>
      <el-popover
        placement="bottom"
        trigger="click"
        width="150"
      >
        <div style="text-align: left; margin: 0; padding-left: 16px; cursor: pointer">
          <p @click="handleShowModel('临床安全', 1)">临床安全</p>
          <p @click="handleShowModel('质量控制', 2)">质量控制</p>
          <p @click="handleShowModel('护理人力', 3)">护理人力</p>
          <p @click="handleShowModel('护士长管理', 4)">护士长管理</p>
        </div>
        <el-button slot="reference" class="title-btn">导入</el-button>
      </el-popover>
    </div>
    <el-table :data="listData" style="width: 100%" class="list" :header-cell-style="{ 'background': '#F2F6FC' }">
      <el-table-column prop="typeName" label="导入类型"></el-table-column>
      <el-table-column  prop="gmtCreate" label="导入时间"></el-table-column>
    </el-table>
    <el-dialog
      class="up-dialog"
      :title="`${dialogTitle}数据导入`"
      :visible.sync="dialogVisible"
      width="45%">
      <p class="update-box">
        <span>1. 按照模板格式录入内容</span>
        <a class="text-color" v-if="limit > 1" href="/static/quality_event.xlsx" download="不良事件模版">不良事件模版</a>
        <a class="text-color" v-if="limit > 1" href="/static/quality_other.xlsx" download="其他类型模版">其他类型模版</a>
        <a class="text-color" v-else :href="downloadSrc" :download="`${dialogTitle}模版`">下载模版</a>
        <el-upload
          class="upload-btn"
          action="/web/clinic/data/import/excel/"
          ref="upload"
          accept=".xls,.xlsx,.csv"
          :auto-upload="false"
          :limit="limit"
          :before-upload="handleBeforeUpload"
          :on-exceed="handleExceed"
          :on-error="handleError"
          :data="userData"
          :file-list="fileList"
        >
          <el-button size="small">选择文件</el-button>
        </el-upload>
      </p>
      <p class="success-box">
        <span>2. 点击上传, 完成文档导入</span>
        <el-button class="upload" size="small" @click="handleUploadSucc">上传文档</el-button>
      </p>
      <p v-html="tpl"></p>
    </el-dialog>

    <div class="loading" :class="{'loading_show': isLoding}">
      <i class="el-icon-loading l_icon"></i>
      <span class="l_title">正在上传</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import tplObj from '@/utils/tpl';
import importService from '@/api/import';

export default {
  name: 'importData',
  data() {
    return {
      listData: [],
      dialogVisible: false,
      dialogTitle: '',
      limit: 1,
      tplObj: {},
      tpl: null,
      pageData: {
        current: 1,
        size: 10
      },
      downloadSrc: '',
      isLoding: true,
      userData: {},
      fileList: []
    };
  },
  mounted() {
    this.tplObj = {
      ...tplObj
    };

    this.getData();
  },
  computed: {
    ...mapGetters(['hospitalId', 'userId'])
  },
  methods: {
    getData() {
      const params = {
        hospitalId: this.hospitalId,
        ...this.pageData
      };

      this.userData = {
        userId: this.userId,
        hospitalId: this.hospitalId
      }

      importService.list(params).then((res) => {
        this.listData = res.data.records;
      });
    },
    handleShowModel(info, i) {
      i === 2 ? this.limit = 9999 : this.limit = 1;
      switch (i) {
        case 1:
          this.downloadSrc = '/static/safety.xlsx';
          break;
        case 3:
          this.downloadSrc = '/static/nurser.xlsx';
          break;
        case 4:
          this.downloadSrc = '/static/nurser_leader.xlsx';
          break;
        default:
          break;
      }

      this.tpl = tplObj[`t${i}`];
      this.dialogVisible = true;
      this.dialogTitle = info;
    },
    handleBeforeUpload(file) {
      const isExcel = file.name.indexOf('.xlsx') || file.name.indexOf('.xls');

      if (isExcel < 0) {
        this.$message({
          message: '请使用模版编辑上传',
          type: 'error'
        });

        return false;
      }

      this.dialogVisible = false;
    },
    handleExceed() {
      this.$message({
        message: `最多上传${this.limit}个文件`,
        type: 'warning'
      });
    },
    handleUploadSucc(response, file) {
      this.$refs.upload.submit();
      this.isLoding = false;

      importService.statistics(this.userData).then(() => {
        this.$refs.upload.clearFiles();
        this.isLoding = true;
      }).catch(() => {
        this.$message({
          message: '数据统计出现错误',
          type: 'error'
        });

        this.isLoding = true;
      });
    },
    handleError() {
      this.$message({
        message: '请使用模版进行编辑上传',
        type: 'error'
      });

      this.dialogVisible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
  .title {
    padding: 24px;
    .title-text {
      float: left;
      font-size: 20px;
      font-weight: 600;
    }
    .title-btn {
      float: right;
      background: #F39C12;
      border: 1px solid #DD6F32;
      color: #fff;
    }
  }
  .list {
    padding: 0 24px;
  }
  .el-table::before {
    height: 0;
  }
  .text-color {
    cursor: pointer;
    color: #F39C12
  }
  .upload-btn {
    margin: 8px 16px;
    .el-button {
      border: 1px solid #F39C12;
      color: #F39C12;
    }
  }
  .success-box {
    display: flex;
    flex-direction: column;
    .upload {
      width: 80px;
      margin: 8px 16px;
      background: #F39C12;
      color: #fff;
    }
  }
  .up-dialog
  .el-dialog__header {
    background: #3F51B5 !important;
  }

  .loading {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background: rgba(0, 0, 0, 0.7);
    .l_icon {
      position:absolute;
      top:50%;
      left:50%;
      -webkit-transform: translate(-50%,-50%);
      -moz-transform: translate(-50%,-50%);
      transform: translate(-50%,-50%);
      color: #54C0EF;
    }
    .l_title {
      @extend .l_icon;
      top: 55%;
      left: 51%;
      font-size: 12px;
    }
  }
  .loading_show {
    display: none;
  }

</style>
