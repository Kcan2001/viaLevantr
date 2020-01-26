<template>
  <div class="app-content content">
    <div class="content-overlay" />
    <div class="content-wrapper">
      <div class="content-header row" />
      <div class="content-body">
        <!-- register section starts -->
        <section class="row flexbox-container">
          <div class="col-xl-8 col-xl-12">
            <div class="card bg-authentication mb-0">
              <div class="row m-0">
                <!-- register section left -->
                <div class="col-md-6 col-12 px-0">
                  <div class="card disable-rounded-right mb-0 p-2 h-100 d-flex justify-content-center">
                    <div class="card-header pb-1">
                      <div class="card-title">
                        <h4 class="text-center mb-2">
                          Sign Up
                        </h4>
                      </div>
                    </div>
                    <div class="text-center">
                      <p>
                        <small> Please enter your details to sign up and be part of our great community</small>
                      </p>
                      <div
                        v-if="error"
                        class="alert alert-danger"
                      >
                        {{ error }}
                      </div>
                    </div>
                    <div class="card-content">
                      <div class="card-body">
                        <form
                          action="#"
                          @submit.prevent="submit"
                        >
                          <div class="form-row">
                            <div class="form-group col-md-6 mb-50">
                              <label for="inputfirstname4">first name</label>
                              <input
                                id="firstName"
                                v-model="form.firstName"
                                name="firstName"
                                type="text"
                                class="form-control"
                                placeholder="First name"
                                value
                                required
                                autofocus
                              >
                            </div>
                            <div class="form-group col-md-6 mb-50">
                              <label for="inputlastname4">last name</label>
                              <input
                                id="lastName"
                                v-model="form.lastName"
                                name="lastName"
                                type="text"
                                class="form-control"
                                placeholder="Last name"
                                value
                                required
                                autofocus
                              >
                            </div>
                          </div>
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
                          <div class="form-group mb-2">
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
                          <button
                            type="submit"
                            class="btn btn-primary glow position-relative w-100"
                          >
                            SIGN UP<i
                              id="icon-arrow"
                              class="bx bx-right-arrow-alt"
                            />
                          </button>
                        </form>
                        <hr>
                        <div class="text-center">
                          <small class="mr-25">Already have an account?</small><a href="/login"><small>Sign in</small> </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- image section right -->
                <div class="col-md-6 d-md-block d-none text-center align-self-center p-3">
                  <img
                    class="img-fluid"
                    src="../../app-assets/images/pages/register.png"
                    alt="branding logo"
                  >
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- register section endss -->
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
        firstName: "",
        lastNAme: "",
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.firstName + ' ' + this.form.lastName
            })
            .then(() => {});
          this.$router.replace({ name: "Dashboard" });
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>