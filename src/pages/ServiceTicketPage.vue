<template>
    <b-container fluid id="hero">
        <b-row>
            <SideBar />
            <b-col xl="10" lg="9" sm="9">
                <HeaderComponent title="Ticket" />
                <b-container fluid class="pt-2">
                    <b-row class="my-2 d-flex justify-content-end px-3">
                        <router-link to="/service-ticket/add-ticket" class="btn btn-success" exact>Add Service Ticket
                        </router-link>
                    </b-row>
                    <b-row class="d-flex justify-content-center my-3">
                        <b-col md="12" lg="12" xl="12" class="py-2">
                            <!-- left container-->
                            <b-col class="table-container">
                                <b-container fluid class="container-card rounded p-3">
                                    <h5 class="px-3 mb-3">Service Ticket Records</h5>
                                    <div class="table-responsive">
                                        <b-table id="ticket-table" hover :items="ticketList" :fields="fields"
                                            :per-page="perPage" :current-page="currentPage">
                                            <template v-slot:cell(actions)="{ item }">
                                                <div class="d-flex justify-content-center">
                                                    <div>
                                                        <!-- <b-button
                                                            :to="{ name: 'EditServiceTicket', params: { id: item.service_ticket_id } }">
                                                            <b-icon class="edit-btn" icon="pencil-square"></b-icon>
                                                        </b-button> -->
                                                    </div>
                                                    <div>
                                                        <b-button v-b-modal @click="showDeleteModal(item)">
                                                            <b-icon class="delete-btn" icon="trash-fill"></b-icon>
                                                        </b-button>
                                                    </div>
                                                </div>
                                            </template>
                                        </b-table>
                                    </div>
                                    <b-row fluid class="mt-4 d-flex justify-content-end">
                                        <b-pagination pills v-model="currentPage" :total-rows="rows" :per-page="perPage"
                                            aria-controls="ticket-table"></b-pagination>
                                    </b-row>
                                </b-container>
                            </b-col>
                        </b-col>
                    </b-row>
                </b-container>
            </b-col>
        </b-row>

        <!-- delete-modal -->
        <b-modal id="delete-modal" title="Delete Confirmation" @ok="deleteItem" >
            <b-row class="d-flex justify-content-center">
                <img src="../assets/img/delete.svg" alt="" style="height:200px; width:200px">

            </b-row>
            <p class="my-4">Are you sure you want to proceed?</p>
        </b-modal>

    </b-container>
</template>

<script>
import SideBar from "../layouts/SideBar.vue"
import HeaderComponent from "../layouts/HeaderComponent.vue"
import { mapGetters, mapState } from 'vuex'

export default {
    name: "ServiceTicketPage",
    components: {
        SideBar,
        HeaderComponent,
    },
    computed: {
        ...mapState(['ticketState']),
        ...mapGetters({ ticketList: "fetchTicket" }),
        rows() {
            return this.ticketList.length
        }

    },
    beforeCreate() {
        this.$store.dispatch("fetchTicket")
    },
    data() {
        return {
            perPage: 7,
            currentPage: 1,
            value: '',
            props: ["value"],
            model: {
                prop: "value",
                event: "update",
            },
            modalShow: false,
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
                customer_id: null,
                mechanic_id: null,
                car_id: null,   
                service_id: null,
                comment: null
            },
            fields: [
                { key: "service_ticket_number", label: "Ticket No.", sortable: true },
                { key: "service_name", label: "Service Name", sortable: true },
                { key: "customer_name", label: "Customer", sortable: true },
                { key: "mechanic_name", label: "Mechanic", sortable: true },
                { key: "serial_number", label: "Serial No.", sortable: true },
                { key: "brand", label: "Brand", sortable: true },
                { key: "model", label: "Model", sortable: true },
                { key: "actions", label: "Actions" },
            ],
        }
    },
    methods: {
        showModal(id) {
            this.index = id
        },
        // showEdit(ticket_id){
        //     this.ticket.service_ticket_id = ticket_id
        //     this.$router.push(`/service-ticket/edit-ticket/${ticket_id}`)
        // },

        showUpdateModal(item) {
        this.item = {
            mechanic_id: item.mechanic_id,
            firstname: item.firstname,
            lastname: item.lastname,
            contact: item.contact
      };
      this.$bvModal.show("modal-form")
    },

    showDeleteModal(item) {
        this.item = {
            service_ticket_id: item.service_ticket_id,
                service_ticket_number: item.service_ticket_number,
                date_received: item.date_received,
                date_returned: item.date_returned,
                customer_id: item.customer_id,
                mechanic_id: item.mechanic_id,
                car_id: item.car_id,   
                service_id: item.service_id,
                comments: item.comments
      };
      this.$bvModal.show("delete-modal");
      console.log(item);
    },

        async deleteItem() {
            try {
                await this.$store.dispatch("deleteTicket", this.item.service_ticket_id);
                console.log(this.item.service_ticket_id)
                this.$bvModal.hide("delete-modal")
                location.reload()
            } catch (error) {
                console.log(error);
            }
    },
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

.btn {
    background-color: var(--primary-color) !important;
}

.btn:hover {
    background-color: var(--secondary-color) !important;
}
</style>