<template>
  <div>
    <img v-if="score < 5" class="petImgSad" src="@/assets/image1.png" />
    <img
      v-if="score > 5 && score <= 10"
      class="petImgSad"
      src="@/assets/image2.png"
    />
    <img v-if="score > 15" class="petImgSad" src="@/assets/image3.png" />
  </div>
</template>

<script>
export default {
  //...
  props: {
    score: {
      type: String,
      required: true,
      default: 0,
    },
  },
  data() {
    return {
      value: 50,
      max: 100,
    };
  },
};
</script>
<style scoped>
.imgPet {
  height: auto;
}
.petImgSad {
  width: 250px;
  height: auto;
  z-index: 123;
  border-radius: 50px;
  border: 2px;
  border-color: #1f2c3c;
}
.petImgNormal {
  background-image: url(/src/assets/PetGood.jpg);
}
.petImgGood {
  background-image: url(/src/assets/PetGood.png);
}
</style>
