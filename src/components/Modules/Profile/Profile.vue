<template>
  <div class="reg">
    <div class="userData">
      <h1>Логин: {{ login }}</h1>
      <h3>Общая сумма решенных задач: {{ score }}</h3>
    </div>
    <div class="petData">
      <my-pet :score="dailyScore" class="imgMyPet"></my-pet>

      <h3>Имя питомца: {{ petname }}</h3>
      <h3 v-if="isNewVisitor">Пора покормить питомца!</h3>
      <h3 v-else>Питомец {{ hunger }}</h3>
      <h3>Сегодня решено {{ dailyScore }}</h3>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";
import axios from "axios";
import MyPet from "../../UI/MyPet.vue";
export default {
  components: { MyButton, MyPet },
  data() {
    return {
      login: "login",
      score: 0,
      isNewVisitor: false,
      hunger: "",
      dailyScore: "",
    };
  },

  async created() {
    const loginUser = sessionStorage.getItem("login");
    const idUser = sessionStorage.getItem("id");
    try {
      const response = await axios.get(
        `http://localhost:3000/users/${idUser}`,
        { loginUser }
      );
      this.login = loginUser;
      this.score = response.data.score;
      this.petname = response.data.petname;
      this.dailyScore = response.data.daily_tasks;

      if (this.dailyScore <= 5) {
        this.hunger = "очень голоден ";
      } else if (this.dailyScore <= 10 && this.dailyScore > 5) {
        this.hunger = "не против вкусно покушать";
      } else if (this.dailyScore >= 15) {
        this.hunger = "сыт";
      }
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    clearStore() {},
  },
};
</script>

<style>
@media (min-width: 720px) {
  .reg {
    display: flex;
    justify-content: center;
    background-color: white;
    padding: 20px;
    color: #1f2c3c;
  }
}
@media (max-width: 719px) {
  .reg {
    display: flex;
    flex-direction: column;
    background-color: white;

    padding: 20px;
    color: #1f2c3c;
    max-width: 80%;
    margin: 0, 5%;
  }
}
.imgMyPet {
  border-color: #1f2c3c;
  border-radius: 50px;
}
.userData {
  margin-right: 10px;
}
.petData {
  margin-left: 10px;
}
.p {
  z-index: 100;
  color: black;
}
</style>
