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
                                                <!-- @service ticket number -->
                                                <div class="mb-3">
                                                    <b-form-group label="Service Ticket Number" id="label" class="ml-2"
                                                        :state="ticket.service_ticket_number">
                                                    </b-form-group>
                                                    <b-form-input placeholder="Enter Serial Number"
                                                        v-model="ticket.service_ticket_number" required></b-form-input>
                                                </div>

                                                <!-- @date received -->
                                                <div class="mb-3">
                                                    <b-form-group label="Date Received" id="label" class="ml-2"
                                                        :state="ticket.date_received">
                                                    </b-form-group>
                                                    <b-form-datepicker :date-format-options="{ year: 'numeric', month: 'short', day: '2-digit', weekday: 'short' }" v-model="ticket.date_received">
                                                    </b-form-datepicker>
                                                </div>

                                                <!-- @date returned -->
                                                <div class="mb-3">
                                                    <b-form-group label="Mechanic Name" id="label" class="ml-2"
                                                        :state="ticket.mechanic_name">
                                                    </b-form-group>
                                                    <b-form-input placeholder="Enter Mechanic Name"
                                                        v-model="ticket.mechanic_name" required>
                                                    </b-form-input>
                                                </div>

                                                <!-- @brand -->
                                                <div class="mb-3">
                                                    <b-form-group label="Brand" id="label" class="ml-2"
                                                        :state="ticket.brand">
                                                    </b-form-group>
                                                    <b-form-input placeholder="Enter Brand" v-model="ticket.brand"
                                                        required>
                                                    </b-form-input>
                                                </div>
                                            </b-col>

                                            <b-col cols="6" class="mt-3">
                                                <!-- @customer name -->
                                                <div class="mb-3">
                                                    <b-form-group label="Customer Name" id="label" class="ml-2"
                                                        :state="ticket.customer_name">
                                                    </b-form-group>
                                                    <b-form-input placeholder="Enter Customer Name"
                                                        v-model="ticket.customer_name" required>
                                                    </b-form-input>
                                                </div>

                                                <!-- @date returned -->
                                                <div class="mb-3">
                                                    <b-form-group label="Date Returned" id="label" class="ml-2"
                                                        :state="ticket.date_returned">
                                                    </b-form-group>
                                                    <b-form-datepicker :date-format-options="{ year: 'numeric', month: 'short', day: '2-digit', weekday: 'short' }" v-model="ticket.date_returned">
                                                    </b-form-datepicker>
                                                </div>

                                                <!-- @Serial Number -->
                                                <div class="mb-3">
                                                    <b-form-group label="Car Serial Number" id="label" class="ml-2"
                                                        :state="ticket.serial_number">
                                                    </b-form-group>
                                                    <b-form-input placeholder="Enter Car Serial Number"
                                                        v-model="ticket.serial_number" required>
                                                    </b-form-input>
                                                </div>

                                                <!-- @model -->
                                                <div class="mb-3">
                                                    <b-form-group label="Model" id="label" class="ml-2"
                                                        :state="ticket.model">
                                                    </b-form-group>
                                                    <b-form-input placeholder="Enter Model" v-model="ticket.model"
                                                        required>
                                                    </b-form-input>
                                                </div>

                                            </b-col>
                                        </div>

                                        <!-- @comment -->
                                        <div class="px-3 mb-3">
                                            <b-form-group label="Comment" id="label" class="ml-2"
                                                :state="ticket.comment">
                                            </b-form-group>
                                            <b-form-textarea id="textarea" v-model="ticket.comment"
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

export default {
    name: "AddCar",
    components: {
        SideBar,
        HeaderComponent,
    },
    data() {
        return {
            ticket: {
                service_ticket_id: null,
                service_ticket_number: null,
                date_received: null,
                date_returned: null,
                customer_name: null,
                mechanic_name: null,
                serial_number: null,
                brand: null,
                model: null,
                comment: null
            },
            item: {
                service_ticket_id: null,
                service_ticket_number: null,
                date_received: null,
                date_returned: null,
                customer_name: null,
                mechanic_name: null,
                serial_number: null,
                brand: null,
                model: null,
                comment: null
            },
            state: {
                service_ticket_id: null,
                service_ticket_number: null,
                date_received: null,
                date_returned: null,
                customer_name: null,
                mechanic_name: null,
                serial_number: null,
                brand: null,
                model: null,
                comment: null
            },
            alert: {
                dismissSecs: 0,
                showAlert: 0,
                variant: "",
                message: ""
            },
        };
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

        validation() {
            if (this.ticket.service_ticket_number == null || this.service_ticket_number.length < 1) {
                this.state.service_ticket_number = false;
            } else {
                this.state.service_ticket_number = true;

            } if (this.ticket.date_received == null || this.ticket.date_received.length < 1) {
                this.state.date_received = false;
            } else {
                this.state.date_received = true;

            } if (this.ticket.mechanic_name == null || this.ticket.mechanic_name.length < 1) {
                this.state.mechanic_name = false;
            } else {
                this.state.mechanic_name = true;

            } if (this.ticket.brand == null || this.ticket.brand.length < 1) {
                this.state.brand = false;
            } else {
                this.state.brand = true;

            } if (this.ticket.customer_name == null || this.ticket.customer_name.length < 1) {
                this.state.customer_name = false;
            } else {
                this.state.customer_name = true;

            } if (this.ticket.date_returned == null || this.ticket.date_returned.length < 1) {
                this.state.date_returned = false;
            } else {
                this.state.date_returned = true;

            } if (this.ticket.serial_number == null || this.ticket.serial_number.length < 1) {
                this.state.serial_number = false;
            } else {
                this.state.serial_number = true;

            } if (this.ticket.model == null || this.ticket.model.length < 1) {
                this.state.model = false;
            } else {
                this.state.model = true;

            } if (this.ticket.comment == null || this.ticket.comment.length < 1) {
                this.state.comment = false;
            } else {
                this.state.comment = true;
            }

            if (this.ticket.service_ticket_number != null && this.ticket.date_received != null && this.ticket.date_returned != null && this.ticket.mechanic_name != null && this.ticket.brand != null && this.ticket.customer_name != null && this.ticket.serial_number != null && this.ticket.model != null && this.ticket.comment != null) {
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
  