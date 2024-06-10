<template>
  <div class="OnePlace">
    <div class="OnePlaceHeader">
      <p class="OnePlaceIndex">{{ index + 1 }}</p>
      <p>)</p>
      <p></p>
      <p class="OnePlaceLogin">{{ login }}</p>
      <p class="OnePlaceScore">{{ score }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    login: String,
    score: Number,
    index: Number,
  },
  methods: {},
};
</script>
<style>
.OnePlace {
  padding: 10px;
  background-color: white;
  padding-left: 12px;
  padding-right: 12px;
}
.OnePlaceHeader {
  display: flex;
  justify-content: left;
  min-width: 230px;
  background-color: #1f2c3c;
  border-radius: 50px;
  padding: 5px;
  padding-right: 15px;
  padding-left: 15px;
}
.OnePlaceIndex {
  width: 3%;
}
.OnePlaceLogin {
  margin-left: 2%;
  width: 60%;
  display: flex;
  justify-content: start;
}
.OnePlaceScore {
  width: 25%;
  margin-left: 10%;
  display: flex;
  justify-content: end;
}
</style>
