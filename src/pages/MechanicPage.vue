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
                      <div class="form-group mb-3">
                        <b-form-group label="First Name" class="ml-2" :state="mechanic.firstname"
                          invalid-feedback="first name is required">
                        </b-form-group>
                        <b-form-input id="firstname" type="text" placeholder="Enter First Name" v-model="mechanic.firstname"
                          required>
                        </b-form-input>
                      </div>
                      <div class="form-group mb-3">
                        <b-form-group label="Last Name" class="ml-2" :state="mechanic.lastname"
                          invalid-feedback="last name is required">
                        </b-form-group>
                        <b-form-input id="lastname" type="text" placeholder="Enter Last Name" v-model="mechanic.lastname" required>
                        </b-form-input>
                      </div>
                      <div class="form-group mb-3">
                        <b-form-group label="Phone Number" class="ml-2" :state="mechanic.contact"
                          invalid-feedback="contact number is required">
                        </b-form-group>
                        <b-form-input id="contact" type="number" placeholder="Enter Phone Number" v-model="mechanic.contact" required>
                        </b-form-input>
                      </div>
                      <b-container class="button-container d-flex justify-content-end">
                        <b-button class="mr-2" type="reset">Reset</b-button>
                        <b-button variant="success" type="submit" class="btn btn-success send" @click="saveMechanic">
                          Submit</b-button>
                      </b-container>
                    </b-form>
                  </b-col>
                </b-container>

                <!-- alert container -->
                <div class="alert-container mt-3">
                  <b-alert dismissible class="alert" v-model="alert.showAlert" @dismissed="alert.showAlert = null"
                    :variant="alert.variant">
                    <div class="alertborder">
                      <b-icon class="mr-2" :icon="alert.variant == 'success' ? 'check-lg' : 'exclamation-triangle-fill' " fill="black"></b-icon>
                      {{ alert.message }}
                    </div>
                  </b-alert>
                </div>
              </b-col>
            </b-col>
            <b-col md="12" lg="12" xl="8" class="py-2">
              <b-col class="table-container">
                <b-container class="container-card rounded p-3">
                  <h5 class="px-3 mb-3">Mechanic Records</h5>
                  <div class="">
                    <table id="mechanic-table" class="table table-hover" :items="mechanicState" style="width: 100%">
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
                        <tr v-for="mechanic in mechanicState" :key="mechanic.mechanic_id">
                          <td>{{mechanic.mechanic_id}}</td>
                          <td>{{ mechanic.firstname }}</td>
                          <td>{{ mechanic.lastname }}</td>
                          <td>{{ mechanic.contact }}</td>
                          <td class="d-flex justify-content-center">
                            <!-- Edit Modal -->
                            <div>
                              <b-button v-b-modal.modal-form>
                                <b-icon class="delete-btn" icon="pencil-square">
                                </b-icon>
                              </b-button>

                              <b-modal id="modal-form" title="Edit Mechanic">
                                <div>
                                  <div class="modal-form__form-group mb-3">
                                    <b-form-group label="First Name" class="ml-2">
                                    </b-form-group>
                                    <b-form-input id="firstname" placeholder="Enter First Name"
                                      v-model="mechanic.firstname" autocomplete="off" required>
                                      {{ mechanic.firstname }}
                                    </b-form-input>
                                  </div>
                                  <div class="modal-form__form-group mb-3">
                                    <b-form-group label="Last Name" class="ml-2">
                                    </b-form-group>
                                    <b-form-input id="lastname" placeholder="Enter Last Name"
                                      v-model="mechanic.lastname" required>
                                      {{ mechanic.lastname }}
                                    </b-form-input>
                                  </div>
                                  <div class="form-group mb-3">
                                    <b-form-group label="Phone Number" class="ml-2">
                                    </b-form-group>
                                    <b-form-input id="contact" placeholder="Enter Phone Number"
                                      v-model="mechanic.contact" required>
                                      {{ mechanic.contact }}
                                    </b-form-input>
                                  </div>
                                </div>
                              </b-modal>
                            </div>

                            <!-- Delete Modal -->
                            <div>
                              <b-button v-b-modal.delete-modal>
                                <b-icon class="delete-btn" icon="trash-fill"></b-icon>
                              </b-button>

                              <b-modal id="delete-modal" title="Delete Confirmation"
                                @ok="deleteItem(mechanic.mechanic_id)">
                                <b-row class="d-flex justify-content-center">
                                  <img src="../assets/img/delete.svg" alt="" style="height:200px; width:200px">

                                </b-row>
                                <p class="my-4">Are you sure you want to proceed?</p>

                              </b-modal>
                            </div>
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
import SideBar from "../layouts/SideBar.vue"
import HeaderComponent from "../layouts/HeaderComponent.vue"
import { mapState, mapGetters } from 'vuex'

export default {
  name: "MechanicPage",
  components: {
    SideBar,
    HeaderComponent,
  },
  // validations() {
  //   return {
  //     mechanic: {
  //       firstname: { required },
  //       lastname: { required },
  //       contact: { required }
  //     }
  //   }
  // },
  emits: ['delete-mechanic'],
  computed: {
    // rows() {
    //   return this.mechanicState.length;
    // },
    ...mapState(['mechanicState']),
    ...mapGetters({
      mechanicList: "fetchMechanic"
    }),

  },

  //
  beforeCreate() {
    this.$store.dispatch("fetchMechanic")
  },

  data() {
    return {
      // perPage: 5,
      // currentPage: 1,
      // currentPagePending: 1,
      // item: [],
      // show: true,
      mechanic: {
        firstname: "",
        lastname: "",
        contact: "",
      },
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
      }
    }
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
    addMechanic() {
      this.$store.dispatch("addMechanic", this.mechanic);
    },

    async saveMechanic() {
      console.log(this.mechanic)
      if (!this.validation()) {
        this.showAlert("Warning: Please fill out the fields", "warning");

      } else {
        this.$store.dispatch("addMechanic", this.mechanic);
        this.showAlert("Successfully Created", "success");
      }


    },

    async deleteItem(mechanic_id) {
      try {
        console.log(mechanic_id);
        await this.$store.dispatch("deleteMechanic", mechanic_id);
        location.reload()
      } catch (error) {
        console.log(error);
      }
    },
    validation() {
      if (this.mechanic.firstname == null || this.mechanic.firstname.length < 1) {
        this.state.firstname = false;
      } else {
        this.state.firstname = true;
      }
      if (this.mechanic.lastname == null || this.mechanic.lastname.length < 1) {
        this.state.lastname = false;
      } else {
        this.state.lastname = true;
      }
      if (this.mechanic.contact == null || this.mechanic.contact.length < 1) {
        this.state.contact = false;
      } else {
        this.state.contact = true;
      }

      if (this.mechanic.firstname != null && this.mechanic.lastname != null && this.mechanic.contact) {
        return true;
      } else {
        return false;

      }

    }
    // deleteEvent(mechanic_id) {
    //   this.mechanics.splice(mechanic_id, 1);
    // },

    // validation() {
    //   if (this.mechanic.firstname == null) {
    //     document.getElementById("firstname").style.borderColor = "red";
    //     this.state.name = false;
    //   } else {
    //     document.getElementById("firstname").style.borderColor = "";
    //     this.state.name = true;
    //   }
    // }
  },
  // validations: {
  //   mechanic: {
  //     firstname: { required },
  //     lastname: { required },
  //     contact: { required }
  //   }
  // }

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