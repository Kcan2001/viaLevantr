<template>
  <div>
    <Header />
    <SideMenu />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    SideMenu,
    Footer
  }
};
</script>

<style></style>
