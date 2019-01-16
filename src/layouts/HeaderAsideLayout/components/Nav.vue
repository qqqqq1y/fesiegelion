<template>
  <div class="nav">
    <div class="nav-container">
      <ul class="from-list">
        <li v-for="item in webSitelist" :key="item.key" @click="handleDiffWebSite(item.key)">{{ item.value }}</li>
      </ul>

      <el-button class="add" type="text" @click="dialogFormVisible = true">Add</el-button>
      <el-dialog title="添加分享" :visible.sync="dialogFormVisible">
        <el-form :model="addForm" ref="addArticle">
          <el-form-item label="文章来源">
            <el-select v-model="addForm.websiteId">
              <el-option v-for="item in webSitelist" :key="item.key" :label="item.value" :value="item.key"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="文章标题">
            <el-input v-model="addForm.title"></el-input>
          </el-form-item>
          <el-form-item label="文章链接">
            <el-input v-model="addForm.url"></el-input>
          </el-form-item>
          <el-form-item label="文章描述">
            <el-input v-model="addForm.desc"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="handleAddArticle('addArticle')">添加</el-button>
        </div>
      </el-dialog>

      <span class="add"></span>
    </div>
  </div>
</template>

<script>
import { navWebSiteStatus } from '@/filter/status';

export default {
  name: 'Nav',
  data() {
    return {
      webSitelist: navWebSiteStatus,
      dialogFormVisible: false,
      addForm: {
        websiteId: '',
        title: '',
        url: '',
        desc: ''
      }
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$store.dispatch('getArticleList', 1);
    },
    handleDiffWebSite(key) {
      console.log(key);

      this.$store.dispatch('getArticleList', key);
    },
    handleAddArticle(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.dialogFormVisible = false;

          console.log('添加');
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  .nav {
    height: 64px;
    line-height: 64px;
    background: #EAE5DA;
    .nav-container {
      width: 1080px;
      margin: 0 auto;
      position: relative;
      .el-dialog__header {
        padding: 0 24px !important;
      }
    }
    .from-list {
      margin: 0;
      display: flex;
      li {
        margin-right: 40px;
        list-style:none;
        cursor: pointer;
        color: #262728;
      }
    }
    .add {
      position: absolute;
      right: 0;
      top: 0;
      height: 40px;
      line-height: 40px;
      color: #000;
    }
  }
</style>
