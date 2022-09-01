<template>
    <b-container fluid id="hero">
        <b-row>
            <SideBar />
            <b-col xl="10" lg="9" sm="9">
                <HeaderComponent title="Cars" />
                <b-container fluid class="pt-2">
                    <b-row class=" my-3">
                        <!-- whole container-->
                        <b-col xl="3" class="py-2">
                            <!-- left container-->
                            <b-col class="">
                                <b-container class="container-card rounded p-3">
                                    <h4 class="px-3">Add Car</h4>
                                    <b-col class="mt-3">
                                        <b-form>
                                            <FormInput label="Serial" />
                                            <FormInput label="Brand" />
                                            <FormInput label="Model" />
                                            <FormInput label="Color" />
                                            <FormInput label="Year" />
                                            <RadioComponent />
                                            <b-container class="button-container d-flex justify-content-end">
                                                <b-button class="mr-2">Reset</b-button>
                                                <b-button variant="success">Save</b-button>
                                            </b-container>
                                        </b-form>
                                    </b-col>
                                </b-container>
                            </b-col>
                        </b-col>
                        <b-col md="12" lg="12" xl="9" class="py-2">
                            <!-- left container-->
                            <b-col class="table-container">
                                <b-container class="container-card rounded p-3">
                                    <h5 class="px-3 mb-3">Car Records</h5>
                                    <b-table hover :items="items" :fields="fields">
                                        <template v-slot:cell(actions)="{ item }">
                                            <span>
                                                <b-row class="d-flex justify-content-center">
                                                    <b-btn class="mr-2" @click="editItem(item)">
                                                        <b-icon class="edit-btn" icon="pencil-square"></b-icon>
                                                    </b-btn>
                                                    <ModalComponent />
                                                </b-row>
                                            </span>
                                        </template>
                                    </b-table>
                                    <PaginationComponent />
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
import FormInput from "../components/FormInput.vue"
import RadioComponent from "../components/RadioComponent.vue"
import ModalComponent from "@/components/ModalComponent.vue"
import PaginationComponent from "../components/PaginationComponent.vue"

export default {
    name: "CarsPage",
    components: {
    SideBar,
    HeaderComponent,
    FormInput,
    RadioComponent,
    ModalComponent,
    PaginationComponent
},
    data() {
        return {
            value: '',
            fields: ['ID', 'serial_number', 'brand', 'model', 'color', 'year', 'actions'],
            items: [
                { ID: 1, serial_number: 'DJDHW34', brand: 'XXXX', model: 'FG-4587', color: 'Black', year: '2022' }
                // { ID: 2, serial_number: 'DJDHW34', brand: 'XXXX', model: 'FG-4587', color: 'Black', year: '2022' },
                // { ID: 3, serial_number: 'DJDHW34', brand: 'XXXX', model: 'FG-4587', color: 'Black', year: '2022' },
                // { ID: 4, serial_number: 'DJDHW34', brand: 'XXXX', model: 'FG-4587', color: 'Black', year: '2022' },
                // { ID: 5, serial_number: 'DJDHW34', brand: 'XXXX', model: 'FG-4587', color: 'Black', year: '2022' },
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
</style>