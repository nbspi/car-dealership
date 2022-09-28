<template>
    <b-container fluid>
        <b-row>
            <SideBar />
            <b-col xl="10" lg="9" sm="9">
                <HeaderComponent title="Service Ticket" />
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
                                            <div class="form-group mb-2">
                                                <b-form-group label="Service Ticket Number" class="ml-2">
                                                </b-form-group>
                                                <b-form-input id="firstname" type="text"
                                                    placeholder="Enter Service Ticket Number" required>
                                                </b-form-input>
                                            </div>
                                            <div class="form-group mb-2">
                                                <b-form-group label="Customer Name" class="ml-2">
                                                </b-form-group>
                                                <b-form-input id="customer_name" type="text"
                                                    placeholder="Enter Customer Name" required>
                                                </b-form-input>
                                            </div>
                                            <div class="form-group mb-2">
                                                <b-form-group label="Car ID" class="ml-2">
                                                </b-form-group>
                                                <b-form-input id="car_id" type="text" placeholder="Enter Car ID"
                                                    required>
                                                </b-form-input>
                                            </div>
                                            <div class="form-group mb-2">
                                                <b-form-group label="Mechanic Name" class="ml-2">
                                                </b-form-group>
                                                <b-form-input id="mechanic_name" type="text"
                                                    placeholder="Enter Mechanic Name" required>
                                                </b-form-input>
                                            </div>
                                            <div class="mb-2">
                                                <b-form-group label="Date Received" id="date_received" class="ml-2">
                                                </b-form-group>
                                                <b-form-datepicker id="datepicker" v-model="newDate"
                                                    :date-format-options="{
                                                      year: 'numeric',
                                                      month: 'long',
                                                      day: '2-digit',
                                                    }">
                                                </b-form-datepicker>
                                            </div>
                                            <div class="mb-2">
                                                <b-form-group label="Date Returned" id="date_returned" class="ml-2">
                                                </b-form-group>
                                                <b-form-datepicker id="datepicker" v-model="newDate"
                                                    :date-format-options="{
                                                      year: 'numeric',
                                                      month: 'long',
                                                      day: '2-digit',
                                                    }">
                                                </b-form-datepicker>
                                            </div>
                                            <div class="mb-2">
                                                <b-form-group label="Comment" id="label" class="ml-2">
                                                </b-form-group>
                                                <b-form-textarea id="textarea" placeholder="Enter comments here">
                                                </b-form-textarea>
                                            </div>
                                            <b-container class="button-container d-flex justify-content-end">
                                                <b-button class="mr-2" type="reset">Reset</b-button>
                                                <b-button variant="success" type="submit">Save</b-button>
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
                                    <b-table hover :items="ticketList" :fields="fields">
                                        <template v-slot:cell(actions)="{ item }">
                                            <div class="d-flex justify-content-center">
                                                <div>
                                                    <b-button v-b-modal @click="showUpdateModal(item)">
                                                        <b-icon class="edit-btn" icon="pencil-square"></b-icon>
                                                    </b-button>
                                                </div>
                                                <div>
                                                    <b-button v-b-modal @click="showDeleteModal(item)">
                                                        <b-icon class="delete-btn" icon="trash-fill"></b-icon>
                                                    </b-button>
                                                </div>
                                            </div>
                                        </template>
                                    </b-table>
                                    <!-- <b-row fluid class="mt-4 d-flex justify-content-end">
                                        <b-pagination pills v-model="currentPage" :total-rows="rows" :per-page="perPage"
                                            aria-controls="mechanic-table"></b-pagination>
                                    </b-row> -->
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
import { mapState, mapGetters } from 'vuex'

export default {
    name: "ServiceTicketPage",
    components: {
        SideBar,
        HeaderComponent,
    },
    computed: {
        ...mapState(['ticketState']),
        ...mapGetters({
            ticketList: "fetchTicket"
        }),
    },
    data() {
        return {
            perPage: 5,
            currentPage: 1,
            value: '',
            serviceTicket: {
                service_number: null,
                car_id: null,
                customer_id: null,
            },
            ticket: {
                service_ticket_id: null,
                service_ticket_number: null,
                date_returned: null,
                date_received: null,
                comments: null,
                customer_name: null,
                mechanic_name: null
            },
            item: {
                service_ticket_id: null,
                service_ticket_number: null,
                date_returned: null,
                date_received: null,
                comments: null,
                customer_name: null,
                mechanic_name: null
            },
            fields: [
                // {key: "service_ticket_id", label: "ID", sortable: true},
                { key: "service_ticket_number", label: "Service Number", sortable: true },
                { key: "date_received", label: "Date Received", sortable: true },
                { key: "date_returned", label: "Date Returned", sortable: true },
                { key: "customer_name", label: "Customer Name", sortable: true },
                { key: "car_id", label: "Car ID", sortable: true },
                { key: "mechanic_name", label: "Mechanic Name", sortable: true }

            ],

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