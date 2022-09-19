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
                                    <b-table id="my-table" hover :items="items" :fields="fields" :per-page="perPage"
                                        :current-page="currentPage">
                                        <template v-slot:cell(actions)>
                                            <span>
                                                <b-row class="d-flex justify-content-center">
                                                    <b-btn class="mr-2">
                                                        <b-icon class="edit-btn" icon="pencil-square"></b-icon>
                                                    </b-btn>
                                                    <ModalComponent />
                                                </b-row>
                                            </span>
                                        </template>
                                    </b-table>
                                    <!-- <PaginationComponent /> -->
                                    <b-pagination pills v-model="currentPage" :total-rows="rows" :per-page="perPage"
                                        aria-controls="my-table"></b-pagination>

                                    <p class="mt-3">Current Page: {{ currentPage }}</p>
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
import ModalComponent from "@/components/DeleteModalComponent.vue"
// import PaginationComponent from "../components/PaginationComponent.vue"
// import { mapGetters } from 'vuex'

export default {
    name: "CarsPage",
    components: {
        SideBar,
        HeaderComponent,
        ModalComponent,
        // PaginationComponent
    },
    // computed: {
    //     ...mapGetters({ listCars: "carsList" }),

    // },
    // async mounted() {
    //     return await this.$store.dispatch("fetchCarsList");
    // },
    computed: {
        rows() {
            return this.items.length
        }
    },
    data() {
        return {
            perPage: 3,
            currentPage: 1,
            value: '',
            fields: [
                { key: "car_id", label: "ID", sortable: true },
                { key: "serial_number", label: "Serial Number", sortable: true },
                { key: "brand", label: "Brand", sortable: true },
                { key: "model", label: "Model", sortable: true },
                { key: "color", label: "Color", sortable: true },
                { key: "year", label: "Year", sortable: true },
                { key: "price", label: "Price", sortable: true },
                { key: "actions", label: "Actions" },
            ],
            items: [
                { car_id: 1, serial_number: 'DJDHW34', brand: 'XXXX', model: 'FG-4587', color: 'Black', year: '2022' },
                { car_id: 2, serial_number: 'DJDHW34', brand: 'XXXX', model: 'FG-4587', color: 'Black', year: '2022' },
                { car_id: 3, serial_number: 'DJDHW34', brand: 'XXXX', model: 'FG-4587', color: 'Black', year: '2022' },
                { car_id: 4, serial_number: 'DJDHW34', brand: 'XXXX', model: 'FG-4587', color: 'Black', year: '2022' },
                { car_id: 5, serial_number: 'DJDHW34', brand: 'XXXX', model: 'FG-4587', color: 'Black', year: '2022' },

            ]
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