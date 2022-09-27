import Vue from "vue";
import VueRouter from "vue-router";
import LogIn from "../pages/LogIn.vue";
import DashBoard from "../pages/DashBoard.vue";
import CustomersPage from "../pages/CustomersPage.vue";
import CarsPage from "../pages/CarsPage.vue";
import InvoicePage from "../pages/InvoicePage.vue";
import SalespersonPage from "../pages/SalespersonPage.vue";
import MechanicPage from "../pages/MechanicPage.vue";
import ServicesPage from "../pages/ServicesPage.vue";
import ServiceTicketPage from "../pages/ServiceTicketPage.vue";
import AddCar from "../pages/AddCar.vue";
import UserProfile from "../pages/UserProfile.vue";
import AboutPage from "../pages/AboutPage.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "LogIn",
    component: LogIn,
  },
  {
    path: "/dashboard",
    name: "DashBoard",
    component: DashBoard,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/customers",
    name: "CustomersPage",
    component: CustomersPage,
  },
  {
    path: "/cars",
    name: "CarsPage",
    component: CarsPage,
  },
  {
    path: "/invoice",
    name: "InvoicePage",
    component: InvoicePage,
  },
  {
    path: "/salesperson",
    name: "SalespersonPage",
    component: SalespersonPage,
  },
  {
    path: "/mechanic",
    name: "MechanicPage",
    component: MechanicPage,
  },
  {
    path: "/services",
    name: "ServicesPage",
    component: ServicesPage,
  },
  {
    path: "/service-ticket",
    name: "ServiceTicketPage",
    component: ServiceTicketPage,
  },
  {
    path: "/cars/add-car",
    name: "AddCar",
    component: AddCar,
  },
  {
    path: "/profile",
    name: "UserProfile",
    component: UserProfile,
  },
  {
    path: "/",
    name: "AboutPage",
    component: AboutPage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // If the user is not logged in, redirect to /login
  const publicPages = ["/", "/login"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");

  if (authRequired && !loggedIn) {
    return next("/");
  }

  next();
});

export default router;
