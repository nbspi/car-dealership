<template>
    <b-container fluid id="hero">
        <b-row>
            <SideBar />
            <b-col xl="10" lg="9" sm="9">
                <HeaderComponent title="Cars" />
                <b-container fluid class="pt-2">
                    <b-row class=" my-3">
                        <!-- whole container-->
                        <b-col class="py-2">
                            <!-- left container-->
                            <b-col class="">
                                <b-container class="left-card rounded p-3">
                                    <h4 class="px-3">Add Car</h4>
                                    <b-col class="mt-3">
                                        <b-form>
                                            <FormInput label="Serial" placeholder="Enter Serial Number" />
                                            <FormInput label="Brand" placeholder="Enter Brand" />
                                            <FormInput label="Model" placeholder="Enter Model" />
                                            <FormInput label="Color" placeholder="Enter Color" />
                                            <FormInput label="Brand" placeholder="Enter Brand" />
                                            <FormInput label="Year" placeholder="Enter Year" />
                                            <b-container class="button-container d-flex justify-content-end">
                                                <b-button class="mr-2">Reset</b-button>
                                                <b-button variant="success">Save</b-button>
                                            </b-container>
                                        </b-form>
                                    </b-col>
                                </b-container>

                            </b-col>
                        </b-col>
                        <b-col md="12" lg="12" xl="8" class="py-2">
                            <!-- left container-->
                            <b-col class="table-container">
                                <b-container class="left-card rounded p-3">
                                    <h5 class="px-3 mb-3">Car Records</h5>
                                    <b-table striped hover :items="items"></b-table>
                                    <div class="overflow-auto">
                                        <div class="mt-5 d-flex justify-content-end">
                                            <b-pagination v-model="currentPage" pills :total-rows="rows"></b-pagination>
                                        </div>
                                    </div>
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

import SideBar from "../components/SideBar.vue"
import HeaderComponent from "../components/HeaderComponent.vue"
import FormInput from "../components/FormInput.vue"

export default {
    name: "CarsPage",
    components: {
        SideBar,
        HeaderComponent,
        FormInput,
    },
    data() {
        return {
            rows: 50,
            currentPage: 1,
            value: '',
            items: [
                { ID: 1, serial_number: 'DJDHW34', brand: 'XXXX', model: 'FG-4587', color: 'Black', year: '2022' },
                { ID: 2, serial_number: 'DJDHW34', brand: 'XXXX', model: 'FG-4587', color: 'Black', year: '2022' },
                { ID: 3, serial_number: 'DJDHW34', brand: 'XXXX', model: 'FG-4587', color: 'Black', year: '2022' },
                { ID: 4, serial_number: 'DJDHW34', brand: 'XXXX', model: 'FG-4587', color: 'Black', year: '2022' },
                { ID: 5, serial_number: 'DJDHW34', brand: 'XXXX', model: 'FG-4587', color: 'Black', year: '2022' },
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

.left-card {
    background-color: #F6F9FF;
    border-radius: 20px !important;
}
</style>