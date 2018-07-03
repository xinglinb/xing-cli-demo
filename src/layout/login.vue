<template>
  <div id="login" :style="note">
    <Card class="card">
      <p slot="title">药品信息管理系统</p>
      <i-form :model="formItem" ref="formItem" :rules="rule">
        <Form-item prop="phone">
          <Input v-model="formItem.phone">
          <span slot="prepend">账号</span>
          </Input>
        </Form-item>
        <Form-item prop="password">
          <Input @on-keyup.enter="submit('formItem')" v-model="formItem.password" type="password">
          <span slot="prepend">密 码</span>
          </Input>
        </Form-item>
        <Form-item class="lbutton">
          <Button @click="submit('formItem')" class="loginb" type="primary" icon="ios-search">登 录</Button>
        </Form-item>
        <Form-item class="lbutton">
          <a @click="forget">忘记密码？</a>
        </Form-item>
      </i-form>

    </Card>
  </div>
</template>

<script>
import cookie from "@/tools/cookie.js";
import login from "@/api/login.js";
import bgImg from "./../assets/login-bg.jpg";
export default {
  name: "login",
  data() {
    return {
      note: {
        backgroundImage: `url( ${bgImg} )`,
        backgroundRepeat: "no-repeat"
      },
      formItem: {
        phone: "",
        password: ""
      },
      rule: {
        phone: [
          { required: true, message: "手机号别忘了填啊！", trigger: "blur" },
          // {
          //   type: "string",
          //   min: 11,
          //   max: 11,
          //   message: "手机号是十位",
          //   trigger: "blur"
          // }
        ],
        password: [
          { required: true, message: "密码别忘了填啊！", trigger: "blur" },
          {
            type: "string",
            min: 6,
            message: "密码至少六位以上",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.getDate();
        } else {
          this.$Message.error("好好检查一下！");
        }
      });
    },
    forget() {
      this.$Message.warning("忘记了？早干嘛去了，活该！");
    },
    getDate() {
      let sendData = {
        phone: this.formItem.phone,
        password: this.formItem.password
      };
      // login.login(sendData)
      // .then(data=>{

      // })
      if (
        this.formItem.phone == 'admin' &&
        this.formItem.password == 123456
      ) {
        let wls = window.localStorage;
        wls.setItem("phone", this.formItem.phone);
        cookie.setCookie("hasLogin", true, 5);
        this.$router.push("/");
      } else {
        this.$Message.error("密码错误");
      }
    }
  },
  mounted: function() {
    let wls = window.localStorage;
    this.formItem.phone = wls.phone || "";
    // login.get()
  }
};
</script>

<style lang="css" scoped>
#login {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  overflow: hidden;
}
#login .card {
  max-width: 400px;
  width:80%;
  margin: 0 auto;
  margin-top: 200px
}
#login .card .loginb {
  width: 100%;
}
#login .card .lbutton {
  margin-bottom: 5px;
}
</style>
