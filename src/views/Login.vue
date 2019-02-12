<template>
  <div class="login">
    <Card class="login-card">
      <img src="../assets/logo.png" />
      <Form
        ref="formInline"
        :model="formInline"
        :rules="ruleInline"
      >
        <FormItem prop="user">
          <Input
            type="text"
            v-model="formInline.user"
            placeholder="Username"
          >
          <Icon
            type="ios-person-outline"
            slot="prepend"
          ></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input
            type="password"
            v-model="formInline.password"
            placeholder="Password"
          >
          <Icon
            type="ios-lock-outline"
            slot="prepend"
          ></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            @click="handleSubmit('formInline')"
          >登陆</Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        password: ""
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur"
          },
          {
            type: "string",
            min: 4,
            message: "The password length cannot be less than 4 bits",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      let vm = this;
      vm.$refs[name].validate(valid => {
        if (valid) {
          vm.$Message.success("Success!");
          vm.$store
            .dispatch("checkLogin")
            .then(() => vm.$router.push({ path: "/" }));
        } else {
          vm.$Message.error("Fail!");
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-card {
    width: 350px;
    height: auto;
  }
}
</style>
