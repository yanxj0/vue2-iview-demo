<template>
  <Header>
    <Menu
      mode="horizontal"
      theme="dark"
      active-name="1"
    >
      <div class="header-logo"></div>
      <div class="header-nav">
        <MenuItem name="1">
        <Icon type="ios-navigate"></Icon>
        Item 1
        </MenuItem>
        <MenuItem name="2">
        <Icon type="ios-keypad"></Icon>
        Item 2
        </MenuItem>
        <MenuItem name="3">
        <Icon type="ios-analytics"></Icon>
        Item 3
        </MenuItem>
        <MenuItem name="4">
        <Icon type="ios-paper"></Icon>
        Item 4
        </MenuItem>
      </div>
    </Menu>
    <div class="logout">
      <Button
        shape="circle"
        icon="md-power"
        @click="logoutHandler()"
      ></Button>
    </div>
  </Header>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(["logout"]),
    logoutHandler() {
      this.logout();
      this.$router.push({ path: "/login" });
    }
  }
};
</script>

<style lang='less' scoped>
.header-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.header-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.logout {
  position: absolute;
  right: 10px;
  top: 0;
}
</style>