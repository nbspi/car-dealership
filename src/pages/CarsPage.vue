<template>
    <b-container fluid id="hero">
        <b-row>
            <SideBar />
            <b-col xl="10" lg="9" sm="9">
                <HeaderComponent title="Cars" />
                <b-container fluid class="pt-2">
                    <b-row class="my-2 d-flex justify-content-end px-3">
                        <router-link to="/cars/add-car" class="btn btn-success" exact>Add Car</router-link>
                    </b-row>
                    <b-row class="d-flex justify-content-center my-3">
                        <b-col md="12" lg="12" xl="12" class="py-2">
                            <!-- left container-->
                            <b-col class="table-container">
                                <b-container fluid class="container-card rounded p-3">
                                    <h5 class="px-3 mb-3">Car Records</h5>
                                    <b-table id="cars-table" hover :items="carState" :fields="fields"
                                        :per-page="perPage" :current-page="currentPage">
                                        <template v-slot:cell(actions)>
                                            <div class="d-flex justify-content-center">
                                                <div>
                                                    <b-button>
                                                        <b-icon class="edit-btn" icon="pencil-square"></b-icon>
                                                    </b-button>
                                                </div>
                                                <div>
                                                    <b-button>
                                                <b-icon class="delete-btn" icon="trash-fill"></b-icon>
                                            </b-button>
                                                </div>
                                            </div>
                                        </template>
                                    </b-table>
                                    <b-row fluid class="mt-4 d-flex justify-content-end">
                                        <b-pagination pills v-model="currentPage" :total-rows="rows" :per-page="perPage"
                                            aria-controls="cars-table"></b-pagination>
                                    </b-row>
                                </b-container>
                            </b-col>
                        </b-col>
                    </b-row>
                </b-container>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import SideBar from "../layouts/SideBar.vue"
import HeaderComponent from "../layouts/HeaderComponent.vue"
import { mapGetters, mapState } from 'vuex'

export default {
    name: "CarsPage",
    components: {
        SideBar,
        HeaderComponent,
    },
    computed: {
        ...mapState(['carState']),
        ...mapGetters({ listCars: "fetchCars" }),
        rows() {
            return this.carState.length
        }

    },
    async mounted() {
        return await this.$store.dispatch("fetchCars");
    },
    data() {
        return {
            perPage: 7,
            currentPage: 1,
            value: '',
            car: {
                serial_number: null,
                brand: null,
                model: null,
                price: null,
                year: null,
                color: null,
                car_for_sale: null,
            },
            fields: [
                { key: "serial_number", label: "Serial Number", sortable: true },
                { key: "brand", label: "Brand", sortable: true },
                { key: "model", label: "Model", sortable: true },
                { key: "color", label: "Color", sortable: true },
                { key: "year", label: "Year", sortable: true },
                { key: "price", label: "Price", sortable: true },
                { key: "actions", label: "Actions" },
            ],
        }
    },
    method: {
        deleteCar(serial_number) {
            console.log(serial_number)
        }
    }
}
</script>

<style scoped>
nav {
    padding: 10px;
}

div.py-2 {
    padding: 0 !important;
}

.btn {
    background-color: var(--primary-color) !important;
}

.btn:hover {
    background-color: var(--secondary-color) !important;
}
</style>