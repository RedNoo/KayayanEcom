<template>
  <div>
    <Navbar></Navbar>
    <HomeSlider></HomeSlider>
    <HomeCategory category="Kitchen"></HomeCategory>
    <HomeCategory category="Electronic"></HomeCategory>
    <HomeRequestForQuotation></HomeRequestForQuotation>
    <HomeRecommendedItems></HomeRecommendedItems>
    <HomeLinks></HomeLinks>
    <HomeSubscribe></HomeSubscribe>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import HomeSlider from "@/sections/HomeSlider.vue";
import HomeCategory from "@/sections/HomeCategory.vue";
import HomeRequestForQuotation from "@/sections/HomeRequestForQuotation.vue";
import HomeRecommendedItems from "@/sections/HomeRecommendedItems.vue";
import HomeLinks from "@/sections/HomeLinks.vue";
import HomeSubscribe from "@/sections/HomeSubscribe.vue";
import Footer from "@/sections/Footer.vue";





export default {
  name: "home",
  components: {
    Navbar, HomeSlider, HomeCategory, HomeRequestForQuotation, HomeRecommendedItems,HomeLinks, HomeSubscribe, Footer
  }
};
</script>
<style lang="scss">

</style>
