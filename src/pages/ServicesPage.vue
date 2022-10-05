<template>
    <b-container fluid>
        <b-row>
            <SideBar />
            <b-col xl="10" lg="9" sm="9">
                <HeaderComponent title="Services" />
                <b-container fluid class="pt-2">
                    <b-row class=" my-3">
                        <!-- whole container-->
                        <b-col xl="4" class="py-2">
                            <!-- left container-->
                            <b-col class="">
                                <b-container class="container-card rounded p-3">
                                    <h4 class="px-3">Add Service</h4>
                                    <b-col class="mt-3">
                                        <b-form @submit.prevent>
                                            <div class="form-group mb-3">
                                                <b-form-group label="Service Name" class="ml-2"
                                                    :state="service.service_name">
                                                </b-form-group>
                                                <b-form-input id="service_name" type="text"
                                                    placeholder="Enter Service Name" v-model="service.service_name"
                                                    required>
                                                </b-form-input>
                                            </div>
                                            <div class="form-group mb-3">
                                                <b-form-group label="Hourly Rate" class="ml-2"
                                                    :state="service.hourly_rate">
                                                </b-form-group>
                                                <b-input-group prepend="₱" class="mb-2 mr-sm-2 mb-sm-0">
                                                    <b-form-input id="hourly_rate" type="number"
                                                        placeholder="Enter Hourly Rate" v-model="service.hourly_rate">
                                                    </b-form-input>
                                                </b-input-group>
                                            </div>
                                            <b-container class="button-container d-flex justify-content-end">
                                                <b-button class="mr-2" type="reset">Reset</b-button>
                                                <b-button variant="success" type="submit" class="btn btn-success send"
                                                    @click="saveService">
                                                    Submit</b-button>
                                            </b-container>
                                        </b-form>
                                    </b-col>
                                </b-container>

                                <!--alert container -->
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
                        <b-col md="12" lg="12" xl="8" class="table-container py-2">
                            <!-- left container-->
                            <b-col class="table-container">
                                <b-container class="container-card rounded p-3">
                                    <h5 class="px-3 mb-3">Service List</h5>
                                    <div class="table-responsive">
                                        <b-table hover :items="serviceList" :fields="fields" :per-page="perPage"
                                            :current-page="currentPage">
                                            <template v-slot:cell(actions)="{ item }">
                                                <div class="d-flex justify-content-center">
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
                                                </div>
                                            </template>
                                        </b-table>
                                    </div>
                                    <b-row fluid class="mt-4 d-flex justify-content-end">
                                        <b-pagination pills v-model="currentPage" :total-rows="rows" :per-page="perPage"
                                            aria-controls="mechanic-table"></b-pagination>
                                    </b-row>
                                </b-container>

                            </b-col>
                        </b-col>
                    </b-row>
                </b-container>
            </b-col>
        </b-row>
        <!--UPDATE MODAL-->
        <b-modal id="modal-form" title="Edit Service" @ok="editItem">
            <div>
                <div class="modal-form__form-group mb-3">
                    <b-form-group label="Service Name" class="ml-2">
                    </b-form-group>
                    <b-form-input id="service_name" placeholder="Enter First Name" type="text"
                        v-model="item.service_name" autocomplete="off" required>
                    </b-form-input>
                </div>
                <div class="modal-form__form-group mb-3">
                    <b-form-group label="Hourly Rate" class="ml-2">
                    </b-form-group>
                    <b-form-input id="hourly_rate" placeholder="Enter Last Name" type="number"
                        v-model="item.hourly_rate" required>
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
import { mapState, mapGetters } from 'vuex'


export default {
    name: "ServicesPage",
    components: {
        SideBar,
        HeaderComponent,
    },
    computed: {
        ...mapState(['serviceState']),
        ...mapGetters({
            serviceList: "fetchService"
        }),
        rows() {
            return this.serviceList.length
        }
    },
    beforeCreate() {
        this.$store.dispatch("fetchService")
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
            service: {
                service_id: null,
                service_name: null,
                hourly_rate: null
            },
            item: {
                service_id: null,
                service_name: null,
                hourly_rate: null
            },
            state: {
                service_name: null,
                hourly_rate: null
            },
            alert: {
                dismissSecs: 0,
                showAlert: 0,
                variant: "",
                message: ""
            },
            fields: [
                // { key: "service_id", label: "Service ID", sortable: true },
                { key: "service_name", label: "Service Name", sortable: true },
                {
                    key: "hourly_rate", label: "Hourly Rate", sortable: true,
                    formatter: (price) => {
                        let formatter = new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "Php",
                            minimumFractionDigits: 2
                        });
                        return formatter.format(price);
                    }
                },
                { key: "actions", label: "Actions" }
            ],
        }
    },
    methods: {
        showUpdateModal(item) {
            this.item = {
                service_id: item.service_id,
                service_name: item.service_name,
                hourly_rate: item.hourly_rate
            };
            this.$bvModal.show("modal-form")
        },
        showDeleteModal(item) {
            this.item = {
                service_id: item.service_id,
                service_name: item.service_name,
                hourly_rate: item.hourly_rate
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

        addService() {
            this.$store.dispatch("addService", this.service);
        },

        async saveService() {
            console.log(this.service)
            if (!this.validation()) {
                this.showAlert("Warning: Please fill out the fields", "warning");

            } else {
                await this.$store.dispatch("addService", this.service);
                await this.$store.dispatch("fetchService");
                this.showAlert("Successfully Created", "success");
                console.log("serviceList", this.serviceList);
                this.clear();
            }
        },

        async deleteItem() {
            try {
                await this.$store.dispatch("deleteService", this.item.service_id);
                console.log(this.item.service_id)
                this.$bvModal.hide("delete-modal")
                location.reload()
            } catch (error) {
                console.log(error);
            }
        },

        async editItem() {
            try {
                console.log();
                await this.$store.dispatch("editService", this.item);
                this.$bvModal.hide("modal-form");
                location.reload();
            } catch (error) {
                console.log(error);
            }
        },

        clear() {
            this.service = {
                service_id: null,
                service_name: null,
                hourly_rate: null
            }
        },

        validation() {
            if (this.service.service_name == null || this.service.service_name < 1) {
                this.state.service_name = false;
            } else {
                this.state.service_name = true;
            }
            if (this.service.hourly_rate == null || this.service.hourly_rate < 1) {
                this.state.hourly_rate = false;
            } else {
                this.state.hourly_rate = true;
            }

            if (this.service.service_name != null && this.service.hourly_rate != null) {
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
</style>