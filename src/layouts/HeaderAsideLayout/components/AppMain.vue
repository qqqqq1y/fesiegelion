<template>
  <section class="app-main">
    <!-- <breadcrumb class="breadcrumb"></breadcrumb> -->
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
import Breadcrumb from './Breadcrumb';

export default {
  name: 'AppMain',
  components: {
    Breadcrumb
  }
};
</script>

<style lang="scss" scoped>
  .app-main {
    background: #fff;
  }
  .breadcrumb {
    margin-top: 8px;
    line-height: 24px!important;
    margin-left: 24px!important;
    .el-breadcrumb__item {
      height: 24px!important;
    }
  }
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
</style>
