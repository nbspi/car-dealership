<template>
    <b-container fluid>
        <SpinnerLoad />
        <b-row>
            <SideBar />
            <b-col xl="10" lg="9" sm="9">
                <HeaderComponent title="Catalogue" />
                <b-container fluid>
                    <b-col class="my-2">
                        <b-col>
                            <b-form-input placeholder="Search" v-model="keyword"></b-form-input>
                        </b-col>
                        <b-row cols="12" class="d-flex" :keyword="keyword">

                            <b-col lg="3" class="car-container" v-for="car in listCars" :key="car.car_id">
                                <div class="container-card flex-column center-flex">
                                    <div class="img-container center-flex">
                                        <img class="car-container__img"  :src="`${API_URL}/${car.image_file}`" alt="">                              
                                    </div>
                                    <h5 class="car_container__title mt-4">{{car.model}}</h5>
                                    <div class="mt-2 flex-column center-flex">
                                        <p class="car-container__description">{{car.brand}}</p>
                                        <p class="car-container__description">{{car.year}}</p>
                                        <p class="car-container__description">{{car.price | pesoFormat}}</p>
                                    </div>
                                </div>
                            </b-col>

                        </b-row>
                    </b-col>
                </b-container>
            </b-col>
        </b-row>
    </b-container>
</template>>

<script>
import SideBar from "../layouts/SideBar.vue"
import HeaderComponent from "../layouts/HeaderComponent.vue"
import SpinnerLoad from "@/components/SpinnerLoad.vue";
import { API_URL } from "../config/dev.env";
import { mapGetters } from 'vuex'

export default {
    name: 'CataloguePage',
    components: {
        SideBar,
        HeaderComponent,
        SpinnerLoad
    },
    computed: {
        ...mapGetters({ listCars: "fetchCars" }),
        items() {
            return this.keyword
                ? this.listCars.filter(car => car.serial_number.toLowerCase().includes(this.keyword.toLowerCase()) ||
                    car.brand.toLowerCase().includes(this.keyword.toLowerCase()) || car.model.toLowerCase().includes(this.keyword.toLowerCase())
                    || car.color.toLowerCase().includes(this.keyword.toLowerCase()) || car.year.includes(this.keyword)
                )
                : this.listCars
        }
    },
    beforeCreate() {
        this.$store.dispatch("fetchCars")
    },
    data() {
        return {
            API_URL,
            car: {
                car_id: null,
                serial_number: null,
                brand: null,
                model: null,
                price: null,
                year: null,
                color: null,
                brand_new: null,
            }
        }
    },

    filters: {
        pesoFormat: function (num) {
            var formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'Php'
            });
            return formatter.format(num);
        },
    },


}
</script>

<style scoped>
img {
    display: block;
    width: 60%;
}

@media (max-width: 991px) {
    img {
        width: 45%;
    }

    .car-container:not(:first-child) {
        margin-top: 30px !important;
    }

    .car-container:last-child {
        margin-bottom: 30px !important;
    }

    .container-card:hover img {
        transform: scale(1.2) !important;
    }

}

.container-card {
    padding: 25px 10px 10px 10px !important;
    min-height: 280px !important;
    position: relative;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.container-card::after {
    content: "";
    border-radius: 5px;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.1);
    opacity: 0;
    -webkit-transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
    cursor: pointer !important;

}

.center-flex {
    display: flex;
    align-items: center;
    justify-content: center;
}

.container-card:hover {
    background: rgb(104, 118, 172);
    background: linear-gradient(95deg,
            rgba(104, 118, 172, 1) 0%,
            rgba(130, 155, 184, 1) 100%);
    -webkit-transform: scale(1.05, 1.05);
    transform: scale(1.05, 1.05);
    color: #fff;
}

.box:hover::after {
    opacity: 1;
}

.container-card:hover img {
    transform: scale(1.25);
}

.car-container {
    margin-top: 15px !important;
}

.car_container__title {
    font-weight: 600 !important;
}

.img-container {
    width: 100%;
    height: 100%;
}
</style>