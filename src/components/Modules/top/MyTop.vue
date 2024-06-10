<template>
  <div>
    <div class="TopHeader">Рейтинг</div>
    <one-place
      v-for="(topUsers, index) in topUsers"
      :login="topUsers.login"
      :score="topUsers.score"
      :index="index"
    ></one-place>
  </div>
</template>

<script>
import axios from "axios";
import OnePlace from "./components/OnePlace.vue";
export default {
  components: {
    OnePlace,
  },
  data() {
    return {
      topUsers: null,
    };
  },
  async mounted() {
    const markets = await axios.get("http://localhost:3000/users/top10");
    console.log(markets.data);
    this.topUsers = markets.data;
    console.log(this.$store.state.count);
  },
};
</script>

<style>
.TopHeader {
  display: flex;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: x-large;
  color: white;
}
</style>
