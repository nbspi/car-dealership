<template>

  <body>
    <b-container fluid>
      <b-row id="header" class="d-flex justify-content-center">
        <b-container>
          <div class="d-flex justify-content-lg-end justify-content-md-center">
            <nav id="navbar" class="navbar">
              <ul>
                <li><a class="nav-link active" href="#hero">Home</a></li>
                <li><a class="nav-link" href="#about">About</a></li>
                <li><a class="nav-link" href="#services">Services</a></li>
                <li><a class="nav-link" href="#portfolio">Portfolio</a></li>
                <li><a class="nav-link" href="#contact">Contact</a></li>
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
            <h2>Log In your account here</h2>
            <br />

            <LoginInputComponent />
          </b-col>
        </b-col>
        <b-col cols="12" md="12" lg="7" class="right d-flex justify-content-center align-items-center">
          <img src="../assets/img/car.svg" alt="" class="car" />
        </b-col>
      </b-row>
    </b-container>
  </body>
</template>

<script>
import LoginInputComponent from '@/components/LoginInputComponent.vue';

export default {
  name: "LogIn",
  components: {
    LoginInputComponent
  },
  data() {
    return {
      email: "",
      password: ""
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },

  methods: {
    handleLogin() {
      const user = { email: this.email, password: this.password };
      this.$store.dispatch("login", user);
    },

    logout() {
      this.$store.dispatch("logout")
    }
  }
};
</script>

<style scoped>
body {
  height: 100vh;
  background-image: url(../assets/img/background.svg);
  overflow: hidden;
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

@media (max-width: 768px) {
  .lou-geh {
    height: 200px;
    width: 200px;
  }
}

.car {
  height: 75%;
}

@media (max-width: 768px) {
  .car {
    width: 70%;
  }
}

.right {
  padding-top: 20px;
}

@media (min-width: 900px) {
  .right {
    padding-left: 100px;
  }
}

</style>
