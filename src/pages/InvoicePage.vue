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
                                <b-container class="container-card rounded p-3">
                                    <h4 class="px-3">Add Invoice</h4>
                                    <b-col class="mt-3">
                                        <b-form>
                                            <!-- <FormInput label="Invoice Number" /> -->
                                            <DatePicker label="Invoice Date" :disabled="True" />
                                            <FormInput label="Salesperson ID" />
                                            <FormInput label="Customer ID" />
                                            <FormInput label="Car ID" />
                                            <b-container class="button-container d-flex justify-content-end">
                                                <b-button class="mr-2" type="reset">Reset</b-button>
                                                <b-button variant="success" type="submit">Save</b-button>
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
                                    <h5 class="px-3 mb-3">Invoice Records</h5>
                                    <b-table hover :items="items" :fields="fields">
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
// import { mapGetters } from 'vuex'
import SideBar from "../layouts/SideBar.vue"
import HeaderComponent from "../layouts/HeaderComponent.vue"
import FormInput from "../components/FormInput.vue"
import DatePicker from "@/components/DatePicker.vue"
import ModalComponent from "@/components/DeleteModalComponent.vue"
// import PaginationComponent from "@/components/PaginationComponent.vue"

export default {
    name: "InvoicePage",
    components: {
        SideBar,
        HeaderComponent,
        FormInput,
        DatePicker,
        ModalComponent,
        // PaginationComponent
    },
    // computed: {
    //     ...mapGetters(['fetchInvoice'])
    // },
    data() {
        return {
            value: '',
            fields: [
                { key: "invoice_number", label: "Invoice Number" },
                { key: "invoice_date", label: "Invoice Date" },
                { key: "salesperson_ID", label: "Salesperson ID" },
                { key: "customer_ID", label: "Customer ID" },
                { key: "car_ID", label: "Car ID" },
                { key: "actions", label: "Actions" },
            ],
            items: []
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