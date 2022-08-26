<template>
    <b-container fluid>
        <b-row>
            <SideBar />
            <b-col xl="10" lg="9" sm="9">
                <HeaderComponent title="Invoice" />
                <b-container fluid class="pt-2">
                    <b-row class=" my-3">
                        <!-- whole container-->
                        <b-col class="py-2">
                            <!-- left container-->
                            <b-col class="">
                                <b-container class="left-card rounded p-3">
                                    <h4 class="px-3">Add Invoice</h4>
                                    <b-col class="mt-3">
                                        <b-form>
                                            <FormInput label="Invoice Number" placeholder="Enter Invoice Number" />
                                            <DatePicker label="Invoice Date" disabled="True" />
                                            <FormInput label="Salesperson ID" placeholder="Enter Salesperson ID" />
                                            <FormInput label="Customer ID" placeholder="Enter Customer ID" />
                                            <FormInput label="Car ID" placeholder="Enter Car ID" />
                                            <b-container class="button-container d-flex justify-content-end">
                                                <b-button class="mr-2">Reset</b-button>
                                                <b-button variant="success" class="success">Save</b-button>
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
                                    <h5 class="px-3 mb-3">Invoice Records</h5>
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
import DatePicker from "@/components/DatePicker.vue"

export default {
    name: "InvoicePage",
    components: {
        SideBar,
        HeaderComponent,
        FormInput,
        DatePicker
    },
    data() {
        return {
            rows: 50,
            currentPage: 1,
            value: '',
            items: [
                { ID: 1, invoice_number: '54543', date: 'August 24, 2020', salesperson_ID: '4546766', customer_ID: '35345', car_ID: '123' },
                { ID: 1, invoice_number: '54543', date: 'August 24, 2020', salesperson_ID: '4546766', customer_ID: '35345', car_ID: '123' },
                { ID: 1, invoice_number: '54543', date: 'August 24, 2020', salesperson_ID: '4546766', customer_ID: '35345', car_ID: '123' },
                { ID: 1, invoice_number: '54543', date: 'August 24, 2020', salesperson_ID: '4546766', customer_ID: '35345', car_ID: '123' },
                { ID: 1, invoice_number: '54543', date: 'August 24, 2020', salesperson_ID: '4546766', customer_ID: '35345', car_ID: '123' },
                { ID: 1, invoice_number: '54543', date: 'August 24, 2020', salesperson_ID: '4546766', customer_ID: '35345', car_ID: '123' },
                { ID: 1, invoice_number: '54543', date: 'August 24, 2020', salesperson_ID: '4546766', customer_ID: '35345', car_ID: '123' },
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