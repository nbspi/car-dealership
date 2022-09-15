<template>
    <div class="input-container mt-3">
        <b-form>
            <div class="mb-3">
                <div class="d-flex ">
                    <label for="email" class="form-label ml-2 ">Email Address</label>
                </div>
                <input type="text" v-model="email" placeholder="email@example.com" class="form-control form-control-lg"
                    autocomplete="off">
            </div>

            <div class="mb-3">
                <div class="d-flex ">
                    <label for="email" class="form-label ml-2 ">Password</label>
                </div>
                <input type="password" v-model="password" placeholder="At least 6 characters"
                    class="form-control form-control-lg" autocomplete="off">
            </div>
            <br>
            <div class="button-container d-flex justify-content-center">
                <button type="button" @click="handleLogin" class="col-6 btn btn-block">
                    LOG IN
                </button>
            </div>
            <!-- <b-alert class="alert" :show="alert.showAlert" dismissible :variant="alert.variant"
                @dismissed="alert.showAlert = null">
                <font-awesome-icon :icon="alert.variant == 'success' ? 'check-circle' : 'exclamation'"
                    class="mr-1 alert__icon" />
                {{ alert.message }}
            </b-alert> -->
        </b-form>
    </div>


</template>

<script>
export default {
    name: "LoginInputComponent",
    data() {
        return {
            email: "",
            password: "",
            alert: {
                showAlert: 0,
                dismissSecs: 0,
                variant: "sucess",
                message: ""
            }
        }
    },
    methods: {
        showAlert(message, variant) {
            this.alert = {
                showAlert: 3,
                dismissSecs: 2,
                variant,
                message
            }
        },
        async handleLogin() {
            const user = { email: this.email, password: this.password };
            this.$store.dispatch("login", user).then(
                () => {
                    if (user.email && user.password) {
                        console.log(user.email, user.password);
                        //TODO: REDIRECT TO CUSTOMERS PAGE WHEN LOGIN
                        // this.$router.push("/dashboard");
                    }
                },
                (error) => {
                    console.log(error);
                    // this.showAlert("Error", "red")
                }
            );
        },
    }
}
</script>

<style scoped>
.form-control,
.form-control:focus {
    background-color: #829BB8;
    color: white;
    border-radius: 7px;
    font-size: 17px;
    outline: none !important;
    width: 350px;
}

.form-control::placeholder {
    color: rgb(238, 238, 238, 0.6);
}

.form-label {
    font-size: 18px;
    font-weight: 600;
    align-items: center;
}

.btn {
    background-color: var(--secondary-color);
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    border-radius: 10px;
    padding: 8px;
}

.btn:hover {
    background-color: var(--primary-color);
    color: #fff;
}
</style>