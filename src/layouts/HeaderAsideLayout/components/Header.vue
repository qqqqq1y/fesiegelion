<template>
  <el-menu class="header" mode="horizontal">
    <div class="menu-title">
      fesiegelion
    </div>
    <div class="header_search">
      <el-input
        v-model="search"
        clearable>
      </el-input>
      <i class="fesiegelion fesiegelion-search s_icon"></i>
    </div>
    <div class="logout">

    </div>
  </el-menu>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      search: ''
    };
  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  height: 64px;
  line-height: 56px;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  .menu-title {
    padding-left: 24px;
    font-size: 20px;
    font-weight: 600;
    color: #303030;
  }
  .header_search {
    width: 288px;
    margin-left: 96px;
    position: relative;
    .s_icon {
      position: absolute;
      top: 0;
      right: 0;
      color: #D8DCE6;
    }
  }
}
</style>

