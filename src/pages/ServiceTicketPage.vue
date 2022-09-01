<template>
    <b-container fluid>
        <b-row>
            <SideBar />
            <b-col xl="10" lg="9" sm="9">
                <HeaderComponent title="Service" />
                <b-container fluid class="pt-2">
                    <b-row class=" my-3">
                        <!-- whole container-->
                        <b-col xl="3" class="py-2">
                            <!-- left container-->
                            <b-col class="">
                                <b-container class="container-card rounded p-3">
                                    <h4 class="px-3">Add Service Ticket</h4>
                                    <b-col class="mt-3">
                                        <b-form>
                                            <FormInput label="Service Ticket Number" />
                                            <FormInput label="Car ID" />
                                            <FormInput label="Customer ID" />
                                            <DatePicker label="Date Received" />
                                            <DatePicker label="Date Returned" />
                                            <FormTextArea label="Comments" />
                                            <b-container class="button-container d-flex justify-content-end">
                                                <b-button class="mr-2">Reset</b-button>
                                                <b-button variant="success" class="success">Save</b-button>
                                            </b-container>
                                        </b-form>
                                    </b-col>
                                </b-container>

                            </b-col>
                        </b-col>
                        <b-col cmd="12" lg="12" xl="9" class="table-container py-2">
                            <!-- left container-->
                            <b-col class="table-container">
                                <b-container class="container-card rounded p-3">
                                    <h5 class="px-3 mb-3">Service Ticket Records</h5>
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
import FormTextArea from "../components/FormTextArea.vue"
import DatePicker from "../components/DatePicker.vue"
import ModalComponent from "@/components/ModalComponent.vue"
import PaginationComponent from "@/components/PaginationComponent.vue"

export default {
    name: "ServiceTicketPage",
    components: {
    SideBar,
    HeaderComponent,
    FormInput,
    FormTextArea,
    DatePicker,
    ModalComponent,
    PaginationComponent
},
    data() {
        return {
            value: '',
            fields: ['ID', 'car_ID', 'customer_ID', 'received', 'returned', 'comments', 'actions'],
            items: [
                { ID: 1, car_ID: '54543', customer_ID: 'August 24, 2020', received: '4546766', returned: '35345', comments: '123' }
                // { ID: 1, invoice_number: '54543', date: 'August 24, 2020', salesperson_ID: '4546766', customer_ID: '35345', car_ID: '123' },
                // { ID: 1, invoice_number: '54543', date: 'August 24, 2020', salesperson_ID: '4546766', customer_ID: '35345', car_ID: '123' },
                // { ID: 1, invoice_number: '54543', date: 'August 24, 2020', salesperson_ID: '4546766', customer_ID: '35345', car_ID: '123' },
                // { ID: 1, invoice_number: '54543', date: 'August 24, 2020', salesperson_ID: '4546766', customer_ID: '35345', car_ID: '123' },
                // { ID: 1, invoice_number: '54543', date: 'August 24, 2020', salesperson_ID: '4546766', customer_ID: '35345', car_ID: '123' },
                // { ID: 1, invoice_number: '54543', date: 'August 24, 2020', salesperson_ID: '4546766', customer_ID: '35345', car_ID: '123' },
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