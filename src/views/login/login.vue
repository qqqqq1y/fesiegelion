<template>
  <div class="box">
    <div id='stars'></div>
    <div id='stars2'></div>
    <div id='stars3'></div>

    <button @click="handleLogin">登陆</button>
    <!-- <canvas id="sakura"></canvas>
    <div class="btnbg"></div> -->
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {

    };
  },
  mounted() {

  },
  methods: {
    handleLogin() {
      this.$router.push({ name: 'home' });
    }
  }
};
</script>

<style lang="scss" scoped>
  .box {
    height: 100%;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    overflow: hidden;
  }
</style>
