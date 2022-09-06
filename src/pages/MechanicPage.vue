<template>
    <b-container fluid>
        <b-row>
            <SideBar />
            <b-col xl="10" lg="9" sm="9">
                <HeaderComponent title="Mechanic" />
                <b-container fluid class="pt-2">
                    <b-row class=" my-3">
                        <!-- whole container-->
                        <b-col class="py-2">
                            <!-- left container-->
                            <b-col class="">
                                <b-container class="container-card rounded p-3">
                                    <h4 class="px-3">Add Mechanic</h4>
                                    <b-col class="mt-3">
                                        <b-form>
                                            <FormInput label="First Name" ref="first_name" />
                                            <FormInput label="Last Name" />
                                            <FormInput label="Phone Number" />
                                            <b-container class="button-container d-flex justify-content-end">
                                                <b-button class="mr-2" type="reset">Reset</b-button>
                                                <b-button variant="success" type="submit">Save</b-button>
                                            </b-container>
                                        </b-form>
                                    </b-col>
                                </b-container>

                            </b-col>
                        </b-col>
                        <b-col md="12" lg="12" xl="8" class="py-2">
                            <b-col class="table-container">
                                <b-container class="container-card rounded p-3">
                                    <h5 class="px-3 mb-3">Mechanic Records</h5>
                                    <b-table hover :items="items" :fields="fields">
                                        <template v-slot:cell(actions)>
                                            <span>
                                                <b-row class="d-flex justify-content-center">
                                                    <EditModal title="Edit Mechanic" />
                                                    <DeleteModalComponent />
                                                </b-row>
                                            </span>
                                        </template>
                                    </b-table>
                                    <PaginationComponent />
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
import EditModal from "@/components/EditModal.vue"
import PaginationComponent from "@/components/PaginationComponent.vue"
import { mapGetters } from 'vuex'
import DeleteModalComponent from "@/components/DeleteModalComponent.vue"


export default {
    name: "MechanicPage",
    components: {
        SideBar,
        HeaderComponent,
        FormInput,
        DeleteModalComponent,
        EditModal,
        PaginationComponent
    },
    computed: {
        ...mapGetters(['fetchMechanic'])
    },
    methods: {
        resetInput() {
            this.$refs["first_name"].value = "";
        }
    },
    data() {
        return {
            value: '',
            modalShow: false,
            currentPage: 1,
            fields: ['ID', 'first_name', 'last_name', 'phone_number', 'actions'],
            items: [
                { ID: 40, first_name: 'Mark', last_name: 'Lee', phone_number: '4546766' }
            ]
            // fields: [
            //     { key: "ID", label: "ID" },
            //     { key: "first_name", label: "First Name" },
            //     { key: "last_name", label: "Last Name" },
            //     { key: "phone_number", label: "Phone Number" },
            //     { key: "actions", label: "Actions" },
            // ],
            // items: {
            //     first_name: null,
            //     last_name: null,
            //     phone_number: null,
            //     address: null
            // }
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