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
                    <b-form @submit.prevent>
                      <div class="form-group mb-3">
                        <b-form-group label="First Name" class="ml-2" :state="mechanic.firstname">
                        </b-form-group>
                        <b-form-input id="firstname" type="text" placeholder="Enter First Name"
                          v-model="mechanic.firstname" required>
                        </b-form-input>
                      </div>
                      <div class="form-group mb-3">
                        <b-form-group label="Last Name" class="ml-2" :state="mechanic.lastname">
                        </b-form-group>
                        <b-form-input id="lastname" type="text" placeholder="Enter Last Name"
                          v-model="mechanic.lastname" required>
                        </b-form-input>
                      </div>
                      <div class="form-group mb-3">
                        <b-form-group label="Phone Number" class="ml-2" :state="mechanic.contact">
                        </b-form-group>
                        <b-form-input id="contact" type="number" placeholder="Enter Phone Number"
                          v-model="mechanic.contact" required>
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
                      <b-icon class="mr-2"
                        :icon="alert.variant == 'success' ? 'check-lg' : 'exclamation-triangle-fill' " fill="black">
                      </b-icon>
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
                  <div class="table-responsive">
                    <b-table id="mechanic-table" hover :items="mechanicList" :fields="fields" :per-page="perPage"
                      :current-page="currentPage">
                      <template v-slot:cell(actions)="{ item }">
                        <div class="d-flex justify-content-center">
                          <div>
                            <b-button v-b-modal @click="showUpdateModal(item)">
                              <b-icon class="edit-btn" icon="pencil-square"></b-icon>
                            </b-button>
                          </div>
                          <div>
                            <b-button id="delete-container" v-b-modal @click="showDeleteModal(item)">
                              <b-icon class="delete-btn" icon="trash-fill"></b-icon>
                            </b-button>
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
    <!--update modal -->
    <b-modal id="modal-form" title="Edit Mechanic" @ok="editItem">
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
          <b-form-input id="lastname" placeholder="Enter Last Name" type="text" v-model="item.lastname" required>
          </b-form-input>
        </div>
        <div class="form-group mb-3">
          <b-form-group label="Phone Number" class="ml-2">
          </b-form-group>
          <b-form-input id="contact" placeholder="Enter Phone Number" type="number" v-model="item.contact" required>
          </b-form-input>
        </div>
      </div>
    </b-modal>

    <!-- delete-modal -->
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
  name: "MechanicPage",
  components: {
    SideBar,
    HeaderComponent,
  },
  computed: {
    ...mapState(['mechanicState']),
    ...mapGetters({
      mechanicList: "fetchMechanic"
    }),
    rows() {
      return this.mechanicList.length
    }

  },
  beforeCreate() {
    this.$store.dispatch("fetchMechanic")
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
      mechanic: {
        mechanic_id: null,
        firstname: null,
        lastname: null,
        contact: null
      },
      item: {
        mechanic_id: null,
        firstname: null,
        lastname: null,
        contact: null
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
      },
      fields: [
        // { key: "mechanic_id", label: "ID", sortable: true },
        { key: "firstname", label: "First Name", sortable: true },
        { key: "lastname", label: "Last Name", sortable: true },
        { key: "contact", label: "Contact", sortable: true },
        { key: "actions", label: "Actions" },
      ],
    }
  },
  methods: {
    showUpdateModal(item) {
      this.item = {
        mechanic_id: item.mechanic_id,
        firstname: item.firstname,
        lastname: item.lastname,
        contact: item.contact
      };
      this.$bvModal.show("modal-form")
    },

    showDeleteModal(item) {
      this.item = {
        mechanic_id: item.mechanic_id,
        firstname: item.firstname,
        lastname: item.lastname,
        contact: item.contact
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
    addMechanic() {
      this.$store.dispatch("addMechanic", this.mechanic);
    },

    async saveMechanic() {
      console.log(this.mechanic)
      if (!this.validation()) {
        this.showAlert("Warning: Please fill out the fields", "warning");

      } else {
        await this.$store.dispatch("addMechanic", this.mechanic);
        await this.$store.dispatch("fetchMechanic");
        this.showAlert("Successfully Created", "success");
        console.log("mechanicList", this.mechanicList);
      }
    },

    async deleteItem() {
      try {
        await this.$store.dispatch("deleteMechanic", this.item.mechanic_id);
        console.log(this.item.mechanic_id)
        this.$bvModal.hide("delete-modal")
        location.reload()
      } catch (error) {
        console.log(error);
      }
    },
    async editItem() {
      try {
        console.log();
        await this.$store.dispatch("editMechanic", this.item);
        this.$bvModal.hide("modal-form");
        location.reload();
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

      if (this.mechanic.firstname != null && this.mechanic.lastname != null && this.mechanic.contact != null) {
        return true;
      } else {
        return false;

      }
    }
  },

}
</script>

<style scoped>
div.py-2 {
  padding: 0 !important;
}
</style>