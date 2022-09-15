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
                                        <b-form @submit="onSubmit" v-if="show">
                                            <div class="mb-3">
                                                <b-form-group label="First Name" label-for="firstname" description="kjtejterlgkl">
                                                    <b-form-input id="firstname" v-model="salesperson.firstname"
                                                        placeholder="Enter First Name" required></b-form-input>
                                                </b-form-group>
                                            </div>
                                            <div class="mb-3">
                                                <b-form-group label="Last Name" label-for="input-1">
                                                    <b-form-input id="lastname" v-model="salesperson.lastname"
                                                        placeholder="Enter Last Name" required></b-form-input>
                                                </b-form-group>
                                            </div>
                                            <div class="mb-3">
                                                <b-form-group label="Phone Number" label-for="contact">
                                                    <b-form-input id="contact" v-model="salesperson.contact"
                                                        placeholder="Enter Phone Number" required></b-form-input>
                                                </b-form-group>
                                            </div>
                                            <b-container class="button-container d-flex justify-content-end">
                                                <b-button class="mr-2" type="reset">Reset</b-button>
                                                <b-button variant="success" type="submit" @click="saveSalesperson">Save
                                                </b-button>
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
                                    <div class="">
                                        <table id="salesperson-table" class="table table-hover"
                                            :items="salespersonState" style="width: 100%">
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
                                                <tr v-for="salesperson in salespersonState"
                                                    :key="salesperson.salesperson_id">
                                                    <td>{{ salesperson.salesperson_id }}</td>
                                                    <td>{{ salesperson.firstname }}</td>
                                                    <td>{{ salesperson.lastname }}</td>
                                                    <td>{{ salesperson.contact }}</td>
                                                    <td class="d-flex justify-content-center">
                                                        <!-- <div>
                                                            <b-button @click="editSalesperson(index)">
                                                                <b-icon class="delete-btn" icon="pencil-square">
                                                                </b-icon>
                                                            </b-button>
                                                        </div> -->

                                                        <b-button>
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
import { mapState, mapGetters } from 'vuex'
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
        ...mapState(['salespersonState']),
        ...mapGetters({
            salespersonList: "fetchSalesperson"
        })
    },

    beforeCreate() {
        this.$store.dispatch("fetchSalesperson")
    },

    data() {
        return {
            salesperson: {
                firstname: "",
                lastname: "",
                contact: "",
            },
            value: "",
            show: true
        };
    },
    methods: {
        showModal(id) {
            this.index = id
        },
        addSalesperson() {
            this.$store.dispatch("addSalesperson", this.salesperson)
        },
        onSubmit(event) {
            event.preventDefault();
            // alert(JSON.stringify(this.form))
        },

        saveSalesperson() {
            this.$store.dispatch("addSalesperson", this.salesperson);
            alert("Added Salesperson Successfully!")
            location.reload();
        },

        async deleteItem(salesperson_id) {
            try {
                console.log(salesperson_id);
                await this.$store.dispatch("deleteSalesperson", salesperson_id);
                location.reload()
            } catch (error) {
                console.log(error)
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
