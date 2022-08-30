<template>
    <b-container fluid>
        <b-row>
            <SideBar />
            <b-col xl="10" lg="9" sm="9">
                <HeaderComponent title="Salesperson" />
                <b-container fluid class="pt-2">
                    <b-row class=" my-3">
                        <!-- whole container-->
                        <b-col class="py-2">
                            <!-- left container-->
                            <b-col class="">
                                <b-container class="container-card rounded p-3">
                                    <h4 class="px-3">Add Salesperson</h4>
                                    <b-col class="mt-3">
                                        <b-form>
                                            <FormInput label="First Name" placeholder="Enter First Name" />
                                            <FormInput label="Last Name" placeholder="Enter Last Name" />
                                            <FormInput label="Phone Number" placeholder="Enter Phone Number" />
                                            <FormInput label="Address" placeholder="Enter Address" />
                                            <b-container class="button-container d-flex justify-content-end">
                                                <!-- <b-button class="mr-2">Reset</b-button> -->
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
                                <b-container class="container-card rounded p-3">
                                    <h5 class="px-3 mb-3">Salespersons Records</h5>
                                    <b-table striped hover :items="items"></b-table>
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

export default {
    name: "SalespersonPage",
    components: {
        SideBar,
        HeaderComponent,
        FormInput
    },
    data() {
        return {
            value: '',
            items: [
                { ID: 40, first_name: 'Mark', last_name: 'Lee', phone_number: '4546766', address: 'Pol' },
                { ID: 40, first_name: 'Renjun', last_name: 'Huang', phone_number: '4546766', address: 'Pol' },
                { ID: 40, first_name: 'Jeno', last_name: 'Lee', phone_number: '4546766', address: 'Pol' },
                { ID: 40, first_name: 'Haechan', last_name: 'Lee', phone_number: '4546766', address: 'Pol' },
                { ID: 40, first_name: 'Jaemin', last_name: 'Na', phone_number: '4546766', address: 'Pol' },
                { ID: 40, first_name: 'Chenle', last_name: 'Zhong', phone_number: '4546766', address: 'Pol' },
                { ID: 40, first_name: 'Jisung', last_name: 'Park', phone_number: '4546766', address: 'Pol' },

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