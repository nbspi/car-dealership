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
                    <b-form @submit="onSubmit">
                      <!-- <FormInput label="First Name" ref="first_name" />
                                            <FormInput label="Last Name" />
                                            <FormInput label="Phone Number" />
                                            <b-container class="button-container d-flex justify-content-end">
                                                <b-button class="mr-2" type="reset">Reset</b-button>
                                                <b-button variant="success" type="submit">Save</b-button>
                                            </b-container> -->
                      <div class="form-group mb-3">
                        <b-form-group label="First Name" class="ml-2">
                        </b-form-group>
                        <b-form-input id="firstname" placeholder="Enter First Name" v-model="firstname" required="true">
                        </b-form-input>
                      </div>
                      <div class="form-group mb-3">
                        <b-form-group label="Last Name" class="ml-2">
                        </b-form-group>
                        <b-form-input id="lastname" placeholder="Enter Last Name" v-model="lastname" required>
                        </b-form-input>
                      </div>
                      <div class="form-group mb-3">
                        <b-form-group label="Phone Number" class="ml-2">
                        </b-form-group>
                        <b-form-input id="contact" placeholder="Enter Phone Number" v-model="contact" required>
                        </b-form-input>
                      </div>
                      <b-container class="button-container d-flex justify-content-end">
                        <b-button class="mr-2" type="reset">Reset</b-button>
                        <b-button variant="success" type="submit" class="btn btn-success send"
                          @click.prevent="addMechanic">
                          Save</b-button>
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
                  <!-- <b-table hover :items="fetchMechanic" :fields="fields">
                                        <template v-slot:cell(actions)>
                                            <span>
                                                <b-row class="d-flex justify-content-center">
                                                    <EditModal title="Edit Mechanic" />
                                                    <DeleteModalComponent />
                                                </b-row>
                                            </span>
                                        </template>
                                    </b-table> -->
                  <!-- <PaginationComponent /> -->
                  <div class="">
                    <table class="table table-hover" style="width: 100%">
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
                        <tr v-for="(mechanic, index) in mechanicState" :key="index">
                          <td>{{index++}}</td>
                          <td>{{ mechanic.firstname }}</td>
                          <td>{{ mechanic.lastname }}</td>
                          <td>{{ mechanic.contact }}</td>
                          <td class="d-flex justify-content-center">
                            <div>
                              <b-button v-b-modal.modal-form>
                                <b-icon class="delete-btn" icon="pencil-square">
                                </b-icon>
                              </b-button>

                              <b-modal id="modal-form" title="Edit Mechanic">
                                <div>
                                  <div class="form-group mb-3">
                                    <b-form-group label="First Name" class="ml-2">
                                    </b-form-group>
                                    <b-form-input id="firstname" placeholder="Enter First Name" v-model="firstname"
                                      autocomplete="off" required>
                                      {{ mechanic.firstname }}
                                    </b-form-input>
                                  </div>
                                  <div class="form-group mb-3">
                                    <b-form-group label="Last Name" class="ml-2">
                                    </b-form-group>
                                    <b-form-input id="lastname" placeholder="Enter Last Name" v-model="lastname"
                                      required>
                                      {{ mechanic.lastname }}
                                    </b-form-input>
                                  </div>
                                  <div class="form-group mb-3">
                                    <b-form-group label="Phone Number" class="ml-2">
                                    </b-form-group>
                                    <b-form-input id="contact" placeholder="Enter Phone Number" v-model="contact"
                                      required>
                                      {{ mechanic.contact }}
                                    </b-form-input>
                                  </div>
                                </div>
                              </b-modal>
                            </div>
                            <b-button v-b-modal.modal-center>
                              <b-icon @click="showModal(index)" class="delete-btn" icon="trash-fill"></b-icon>
                            </b-button>

                            <DeleteModalComponent />
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
import { mapState } from 'vuex'
import DeleteModalComponent from "@/components/DeleteModalComponent.vue"
// import EditModal from "@/components/EditModal.vue"
// import PaginationComponent from "@/components/PaginationComponent.vue"
// import DeleteModalComponent from "@/components/DeleteModalComponent.vue"
// import EditModal from "@/components/EditModal.vue"
// import FormInput from "../components/FormInput.vue"


export default {
  name: "MechanicPage",
  components: {
    SideBar,
    HeaderComponent,
    DeleteModalComponent,
    // EditModal
  },
  computed: {
    ...mapState(['mechanicState'])
  },
  data() {
    return {
      index: 0,
      firstname: "",
      lastname: "",
      contact: "",
      fields: [
        { key: "firstname", label: "First Name" },
      ],
      // value: '',
      // modalShow: false,
      // currentPage: 1,
      // fields: ['ID', 'first_name', 'last_name', 'phone_number', 'actions'],
      // items: [
      //     { ID: 40, first_name: 'Mark', last_name: 'Lee', phone_number: '4546766' }
      // ]
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
      // }
    }
  },
  methods: {

    showModal(id) {
      this.index = id
    },
    addMechanic() {
      this.$store.dispatch("addMechanic", {
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
  },
  // validations: {
  //   form: {
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

input:focus {
  border: solid 1px var(--primary-color);
}
</style>