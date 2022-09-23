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
                                        <b-form>
                                            <div class="form-group mb-3">
                                                <b-form-group label="Service Name" class="ml-2"
                                                    :state="service.service_name">
                                                </b-form-group>
                                                <b-form-input id="lastname" type="text" placeholder="Enter Service Name"
                                                    required>
                                                </b-form-input>
                                            </div>
                                            <div class="form-group mb-3">
                                                <b-form-group label="Hourly Rate" class="ml-2"
                                                    :state="service.hourly_rate">
                                                </b-form-group>
                                                <b-input-group prepend="₱" class="mb-2 mr-sm-2 mb-sm-0">
                                                    <b-form-input id="hourly-rate" type="number"
                                                        placeholder="Enter Hourly Rate"></b-form-input>
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
                        <b-col cmd="12" lg="12" xl="8" class="table-container py-2">
                            <!-- left container-->
                            <b-col class="table-container">
                                <b-container class="container-card rounded p-3">
                                    <h5 class="px-3 mb-3">Service List</h5>
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
                                    <!-- <b-row fluid class="mt-4 d-flex justify-content-end">
                                        <b-pagination pills v-model="currentPage" :total-rows="rows" :per-page="perPage"
                                            aria-controls="service-table"></b-pagination>
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
        // rows() {
        //     return this.serviceState.length
        // }
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
                service_id: null,
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
                { key: "service_id", label: "Service ID", sortable: true },
                { key: "service_name", label: "Service Name", sortable: true },
                { key: "hourly_rate", label: "Hourly Rate", sortable: true },
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
                this.$store.dispatch("addService", this.service);
                this.showAlert("Successfully Created", "success");
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
nav {
    padding: 10px;
}

div.py-2 {
    padding: 0 !important;
}
</style>