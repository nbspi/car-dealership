<template>
  <b-container fluid>
    <SpinnerLoad />
    <b-row>
      <SideBar />
      <b-col xl="10" lg="9" sm="9">
        <HeaderComponent title="Dashboard" />
        <b-container fluid class="pt-2">
          <b-row class="my-3">
            <b-col sm="12" xl="8" class="upper-container px-2">
              <b-row class="d-flex justify-content-between">
                <DashboardCard id="sales" title="Total Sales" icon="cart4" description="Sales" :value="salesPerMonth" />
                <DashboardCard id="revenue" title="Total Revenue" icon="cash-stack" description="Profit"
                  :value="monthlyRevenuelist | abbr" />
                <DashboardCard id="customer" title="Customers" icon="people" description="Customers" :value="listCustomersPerMonth" />
              </b-row>
              <b-row class="mt-5 d-flex flex-column justify-content-between">
                <h4 class="pl-2">Top Selling | <span>This Month</span></h4>
                <b-col class="mt-3">
                  <b-table class="top-sellers" hover :items="listTopSellers" :per-page="perPage"
                    :current-page="currentPage">
                  </b-table>
                  <b-row fluid class="mt-4 d-flex justify-content-end">
                    <b-pagination pills v-model="currentPage" :total-rows="rows" :per-page="perPage"
                      aria-controls="top-sellers"></b-pagination>
                  </b-row>
                </b-col>
              </b-row>
            </b-col>
            <b-col md="12" xl="4" class="table-container">
              <b-container class="recent-activity p-2">
                <h5 class="px-3 mt-1">
                  <p>Recent Activity | <span>Today</span></p>
                </h5>
                <div class="mt-2 pb-2">
                  <ul>
                    <li>Added Customer</li>
                    <li>Edit Service</li>
                    <li>Created Invoice</li>
                    <li>User Jaemin Na Logged In</li>
                    <li>Added Salesperson</li>
                    <li>User Yuta Logged Out</li>
                  </ul>
                </div>
              </b-container>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import SideBar from "../layouts/SideBar.vue";
import HeaderComponent from "../layouts/HeaderComponent.vue";
import DashboardCard from "@/components/DashboardCard.vue";
import { mapGetters } from "vuex";
import SpinnerLoad from "@/components/SpinnerLoad.vue";

export default {
  name: "DashBoard",
  components: {
    HeaderComponent,
    SideBar,
    DashboardCard,
    SpinnerLoad
  },

  computed: {
    ...mapGetters({ listTopSellers: "topSellersList" }),
    ...mapGetters({ salesPerMonth: "monthlySalesRecord" }),
    ...mapGetters({ monthlyRevenuelist: "monthlyRevenueRecord" }),
    ...mapGetters({ listCustomersPerMonth: "monthlyCustomersRecord" }),
    rows() {
      return this.listTopSellers.length
    }
  },
  mounted() {
    this.$store.dispatch("fetchTopSellersList");
    this.$store.dispatch("fetchMonthlySales");
    this.$store.dispatch("fetchMonthlyRevenue");
    this.$store.dispatch("fetchMonthlyCustomer");
  },

  data() {
    return {
      perPage: 5,
      currentPage: 1,
      value: null
    };
  },

  filters: {
    abbr: function (num) {
      if (String(num).length < 7) {
        return Math.floor(num / 1000) + 'K';
      } else {
        return Math.floor(num / 1000000) + 'M';
      }
    }
  }
};
</script>

<style scoped>
nav {
  padding: 10px;
}

p,
h4 {
  color: var(--primary-color);
}

.recent-activity span {
  font-size: 16px;
}

span {
  font-size: 18px;
  color: var(--span-color);
}

.recent-activity {
  background-color: var(--background-color);
  border-radius: 10px;
}

@media (max-width:1199px) {
  .table-container {
    margin-top: 20px;
  }

  /* .upper-container {
    padding: 0px 20px 0px 20px;
  } */
}
</style>
