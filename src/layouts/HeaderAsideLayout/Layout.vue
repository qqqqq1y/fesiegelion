<template>
  <div class="app-wrapper">
    <div class="main-container">
      <Header class="header"></Header>
      <Nav></Nav>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import { Header, AppMain, Nav } from './components';

export default {
  name: 'layout',
  components: {
    Header,
    AppMain,
    Nav
  },
  created() {

  }
};
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
}

.main-container {
  position: relative;
  min-height: 100vh;
  background-color: #f0f2f5;
}

.header {
  height: 56px!important;
}
</style>
