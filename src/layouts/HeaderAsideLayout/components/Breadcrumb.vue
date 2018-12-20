<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="el-fade-in-linear">
      <el-breadcrumb-item v-for="item in levelList" :key="item.path" v-if='item.title'>
        <!-- <span v-if='item.redirect === "noredirect" || index == levelList.length - 1' class="no-redirect">{{item.meta.title}}</span> -->
        <router-link :to="item.path">{{item.title}}</router-link>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>

export default {
  name: "Breadcrumb",
  created() {
    this.getBreadcrumb()
  },
  data() {
    return {
      levelList: null
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.name);
      // const first = matched[0];

      // if (first && first.name !== 'dashboard') {
      //   matched = [{ path: '/dashboard', meta: { title: '今日工作台' }}].concat(matched);
      // }
      let meta = this.$route.meta;
      if(meta) {
        meta.breadcrum || (meta.breadcrum = []);
        let breadcrum = JSON.parse(JSON.stringify(meta.breadcrum));
        breadcrum && breadcrum.push({path: this.$route.path, title: meta.title});

        this.levelList = breadcrum;
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 10px;
    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }
</style>
