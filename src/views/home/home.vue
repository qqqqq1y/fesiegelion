<template>
  <div class="main">
    <div class="article">
      <div class="article-item" v-for="item in articleList" :key="item.articleId">
        <a class="title" :href="item.url" target="view_window">{{ item.title }}</a>
        <a class="desc" :href="item.url" target="view_window">{{ item.desc }}</a>
        <p class="from">
          <span class="source">来源: {{ item.websiteId | chooseWebSite }}</span>
          <span class="person">分享人: {{ item.name }}</span>
          <span class="time">创建时间: {{ item.createTime | timeFormat('YYYY-MM-DD') }}</span>
        </p>
        <span class="line"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'home',
  data() {
    return {

    };
  },
  mounted() {
    this.getData();
  },
  computed: {
    ...mapGetters(['articleList'])
  },
  methods: {
    getData() {

    }
  }
};
</script>

<style lang="scss" scoped>
  .main {
    margin-left: auto;
    margin-right: auto;
    padding-top: 24px;
    width: 960px;
    .article {
      cursor: pointer;
      color: #969696;
      .article-item {
        padding-bottom: 24px;
      }
      .title {
        font-size: 18px;
        font-weight: 700;
        color: #333;
      }
      .desc {
        display: block;
        width: 60%;
        margin: 16px 0;
        line-height: 20px;
        font-size: 14px;
        word-wrap: break-word;
      }
      .from {
        font-size: 12px;
        span {
          margin-right: 24px;
        }
      }
      .line {
        display: inline-block;
        width: 100%;
        height: 1px;
        background: #969696;
      }
    }
  }
  @media screen and (max-width: 960px) {
    .main {
      width: 760px;
    }
  }
</style>
