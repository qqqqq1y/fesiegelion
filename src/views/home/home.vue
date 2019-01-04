<template>
  <div class="main">
    <div class="article">
      <a class="title" href="javascript:void(0)">asdasd</a>
      <p class="desc" @click="handleLCick">asd</p>
      <p class="from">asd</p>
    </div>
  </div>
</template>

<script>
import HomeService from '@/api/home';

export default {
  name: 'home',
  data() {
    return {

    };
  },
  methods: {
    handleLCick() {
      const params = {};

      HomeService.getArticleList().then((res) => {
        console.log(res)
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  .main {
    margin-top: 64px;
    margin-left: auto;
    margin-right: auto;
    width: 960px;
    .article {
      cursor: pointer;
      color: #969696;
      .title {
        font-size: 18px;
        font-weight: 700;
        color: #333;
      }
      .desc {
        margin: 16px 0;
      }
    }
  }
</style>
