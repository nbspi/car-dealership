<template>
    <b-container fluid id="hero">
        <b-row>
            <SideBar />
            <b-col xl="10" lg="9" sm="9">
                <HeaderComponent title="Add Car" />
                <b-container fluid class="pt-2">
                    <b-row class="my-2 d-flex px-3">
                        <router-link pill="true" to="/cars" class=" btn btn-success" id="return-btn" exact>
                            <b-icon icon="arrow-left-circle" aria-hidden="true"></b-icon>
                        </router-link>``
                    </b-row>
                    <b-row class="d-flex justify-content-center my-3">
                        <!-- whole container-->
                        <b-col xl="6" class="py-2">
                            <!-- left container-->
                            <b-col>
                                <b-container class="container-card rounded p-3">
                                    <h4 class="px-3">Add Car</h4>
                                    <b-form @submit.prevent>
                                        <b-row>
                                            <b-col xl="6" class="center-flex">
                                                <!-- @image preview  -->
                                                <div class="preview-container center-flex">
                                                    <b-img class="car-upload" v-if="imagePreview" :src="imagePreview"
                                                        fluid alt="Car">
                                                    </b-img>
                                                </div>
                                            </b-col>
                                            <b-col xl="6" class="center-flex">
                                                <!-- @image -->
                                                <div class="mb-3">
                                                    <b-form-group label="Image Upload" id="label" class="ml-2"
                                                        :state="car.image_file" description="Upload PNG or JPG files only">
                                                        <b-form-file type="file" @change="onChange"
                                                            v-model="car.image_file">
                                                        </b-form-file>
                                                    </b-form-group>

                                                </div>
                                            </b-col>
                                        </b-row>
                                        <div class="d-flex">
                                            <b-col cols="6" class="left-form">
                                                <!-- @serial_number -->
                                                <div class="mb-3">
                                                    <b-form-group label="Serial Number" id="label" class="ml-2"
                                                        :state="car.serial_number">
                                                    </b-form-group>
                                                    <b-form-input placeholder="Enter Serial Number"
                                                        v-model="car.serial_number"></b-form-input>
                                                </div>

                                                <!-- @brand -->
                                                <div class="mb-3">
                                                    <b-form-group label="Brand" id="label" class="ml-2"
                                                        :state="car.brand">
                                                    </b-form-group>
                                                    <b-form-input placeholder="Enter Brand" v-model="car.brand">
                                                    </b-form-input>
                                                </div>

                                                <!-- @model -->
                                                <div class="mb-3">
                                                    <b-form-group label="Model" id="label" class="ml-2"
                                                        :state="car.model">
                                                    </b-form-group>
                                                    <b-form-input placeholder="Enter Model" v-model="car.model">
                                                    </b-form-input>
                                                </div>
                                            </b-col>

                                            <b-col cols="6" class="right-form">
                                                <!-- @year -->
                                                <div class="mb-3">
                                                    <b-form-group label="Year" id="label" class="ml-2"
                                                        :state="car.year">
                                                    </b-form-group>
                                                    <b-form-input placeholder="Enter Year" v-model="car.year">
                                                    </b-form-input>
                                                </div>
                                                <!-- @price -->
                                                <div class="mb-3">
                                                    <b-form-group label="Price" id="label" class="ml-2"
                                                        :state="car.price">
                                                    </b-form-group>
                                                    <b-form-input placeholder="Enter Price" v-model="car.price">
                                                    </b-form-input>
                                                </div>


                                                <!-- @color -->
                                                <div class="mb-3">
                                                    <b-form-group label="Color" id="label" class="ml-2"
                                                        :state="car.color">
                                                    </b-form-group>
                                                    <b-form-input placeholder="Enter Color" v-model="car.color">
                                                    </b-form-input>
                                                </div>

                                                <!-- @car_for_sale -->
                                                <div class="mb-3">
                                                    <b-form-group label="Brand New?" class="ml-2" :state="car.brand_new"
                                                        v-slot="{ ariaDescribedby }">
                                                        <b-row class="d-flex radio">
                                                            <b-form-radio v-model="car.brand_new"
                                                                :aria-describedby="ariaDescribedby" value="true">Yes
                                                            </b-form-radio>
                                                            <b-form-radio class="ml-3" v-model="car.brand_new"
                                                                :aria-describedby="ariaDescribedby" value="false">No
                                                            </b-form-radio>
                                                        </b-row>
                                                    </b-form-group>
                                                </div>
                                                <b-container class="button-container d-flex justify-content-end">
                                                    <b-button class="mr-2" type="reset">Reset</b-button>
                                                    <b-button variant="success" type="submit"
                                                        class="btn btn-success send" @click="saveCar">
                                                        Submit</b-button>
                                                </b-container>
                                            </b-col>
                                        </div>


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
            imagePreview: null,
            car: {
                serial_number: null,
                brand: null,
                model: null,
                price: null,
                year: null,
                color: null,
                brand_new: null,
                image_file: null,
            },
            state: {
                car_id: null,
                serial_number: null,
                brand: null,
                model: null,
                price: null,
                year: null,
                color: null,
                brand_new: null,
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
        onChange(e) {
            const file = e.target.files[0];
            this.imagePreview = URL.createObjectURL(file);
        },

        async saveCar() {
            console.log(this.car)
            if (!this.validation()) {
                this.showAlert("Warning: Please fill out the fields", "warning");

            } else {

                let data = new FormData();
                data.append('serial_number', this.car.serial_number);
                data.append('brand', this.car.brand);
                data.append('model', this.car.model);
                data.append('color', this.car.color);
                data.append('year', this.car.year);
                data.append('brand_new', this.car.brand_new);
                data.append('image_file', this.car.image_file);

                this.$store.dispatch("addCar", this.car);
                this.showAlert("Successfully Created", "success");
            }
        },

        validation() {
            if (this.car.serial_number == null || this.car.serial_number.length < 1) {
                this.state.serial_number = false;
            } else {
                this.state.serial_number = true;

            } if (this.car.brand == null || this.car.brand.length < 1) {
                this.state.brand = false;
            } else {
                this.state.brand = true;

            } if (this.car.model == null || this.car.model.length < 1) {
                this.state.model = false;
            } else {
                this.state.model = true;

            } if (this.car.color == true || this.car.color.length < 1) {
                this.state.color = false;
            } else {
                this.state.color = true;

            } if (this.car.year == null || this.car.year.length < 1) {
                this.state.year = false;
            } else {
                this.state.year = true;

            } if (this.car.price == null || this.car.price.length < 1) {
                this.state.price = false;
            } else {
                this.state.year = true;

            } if (this.car.brand_new == null) {
                this.state.brand_new = false;
            } else {
                this.state.brand_new = true;
            }

            if (this.car.serial_number != null && this.car.brand != null && this.car.model != null &&
                this.car.color != null && this.car.year != null && this.car.price != null && this.car.brand_new != null) {
                return true;
            } else {
                return false;
            }
        }
    },
};
</script>
  
<style scoped>
div.py-2 {
    padding: 0 !important;
}

#return-btn {
    background-color: var(--primary-color) !important;
}

#return-btn:hover {
    background-color: var(--secondary-color) !important;
}

.preview-container {
    height: 180px;
    width: 180px;
    border-radius: 50%;

}

.radio {
    padding-bottom: 5px;
}

.car-upload:hover {
    transform: scale(1.3);
}

@media (max-width: 991px) {
    .container-card {
        margin-top: 20px !important;
    }

    .left-form,
    .right-form {
        margin-top: 20px !important;
    }

}

/* @media (max-width: 575px) {
    .container-card {
        margin-top: 20px !important;
    }

} */
</style>
  