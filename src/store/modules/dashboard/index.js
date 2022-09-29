import axios from "axios";
import { API_URL } from "../../../config/dev.env";

export default {
  state: {
    topSellers: [],
    monthlySales: 0,
    monthlyRevenue: 0,
    monthlyCustomers: 0,
  },
  getters: {
    topSellersList: (state) => {
      return state.topSellers;
    },
    monthlySalesRecord: (state) => {
      return state.monthlySales;
    },
    monthlyRevenueRecord: (state) => {
      return state.monthlyRevenue;
    },
    monthlyCustomersRecord: (state) => {
      return state.monthlyCustomers;
    },
  },
  actions: {
    // async fetchTopSellersList({ commit }) {
    //   const response = await axios.get(`${API_URL}/top-sellers`);
    //   console.log(response.data);
    //   commit("SET_TOPSELLERS_LIST", response.data);
    // },

    async fetchTopSellersList({ commit }) {
      return await axios({
        method: "GET",
        url: `${API_URL}/top-sellers`,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          commit("SET_TOPSELLERS_LIST", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // async fetchMonthlySales({ commit }) {
    //   const response = await axios.get(`${API_URL}/sales-number`);
    //   console.log(response.data);
    //   commit("SET_MONTHLY_SALES_LIST", response.data[0].count);
    // },


    async fetchMonthlySales({ commit }) {
      return await axios({
        method: "GET",
        url: `${API_URL}/sales-number`,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          commit("SET_MONTHLY_SALES_LIST", response.data[0].count);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // async fetchMonthlyRevenue({ commit }) {
    //   const response = await axios.get(`${API_URL}/monthly-revenue`);
    //   console.log(response.data);
    //   commit("SET_MONTHLY_REVENUE_LIST", response.data[0].month_revenue);
    // },

    async fetchMonthlyRevenue({ commit }) {
      return await axios({
        method: "GET",
        url: `${API_URL}/monthly-revenue`,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          commit("SET_MONTHLY_REVENUE_LIST", response.data[0].month_revenue);
        })
        .catch((error) => {
          console.log(error);
        });
    },


    // async fetchMonthlyCustomer({ commit }) {
    //   const response = await axios.get(`${API_URL}/customers-count`);
    //   console.log(response.data);
    //   commit("SET_MONTHLY_CUSTOMERS_LIST", response.data[0].count);
    // },

    async fetchMonthlyCustomer({ commit }) {
      return await axios({
        method: "GET",
        url: `${API_URL}/customers-count`,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          commit("SET_MONTHLY_CUSTOMERS_LIST", response.data[0].count);
        })
        .catch((error) => {
          console.log(error);
        });
    },


  },
  mutations: {
    SET_TOPSELLERS_LIST(state, topSellers) {
      state.topSellers = topSellers;
    },

    SET_MONTHLY_SALES_LIST(state, monthlySales) {
      state.monthlySales = monthlySales;
    },

    SET_MONTHLY_REVENUE_LIST(state, monthlyRevenue) {
      state.monthlyRevenue = monthlyRevenue;
    },
    
    SET_MONTHLY_CUSTOMERS_LIST(state, monthlyCustomers) {
      state.monthlyCustomers = monthlyCustomers;
    },
  },
};
