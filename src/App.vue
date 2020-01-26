<template>
  <div>
    <Header v-show="user.loggedIn" />
    <SideMenu v-show="user.loggedIn" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SideMenu from "@/components/shared/SideMenu.vue";
import Header from "@/components/shared/Header.vue";
import Footer from "@/components/shared/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    SideMenu,
    Footer
  },
  computed: {
    ...mapGetters({
    // map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  }  
};
</script>

<style></style>
