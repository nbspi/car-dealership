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
                                        <b-form @submit="onSubmit">
                                            <!-- <FormInput label="First Name" />
                                            <FormInput label="Last Name" />
                                            <FormInput label="Phone Number" />
                                            <b-container class="button-container d-flex justify-content-end">
                                                <b-button class="mr-2" type="reset">Reset</b-button>
                                                <b-button variant="success" type="submit">Save</b-button>
                                            </b-container> -->
                                            <div class="mb-3">
                                                <b-form-group label="First Name" label-for="firstname">
                                                    <b-form-input id="firstname" v-model="firstname"
                                                        placeholder="Enter First Name" required></b-form-input>
                                                </b-form-group>
                                            </div>
                                            <div class="mb-3">
                                                <b-form-group label="Last Name" label-for="input-1">
                                                    <b-form-input id="lastname" v-model="lastname"
                                                        placeholder="Enter Last Name" required></b-form-input>
                                                </b-form-group>
                                            </div>
                                            <div class="mb-3">
                                                <b-form-group label="Phone Number" label-for="contact">
                                                    <b-form-input id="contact" v-model="contact"
                                                        placeholder="Enter Phone Number" required></b-form-input>
                                                </b-form-group>
                                            </div>

                                            <b-container class="button-container d-flex justify-content-end">
                                                <b-button class="mr-2" type="reset">Reset</b-button>
                                                <b-button variant="success" type="submit"
                                                    @click.prevent="addSalesperson">Save</b-button>
                                            </b-container>
                                        </b-form>
                                    </b-col>
                                </b-container>
                            </b-col>
                        </b-col>
                        <b-col md="12" lg="12" xl="8" class="py-2">
                            <!-- left container-->
                            <b-col class="table-container">
                                <b-container class="container-card rounded p-3">
                                    <h5 class="px-3 mb-3">Salespersons Records</h5>
                                    <!-- <b-table hover :items="items" :fields="fields">
                                        <template v-slot:cell(actions)>
                                            <span>
                                                <b-row class="d-flex justify-content-center">
                                                    <EditModal title="Edit Salesperson" />
                                                    <ModalComponent />
                                                </b-row>
                                            </span>
                                        </template>
                                    </b-table> -->
                                    <!-- <PaginationComponent /> -->
                                    <div class="">
                                        <table id="mechanic-table" class="table table-hover" :items="salespersonState"
                                            style="width: 100%">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Phone Number</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(salesperson, index) in salespersonState" :key="index">
                                                    <td>{{++index}}</td>
                                                    <td>{{ salesperson.firstname }}</td>
                                                    <td>{{ salesperson.lastname }}</td>
                                                    <td>{{ salesperson.contact }}</td>
                                                    <td class="d-flex justify-content-center">
                                                        <div>
                                                            <b-button v-b-modal.modal-form>
                                                                <b-icon class="delete-btn" icon="pencil-square">
                                                                </b-icon>
                                                            </b-button>
                                                        </div>
                                                        <b-button @click="deleteSalesperson(index)">
                                                            <b-icon class="delete-btn" icon="trash-fill"></b-icon>
                                                        </b-button>
                                                    </td>
                                                </tr>


                                            </tbody>
                                        </table>
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
import { mapState } from 'vuex'
// import FormInput from "../components/FormInput.vue"
// import ModalComponent from "@/components/DeleteModalComponent.vue";
// // import PaginationComponent from "@/components/PaginationComponent.vue"
// import EditModal from "../components/EditModal.vue";

export default {
    name: "SalespersonPage",
    // methods: {
    //     editItem(item) { console.log(item); }
    // },
    components: {
        SideBar,
        HeaderComponent,
        // FormInput,
        // ModalComponent,
        // // PaginationComponent,
        // EditModal,
    },
    computed: {
        ...mapState(['salespersonState'])
    },
    data() {
        return {
            index: 0,
            firstname: "",
            lastname: "",
            contact: "",
            value: "",
            // fields: ["ID", "first_name", "last_name", "phone_number", "actions"],
            // items: [
            //     {
            //         ID: 40,
            //         first_name: "Mark",
            //         last_name: "Lee",
            //         phone_number: "4546766",
            //     },
            // { ID: 40, first_name: 'Renjun', last_name: 'Huang', phone_number: '4546766' },
            // { ID: 40, first_name: 'Jeno', last_name: 'Lee', phone_number: '4546766' },
            // { ID: 40, first_name: 'Haechan', last_name: 'Lee', phone_number: '4546766' },
            // { ID: 40, first_name: 'Jaemin', last_name: 'Na', phone_number: '4546766' },
            // { ID: 40, first_name: 'Chenle', last_name: 'Zhong', phone_number: '4546766' },
            // { ID: 40, first_name: 'Jisung', last_name: 'Park', phone_number: '4546766' },
            // ],
        };
    },
    methods: {
        //     onSubmit(event) {
        //         event.preventDefault();
        //     },
        //     onReset(event) {
        //         event.preventDefault();
        //         // Reset our form values
        //         this.form.firstname = "";
        //         this.form.lastname = "";
        //         this.form.contact = "";
        //     },
        // },
        addSalesperson() {
            this.$store.dispatch("addSalesperson", {
                data: {
                    firstname: this.firstname,
                    lastname: this.lastname,
                    contact: this.contact
                }
            });
        },
        onSubmit(event) {
            event.preventDefault();
            alert(JSON.stringify(this.form))
        },
        deleteSalesperson(index) {
            if (confirm('are you sure?')) {
                console.log(index)

            }
        }
    }
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
