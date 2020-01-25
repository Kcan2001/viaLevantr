<template>
  <div class="container">
    Sign in 
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Calendar from '../Calendar'

export default {
  name: "home",
  components: {
    Calendar
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  }
};
</script>