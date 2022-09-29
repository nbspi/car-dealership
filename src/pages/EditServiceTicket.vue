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
                                    <h4 class="px-3">Edit Service Ticket</h4>
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
                                                    <b-form-input placeholder="Enter Mechanic Name"
                                                        v-model="ticket.mechanic_id" required>
                                                    </b-form-input>
                                                </div>

                                                
                                                <!-- @Car -->
                                                <div class="mb-3">
                                                    <b-form-group label="Car" id="label" class="ml-2"
                                                        :state="ticket.car_id">
                                                    </b-form-group>
                                                    <b-form-input placeholder="Enter Car" v-model="ticket.car_id"
                                                        required>
                                                    </b-form-input>
                                                </div>
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
                                                    <b-form-input placeholder="Enter Customer Name"
                                                        v-model="ticket.customer_id" required>
                                                    </b-form-input>
                                                </div>

                                               

                                                <!-- @Serial Number -->
                                                <div class="mb-3">
                                                    <b-form-group label="Service" id="label" class="ml-2"
                                                        :state="ticket.service_id">
                                                    </b-form-group>
                                                    <b-form-input placeholder="Enter Service"
                                                        v-model="ticket.service_id" required>
                                                    </b-form-input>
                                                </div>

                                               
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

import { mapState } from "vuex";

export default {
    name: "EditServiceTicket",
    components: {
        SideBar,
        HeaderComponent,
    },
    data() {
        return {
            // ticket: {
            //     service_ticket_id: null,
            //     date_received: null,
            //     date_returned: null,
            //     customer_id: null,
            //     mechanic_id: null,
            //     car_id: null,
            //     service_id: null,
            //     comments: null
            // },
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
        };
    },
    computed: {
        ...mapState(["ticketState"]),
        ticket () {
            return this.ticketState.find(v => v.service_ticket_id == this.$route.params.id)
        }
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
            // console.log(this.ticket)
            if (!this.validation()) {
                this.showAlert("Warning: Please fill out the fields", "warning");

            } else {
                this.$store.dispatch("editTicket", this.ticket);
                this.showAlert("Successfully Created", "success");
            }
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
  