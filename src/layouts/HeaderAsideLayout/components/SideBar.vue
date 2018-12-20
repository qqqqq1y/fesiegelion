<template>
  <scroll-bar>
    <div class="logo">
      <img src='../../../../static/logo.png' width="190px">
    </div>
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.name"
      background-color="#54C0EF"
      text-color="#FFF"
      active-text-color="#16A6EB"
    >
      <template v-for="item in asideMenuConfig" v-if="item.name != 'notFound'">
        <router-link v-if="!item.children && item.meta" :to="item.path" :key="item.name">
          <el-menu-item :index="item.name">
            <i v-if="item.icon" :class="item.icon"></i>
            <span v-if="item.meta && item.meta.title" slot="title">{{item.meta.title}}</span>
          </el-menu-item>
        </router-link>

        <el-submenu v-else :index="item.name || item.path" :key="item.name">
          <template slot="title">
            <i v-if="item && item.icon" :class="item.icon"></i>
            <span v-if="item && item.meta && item.meta.title" slot="title">{{item.meta.title}}</span>
          </template>
          <template v-for="child in item.children" v-if="!child.hidden && child.meta && child.meta.title">
            <router-link :to="child.path" :key="child.name">
              <el-menu-item :index="child.name">
                <span v-if="child && child.meta && child.meta.title" slot="title">{{child.meta.title}}</span>
              </el-menu-item>
            </router-link>
          </template>
        </el-submenu>

      </template>
    </el-menu>
  </scroll-bar>
</template>

<script>
import ScrollBar from './ScrollBar';
import asideMenuConfig  from '@/router/routerConfig';

export default {
  components: { ScrollBar },
  name: 'SideBar',
  props: {},
  data() {
    return {
      asideMenuConfig
    };
  },
  methods: {
    getActiveIndex() {

    }
  },
  mounted() {
    console.log(this.$route.name)
  }
};
</script>

<style lang="scss" scoped>
.logo {
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  line-height: 64px;
  background: #3F51B5;
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  overflow: hidden;
}
.site-name {
  margin-left: 10px;
}
.sidebar-container {
  box-shadow: 2px 0 6px rgba(0, 21, 41, .35);
  transition: width 0.28s;
  width: 256px !important;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  a {
    display: inline-block;
    width: 100%;
  }
  .el-menu {
    padding-top: 16px;
    width: 100% !important;
    border: none;
    background-color: #3F51B5 !important;
  }
  .el-submenu .el-menu-item {
    min-width: 256px !important;
    padding-left: 48px !important;
    background-color: #3F51B5 !important;
    &:hover {
      color: #fff !important;
    }
  }
  .el-menu-item,
  .el-submenu .el-menu-item {
    &.is-active {
      background-color: #F39C12 !important;
      color: #fff !important;
    }
  }
  .el-submenu__title i {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.65);
  }
}
</style>
