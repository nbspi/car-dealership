<template>

  <body>
    <b-container fluid>
      <b-row id="header" class="d-flex justify-content-center">
        <b-container class="navbar-container">
          <div class="d-flex justify-content-xl-end justify-content-md-center">
            <nav id="navbar" class="navbar">
              <ul>
                <li><a class="nav-link" href="/">Home</a></li>
                <li><a class="nav-link" href="/about">About</a></li>
                <li><a class="nav-link" href="#">Services</a></li>
                <li><a class="nav-link" href="#">Portfolio</a></li>
                <li><a class="nav-link" href="#">Contact</a></li>
              </ul>
            </nav>
          </div>
        </b-container>
      </b-row>

      <b-row fluid>
        <b-col cols="12" md="12" lg="5" class="left d-flex justify-content-center">
          <b-col cols="8" class="d-flex flex-column align-items-center">
            <img src="../assets/img/lougeh.png" alt="" class="lou-geh" />
            <h1>LOG IN</h1>
            <h2>Log in your account here</h2>
            <br />

            <div class="form-container mt-3">
              <b-form @submit.prevent="handleLogin">
                <div class="form-container mb-3">
                  <div class="d-flex">
                    <label for="email" class="form-label ml-2 " :state="email">Email Address</label>
                  </div>
                  <input type="text" v-model="email" placeholder="email@example.com"
                    class="form-control form-control-lg" autocomplete="off" required>
                </div>

                <div class="mb-3">
                  <div class="d-flex">
                    <label for="email" class="form-label ml-2 " :state="password">Password</label>
                  </div>
                  <input type="password" v-model="password" placeholder="At least 8 characters"
                    class="form-control form-control-lg" autocomplete="off" required>
                </div>
                <br>
                <div class="button-container d-flex justify-content-center">
                  <button type="submit" class="col-6 btn btn-block">
                    LOG IN
                  </button>
                </div>
              </b-form>
            </div>
          </b-col>

        </b-col>
        <b-col cols="12" md="12" lg="7" class="right d-flex justify-content-center align-items-center">
          <img src="../assets/img/car.svg" alt="" class="car" />
        </b-col>
      </b-row>
      <div class="d-flex justify-content-end">
        <b-alert class="alert" v-model="alert.showAlert" @dismissed="alert.showAlert = null" :variant="alert.variant">
          <div>
            <b-icon class="mr-2" :icon="alert.variant == 'success' ? 'check-lg' : 'exclamation-triangle-fill' "
              fill="black">
            </b-icon>
            {{ alert.message }}
          </div>
        </b-alert>
      </div>

    </b-container>
  </body>
</template>

<script>

export default {
  name: "LogIn",
  data() {
    return {
      email: "",
      password: "",
      alert: {
        dismissSecs: 0,
        showAlert: 0,
        variant: "",
        message: ""
      },
      state: {
        email: null,
        password: null
      }
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },

  methods: {
    // handleLogin() {
    //   const user = { email: this.email, password: this.password };
    //   this.$store.dispatch("login", user);
    // },
    showAlert(message, variant) {
      this.alert = {
        dismissSecs: 10,
        showAlert: 5,
        message,
        variant
      }
    },
    logout() {
      this.$store.dispatch("logout")
    },
    validation() {
      if (this.email == null || this.email < 1) {
        this.state.email = false;
      } else {
        this.state.email = true;
      }
      if (this.password == null || this.password < 1) {
        this.state.password = false;
      } else {
        this.state.password = true;
      }

      if (this.email != null && this.password) {
        return true;
      } else {
        return false;
      }
    },
    async handleLogin() {
      if (!this.validation()) {
        this.showAlert("Invalid Credentials", "danger");
      } else {
        const user = { email: this.email, password: this.password };
        this.$store.dispatch("login", user).then(
          () => {
            if (user.email && user.password) {
              console.log(user.email, user.password);
              //TODO: REDIRECT TO CUSTOMERS PAGE WHEN LOGIN
              // this.$router.push("/dashboard");
              // this.showAlert("Successfully Logged In", "success");
            } else {
              this.showAlert("dfsjkdfksef", "info")
            }
          },
          (error) => {
            console.log(error);
          }
        );
      }
    },
  }
};
</script>

<style scoped>
body {
  height: 100vh;
  overflow: hidden;
}

@media (min-width: 992px) {
  body {
    background-image: url(../assets/img/background.svg);

  }
}

#header {
  transition: all 0.5s;
  z-index: 997;
  padding-top: 20px;
}

@media (max-width: 768px) {
  #header {
    padding-top: 10px;
  }
}

@media(min-width: 1080px) {
  .navbar-container {
    margin-left: 250px !important;
  }

}
  
.navbar {
  padding: 0;
}

.navbar ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
}

.navbar li {
  position: relative;
}

.navbar a,
.navbar a:focus {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 10px 30px;
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  white-space: nowrap;
  transition: 0.3s;
}

@media (max-width: 1080px) {

  .navbar a,
  .navbar a:focus {
    color: var(--primary-color);
  }

  .navbar a:hover {
    color: aqua;
  }
}

.navbar a i,
.navbar a:focus i {
  font-size: 12px;
  line-height: 0;
  margin-left: 5px;
}

.navbar a:hover,
.navbar .active,
.navbar .active:focus,
.navbar li:hover>a {
  color: var(--primary-color);
}

.navbar .active {
  font-weight: 800;
}

.navbar .active:hover {
  font-weight: 800;
  color: #fff;
}

.lou-geh {
  height: 250px;
  width: 250px;
}

@media (max-width: 992px) {
  .lou-geh {
    height: 150px;
    width: 150px;
  }
}

@media (max-width: 1440px) {
  .lou-geh {
    height: 150px;
    width: 150px;
  }
}


.car {
  height: 75%;
}

@media (max-width: 992px) {
  .car {
    width: 65%;
  }
}


@media (max-width: 720px) {
  .car {
    width: 100%;
  }
}

.right {
  padding-top: 20px;
}

@media (min-width: 992px) {
  .right {
    padding-left: 100px;
  }
}

input:focus {
  border: none !important;
}

.form-control,
.form-control:focus {
  background-color: #829BB8;
  color: white;
  border-radius: 7px;
  font-size: 17px;
  outline: none !important;
  width: 350px;
}

.form-control::placeholder {
  color: rgb(238, 238, 238, 0.6);
}

.form-label {
  font-size: 18px;
  font-weight: 600;
  align-items: center;
}

.btn {
  background-color: var(--secondary-color);
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  border-radius: 10px;
  padding: 8px;
}

.btn:hover {
  background-color: var(--primary-color);
  color: #fff;
}

.alert {
  width: 350px !important;
}

h1 {
  font-weight: 700;
  color: var(--primary-color);
}

h2 {
  color: var(--primary-color);
}
</style>
