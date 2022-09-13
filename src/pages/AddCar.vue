<template>
    <b-container fluid id="hero">
        <b-row>
            <SideBar />
            <b-col xl="10" lg="9" sm="9">
                <HeaderComponent title="Add Car" />
                <b-container fluid class="pt-2">
                    <b-row class="d-flex justify-content-center my-3">
                        <!-- whole container-->
                        <b-col xl="6" class="py-2">
                            <!-- left container-->
                            <b-col class="">
                                <b-container class="container-card rounded p-3">
                                    <h4 class="px-3">Add Car</h4>
                                    <b-row>
                                        <b-col cols="6" class="mt-3">
                                            <b-form>
                                                <FormInput label="Serial Number" />
                                                <FormInput label="Model" />
                                                <FormInput label="Year" />
                                                <RadioComponent class="mt-4" />
                                            </b-form>
                                        </b-col>
                                        <b-col cols="6" class="mt-3">
                                            <b-form>
                                                <SelectComponent label="Brand" />
                                                <FormInput label="Color" />
                                                <FormInput label="Price" />
                                            </b-form>
                                        </b-col>
                                        <b-col>
                                            <b-container class="button-container d-flex justify-content-end">
                                                <b-button class="mr-2" type="reset">Reset</b-button>
                                                <b-button variant="success" type="submit">Save</b-button>
                                            </b-container>
                                        </b-col>
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
import FormInput from "../components/FormInput.vue"
import RadioComponent from "../components/RadioComponent.vue"
import SelectComponent from "../components/SelectComponent.vue"

export default {
    name: "AddCar",
    components: {
        SideBar,
        HeaderComponent,
        FormInput,
        RadioComponent,
        SelectComponent
    },
    data() {
        return {
            value: '',
            fields: ['ID', 'serial_number', 'brand', 'model', 'color', 'year', 'actions'],
            items: [
                { ID: 1, serial_number: 'DJDHW34', brand: 'XXXX', model: 'FG-4587', color: 'Black', year: '2022' }
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