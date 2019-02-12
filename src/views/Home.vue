<template>
  <div class="layout">
    <Header />
    <layout class="has-sider">
      <Sider />
      <Layout class="main">
        <Breadcrumb class="main-bread" />
        <Main class="main-content">
          Content
        </Main>
      </Layout>
    </layout>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "./base/Header.vue";
import Sider from "./base/Sider.vue";
import Breadcrumb from "./base/Breadcrumb.vue";
import Main from "./base/Main.vue";

export default {
  name: "home",
  methods: {},
  components: {
    Header,
    Sider,
    Breadcrumb,
    Main
  }
};
</script>

<style lang="less" scoped>
.layout {
  background: #f5f7f9;
  position: relative;
  overflow: hidden;
  height: 100%;
  .has-sider {
    flex-direction: row;
    height: 100%;
  }
  .main {
    padding: 0 24px 24px;
    .main-bread {
      margin: 24px 0;
    }
    .main-content {
      padding: 24px;
      min-height: 280px;
      background: #fff;
    }
  }
}
</style>
