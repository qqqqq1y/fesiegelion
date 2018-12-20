<template>
  <div class="app-wrapper" >
    <side-bar class="sidebar-container"></side-bar>
    <div class="main-container">
      <nav-bar class="nav"></nav-bar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import { NavBar, SideBar, AppMain } from './components';

export default {
  name: 'layout',
  components: {
    NavBar,
    SideBar,
    AppMain
  },
  created() {
    const hospitalId = localStorage.getItem('hospitalId');
    const userId = localStorage.getItem('userId');

    if (hospitalId && userId) {
      this.$store.commit('HOSPITALID', hospitalId);
      this.$store.commit('USERID', userId);
    } else {
      this.$router.push({ name: 'login' });
    }
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
  transition: margin-left 0.28s;
  margin-left: 256px;
  background-color: #f0f2f5;
}

.nav {
  height: 56px!important;
}
</style>
