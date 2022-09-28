<template>
    <b-container fluid id="hero">
        <b-row>
            <SideBar />
            <b-col xl="10" lg="9" sm="9">
                <HeaderComponent title="Add Ticket" />
                <b-container fluid class="pt-2">
                    <b-row class="my-2 d-flex px-3">
                        <router-link pill="true" to="/service-ticket" class="btn btn-success" id="return-btn" exact>
                            <b-icon icon="arrow-left-circle" aria-hidden="true"></b-icon>
                        </router-link>
                    </b-row>
                    <b-row class="d-flex justify-content-center my-2">
                        <!-- whole container-->
                        <b-col xl="6" class="py-2">
                            <!-- left container-->
                            <b-col class="">
                                <b-container class="container-card rounded p-3">
                                    <h4 class="px-3">Add Service Ticket</h4>
                                    <b-form>
                                        <div class="d-flex">
                                            <b-col cols="6" class="mt-3">
                                                <!-- @service ticket number -->
                                                <div class="mb-3">
                                                    <b-form-group label="Serial Number" id="label" class="ml-2"
                                                        :state="car.serial_number">
                                                    </b-form-group>
                                                    <b-form-input placeholder="Enter Serial Number"
                                                        v-model="car.serial_number"></b-form-input>
                                                </div>

                                                <!-- @date received -->
                                                <div class="mb-3">
                                                    <b-form-group label="Date Received" id="label" class="ml-2">
                                                    </b-form-group>
                                                    <b-form-datepicker id="example-datepicker" v-model="value"
                                                        class="mb-2">
                                                    </b-form-datepicker>
                                                </div>

                                                <!-- @date returned -->
                                                <div class="mb-3">
                                                    <b-form-group label="Mechanic Name" id="label" class="ml-2"
                                                        :state="car.year">
                                                    </b-form-group>
                                                    <b-form-input placeholder="Enter Year" v-model="car.year">
                                                    </b-form-input>
                                                </div>

                                                <!-- @brand -->
                                                <div class="mb-3">
                                                    <b-form-group label="Brand" id="label" class="ml-2"
                                                        :state="car.year">
                                                    </b-form-group>
                                                    <b-form-input placeholder="Enter Brand" v-model="car.year">
                                                    </b-form-input>
                                                </div>
                                            </b-col>

                                            <b-col cols="6" class="mt-3">
                                                <!-- @customer name -->
                                                <div class="mb-3">
                                                    <b-form-group label="Customer Name" id="label" class="ml-2"
                                                        :state="car.year">
                                                    </b-form-group>
                                                    <b-form-input placeholder="Enter Year" v-model="car.year">
                                                    </b-form-input>
                                                </div>

                                                <!-- @brand -->
                                                <div class="mb-3">
                                                    <b-form-group label="Date Returned" id="label" class="ml-2">
                                                    </b-form-group>
                                                    <b-form-datepicker id="example-datepicker" v-model="value"
                                                        class="mb-2">
                                                    </b-form-datepicker>
                                                </div>

                                                <!-- @Serial Number -->
                                                <div class="mb-3">
                                                    <b-form-group label="Car Serial Number" id="label" class="ml-2"
                                                        :state="car.color">
                                                    </b-form-group>
                                                    <b-form-input placeholder="Enter Car Serial Number"
                                                        v-model="car.color">
                                                    </b-form-input>
                                                </div>

                                                <!-- @model -->
                                                <div class="mb-3">
                                                    <b-form-group label="Model" id="label" class="ml-2"
                                                        :state="car.color">
                                                    </b-form-group>
                                                    <b-form-input placeholder="Enter Model" v-model="car.color">
                                                    </b-form-input>
                                                </div>

                                            </b-col>
                                        </div>
                                        <div class="px-3 mb-3">
                                            <b-form-group label="Comment" id="label" class="ml-2" :state="car.color">
                                            </b-form-group>
                                            <b-form-textarea id="textarea" v-model="text"
                                                placeholder="Enter something..." rows="2" max-rows="6">
                                            </b-form-textarea>
                                        </div>

                                        <b-container class="button-container d-flex justify-content-end">
                                            <div class="mr-3">
                                                <b-button class="mr-2" type="reset">Reset</b-button>
                                                <b-button variant="success" type="submit" class="btn btn-success send"
                                                    @click="saveService">
                                                    Submit</b-button>
                                            </div>

                                        </b-container>
                                    </b-form>



                                </b-container>



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
                    </b-row>
                </b-container>
            </b-col>
        </b-row>
    </b-container>
</template>
  
<script>
import SideBar from "../layouts/SideBar.vue";
import HeaderComponent from "../layouts/HeaderComponent.vue";

export default {
    name: "AddCar",
    components: {
        SideBar,
        HeaderComponent,
    },
    data() {
        return {
            car: {
                car_id: null,
                serial_number: null,
                brand: null,
                model: null,
                price: null,
                year: null,
                color: null,
                car_for_sale: null,
            },
            item: {
                car_id: null,
                serial_number: null,
                brand: null,
                model: null,
                price: null,
                year: null,
                color: null,
                car_for_sale: null,
            },
            state: {
                car_id: null,
                serial_number: null,
                brand: null,
                model: null,
                price: null,
                year: null,
                color: null,
                car_for_sale: null,
            },
            alert: {
                dismissSecs: 0,
                showAlert: 0,
                variant: "",
                message: ""
            },
        };
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
        addCar() {
            this.$store.dispatch("addCar", this.car)
        },

        async saveCar() {
            console.log(this.car)
            if (!this.validation()) {
                this.showAlert("Warning: Please fill out the fields", "warning");

            } else {
                this.$store.dispatch("addCar", this.car);
                this.showAlert("Successfully Created", "success");
            }
        },

        validation() {
            if (this.car.serial_number == null || this.car.serial_number < 1) {
                this.state.serial_number = false;
            } else {
                this.state.serial_number = true;

            } if (this.car.brand == null || this.car.brand < 1) {
                this.state.brand = false;
            } else {
                this.state.brand = true;

            } if (this.car.model == null || this.car.model < 1) {
                this.state.model = false;
            } else {
                this.state.model = true;

            } if (this.car.color == true || this.car.model < 1) {
                this.state.color = false;
            } else {
                this.state.color = true;

            } if (this.car.year == null || this.car.color < 1) {
                this.state.year = false;
            } else {
                this.state.year = true;

            } if (this.car.price == null || this.car.price < 1) {
                this.state.price = false;
            } else {
                this.state.year = true;

            } if (this.car.car_for_sale == null) {
                this.state.car_for_sale = false;
            } else {
                this.state.year = true;
            }

            if (this.car.serial_number != null && this.car.brand != null && this.car.model != null &&
                this.car.color != null && this.car.year != null && this.car.price != null && this.car.car_for_sale != null) {
                return true;
            } else {
                return false;
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

#return-btn {
    background-color: var(--primary-color) !important;
}

#return-btn:hover {
    background-color: var(--secondary-color) !important;
}
</style>
  