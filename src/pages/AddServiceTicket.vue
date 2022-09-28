<template>
    <b-container fluid id="hero">
        <b-row>
            <SideBar />
            <b-col xl="10" lg="9" sm="9">
                <HeaderComponent title="Add Ticket" />
                <b-container fluid class="pt-2">
                    <b-row class="my-2 d-flex px-3">
                        <router-link pill="true" to="/service-ticket" class="btn btn-success" id="return-btn" exact>
                            <b-icon icon="arrow-left-circle" aria-hidden="true"></b-icon>
                        </router-link>
                    </b-row>
                    <b-row class="d-flex justify-content-center my-2">
                        <!-- whole container-->
                        <b-col xl="6" class="py-2">
                            <!-- left container-->
                            <b-col class="">
                                <b-container class="container-card rounded p-3">
                                    <h4 class="px-3">Add Service Ticket</h4>
                                    <b-form>
                                        <div class="d-flex">
                                            <b-col cols="6" class="mt-3">
                                               

                                                <!-- @date received -->
                                                <div class="mb-3">
                                                    <b-form-group label="Date Received" id="label" class="ml-2"
                                                        :state="ticket.date_received">
                                                    </b-form-group>
                                                    <b-form-datepicker :date-format-options="{ year: 'numeric', month: 'short', day: '2-digit', weekday: 'short' }" v-model="ticket.date_received">
                                                    </b-form-datepicker>
                                                </div>

                                                
                                                <!-- @mechanic -->
                                                <div class="mb-3">
                                                    <b-form-group label="Mechanic Name" id="label" class="ml-2"
                                                        :state="ticket.mechanic_id">
                                                    </b-form-group>
                                                    <b-button block v-b-modal.mechanic-modal>Select</b-button>
                                                    <!-- <b-form-input placeholder="Enter Mechanic Name"
                                                        v-model="ticket.mechanic_id" required>
                                                    </b-form-input> -->
                                                </div>

                                                <b-modal id="mechanic-modal" title="Mechanic" centered size="xl">
                                                <b-row class="d-flex justify-content-center">
                                                    <b-table id="car-table" hover :items="listMechanic"
                                                        :fields="mechanicFields">
                                                        <template v-slot:cell(actions)="{item}">
                                                            <div class="d-flex justify-content-center">
                                                                <div>                                                                 
                                                                    <b-button v-b-modal :state="ticket.mechanic_id"
                                                                        :style="item.mechanic_id == activeItem.mechanic ? 'background: green !important;' : ''"
                                                                        @click="selectMechanic(item.mechanic_id)">
                                                                        <b-icon
                                                                            :icon="item.mechanic_id == activeItem.mechanic ? 'check-circle': 'check'">
                                                                        </b-icon>
                                                                    </b-button>
                                                                </div>
                                                            </div>
                                                        </template>
                                                    </b-table>
                                                </b-row>
                                            </b-modal>
                                                
                                                <!-- @Car -->
                                                <div class="mb-3">
                                                    <b-form-group label="Car" id="label" class="ml-2"
                                                        :state="ticket.car_id">
                                                    </b-form-group>
                                                    <!-- <b-form-input placeholder="Enter Car" v-model="ticket.car_id"
                                                        required>
                                                    </b-form-input> -->

                                                    <b-button block v-b-modal.car-modal>Select</b-button>
                                                </div>

                                                <b-modal id="car-modal" title="Car" centered size="xl">
                                                <b-row class="d-flex justify-content-center">
                                                    <b-table id="car-table" hover :items="listCars"
                                                        :fields="carsFields">
                                                        <template v-slot:cell(actions)="{item}">
                                                            <div class="d-flex justify-content-center">
                                                                <div>                                                                 
                                                                    <b-button v-b-modal :state="ticket.car_id"
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


                                            </b-col>

                                            <b-col cols="6" class="mt-3">

                                                 <!-- @date returned -->
                                                 <div class="mb-3">
                                                    <b-form-group label="Date Returned" id="label" class="ml-2"
                                                        :state="ticket.date_returned">
                                                    </b-form-group>
                                                    <b-form-datepicker :date-format-options="{ year: 'numeric', month: 'short', day: '2-digit', weekday: 'short' }" v-model="ticket.date_returned">
                                                    </b-form-datepicker>
                                                </div>

                                                <!-- @customer name -->
                                                <div class="mb-3">
                                                    <b-form-group label="Customer Name" id="label" class="ml-2"
                                                        :state="ticket.customer_id">
                                                    </b-form-group>
                                                    <!-- <b-form-input placeholder="Enter Customer Name"
                                                        v-model="ticket.customer_id" required>
                                                    </b-form-input> -->
                                                    <b-button block v-b-modal.customer-modal>Select</b-button>

                                                </div>

                                                <b-modal id="customer-modal" title="Customer" centered size="xl">
                                                <b-row class="d-flex justify-content-center">
                                                    <b-table hover :items="listCustomers" :fields="customerFields">
                                                        <template v-slot:cell(actions)="{item}">
                                                            <div class="d-flex justify-content-center">
                                                                <div>                                                      
                                                                    <b-button v-b-modal :state="ticket.customer_id"
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
                                               

                                                <!-- @Service -->
                                                <div class="mb-3">
                                                    <b-form-group label="Service" id="label" class="ml-2"
                                                        :state="ticket.service_id">
                                                    </b-form-group>
                                                    <b-button block v-b-modal.service-modal>Select</b-button>
                                                    <!-- <b-form-input placeholder="Enter Service"
                                                        v-model="ticket.service_id" required>
                                                    </b-form-input> -->
                                                </div>

                                                <b-modal id="service-modal" title="Service" centered size="xl">
                                                <b-row class="d-flex justify-content-center">
                                                    <b-table hover :items="listService" :fields="serviceFields">
                                                        <template v-slot:cell(actions)="{item}">
                                                            <div class="d-flex justify-content-center">
                                                                <div>                                                      
                                                                    <b-button v-b-modal :state="ticket.service_id"
                                                                        :style="item.service_id == activeItem.service ? 'background: green !important;' : ''"
                                                                        @click="selectService(item.service_id)">
                                                                        <b-icon
                                                                            :icon="item.service_id == activeItem.service ? 'check-circle': 'check'">
                                                                        </b-icon>
                                                                    </b-button>
                                                                </div>
                                                            </div>
                                                        </template>
                                                    </b-table>
                                                </b-row>
                                            </b-modal>


                                            </b-col>
                                        </div>

                                        <!-- @comment -->
                                        <div class="px-3 mb-3">
                                            <b-form-group label="Comment" id="label" class="ml-2"
                                                :state="ticket.comments">
                                            </b-form-group>
                                            <b-form-textarea id="textarea" v-model="ticket.comments"
                                                placeholder="Enter comment ..." rows="2" max-rows="6" required>
                                            </b-form-textarea>
                                        </div>

                                        <b-container class="button-container d-flex justify-content-end">
                                            <div class="mr-3">
                                                <b-button class="mr-2" type="reset">Reset</b-button>
                                                <b-button variant="success" type="submit" class="btn btn-success send" @click="saveTicket">
                                                    Submit</b-button>
                                            </div>

                                        </b-container>
                                    </b-form>
                                </b-container>

                                <div class="alert-container mt-3">
                                    <b-alert dismissible class="alert" v-model="alert.showAlert"
                                        @dismissed="alert.showAlert = null" :variant="alert.variant">
                                        <div class="alertborder">
                                            <b-icon class="mr-2"
                                                :icon="alert.variant == 'success' ? 'check-lg' : 'exclamation-triangle-fill' "
                                                fill="black">
                                            </b-icon>
                                            {{ alert.message }}
                                        </div>
                                    </b-alert>
                                </div>
                            </b-col>
                        </b-col>
                    </b-row>
                </b-container>
            </b-col>
        </b-row>
    </b-container>
</template>
  
<script>
import SideBar from "../layouts/SideBar.vue";
import HeaderComponent from "../layouts/HeaderComponent.vue";
import { mapGetters, mapState } from 'vuex'
export default {
    name: "AddCar",
    components: {
        SideBar,
        HeaderComponent,
    },
    data() {
        return {
            activeItem: {
                mechanic: null,
                customer: null,
                car: null,
                service: null
            },
            ticket: {
                date_received: null,
                date_returned: null,
                customer_id: null,
                mechanic_id: null,
                car_id: null,
                service_id: null,
                comments: null
            },
            item: {
                service_ticket_id: null,
                service_ticket_number: null,
                date_received: null,
                date_returned: null,
                customer_id: null,
                mechanic_id: null,
                car_id: null,
                service_id: null,
                comments: null
            },
            state: {
                date_received: null,
                date_returned: null,
                customer_id: null,
                mechanic_id: null,
                car_id: null,
                service_id: null,
                comments: null
            },
            alert: {
                dismissSecs: 0,
                showAlert: 0,
                variant: "",
                message: ""
            },

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

            mechanicFields: [
                { key: "mechanic_id", label: "ID", sortable: true },
                { key: "firstname", label: "First Name", sortable: true },
                { key: "lastname", label: "Last Name", sortable: true },
                { key: "contact", label: "Contact", sortable: true },
                { key: "actions", label: "Actions" },
            ],
            serviceFields: [
                { key: "service_id", label: "ID", sortable: true },
                { key: "service_name", label: "Service Name", sortable: true },
                { key: "hourly_rate", label: "Hourly Rate", sortable: true },
                { key: "actions", label: "Actions" },
            ],


        };
    },
    computed: {
        ...mapState(['invoiceState']),
        ...mapGetters({
            invoiceList: "fetchInvoice",
            listCustomers: "fetchCustomer",
            listCars: "fetchCars",
            listAvailableCars: "fetchAvailableCars",
            listMechanic: "fetchMechanic",
            listService: "fetchService",
        }),
        rows() {
            return this.invoiceList.length
        }
    },
    async mounted() {
        await this.$store.dispatch("fetchCars");
        await this.$store.dispatch("fetchInvoice");
        await this.$store.dispatch("fetchCustomer");
        await this.$store.dispatch("fetchAvailableCars");
        await this.$store.dispatch("fetchService");
        await this.$store.dispatch("fetchMechanic");
        

    },
    methods: {
        showAlert(message, variant) {
            this.alert = {
                dismissSecs: 10,
                showAlert: 5,
                message,
                variant
            }
        },

        addTicket() {
            this.$store.dispatch("addTicket", this.ticket)
        },

        async saveTicket() {
            console.log(this.ticket)
            if (!this.validation()) {
                this.showAlert("Warning: Please fill out the fields", "warning");

            } else {
                this.$store.dispatch("addTicket", this.ticket);
                this.showAlert("Successfully Created", "success");
            }
        },

        selectMechanic(mechanic_id) {
            this.ticket.mechanic_id = mechanic_id
            console.log(mechanic_id);
            this.activeItem.mechanic = mechanic_id;

        },

        selectCustomer(customer_id) {
            this.ticket.customer_id = customer_id
            console.log(customer_id);
            this.activeItem.customer = customer_id;
        },

        selectCar(car_id) {
            this.ticket.car_id = car_id
            console.log(car_id);
            this.activeItem.car = car_id;
        },

        selectService(service_id ) {
            this.ticket.service_id = service_id 
            console.log(service_id );
            this.activeItem.service = service_id ;
        },


        validation() {
           

            if (this.ticket.date_received == null || this.ticket.date_received.length < 1) {
                this.state.date_received = false;
            } else {
                this.state.date_received = true;

            } if (this.ticket.mechanic_id == null || this.ticket.mechanic_id.length < 1) {
                this.state.mechanic_id = false;
            } else {
                this.state.mechanic_id = true;

            } if (this.ticket.customer_id == null || this.ticket.customer_id.length < 1) {
                this.state.customer_id = false;
            } else {
                this.state.customer_id = true;

            } if (this.ticket.date_returned == null || this.ticket.date_returned.length < 1) {
                this.state.date_returned = false;
            } else {
                this.state.date_returned = true;

            } if (this.ticket.service_id == null || this.ticket.service_id.length < 1) {
                this.state.service_id = false;
            } else {
                this.state.service_id = true;

            } if (this.ticket.car_id == null || this.ticket.car_id.length < 1) {
                this.state.car_id = false;
            } else {
                this.state.car_id = true;

            } if (this.ticket.comments == null || this.ticket.comments.length < 1) {
                this.state.comments = false;
            } else {
                this.state.comments = true;
            }

            if (this.ticket.date_received != null && this.ticket.date_returned != null && 
            this.ticket.mechanic_id != null && this.ticket.service_id != null && this.ticket.customer_id != null && this.ticket.car_id != null && this.ticket.comments != null) {
                return true;
            } else {
                return false;
            }
        }
    },
};
</script>
  
<style scoped>
nav {
    padding: 10px;
}

div.py-2 {
    padding: 0 !important;
}

#return-btn {
    background-color: var(--primary-color) !important;
}

#return-btn:hover {
    background-color: var(--secondary-color) !important;
}
</style>
  