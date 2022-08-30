<template>
    <div class="mb-3">
        <b-form-group :label="label" id="label" class="ml-2">
        </b-form-group>
        <b-form-input :placeholder="placeholder" v-model="invoice"></b-form-input>
        <!-- <div class="mt-2">Value: {{ text }}</div> -->
    </div>
</template>

<script>
export default {
    name: "FormInput",
    props: {
        label: {
            type: String
        },
        placeholder: {
            type: String
        }
    }
}
</script>

<style scoped>

input:focus {
    border: solid 1px var(--primary-color);
}
</style>