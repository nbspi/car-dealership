<template>
    <b-container fluid>
        <b-row>
            <SideBar />
            <b-col xl="10" lg="9" sm="9">
                <HeaderComponent title="User" />
                <b-container fluid class="pt-2">
                    <b-row class="mx-4 d-flex justify-content-center">
                        <b-container class="container-card rounded p-3">
                            <h4 class="px-3">Add User</h4>
                            <b-row>
                                <b-col cols="4" class="d-flex justify-content-center align-items-center">
                                    <div class="">
                                        <b-avatar
                                            src="https://i.pinimg.com/564x/99/4a/15/994a150a2021137245d42f47d3f27bbf.jpg"
                                            size="10rem"></b-avatar>
                                    </div>
                                </b-col>
                                <b-col class="mt-3">
                                    <b-form @submit.prevent>
                                        <div class="d-flex">
                                            <b-col>
                                                <div class="form-group mb-3">
                                                    <b-form-group label="First Name" class="ml-2"
                                                        :state="register.firstname">
                                                    </b-form-group>
                                                    <b-form-input id="firstname" type="text"
                                                        placeholder="Enter First Name" v-model="register.firstname"
                                                        required>
                                                    </b-form-input>
                                                </div>
                                                <div class="form-group mb-3">
                                                    <b-form-group label="Email Address" class="ml-2"
                                                        :state="register.email">
                                                    </b-form-group>
                                                    <b-form-input id="email" type="email"
                                                        placeholder="Enter Email Address" v-model="register.email"
                                                        required>
                                                    </b-form-input>
                                                </div>
                                            </b-col>
                                            <b-col>
                                                <div class="form-group mb-3">
                                                    <b-form-group label="Last Name" class="ml-2"
                                                        :state="register.lastname">
                                                    </b-form-group>
                                                    <b-form-input id="lastname" type="text"
                                                        placeholder="Enter Last Name" v-model="register.lastname"
                                                        required>
                                                    </b-form-input>
                                                </div>
                                                <div class="form-group mb-3">
                                                    <b-form-group label="Password" class="ml-2"
                                                        :state="register.password">
                                                    </b-form-group>
                                                    <b-form-input id="password" type="password"
                                                        placeholder="Enter Password" v-model="register.password"
                                                        required>
                                                    </b-form-input>
                                                </div>
                                            </b-col>
                                        </div>
                                        <b-container class="button-container d-flex justify-content-end">
                                            <b-button class="mr-2" type="reset">Reset</b-button>
                                            <b-button variant="success" type="submit" class="btn btn-success send"
                                                @click="saveRegister">
                                                Submit</b-button>
                                        </b-container>
                                    </b-form>
                                </b-col>

                            </b-row>

                        </b-container>
                    </b-row>
                    <b-row class="my-3">
                        <b-col md="12" lg="12" xl="12" class="table-container py-2">
                            <!-- left container-->
                            <b-col class="d-flex justify-content-center table-container">
                                <b-container class="container-card rounded p-3">
                                    <h5 class="px-3 mb-3">User List</h5>
                                    <b-table id="user-table" hover :items="registerList" :fields="fields"
                                        :per-page="perPage" :current-page="currentPage">
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
                                    <b-row fluid class="mt-4 d-flex justify-content-end">
                                        <b-pagination pills v-model="currentPage" :total-rows="rows" :per-page="perPage"
                                            aria-controls="user-table"></b-pagination>
                                    </b-row>
                                </b-container>

                            </b-col>
                        </b-col>
                    </b-row>
                    <b-row class="d-flex justify-content-end">
                        <b-alert class="alert" v-model="alert.showAlert" @dismissed="alert.showAlert = null"
                            :variant="alert.variant">
                            <div>
                                <b-icon class="mr-2"
                                    :icon="alert.variant == 'success' ? 'check-lg' : 'exclamation-triangle-fill' "
                                    fill="black">
                                </b-icon>
                                {{ alert.message }}
                            </div>
                        </b-alert>
                    </b-row>
                </b-container>

            </b-col>
        </b-row>
        <!--UPDATE MODAL-->
        <b-modal id="modal-form" title="Edit User" @ok="editItem">
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
                <div class="modal-form__form-group mb-3">
                    <b-form-group label="Email Address" class="ml-2">
                    </b-form-group>
                    <b-form-input id="email" placeholder="Enter Email Address" type="email" v-model="item.email"
                        autocomplete="off" required>
                    </b-form-input>
                </div>
                <div class="modal-form__form-group mb-3">
                    <b-form-group label="Password" class="ml-2">
                    </b-form-group>
                    <b-form-input id="password" placeholder="Enter Password" type="password" v-model="item.password"
                        required>
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
    name: "UserPage",
    components: {
        SideBar,
        HeaderComponent,
    },
    computed: {
        ...mapState(['registerState']),
        ...mapGetters({
            registerList: "fetchRegister"
        }),
        rows() {
            return this.registerList.length
        }
    },
    beforeCreate() {
        this.$store.dispatch("fetchRegister")
    },
    data() {
        return {
            perPage: 3,
            currentPage: 1,
            value: '',
            props: ["value"],
            model: {
                prop: "value",
                event: "update",
            },
            modalShow: false,
            register: {
                user_id: null,
                email: null,
                password: null,
                firstname: null,
                lastname: null
            },
            state: {
                email: null,
                password: null,
                firstname: null,
                lastname: null
            },
            item: {
                user_id: null,
                email: null,
                password: null,
                firstname: null,
                lastname: null
            },
            alert: {
                dismissSecs: 0,
                showAlert: 0,
                variant: "",
                message: ""
            },
            fields: [
                { key: "user_id", label: "ID", sortable: true },
                { key: "firstname", label: "First Name", sortable: true },
                { key: "lastname", label: "Last Name", sortable: true },
                { key: "email", label: "Email", sortable: true },
                { key: "actions", label: "Actions" },
            ],
        }
    },
    methods: {
        showUpdateModal(item) {
            this.item = {
                firstname: item.firstname,
                lastname: item.lastname,
                email: item.email,
                password: item.password
            };
            this.$bvModal.show("modal-form")
        },
        
        showDeleteModal(item) {
            this.item = {
                firstname: item.firstname,
                lastname: item.lastname,
                email: item.email,
                password: item.password
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

        addRegister() {
            this.$store.dispatch("addRegister", this.register);
        },

        async saveRegister() {
            console.log(this.register)
            if (!this.validation()) {
                this.showAlert("Warning: Please fill out the fields", "warning");

            } else {
                await this.$store.dispatch("addRegister", this.register);
                await this.$store.dispatch("fetchRegister");
                this.showAlert("Successfully Created", "success");
                console.log("registerList", this.registerList);
                this.clear();
            }
        },

        async deleteItem() {
            try {
                await this.$store.dispatch("deleteRegister", this.item.user_id);
                console.log(this.item.user_id)
                this.$bvModal.hide("delete-modal")
                location.reload()
            } catch (error) {
                console.log(error);
            }
        },

        async editItem() {
            try {
                console.log();
                await this.$store.dispatch("editRegister", this.item);
                this.$bvModal.hide("modal-form");
                location.reload();
            } catch (error) {
                console.log(error);
            }
        },

        clear() {
            this.register = {
                email: null,
                password: null,
                firstname: null,
                lastname: null
            }
        },

        validation() {
            if (this.register.firstname == null || this.register.firstname.length < 1) {
                this.state.firstname = false;
            } else {
                this.state.firstname = true;

            } if (this.register.lastname == null || this.register.lastname.length < 1) {
                this.state.lastname = false;
            } else {
                this.state.lastname = true;

            } if (this.regiser.email == null || this.regiser.email.length < 1) {
                this.state.email = false;
            } else {
                this.state.email = true;

            } if (this.register.password == null || this.register.length < 8) {
                this.state.password = false;
            } else {
                this.state.password = true;

            } if (this.register.firstname != null && this.register.lastname != null &&
                this.register.email != null && this.register.password != null) {
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