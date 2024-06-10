<template>
  <div>
    <div class="task_row" v-for="(task, index) in tasks" :key="index">
      <p>{{ task }}</p>
      <input
        type="text"
        class="inputAns"
        placeholder="Ответ"
        v-model="inputValues[index]"
      />
    </div>
    <div v-if="Ans" class="checkBtns">
      <p>Правильно решено {{ NumOfCorrect }}</p>
      <p>Ответы: {{ OldAns }}</p>
    </div>
    <my-button
      v-model="NumOfTasks"
      v-if="!Ans"
      @click="checkAns"
      class="checkBtn"
      >Проверить</my-button
    >
    <my-button
      v-model="NumOfTasks"
      v-if="Ans"
      @click="RecreateAns"
      class="checkBtn"
      >Новое задание</my-button
    >
  </div>
</template>

<script>
import MyButton from "../../../UI/MyButton.vue";
import axios from "axios";
export default {
  components: { MyButton },
  props: {
    tasks: {
      type: String,
      required: true,
    },
    answers: {
      type: Array,
      required: true,
    },
    type: {
      type: String,
    },
  },
  data() {
    return {
      inputValues: [],
      inputValue: "",
      Ans: false,
      NumOfCorrect: 0,
      OldAns: "",
    };
  },

  methods: {
    inputVal() {
      this.$emit("inputValues", this.inputValues);
      this.inputValues.push(inputValue);
      this.Ans = false;
      this.inputValues = [];
    },
    checkAns() {
      this.NumOfCorrect = 0;
      let ass = [];
      let ass2 = [];
      if (this.type == 5) {
        for (let i = 0; i < this.inputValues.length * 2; i++) {
          ass.push(this.inputValues[i]);
        }
        for (let i = 0; i < 10; i += 2) {
          let ans = "";
          ans += this.answers[i];
          ans += ",";
          ans += this.answers[i + 1];
          ass2.push(ans);
        }
        for (let i = 0; i < 5; i++) {
          if (ass2[i] == ass[i]) {
            this.NumOfCorrect += 1;
          }
        }
      } else {
        for (let i = 0; i < this.inputValues.length; i++) {
          if (this.inputValues[i] == this.answers[i]) {
            this.NumOfCorrect += 1;
          } else {
          }
        }
      }
      this.inputValues = [];
      this.Ans = true;
      this.OldAns = this.answers;
      console.log(sessionStorage.getItem("login"));
      this.updateScore(
        sessionStorage.getItem("login"),
        this.NumOfCorrect,
        sessionStorage.getItem("id")
      );
    },
    async updateScore(login, score, id) {
      try {
        const response = await axios.put(`http://localhost:3000/users/${id}`, {
          login,
          score,
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    RecreateAns() {
      this.Ans = false;
      this.$emit("checkAns");
    },
  },
};
</script>

<style>
.checkAns {
  display: flex;
  justify-content: center;
}
@media (max-width: 720px) {
  .task_row {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1f2c3c;
    margin-top: 5px;
    padding: 9px;
    border-radius: 35px;
    width: auto;
  }
}
.task_row {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1f2c3c;
  margin-top: 5px;
  padding: 9px;
  border-radius: 35px;
  width: auto;
}
.inputAns {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 10px;
}
p {
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  color: white;
}
.checkBtn {
  padding: 10px;
  background-color: #1f2c3c;
  border-radius: 15px;
  display: flex;
  justify-content: center;
}
.checkBtns {
  background-color: #1f2c3c;
  padding: 7px;
  border-radius: 25px;
  margin-top: 10px;
}
</style>
