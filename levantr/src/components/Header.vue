<template>
  <div>
    <div class="header-navbar-shadow"></div>
    <nav
      class="header-navbar main-header-navbar navbar-expand-lg navbar navbar-with-menu fixed-top"
    >
      <div class="navbar-wrapper">
        <div class="navbar-container content">
          <div class="navbar-collapse" id="navbar-mobile">
            <div class="mr-auto float-left bookmark-wrapper d-flex align-items-center">
              <ul class="nav navbar-nav">
                <li class="nav-item mobile-menu d-xl-none mr-auto">
                  <a class="nav-link nav-menu-main menu-toggle hidden-xs" href="#">
                    <i class="ficon bx bx-menu"></i>
                  </a>
                </li>
              </ul>
            </div>
            <ul class="nav navbar-nav float-right">
              <li class="dropdown dropdown-user nav-item">
                <a
                  class="dropdown-toggle nav-link dropdown-user-link"
                  href="#"
                  data-toggle="dropdown"
                >
                  <div class="user-nav d-sm-flex d-none">
                    <span class="user-name">John Doe</span>
                    <!-- <span class="user-status text-muted">Available</span> -->
                  </div>
                  <span>
                    <img
                      class="round"
                      src="../../public/app-assets/images/portrait/small/avatar-s-11.jpg"
                      alt="avatar"
                      height="40"
                      width="40"
                    />
                  </span>
                </a>
                <div class="dropdown-menu dropdown-menu-right pb-0">
                  <a class="dropdown-item" href="page-user-profile.html">
                    <i class="bx bx-user mr-50"></i> Edit Profile
                  </a>
                  <a class="dropdown-item" href="app-email.html">
                    <i class="bx bx-envelope mr-50"></i> My Inbox
                  </a>
                  <a class="dropdown-item" href="app-todo.html">
                    <i class="bx bx-check-square mr-50"></i> Task
                  </a>
                  <a class="dropdown-item" href="app-chat.html">
                    <i class="bx bx-message mr-50"></i> Chats
                  </a>
                  <div class="dropdown-divider mb-0"></div>
                  <a class="dropdown-item" href="auth-login.html">
                    <i class="bx bx-power-off mr-50"></i> Logout
                  </a>
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
export default {};
</script>

<style></style>
