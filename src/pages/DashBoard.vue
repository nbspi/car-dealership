<template>
  <b-container fluid>
    <b-row>
      <SideBar />
      <b-col xl="10" lg="9" sm="9">
        <HeaderComponent title="Dashboard" />
        <b-container fluid class="pt-2">
          <b-row class="my-3">
            <b-col cols="8">
              <b-row class="d-flex justify-content-between">
                <DashboardCard title="Sales" icon="cart4" description="Total Sales" value="423" />
                <DashboardCard title="Revenue" icon="currency-dollar" description="Total Profit" value="$5435" />
                <DashboardCard title="Customers" icon="people" description="Customers" value="453" />

              </b-row>
              <b-row class="mt-5 d-flex flex-column justify-content-between">
                <h4 class="pl-2">Top Selling | <span>This Month</span></h4>
                <b-col class="mt-3">
                  <b-table hover :items="items">
                  </b-table>
                </b-col>
              </b-row>
            </b-col>
            <b-col cols="4">
              <b-container class="recent-activity p-2">
                <h5 class="px-3 mt-2">
                  <p>Recent Activity | <span>Today</span></p>
                </h5>
                <div class="mt-2">
                  <ul>
                    <li>Quia quae rerum explicabo officiis beatae</li>
                    <li>oluptatem blanditiis blanditiis eveniet</li>
                    <li>Voluptates corrupti molestias voluptatem</li>
                    <li>Quia quae rerum explicabo officiis beatae</li>
                    <li>oluptatem blanditiis blanditiis eveniet</li>
                    <li>Voluptates corrupti molestias voluptatem</li>
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
import SideBar from "../components/SideBar.vue"
import HeaderComponent from "../components/HeaderComponent.vue"
import DashboardCard from "@/components/DashboardCard.vue";

export default {
  name: "DashBoard",
  components: {
    HeaderComponent,
    SideBar,
    DashboardCard
  },
  data() {
    return {
      items: [
        { product: 40, price: '$23434', sold: '134' },
        { product: 40, price: '$23434', sold: '134' },
        { product: 40, price: '$23434', sold: '134' },
        { product: 40, price: '$23434', sold: '134' },
      ]
    }
  }
};
</script>

<style scoped>
nav {
  padding: 10px;
}

p {
  color: #4a5376;
}

.recent-activity span {
  font-size: 16px;
}

span {
  font-size: 18px;
  color: #687097;
}

h4 {
  color: #4a5376;
}
</style>