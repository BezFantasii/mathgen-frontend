<template>
  <div class="calc">
    <div class="levels">
      <my-button @click="generateSimpleTask()">Сложение и вычитание</my-button>
      <my-button @click="generateMultiplicationTask()">Умножение</my-button>
      <my-button @click="generateDivisionTask()">Деление</my-button>
      <my-button @click="generateAllTask()">Примеры со скобками</my-button>
      <my-button @click="generateSimpleHard()">X</my-button>
      <my-button @click="generateHardTask()">X^2</my-button>
    </div>
    <div class="tasks">
      <my-task
        :tasks="tasks"
        :answers="answers"
        @inputValues="inputVal"
        @checkAns="generateNewTasks"
        :type="type"
      ></my-task>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";
import MyTask from "./components/MyTask.vue";
export default {
  components: {
    MyButton,
    MyTask,
  },
  data() {
    return {
      randomNumber: 0,
      numberList: [],
      task: "",
      tasks: [],
      answers: [],
      answersUser: [],
      sum: 0,
      type: 0,
    };
  },
  mounted() {
    this.type = 1;
    this.generateNewTasks();
  },
  methods: {
    generateNewTasks() {
      if (this.type == "1") {
        this.generateSimpleTask();
      } else if (this.type == "5") {
        this.generateHardTask();
      } else if (this.type == "3") {
        this.generateDivisionTask();
      } else if (this.type == "2") {
        this.generateMultiplicationTask();
      } else if (this.type == "4") {
        this.generateAllTask();
      } else if (this.type == "6") {
        this.generateSimpleHard();
      }
      this.answersUser = [];
    },

    inputVal(inputValues) {
      this.answersUser = inputValues;
      console.log(inputValues);
    },
    generateSimpleHard() {
      this.tasks = [];
      this.answers = [];

      this.type = 6;
      for (let i = 0; i < 5; i++) {
        let x = this.generateRandomNumber(1, 10);
        let b = this.generateRandomNumber(-10, 10);
        let a = this.generateRandomNumber(1, 10);
        let c = a * x + b;
        this.task = `${a}x+(${b})=${c}`;
        this.task += " =";
        this.answers.push(x);
        this.tasks.push(this.task);
        console.log(this.tasks);
      }
    },
    generateRandomNumber(max, min) {
      this.randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      return this.randomNumber;
    },
    generateHardTask() {
      this.tasks = [];
      this.answers = [];

      this.type = 5;
      for (let i = 0; i < 5; i++) {
        let x1 = this.generateRandomNumber(1, 10);
        let x2 = this.generateRandomNumber(1, 10);
        let a = this.generateRandomNumber(1, 10);
        this.task = `${a}x^2${-(x1 + x2) * a}x+${x1 * x2 * a}=0`;
        this.task += " =";
        let minValue = Math.min(x1, x2);
        let maxValue = Math.max(x1, x2);
        this.answers.push(minValue);
        this.answers.push(maxValue);
        this.tasks.push(this.task);
        console.log(this.tasks);
      }
    },
    generateDivisionTask() {
      this.type = 3;

      this.tasks = [];
      this.answers = [];
      for (let i = 0; i < 5; i++) {
        let a = this.generateRandomNumber(1, 10);
        let b = a * this.generateRandomNumber(1, 10);
        this.task = `${b}/${a}`;
        this.answers.push(eval(this.task));

        this.task += " =";

        this.tasks.push(this.task);
      }
    },
    generateMultiplicationTask() {
      this.type = 2;
      this.tasks = [];
      this.answers = [];
      for (let i = 0; i < 5; i++) {
        let a = this.generateRandomNumber(1, 10);
        let b = this.generateRandomNumber(1, 10);
        this.task = `${a}*${b}`;
        this.answers.push(eval(this.task));

        this.task += " =";

        this.tasks.push(this.task);
      }
    },
    generateSimpleTask() {
      this.type = 1;

      this.tasks = [];
      this.answers = [];
      for (let i = 0; i < 5; i++) {
        let a = this.generateRandomNumber(1, 5);
        for (let i = 0; i < a; i++) {
          this.numberList.push(this.generateRandomNumber(1, 100));
          if (i < a - 1) {
            if (this.generateRandomNumber(-1, 2) === 0) {
              this.numberList.push("+");
            } else {
              this.numberList.push("-");
            }
          }
        }
        this.task = this.numberList.join(" ");
        this.answers.push(eval(this.task));
        this.task += " =";
        this.numberList = [];
        this.tasks.push(this.task);
      }
    },
    generateAllTask() {
      this.type = 4;

      this.tasks = [];
      this.answers = [];
      for (let i = 0; i < 5; i++) {
        let col = this.generateRandomNumber(3, 5);
        let a = this.generateRandomNumber(1, 10);
        let b = this.generateRandomNumber(1, 10);
        let c = this.generateRandomNumber(1, 10);
        let mult = `${a}*${b}`;
        let divis = `${c * this.generateRandomNumber(1, 10)}/${c}`;
        let x = this.generateRandomNumber(1, col);
        let y = col - 1;
        this.task = ""; // initialize this.task to an empty string
        let bounds = this.generateRandomNumber(0, 3);
        let boundsPlace = [];
        let b1 = this.generateRandomNumber(0, col / 2);
        let b2 = this.generateRandomNumber(col / 2, col);
        for (let i = 0; i < col; i++) {
          if (i === x) {
            if (x > y) {
              if (this.generateRandomNumber(-1, 2) === 0) {
                this.task += "+";
              } else {
                this.task += "-";
              }
            }
            this.task += mult;
            if (x < col - 1 || x === y) {
              if (this.generateRandomNumber(-1, 2) === 0) {
                this.task += "+";
              } else {
                this.task += "-";
              }
            }
          }
          if (i === y) {
            if (x < y) {
              if (this.generateRandomNumber(-1, 2) === 0) {
                this.task += "+";
              } else {
                this.task += "-";
              }
            }
            if (y < col - 1 && x !== y) {
              if (this.generateRandomNumber(-1, 2) === 0) {
                this.task += "+";
              } else {
                this.task += "-";
              }
            }
            this.task += divis;
          }
          if (i == b1) {
            this.task += "(";
          }

          if (i == b2) {
            this.task += ")";
          } else {
            this.task += this.generateRandomNumber(1, 100);
          }
          if (i < col - 2) {
            if (this.generateRandomNumber(-1, 2) === 0) {
              this.task += "+";
            } else {
              this.task += "-";
            }
          }
        }
        console.log(this.task.slice(this.task.length - 2));

        if (this.task.slice(this.task.length - 2) == "-)") {
          console.log(this.task.slice(this.task.length - 2));
          this.task.replace("-)", "");
          this.task += ")";
        }
        if (this.task.slice(this.task.length - 2) == "+)") {
          console.log(this.task.slice(this.task.length - 2));
          this.task.replace(this.task.slice(this.task.length - 2), "");
          this.task += ")";
        }
        try {
          this.answers.push(eval(this.task));
        } catch (e) {
          console.log(e);
        }
        this.task += " =";
        this.tasks.push(this.task);
      }
      console.log(this.answers);
    },
    checkAns(inputValue, index) {
      let score = 0;

      for (let i = 0; i < 5; i++) {
        console.log(inputValue);
        if (this.answers[i] === this.answersUser[i]) {
          score += 1;
        }
      }
      console.log("zxc");
      console.log(this.answersUser);
      this.answersUser = [];
      alert(`вы решили ${score} tasks`);
    },
  },
};
</script>
<style scoped>
@media (min-width: 1100px) {
  .levels {
    grid-template-columns: repeat(6, 1fr);
    padding: 5px;
    background-color: #1f2c3c;
    border-radius: 40px;
  }
}

@media (min-width: 720px) {
  .levels {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 5px;
    background-color: #1f2c3c;
    border-radius: 40px;
  }
}

.levels {
  display: grid;

  padding: 5px;
  background-color: #1f2c3c;
  border-radius: 40px;
}
.calc {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5%;
  background-color: white;
}
.tasks {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
