<template>
  <div class="app-content content">
    <div class="content-overlay" />
    <div class="content-wrapper">
      <div class="content-header row" />
      <div class="content-body">
        <!-- login page start -->
        <section
          id="auth-login"
          class="row flexbox-container"
        >
          <div class="col-xl-8 col-xl-12">
            <div class="card bg-authentication mb-0">
              <div class="row m-0">
                <!-- left section-login -->
                <div class="col-md-6 col-12 px-0">
                  <div class="card disable-rounded-right mb-0 p-2 h-100 d-flex justify-content-center">
                    <div class="card-header pb-1">
                      <div class="card-title">
                        <h4 class="text-center mb-2">
                          Welcome Back
                        </h4>
                      </div>
                    </div>
                    <div class="card-content">
                      <div class="card-body">
                        <!-- <div class="d-flex flex-md-row flex-column justify-content-around">
                          <a
                            href="#"
                            class="btn btn-social btn-google btn-block font-small-3 mr-md-1 mb-md-0 mb-1"
                          >
                            <i class="bx bxl-google font-medium-3" /><span class="pl-50 d-block text-center">Google</span></a>
                          <a
                            href="#"
                            class="btn btn-social btn-block mt-0 btn-facebook font-small-3"
                          >
                            <i class="bx bxl-facebook-square font-medium-3" /><span class="pl-50 d-block text-center">Facebook</span></a>
                        </div> -->
                        <div
                          v-if="error"
                          class="alert alert-danger"
                        >
                          {{ error }}
                        </div>
                        <div class="divider">
                          <!-- <div class="divider-text text-uppercase text-muted">
                            <small>or login with
                              email</small>
                          </div> -->
                        </div>
                        <form
                          action="#"
                          @submit.prevent="submit"
                        >
                          <div class="form-group mb-50">
                            <label
                              class="text-bold-600"
                              for="exampleInputEmail1"
                            >Email address</label>
                            <input
                              id="exampleInputEmail1"
                              v-model="form.email"
                              type="email"
                              class="form-control"
                              placeholder="Email address"
                              name="email"
                              value
                              required
                              autofocus
                            >
                          </div>
                          <div class="form-group">
                            <label
                              class="text-bold-600"
                              for="exampleInputPassword1"
                            >Password</label>
                            <input
                              id="exampleInputPassword1"
                              v-model="form.password"
                              type="password"
                              class="form-control"
                              placeholder="Password"
                              name="password"
                              required
                            >
                          </div>
                          <div class="form-group d-flex flex-md-row flex-column justify-content-between align-items-center">
                            <div class="text-left">
                              <div class="checkbox checkbox-sm">
                                <input
                                  id="exampleCheck1"
                                  type="checkbox"
                                  class="form-check-input"
                                >
                                <label
                                  class="checkboxsmall"
                                  for="exampleCheck1"
                                ><small>Keep me logged
                                  in</small></label>
                              </div>
                            </div>
                            <div class="text-right">
                              <a
                                href="auth-forgot-password.html"
                                class="card-link"
                              ><small>Forgot Password?</small></a>
                            </div>
                          </div>
                          <button
                            type="submit"
                            class="btn btn-primary glow w-100 position-relative"
                          >
                            Login<i
                              id="icon-arrow"
                              class="bx bx-right-arrow-alt"
                            />
                          </button>
                        </form>
                        <hr>
                        <div class="text-center">
                          <small class="mr-25">Don't have an account?</small><router-link to="/register">
                            <small>Sign up</small>
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- right section image -->
                <div class="col-md-6 d-md-block d-none text-center align-self-center p-3">
                  <div class="card-content">
                    <img
                      class="img-fluid"
                      src="../../app-assets/images/pages/login.png"
                      alt="branding logo"
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- login page ends -->
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      data: "",
      error: null
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          this.data = data
          this.$router.replace({ name: "Dashboard" });
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>

<style>
</style>