<template>
  <div class="head">
    <div class="head_buttons">
      <router-link to="/"
        ><my-button class="head_btn">Регистрация</my-button></router-link
      >
      <router-link to="/tasks"
        ><my-button class="head_btn">Задания</my-button></router-link
      >
      <router-link to="/about"
        ><my-button class="head_btn">Операции</my-button></router-link
      >
      <router-link :to="pathMod"
        ><my-button class="head_btn" @click="isAuth"
          >Профиль</my-button
        ></router-link
      >
      <router-link to="/top"
        ><my-button class="head_btn">Топ</my-button></router-link
      >
    </div>
    <img class="headerImg" src="@/assets/zxcimage.png" />
  </div>
</template>

<script>
import MyButton from "./UI/MyButton.vue";
export default {
  components: { MyButton },
  props: {
    isAuth: Boolean,
  },
  data() {
    return {
      pathMod: "/",
    };
  },
  methods: {
    isAuth() {
      if (sessionStorage.getItem("token") !== null) {
        this.pathMod = "/profile";
        console.log(this.pathMod);
        localStorage.clear();
        localStorage.removeItem("token");
      } else {
        this.pathMod = "/";
      }
    },
  },
};
</script>

<style scoped>
@media (max-width: 720px) {
  .head {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
  }
  @media (min-width: 720px) {
    .head {
      padding-top: 20px;
      padding-left: 20%;
      padding-right: 20%;
    }
  }
}
.head {
  margin-right: 2%;
  padding-bottom: 20px;
  height: 20%px;
}
.head_buttons {
  padding-top: 15px;
  width: 100%;
}
.head_btn {
}

.AvatarSvg {
  margin-right: 0%;
  height: 10%;
  width: 100px;
}
.headerImg {
  height: 100%;
  width: 100px;
}
</style>
