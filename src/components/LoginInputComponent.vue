<template>
    <div class="mb-3">
        <div class="d-flex ">
            <label for="email" class="form-label ml-2 ">{{ label }}</label>
        </div>
        <input :type="type" :placeholder="placeholder" class="form-control form-control-lg" 
            aria-label=".form-control-lg example">
    </div>

</template>

<script>
export default {
    name: "LoginInputComponent",
    props: {
        label: {
            type: String
        },
        type: {
            type: String
        },
        placeholder: {
            type: String
        }
    }
}
</script>

<style scoped>
.form-control,
.form-control:focus {
    background-color: #829BB8;
    color: white;
    border-radius: 7px;
    font-size: 18px;
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
</style>