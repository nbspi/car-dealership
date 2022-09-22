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
                                                <b-form-group label="Service Name" class="ml-2">
                                                </b-form-group>
                                                <b-form-input id="lastname" type="text" placeholder="Enter Service Name"
                                                    required>
                                                </b-form-input>
                                            </div>
                                            <div class="form-group mb-3">
                                                <b-form-group label="Hourly Rate" class="ml-2">
                                                </b-form-group>
                                                <b-form-input id="lastname" type="number" placeholder="Enter Rate"
                                                    required>
                                                </b-form-input>
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
                        <b-col cmd="12" lg="12" xl="8" class="table-container py-2">
                            <!-- left container-->
                            <b-col class="table-container">
                                <b-container class="container-card rounded p-3">
                                    <h4>Profile</h4>
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

export default {
    name: "UserProfile",
    components: {
        SideBar,
        HeaderComponent,
    },
    computed: {
        // rows() {
        //     return this.mechanicState.length
        // }
    },
    data() {
        return {
            perPage: 5,
            currentPage: 1,
            value: '',
            services: {
                service_id: null,
                service_name: null,
                hourly_rate: null
            },
            fields: [
                { key: "service_id", label: "Service ID", sortable: true },
                { key: "service_name", label: "Service Name", sortable: true },
                { key: "hourly_rate", label: "Hourly Rate", sortable: true },
                { key: "actions", label: "Actions" }
            ],
            items: [
                { service_id: 1, service_name: 'ksksksk', hourly_rate: 5 }
            ]
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