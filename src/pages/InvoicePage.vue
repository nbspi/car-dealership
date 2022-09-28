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
                                        <b-form @submit.prevent>
                                            <div class="mb-3">
                                                <b-form-group label="Invoice Date" id="invoice-date" class="ml-2">
                                                </b-form-group>
                                                <b-form-datepicker id="datepicker" v-model="newDate"
                                                    :date-format-options="{
                                                      year: 'numeric',
                                                      month: 'long',
                                                      day: '2-digit',
                                                    }" disabled>
                                                </b-form-datepicker>
                                            </div>

                                            <div class="mb-3">
                                                <b-form-group label="Salesperson" id="sales-modal" class="ml-2">
                                                </b-form-group>
                                                <b-button block v-b-modal.sales-modal>Select</b-button>

                                            </div>

                                            <b-modal id="sales-modal" title="Salesperson Records" centered size="xl">
                                                <b-row class="d-flex justify-content-center">
                                                    <b-table hover :items="listSalesperson" :fields="salespersonFields">
                                                        <template v-slot:cell(actions)="{item}">
                                                            <div class="d-flex justify-content-center">
                                                                <div>
                                                                    <b-button v-b-modal :state="invoice.salesperson_id"
                                                                        :style="item.salesperson_id == activeItem.salesperson ? 'background: green !important;' : ''"
                                                                        @click="selectSalesperson(item.salesperson_id)">
                                                                        <b-icon
                                                                            :icon="item.salesperson_id == activeItem.salesperson ? 'check-circle': 'check'">
                                                                        </b-icon>
                                                                    </b-button>
                                                                </div>
                                                            </div>
                                                        </template>
                                                    </b-table>
                                                </b-row>
                                            </b-modal>

                                            <div class="mb-3">
                                                <b-form-group label="Customer" id="customer-modal" class="ml-2">
                                                </b-form-group>
                                                <b-button block v-b-modal.customer-modal>Select</b-button>
                                            </div>

                                            <b-modal id="customer-modal" title="Customer" centered size="xl">
                                                <b-row class="d-flex justify-content-center">
                                                    <b-table hover :items="listCustomers" :fields="customerFields">
                                                        <template v-slot:cell(actions)="{item}">
                                                            <div class="d-flex justify-content-center">
                                                                <div>
                                                                    <!-- <b-button v-b-modal v-model="invoice.customer_id"
                                                                        @click="selectCustomer(item.customer_id)">
                                                                        <b-icon class="delete-btn" icon="trash-fill">
                                                                        </b-icon>
                                                                    </b-button> -->
                                                                    <b-button v-b-modal :state="invoice.customer_id"
                                                                        :style="item.customer_id == activeItem.customer ? 'background: green !important;' : ''"
                                                                        @click="selectCustomer(item.customer_id)">
                                                                        <b-icon
                                                                            :icon="item.customer_id == activeItem.customer ? 'check-circle': 'check'">
                                                                        </b-icon>
                                                                    </b-button>
                                                                </div>
                                                            </div>
                                                        </template>
                                                    </b-table>
                                                </b-row>
                                            </b-modal>

                                            <div class="mb-3">
                                                <b-form-group label="Car" id="car-modal" class="ml-2">
                                                </b-form-group>
                                                <b-button block v-b-modal.car-modal>Select</b-button>
                                            </div>

                                            <b-modal id="car-modal" title="Car" centered size="xl">
                                                <b-row class="d-flex justify-content-center">
                                                    <b-table id="car-table" hover :items="listCars"
                                                        :fields="carsFields">
                                                        <template v-slot:cell(actions)="{item}">
                                                            <div class="d-flex justify-content-center">
                                                                <div>
                                                                    <!-- <b-button v-b-modal v-model="invoice.car_id"
                                                                        @click="selectCar(item.car_id)">
                                                                        <b-icon class="delete-btn" icon="trash-fill">
                                                                        </b-icon>
                                                                    </b-button> -->
                                                                    <b-button v-b-modal :state="invoice.car_id"
                                                                        :style="item.car_id == activeItem.car ? 'background: green !important;' : ''"
                                                                        @click="selectCar(item.car_id)">
                                                                        <b-icon
                                                                            :icon="item.car_id == activeItem.car ? 'check-circle': 'check'">
                                                                        </b-icon>
                                                                    </b-button>
                                                                </div>
                                                            </div>
                                                        </template>
                                                    </b-table>
                                                </b-row>
                                            </b-modal>

                                            <b-container class="button-container d-flex justify-content-end">
                                                <b-button class="mr-2" type="reset">Reset</b-button>
                                                <b-button variant="success" type="submit" @click="addInvoice">Save
                                                </b-button>
                                            </b-container>
                                        </b-form>
                                    </b-col>
                                </b-container>

                            </b-col>
                        </b-col>
                        <b-col md="12" lg="12" xl="9" class="py-2">
                            <b-col class="table-container">
                                <b-container class="container-card rounded p-3">
                                    <h5 class="px-3 mb-3">Invoice Records</h5>
                                    <b-table hover :items="invoiceList" :fields="fields" :per-page="perPage"
                                        :current-page="currentPage">
                                    </b-table>
                                    <b-row fluid class="mt-4 d-flex justify-content-end">
                                        <b-pagination pills v-model="currentPage" :total-rows="rows" :per-page="perPage"
                                            aria-controls="my-table"></b-pagination>
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
import moment from "moment";


export default {
    name: "InvoicePage",
    components: {
        SideBar,
        HeaderComponent,
    },
    computed: {
        ...mapState(['invoiceState']),
        ...mapGetters({
            invoiceList: "fetchInvoice",
            listCustomers: "fetchCustomer",
            listCars: "fetchCars",
            listSalesperson: "fetchSalesperson",
        }),
        rows() {
            return this.invoiceList.length
        }
    },
    async mounted() {
        await this.$store.dispatch("fetchCars");
        await this.$store.dispatch("fetchInvoice");
        await this.$store.dispatch("fetchCustomer");
        await this.$store.dispatch("fetchSalesperson");
    },

    data() {
        return {
            perPage: 5,
            currentPage: 1,
            value: '',
            newDate: new Date(),
            activeItem: {
                salesperson: null,
                customer: null,
                car: null
            },
            invoice: {
                salesperson_id: null,
                customer_id: null,
                car_id: null,
            },
            state: {
                salesperson_id: null,
                customer_id: null,
                car_id: null,
            },
            fields: [
                { key: "invoice_number", label: "Invoice Number", sortable: true },
                {
                    key: "transaction_date",
                    label: "Invoice Date",
                    formatter: (value) => {
                        return moment(value).format("MMM DD, YYYY");
                    },
                    sortable: true
                },
                { key: "salesperson_name", label: "Salesperson Name", sortable: true },
                { key: "customer_name", label: "Customer Name", sortable: true },
                { key: "serial_number", label: "Serial Number", sortable: true },

            ],
            salespersonFields: [
                { key: "salesperson_id", label: "Invoice Number" },
                {
                    key: "created_at",
                    label: "Invoice Date",
                    formatter: (value) => {
                        return moment(value).format("MMM DD, YYYY");
                    },
                },
                { key: "firstname", label: "Salesperson Name" },
                { key: "lastname", label: "Customer Name" },
                { key: "actions", label: "Actions" },
            ],
            customerFields: [
                { key: "customer_id", label: "ID", sortable: true },
                { key: "firstname", label: "First Name", sortable: true },
                { key: "lastname", label: "Last Name", sortable: true },
                { key: "contact", label: "Contact", sortable: true },
                { key: "address", label: "Address", sortable: true },
                { key: "actions", label: "Actions" },
            ],

            carsFields: [
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
    methods: {
        async addInvoice() {
            await this.$store.dispatch("createInvoice", this.invoice);
            console.log(this.invoice)
            location.reload();
        },

        selectSalesperson(salesperson_id) {
            this.invoice.salesperson_id = salesperson_id
            console.log(salesperson_id);
            this.activeItem.salesperson = salesperson_id;

        },

        selectCustomer(customer_id) {
            this.invoice.customer_id = customer_id
            console.log(customer_id);
            this.activeItem.customer = customer_id;
        },

        selectCar(car_id) {
            this.invoice.car_id = car_id
            console.log(car_id);
            this.activeItem.car = car_id;
        },

        onRowSelected(listSalesperson) {
            this.selected = listSalesperson;
        },

        deleteInvoice(invoice_number) {
            console.log(invoice_number)
        },

        validation() {
            if (this.invoice.salesperson_id == null ) {
                this.state.salesperson_id = false;
            }
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