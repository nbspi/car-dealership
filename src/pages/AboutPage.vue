<template>
    <b-container fluid class="body-container">
        <b-row id="header" class="d-flex justify-content-center">
            <b-container class="navbar-container">
                <div class="d-flex justify-content-xl-end justify-content-md-center">
                    <nav id="navbar" class="navbar">
                        <ul>
                            <li><a class="nav-link" href="/">Home</a></li>
                            <li><a class="nav-link  active" href="/about">About</a></li>
                            <li><a class="nav-link" href="#services">Services</a></li>
                            <li><a class="nav-link" href="#portfolio">Portfolio</a></li>
                            <li><a class="nav-link" href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </b-container>
        </b-row>
        <b-row class="hero-container">
            <b-col md="12" lg="6" class="d-flex justify-content-center align-items-center">
                <b-col cols="8">
                    <h1 text-justify>Lou Geh Car Dealership & Service Facility</h1>
                    <div class="text-justify mt-2">
                        <h6>Lorem ipsum dolor sit amet. Et quia dolor sed vitae quia id voluptatem laboriosam ea libero modi et recusandae accusantium sit nihil! Est sapiente dolorum qui quia repellat cum laborum excepturi est dolores quis est dignissimos maiores ut voluptas nihil. Non veritatis cumque in culpa eligendi est modi unde. Ipsa minima ab excepturi dolores nam magnam laudantium.</h6>

                    </div>
                    <div class="button-container d-flex justify-content-center mt-4">
                        <router-link to="/" class="btn px-3">Get Started</router-link>
                    </div>
                </b-col>
            </b-col>
            <b-col md="12" lg="6">
                <div class="d-flex justify-content-center">
                    <img class="hero-img" src="../assets/img/4.svg" alt="">
                </div>
            </b-col>
        </b-row>
        <b-row class="bottom-container">
            <b-col class="d-flex justify-content-center">
                <div>
                    <img src="../assets/img/1.png" alt="">
                    <div class="d-flex justify-content-center">
                        <p>Affordable Rates</p>
                    </div>
                </div>
            </b-col>
            <b-col class="d-flex justify-content-center">
                <div>
                    <img src="../assets/img/2.png" alt="">
                    <div class="d-flex justify-content-center">
                        <p>Service Experts</p>
                    </div>
                </div>
            </b-col>
            <b-col class="d-flex justify-content-center">
                <div>
                    <img src="../assets/img/3.png" alt="">
                    <div class="d-flex justify-content-center">
                        <p>Hassle-Free Transaction</p>
                    </div>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: "AboutPage"
}
</script>

<style scoped>
.body-container {
    padding: 0px !important;
    height: 100vh !important;
    background: rgb(104, 118, 172);
    background: linear-gradient(95deg, rgba(104, 118, 172, 1) 0%, rgba(130, 155, 184, 1) 100%);
}

/* 
.bottom-container {
    background-color: var(--secondary-color);
} */

.hero-container {
    background-color: #fff;
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
    font-weight: 600;
    color: #fff;
}

.navbar .active:hover {
    font-weight: 800;
    color: #fff;
}

img {
    width: 500px;
}

.hero-img {
    width: 80%;
}

p {
    font-size: 17px;
    font-weight: 600;
    color: #fff;
}

.btn {
    background-color: var(--secondary-color);
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    border-radius: 10px;
    padding: 5px;
}

.btn:hover {
    background-color: var(--primary-color);
    color: #fff;
}
</style>