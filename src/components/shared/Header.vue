<template>
  <div>
    <div class="header-navbar-shadow" />
    <nav
      class="header-navbar main-header-navbar navbar-expand-lg navbar navbar-with-menu fixed-top"
    >
      <div class="navbar-wrapper">
        <div class="navbar-container content">
          <div
            id="navbar-mobile"
            class="navbar-collapse"
          >
            <div
              class="mr-auto float-left bookmark-wrapper d-flex align-items-center"
            >
              <ul class="nav navbar-nav">
                <li class="nav-item mobile-menu d-xl-none mr-auto">
                  <a
                    class="nav-link nav-menu-main menu-toggle hidden-xs"
                    href="#"
                  >
                    <i class="ficon bx bx-menu" />
                  </a>
                </li>
              </ul>
            </div>
            <ul
              v-if="user.loggedIn"
              class="nav navbar-nav float-right"
            >
              <li class="dropdown dropdown-user nav-item">
                <a
                  class="dropdown-toggle nav-link dropdown-user-link"
                  href="#"
                  data-toggle="dropdown"
                >
                  <div class="user-nav d-sm-flex d-none">
                    <span class="user-name">{{ user.data.displayName | capitalize }}</span>
                    <!-- <span class="user-status text-muted">Available</span> -->
                  </div>
                  <span>
                    <img
                      class="round"
                      src="../../../public/app-assets/images/portrait/small/avatar-s-11.jpg"
                      alt="avatar"
                      height="40"
                      width="40"
                    >
                  </span>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right pb-0"
                  @click.prevent="signOut"
                >
                  <div class="dropdown-item">
                    <i class="bx bx-power-off mr-50" /> Logout
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  name: 'Navbar',
  computed: {
    ...mapGetters({
    // map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "Login"
          });
        });
    }
  }
};
</script>

<style>
</style>
