<template>
  <div
    class="main-menu menu-fixed menu-light menu-accordion menu-shadow"
    data-scroll-to-active="true"
  >
    <div class="navbar-header">
      <ul class="nav navbar-nav flex-row">
        <li class="nav-item mr-auto">
          <router-link to="/">
            <a class="navbar-brand" href="/">
              <div class="brand-logo"></div>
              <h2 class="brand-text mb-0">viaLevantr</h2>
            </a>
          </router-link>
        </li>
        <li class="nav-item nav-toggle">
          <a class="nav-link modern-nav-toggle pr-0" data-toggle="collapse"
            ><i
              class="bx bx-x d-block d-xl-none font-medium-4 primary toggle-icon"
            ></i
            ><i
              class="toggle-icon bx bx-disc font-medium-4 d-none d-xl-block collapse-toggle-icon primary"
              data-ticon="bx-disc"
            ></i
          ></a>
        </li>
      </ul>
    </div>
    <div class="shadow-bottom"></div>
    <div class="main-menu-content">
      <ul
        class="navigation navigation-main"
        id="main-menu-navigation"
        data-menu="menu-navigation"
        data-icon-style=""
      >
        <li class=" nav-item">
          <router-link to="/dashboard">
            <i class="bx bx-home-alt"></i
            ><span class="menu-title" data-i18n="Home">Home</span>
          </router-link>
        </li>
        <li class=" nav-item">
          <router-link to="/map">
            <i class="bx bx-globe"></i
            ><span class="menu-title" data-i18n="Google Maps">Google Maps</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "sideMenu"
};
</script>

<style></style>
