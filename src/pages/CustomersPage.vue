<template>
    <b-container fluid>
        <b-row>
            <SideBar />
            <b-col xl="10" lg="9" sm="9">
                <HeaderComponent title="Customers" />
                <b-container fluid class="pt-2">
                    <b-row class="my-3">
                        <!-- whole container-->
                        <b-col class="py-2">
                            <!-- left container-->
                            <b-col class="">
                                <b-container class="container-card rounded p-3">
                                    <h4 class="px-3">Add Customers</h4>
                                    <b-col class="mt-3">
                                        <b-form>
                                            <div class="form-group mb-3">
                                                <b-form-group label="First Name" class="ml-2"
                                                    :state="customer.firstname">
                                                </b-form-group>
                                                <b-form-input id="firstname" type="text" placeholder="Enter First Name"
                                                    v-model="customer.firstname" required>
                                                </b-form-input>
                                            </div>
                                            <div class="form-group mb-3">
                                                <b-form-group label="Last Name" class="ml-2" :state="customer.lastname">
                                                </b-form-group>
                                                <b-form-input id="lastname" type="text" placeholder="Enter Last Name"
                                                    v-model="customer.lastname" required>
                                                </b-form-input>
                                            </div>
                                            <div class="form-group mb-3">
                                                <b-form-group label="Phone Number" class="ml-2"
                                                    :state="customer.contact">
                                                </b-form-group>
                                                <b-form-input id="contact" type="number"
                                                    placeholder="Enter Phone Number" v-model="customer.contact"
                                                    required>
                                                </b-form-input>
                                            </div>
                                            <div class="form-group mb-3">
                                                <b-form-group label="Address" class="ml-2" :state="customer.address">
                                                </b-form-group>
                                                <b-form-input id="address" type="text" placeholder="Enter Address"
                                                    v-model="customer.address" required>
                                                </b-form-input>
                                            </div>
                                            <b-container class="button-container d-flex justify-content-end">
                                                <b-button class="mr-2" type="reset">Reset</b-button>
                                                <b-button variant="success" type="submit" class="btn btn-success send"
                                                    @click="saveCustomer">
                                                    Submit</b-button>
                                            </b-container>
                                        </b-form>
                                    </b-col>
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
                        <b-col md="12" lg="12" xl="9" class="py-2">
                            <!-- left container-->
                            <b-col class="table-container ">
                                <b-container class="container-card rounded p-3">
                                    <h5 class="px-3 mb-3">Customer Records</h5>
                                    <div>
                                        <!-- <table id="customer-table" class="table table-hover" :items="customerState"
                                            style="width: 100%">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Phone Number</th>
                                                    <th>Address</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="customer in customerState" :key="customer.customer_id">
                                                    <td>{{customer.customer_id}}</td>
                                                    <td>{{ customer.firstname }}</td>
                                                    <td>{{ customer.lastname }}</td>
                                                    <td>{{ customer.contact }}</td>
                                                    <td>{{ customer.address }}</td>
                                                    <td class="d-flex justify-content-center">
                                                        <div>
                                                            <b-button v-b-modal>
                                                                <b-icon class="edit-btn" icon="pencil-square">
                                                                </b-icon>
                                                            </b-button>
                                                        </div>
                                                        <div>
                                                            <b-button v-b-modal.delete-modal>
                                                                <b-icon class="delete-btn" icon="trash-fill"></b-icon>
                                                            </b-button>

                                                            <b-modal id="delete-modal" title="Delete Confirmation">
                                                                <b-row class="d-flex justify-content-center">
                                                                    <img src="../assets/img/delete.svg" alt=""
                                                                        style="height:200px; width:200px">

                                                                </b-row>
                                                                <p class="my-4">Are you sure you want to proceed?</p>

                                                            </b-modal>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>


                                        </table> -->
                                        <b-table id="customer-table" hover :items="customerState" :fields="fields"
                                            :per-page="perPage" :current-page="currentPage" class="text-left">
                                            <template v-slot:cell(actions)="{ item }">
                                                <div class="d-flex justify-content-center">
                                                    <div>
                                                        <b-button>
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
                                        <b-row fluid class="mt-4 d-flex justify-content-end">
                                            <b-pagination pills v-model="currentPage" :total-rows="rows"
                                                :per-page="perPage" aria-controls="customer-table"></b-pagination>
                                        </b-row>


                                    </div>
                                </b-container>

                            </b-col>
                        </b-col>
                    </b-row>
                </b-container>
            </b-col>
        </b-row>
        <b-modal id="delete-modal" title="Delete Confirmation" @ok="deleteItem">
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
import { mapState, mapGetters } from 'vuex'

export default {
    name: "CarsPage",
    components: {
        SideBar,
        HeaderComponent,
    },
    computed: {
        ...mapState(['customerState']),
        ...mapGetters({
            customerList: "fetchCustomer"
        }),
        rows() {
            return this.customerState.length
        }

    },
    beforeCreate() {
        this.$store.dispatch("fetchCustomer")
    },
    data() {
        return {
            perPage: 5,
            currentPage: 1,
            value: '',
            modalShow: false,
            customer: {
                customer_id: null,
                firstname: null,
                lastname: null,
                contact: null,
                address: null
            },
            item: {
                customer_id: null,
                firstname: null,
                lastname: null,
                contact: null,
                address: null
            },
            state: {
                firstname: null,
                lastname: null,
                contact: null,
                address: null
            },
            alert: {
                dismissSecs: 0,
                showAlert: 0,
                variant: "",
                message: ""
            },
            fields: [
                { key: "customer_id", label: "ID", sortable: true },
                { key: "firstname", label: "First Name", sortable: true },
                { key: "lastname", label: "Last Name", sortable: true },
                { key: "contact", label: "Contact", sortable: true },
                { key: "address", label: "Address", sortable: true },
                { key: "actions", label: "Actions" },
            ],

        }
    },
    methods: {
        showDeleteModal(item) {
            this.item = {
                customer_id: item.customer_id,
                firstname: item.firstname,
                lastname: item.lastname,
                contact: item.contact,
                address: item.address
            };
            this.$bvModal.show("delete-modal");
            console.log(item);
        },
        showAlert(message, variant) {
            this.alert = {
                dismissSecs: 10,
                showAlert: 5,
                message,
                variant
            }
        },
        showModal(id) {
            this.index = id
        },
        addCustomer() {
            this.$store.dispatch("addCustomer", this.customer);
        },
        async saveCustomer() {
            console.log(this.customer)
            if (!this.validation()) {
                this.showAlert("Warning: Please fill out the fields", "warning");

            } else {
                this.$store.dispatch("addCustomer", this.customer);
                this.showAlert("Successfully Created", "success");
            }
        },
        async deleteItem() {
            try {
                await this.$store.dispatch("deleteCustomer", this.item.customer_id);
                console.log(this.item.customer_id)
                this.$bvModal.hide("delete-modal")
                location.reload()
            } catch (error) {
                console.log(error);
            }
        },
        validation() {
            if (this.customer.firstname == null || this.customer.firstname.length < 1) {
                this.state.firstname = false;
            } else {
                this.state.firstname = true;
            }
            if (this.customer.lastname == null || this.customer.lastname.length < 1) {
                this.state.lastname = false;
            } else {
                this.state.lastname = true;
            }
            if (this.customer.contact == null || this.customer.contact.length < 1) {
                this.state.contact = false;
            } else {
                this.state.contact = true;
            }

            if (this.customer.firstname != null && this.customer.lastname != null && this.customer.contact) {
                return true;
            } else {
                return false;

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

.edit-btn,
.delete-btn {
    color: #fff;
}
</style>