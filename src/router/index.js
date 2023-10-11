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
import AboutPage from "../pages/AboutPage.vue";
import AddServiceTicket from "../pages/AddServiceTicket.vue";
import EditServiceTicket from "../pages/EditServiceTicket.vue";
import CataloguePage from "../pages/CataloguePage.vue";
import User from "../pages/UserPage.vue";

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
    path: "/",
    name: "AboutPage",
    component: AboutPage,
  },
  {
    path: "/service-ticket/add-ticket",
    name: "AddServiceTicket",
    component: AddServiceTicket,
  },
  {
    path: "/service-ticket/edit-ticket/:id",
    name: "EditServiceTicket",
    component: EditServiceTicket,
  },
  {
    path: "/user",
    name: "User",
    component: User,
  },
  {
    path: "/catalogue",
    name: "CataloguePage",
    component: CataloguePage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   // If the user is not logged in, redirect to /login
//   const publicPages = ["/", "/login"];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem("user");

//   if (authRequired && !loggedIn) {
//     return next("/");
//   }

//   next();
// });

export default router;
