<template id="app">
  <div class="screen">
    <my-header class="my_header"></my-header>

    <div class="my_body">
      <router-view />
    </div>
  </div>
</template>
<script>
import MyHeader from "./components/MyHeader.vue";
import MyButton from "./components/UI/MyButton.vue";
import MyPet from "./components/UI/MyPet.vue";
export default {
  components: {
    MyButton,
    MyHeader,
    MyPet,
  },
  methods: {},
};
</script>

<style>
#body {
  margin: 0;
  padding: 0;
  font-family: "Raleway", sans-serif;
  height: 100%;
  background-color: #1f2c3c;
}
.screen {
  display: flex;
  flex-direction: column;
}
.my_body {
  display: flex;
  justify-content: center;
}
</style>
