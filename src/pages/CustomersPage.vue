<template>
    <b-container fluid>
        <SpinnerLoad />
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
                                        <b-form @submit.prevent>
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
                            <b-container fluid class="table-container ">
                                <b-container class="container-card rounded p-3">
                                    <h5 class="px-3 mb-3">Customer Records</h5>
                                    <div class="table-responsive" >
                                        <b-table id="customer-table" hover :items="customerList" :fields="fields"
                                            :per-page="perPage" :current-page="currentPage" class="text-left">
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
                                    </div>
                                    <b-row fluid class="mt-4 d-flex justify-content-end">
                                        <b-pagination pills v-model="currentPage" :total-rows="rows" :per-page="perPage"
                                            aria-controls="customer-table"></b-pagination>
                                    </b-row>
                                </b-container>

                            </b-container>
                        </b-col>
                    </b-row>
                </b-container>
            </b-col>
        </b-row>
        <!--UPDATE MODAL-->
        <b-modal id="modal-form" title="Edit Customer" @ok="editItem">
            <div>
                <div class="modal-form__form-group mb-3">
                    <b-form-group label="First Name" class="ml-2">
                    </b-form-group>
                    <b-form-input id="firstname" placeholder="Enter First Name" type="text" v-model="item.firstname"
                        autocomplete="off" required>
                    </b-form-input>
                </div>
                <div class="modal-form__form-group mb-3">
                    <b-form-group label="Last Name" class="ml-2">
                    </b-form-group>
                    <b-form-input id="lastname" placeholder="Enter Last Name" type="text" v-model="item.lastname"
                        required>
                    </b-form-input>
                </div>
                <div class="form-group mb-3">
                    <b-form-group label="Phone Number" class="ml-2">
                    </b-form-group>
                    <b-form-input id="contact" placeholder="Enter Phone Number" type="number" v-model="item.contact"
                        required>
                    </b-form-input>
                </div>
                <div class="form-group mb-3">
                    <b-form-group label="Address" class="ml-2">
                    </b-form-group>
                    <b-form-input id="address" placeholder="Enter Address" type="text" v-model="item.address" required>
                    </b-form-input>
                </div>
            </div>
        </b-modal>

        <!--DELETE MODAL-->
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
import { mapGetters } from 'vuex'
import SpinnerLoad from "@/components/SpinnerLoad.vue";

export default {
    name: "CarsPage",
    components: {
        SideBar,
        HeaderComponent,
        SpinnerLoad
    },
    computed: {
        ...mapGetters({
            customerList: "fetchCustomer"
        }),
        rows() {
            return this.customerList.length
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
            props: ["value"],
            model: {
                prop: "value",
                event: "update",
            },
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
                // { key: "customer_id", label: "ID", sortable: true },
                { key: "firstname", label: "First Name", sortable: true },
                { key: "lastname", label: "Last Name", sortable: true },
                { key: "contact", label: "Contact", sortable: true },
                { key: "address", label: "Address", sortable: true },
                { key: "actions", label: "Actions" },
            ],

        }
    },
    methods: {
        showUpdateModal(item) {
            this.item = {
                customer_id: item.customer_id,
                firstname: item.firstname,
                lastname: item.lastname,
                contact: item.contact,
                address: item.address
            };
            this.$bvModal.show("modal-form")
        },

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
                await this.$store.dispatch("addCustomer", this.customer);
                await this.$store.dispatch("fetchCustomer");
                this.showAlert("Successfully Created", "success");
                console.log("customerList", this.customerList);
                this.clear();
            }
        },

        async editItem() {
            try {
                console.log();
                await this.$store.dispatch("editCustomer", this.item);
                this.$bvModal.hide("modal-form");
                location.reload();
            } catch (error) {
                console.log(error);
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

        clear() {
            this.customer = {
                customer_id: null,
                firstname: null,
                lastname: null,
                contact: null,
                address: null
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

            if (this.customer.firstname != null && this.customer.lastname != null && this.customer.contact != null && this.customer.address != null) {
                return true;
            } else {
                return false;

            }
        }
    }
}
</script>

<style scoped>
div.py-2 {
    padding: 0 !important;
}

.edit-btn,
.delete-btn {
    color: #fff;
}

/* #customer-table {
    width: 100%;
} */
</style>