<template>
  <b-container fluid>
    <b-row>
      <SideBar />
      <b-col xl="10" lg="9" sm="9">
        <HeaderComponent title="Dashboard" />
        <b-container fluid>
          <b-col class="bg-info">
            <h1>hello</h1>
          </b-col>
        </b-container>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import SideBar from "../components/SideBar.vue"
import HeaderComponent from "../components/HeaderComponent.vue"

export default {
  name: "DashBoard",
  components: {
    HeaderComponent,
    SideBar
  }
};
</script>

<style scoped>
nav {
  padding: 10px;
}
</style>