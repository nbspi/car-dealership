<template>
  <b-container fluid class="body-container">
    <b-row id="header" class="d-flex justify-content-center">
      <div class="d-flex">
        <img src="../assets/img/lougeh.png" alt="" style="width: 70px" />
        <div class="d-flex align-items-center">
          <p>LG Car Dealership</p>
        </div>
      </div>
      <b-container class="navbar-container d-flex justify-content-sm-center justify-content-xl-center">
        <div class="d-flex justify-content-xl-end justify-content-md-center">
          <nav id="navbar" class="navbar">
            <ul>
              <li><a class="nav-link active">Home</a></li>
              <li><a class="nav-link" href="#">About</a></li>
              <li><a class="nav-link" href="#">Services</a></li>
              <li><a class="nav-link" href="#">Portfolio</a></li>
              <li><a class="nav-link" href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
      </b-container>
    </b-row>
    <b-row class="hero-container">
      <b-col md="12" lg="6" class="py-5 d-flex justify-content-center align-items-center">
        <b-col cols="8" class="text-container">
          <h6>The Best Car Facility in Town</h6>
          <h1 class="title" text-justify>
            Lou Geh Car Dealership & Service Facility
          </h1>
          <div class="text-justify mt-2">
            <h6>
              The Lou Geh Car Dealership provides many of the best services to
              its customers which makes it efficient. XD
              <br />
              Lorem ipsum dolor sit amet. Et quia dolor sed vitae quia id
              voluptatem laboriosam ea libero modi et recusandae accusantium sit
              nihil! Est sapiente dolorum qui quia repellat laborum excepturi
              est dolores quis est dignissimos maiores ut voluptas nihil.
            </h6>
          </div>
          <div class="button-container d-flex justify-content-center mt-4">
            <router-link to="/login" class="start-btn px-3">Get Started</router-link>
          </div>
        </b-col>
      </b-col>
      <b-col md="12" lg="6" class="d-flex justify-content-center align-items-center">
        <b-col>
          <div class="d-flex justify-content-center">
            <img class="hero-img" src="../assets/img/4.svg" alt="car-driving.svg" />
          </div>
        </b-col>
      </b-col>
    </b-row>
    <b-row class="bottom-container pt-4">
      <b-col class="d-flex justify-content-center">
        <div id="card" class="card">
          <img src="../assets/img/1.png" alt="affordable-rates.png" />
          <div class="card-overlay d-flex flex-column justify-content-center">
            <p class="card-title">Affordable Rates</p>
            <p class="card-description">Lorem ipsum dolor sit, amet consectetur</p>
          </div>
        </div>
      </b-col>
      <b-col class="d-flex justify-content-center">
        <div id="card" class="card">
          <img src="../assets/img/2.png" alt="affordable-rates.png" />
          <div class="card-overlay d-flex flex-column justify-content-center">
            <p class="card-title">Service Experts</p>
            <p class="card-description">Lorem ipsum dolor sit, amet consectetur</p>
          </div>
        </div>
      </b-col>
      <b-col class="d-flex justify-content-center">
        <div id="card" class="card">
          <img src="../assets/img/3.png" alt="affordable-rates.png" />
          <div class="card-overlay d-flex flex-column justify-content-center">
            <p class="card-title">Hassle-Free Transaction</p>
            <p class="card-description">Lorem ipsum dolor sit, amet consectetur</p>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style scoped>
#header {
  padding-top: 0px !important;
}

.body-container {
  padding: 0px !important;
  height: 100vh !important;
  background: rgb(104, 118, 172);
  background: linear-gradient(95deg,
      rgba(104, 118, 172, 1) 0%,
      rgba(130, 155, 184, 1) 100%);
}

@media (max-width: 1469px) {
  .body-container {
    height: 100% !important;
    background: rgb(104, 118, 172);
    background: linear-gradient(95deg,
        rgba(104, 118, 172, 1) 0%,
        rgba(130, 155, 184, 1) 100%);
  }
}

.hero-container {
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2390accc' fill-opacity='0.07'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

@media (max-width: 1470px) {
  .card {
    margin: 20px 0px 20px 0px !important;
  }

  .bottom-container {
    padding-bottom: 30px;
  }

  /* 
    #navbar {
        margin-bottom: 10px !important;
    } */
}

#header {
  transition: all 0.5s;
  z-index: 997;
  padding-top: 20px;
  /* background-color: var(--secondary-color); */
}

@media (max-width: 768px) {
  #header {
    padding-top: 10px;
  }
}

@media (min-width: 1614px) {
  .navbar-container {
    margin-left: 250px !important;
  }

  .navbar-container {
    justify-content: end !important;
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
  color: #f9c74f;
}

.navbar .active {
  font-weight: 600;
  color: #fdfffc;
}

.navbar .active:hover {
  font-weight: 800;
  color: #fff;
}

img {
  width: 450px;
}

.hero-img {
  width: 85%;
}

p {
  font-size: 24px;
  font-weight: 600;
  color: #fff;
}

.start-btn {
  text-decoration: none !important;
  background-color: var(--secondary-color);
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  border-radius: 10px;
  padding: 7px;
}

.start-btn:hover {
  background-color: var(--primary-color);
  color: #fff;
}

h1 {
  font-size: 38px;
}

.card {
  position: relative;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(35px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 80px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

.register-btn {
  border-color: #fff !important;
  color: #fff;
}

.register-btn:hover,
.register-btn:active {
  background-color: var(--primary-color) !important;
  border-color: var(--primary-color) !important;
}

.title {
  color: #372549 !important;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.25s ease;
}

.card-overlay:hover {
  opacity: 1;
}

.card-description {
  font-size: 16px;
}
</style>
