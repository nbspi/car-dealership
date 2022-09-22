<template>
    <b-container fluid>
        <b-row>
            <SideBar />
            <b-col xl="10" lg="9" sm="9">
                <HeaderComponent title="Salesperson" />
                <b-container fluid class="pt-2">
                    <b-row class="my-3">
                        <!-- whole container-->
                        <b-col class="py-2">
                            <!-- left container-->
                            <b-col class="">
                                <b-container class="container-card rounded p-3">
                                    <h4 class="px-3">Add Salesperson</h4>
                                    <b-col class="mt-3">
                                        <b-form>
                                            <div class="form-group mb-3">
                                                <b-form-group label="First Name" class="ml-2"
                                                    :state="salesperson.firstname"
                                                    invalid-feedback="first name is required">
                                                </b-form-group>
                                                <b-form-input id="firstname" type="text" placeholder="Enter First Name"
                                                    v-model="salesperson.firstname" required>
                                                </b-form-input>
                                            </div>
                                            <div class="form-group mb-3">
                                                <b-form-group label="Last Name" class="ml-2"
                                                    :state="salesperson.lastname"
                                                    invalid-feedback="last name is required">
                                                </b-form-group>
                                                <b-form-input id="lastname" type="text" placeholder="Enter Last Name"
                                                    v-model="salesperson.lastname" required>
                                                </b-form-input>
                                            </div>
                                            <div class="form-group mb-3">
                                                <b-form-group label="Phone Number" class="ml-2"
                                                    :state="salesperson.contact"
                                                    invalid-feedback="contact number is required">
                                                </b-form-group>
                                                <b-form-input id="contact" type="number"
                                                    placeholder="Enter Phone Number" v-model="salesperson.contact"
                                                    required>
                                                </b-form-input>
                                            </div>
                                            <b-container class="button-container d-flex justify-content-end">
                                                <b-button class="mr-2" type="reset">Reset</b-button>
                                                <b-button variant="success" type="submit" class="btn btn-success send"
                                                    @click="saveSalesperson">
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
                                                fill="black"></b-icon>
                                            {{ alert.message }}
                                        </div>
                                    </b-alert>
                                </div>
                            </b-col>
                        </b-col>
                        <b-col md="12" lg="12" xl="8" class="py-2">
                            <!-- right container-->
                            <b-col class="table-container">
                                <b-container class="container-card rounded p-3">
                                    <h5 class="px-3 mb-3">Salespersons Records</h5>
                                    <div class="">
                                        <b-table id="salesperson-table" hover :items="salespersonState" :fields="fields"
                                            :per-page="perPage" :current-page="currentPage">
                                            <template v-slot:cell(actions)="data">
                                                <div>
                                                    <b-button v-b-modal.delete-modal>
                                                        <b-icon class="delete-btn" icon="trash-fill"></b-icon>
                                                    </b-button>

                                                    <b-modal id="delete-modal" title="Delete Confirmation"
                                                        @ok="deleteItem(data.item.salesperson_id)">
                                                        <b-row class="d-flex justify-content-center">
                                                            <img src="../assets/img/delete.svg" alt=""
                                                                style="height:200px; width:200px">

                                                        </b-row>
                                                        <p class="my-4">Are you sure you want to proceed?</p>

                                                    </b-modal>
                                                </div>
                                            </template>
                                        </b-table>
                                        <b-row fluid class="mt-4 d-flex justify-content-end">
                                            <b-pagination pills v-model="currentPage" :total-rows="rows"
                                                :per-page="perPage" aria-controls="salesperson-table"></b-pagination>
                                        </b-row>
                                    </div>

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
import SideBar from "../layouts/SideBar.vue";
import HeaderComponent from "../layouts/HeaderComponent.vue";
import { mapState, mapGetters } from 'vuex'

export default {
    name: "SalespersonPage",
    components: {
        SideBar,
        HeaderComponent,
    },
    computed: {
        ...mapState(['salespersonState']),
        ...mapGetters({
            salespersonList: "fetchSalesperson"
        }),
        rows() {
            return this.salespersonState.length
        }
    },

    beforeCreate() {
        this.$store.dispatch("fetchSalesperson")
    },

    data() {
        return {
            perPage: 5,
            currentPage: 1,
            modalShow: false,
            salesperson: {
                firstname: "",
                lastname: "",
                contact: "",
            },
            value: "",
            show: true,
            state: {
                firstname: null,
                lastname: null,
                contact: null
            },
            alert: {
                dismissSecs: 0,
                showAlert: 0,
                variant: "",
                message: ""
            },
            fields: [
                { key: "salesperson_id", label: "ID", sortable: true },
                { key: "firstname", label: "First Name", sortable: true },
                { key: "lastname", label: "Last Name", sortable: true },
                { key: "contact", label: "Contact", sortable: true },
                { key: "actions", label: "Actions" },
            ],
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
        showModal(id) {
            this.index = id
        },
        addSalesperson() {
            this.$store.dispatch("addSalesperson", this.salesperson)
        },
        saveSalesperson() {
            console.log(this.salesperson)
            if (!this.validation()) {
                this.showAlert("Warning: Please fill out the fields", "warning");
            } else {
                this.$store.dispatch("addSalesperson", this.salesperson);
                this.showAlert("Successfully Created", "success");
            }
        },

        async deleteItem(salesperson_id) {
            try {
                console.log(salesperson_id);
                await this.$store.dispatch("deleteSalesperson", salesperson_id);
                location.reload()
            } catch (error) {
                console.log(error)
            }
        },
        validation() {
            if (this.salesperson.firstname === null || this.salesperson.firstname.length < 1) {
                this.state.firstname = false;
            } else {
                this.state.firstname = true;
            }
            if (this.salesperson.lastname === null || this.salesperson.lastname.length < 1) {
                this.state.lastname = false;
            } else {
                this.state.lastname = true;
            }
            if (this.salesperson.contact === null || this.salesperson.contact.length < 1) {
                this.state.contact = false;
            } else {
                this.state.contact = true;
            }

            if (this.salesperson.firstname != null && this.salesperson.lastname != null && this.salesperson.contact) {
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
</style>
