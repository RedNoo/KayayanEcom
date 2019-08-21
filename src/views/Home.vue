<template>
  <div>
    <Navbar></Navbar>
    <HomeSlider></HomeSlider>

  

  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import HomeSlider from "@/sections/HomeSlider.vue";

export default {
  name: "home",
  components: {
    Navbar, HomeSlider
  }
};
</script>
