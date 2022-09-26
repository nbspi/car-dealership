<template>
    <b-container fluid id="hero">
        <b-row>
            <SideBar />
            <b-col xl="10" lg="9" sm="9">
                <HeaderComponent title="Add Car" />
                <b-container fluid class="pt-2">
                    <b-row class="my-2 d-flex px-3">
                        <router-link pill="true" to="/cars" class=" btn btn-success" exact>
                            <b-icon icon="arrow-left-circle" aria-hidden="true"></b-icon>
                        </router-link>
                    </b-row>
                    <b-row class="d-flex justify-content-center my-3">
                        <!-- whole container-->
                        <b-col xl="6" class="py-2">
                            <!-- left container-->
                            <b-col class="">
                                <b-container class="container-card rounded p-3">
                                    <h4 class="px-3">Add Car</h4>
                                    <b-row>
                                        <b-col cols="6" class="mt-3">
                                            <!-- @serial_number -->
                                            <div class="mb-3">
                                                <b-form-group label="Serial Number" id="label" class="ml-2"
                                                    :state="car.serial_number">
                                                </b-form-group>
                                                <b-form-input placeholder="Enter Serial Number"
                                                    v-model="car.serial_number"></b-form-input>
                                            </div>

                                            <!-- @model -->
                                            <div class="mb-3">
                                                <b-form-group label="Model" id="label" class="ml-2" :state="car.model">
                                                </b-form-group>
                                                <b-form-input placeholder="Enter Model" v-model="car.model">
                                                </b-form-input>
                                            </div>

                                            <!-- @year -->
                                            <div class="mb-3">
                                                <b-form-group label="Year" id="label" class="ml-2" :state="car.year">
                                                </b-form-group>
                                                <b-form-input placeholder="Enter Year" v-model="car.year">
                                                </b-form-input>
                                            </div>
                                        </b-col>

                                        <b-col cols="6" class="mt-3">
                                            <!-- @price -->
                                            <div class="mb-3">
                                                <b-form-group label="Price" id="label" class="ml-2" :state="car.price">
                                                </b-form-group>
                                                <b-form-input placeholder="Enter Price" v-model="car.price">
                                                </b-form-input>
                                            </div>

                                            <!-- @brand -->
                                            <div class="mb-3">
                                                <b-form-group label="Brand" id="label" class="ml-2" :state="car.brand">
                                                </b-form-group>
                                                <b-form-input placeholder="Enter Brand" v-model="car.brand">
                                                </b-form-input>
                                            </div>

                                            <!-- @color -->
                                            <div class="mb-3">
                                                <b-form-group label="Color" id="label" class="ml-2" :state="car.color">
                                                </b-form-group>
                                                <b-form-input placeholder="Enter Color" v-model="car.color">
                                                </b-form-input>
                                            </div>

                                            <!-- @car_for_sale -->
                                            <div class="mb-3">
                                                <b-form-group label="For Sale?" class="ml-2" :state="car.car_for_sale"
                                                    v-slot="{ ariaDescribedby }">
                                                    <b-row class="d-flex">
                                                        <b-form-radio v-model="car.car_for_sale"
                                                            :aria-describedby="ariaDescribedby" value="Yes">Yes
                                                        </b-form-radio>
                                                        <b-form-radio class="ml-3" v-model="car.car_for_sale"
                                                            :aria-describedby="ariaDescribedby" value="No">No
                                                        </b-form-radio>
                                                    </b-row>
                                                </b-form-group>
                                            </div>
                                            <b-container class="button-container d-flex justify-content-end">
                                                <b-button class="mr-2" type="reset">Reset</b-button>
                                                <b-button variant="success" type="submit" @click="addCar">Save
                                                </b-button>
                                            </b-container>
                                        </b-col>
                                    </b-row>
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
            // this.$store.dispatch("addCar", this.car)
            if (!this.validation()) {
                this.showAlert("Warning: Please fill out the fields", "warning");

            }
        },

        async saveCar() {
            console.log(this.car)
        },

        validation() {
            if (this.car.serial_number == null || this.car.serial_number < 1) {
                this.state.serial_number = false;
            } else {
                this.state.serial_number = true;
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

.btn {
    background-color: var(--primary-color) !important;
}

.btn:hover {
    background-color: var(--secondary-color) !important;
}
</style>
  