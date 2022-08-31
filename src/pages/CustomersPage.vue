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
                                            <FormInput :value="value" @input="$emit('update', $event.target.value)" />
                                            <FormInput label="First Name" placeholder="Enter First Name" />
                                            <FormInput label="Last Name" placeholder="Enter Last Name" />
                                            <FormInput label="Phone Number" placeholder="Enter Phone Number" />
                                            <FormInput label="Address" placeholder="Enter Address" />
                                            <b-container class="button-container d-flex justify-content-end">
                                                <b-button class="mr-2">Reset</b-button>
                                                <b-button variant="success">Save</b-button>
                                            </b-container>
                                        </b-form>
                                    </b-col>
                                </b-container>
                            </b-col>
                        </b-col>
                        <b-col md="12" lg="12" xl="8" class="py-2">
                            <!-- left container-->
                            <b-col class="table-container ">
                                <b-container class="container-card rounded p-3">
                                    <h5 class="px-3 mb-3">Customer Records</h5>
                                    <b-table hover :items="items" :fields="fields">
                                        <template v-slot:cell(actions)="{ item }">
                                            <span>
                                                <b-btn class="mr-2" @click="editItem(item)">
                                                    <b-icon class="edit-btn" icon="pencil-square"></b-icon>
                                                </b-btn>
                                                <b-btn @click="editItem(item)">
                                                    <b-icon class="delete-btn" icon="trash-fill"></b-icon>
                                                </b-btn>
                                            </span>
                                        </template>
                                    </b-table>
                                    <div class="overflow-auto">
                                        <div class="mt-5 d-flex justify-content-end">
                                            <b-pagination v-model="currentPage" pills :total-rows="rows"></b-pagination>
                                        </div>
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

import SideBar from "../layouts/SideBar.vue"
import HeaderComponent from "../layouts/HeaderComponent.vue"
import FormInput from "../components/FormInput.vue"

export default {
    name: "CarsPage",
    components: {
        SideBar,
        HeaderComponent,
        FormInput
    },
    props: ["value"],
    model: {
        prop: "value",
        event: "update"
    },
    data() {
        return {
            rows: 50,
            currentPage: 1,
            fields: ['ID', 'first_name', 'last_name', 'phone_number', 'address', 'actions'],
            items: [
                { ID: 40, first_name: 'Mark', last_name: 'Lee', phone_number: '4546766', address: 'Pol' },
                { ID: 40, first_name: 'Renjun', last_name: 'Huang', phone_number: '4546766', address: 'Pol' },
                { ID: 40, first_name: 'Jeno', last_name: 'Lee', phone_number: '4546766', address: 'Pol' },
                { ID: 40, first_name: 'Haechan', last_name: 'Lee', phone_number: '4546766', address: 'Pol' },
                { ID: 40, first_name: 'Jaemin', last_name: 'Na', phone_number: '4546766', address: 'Pol' },
                { ID: 40, first_name: 'Chenle', last_name: 'Zhong', phone_number: '4546766', address: 'Pol' },
                { ID: 40, first_name: 'Jisung', last_name: 'Park', phone_number: '4546766', address: 'Pol' },

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

.edit-btn,
.delete-btn {
    color: #fff;
}
</style>