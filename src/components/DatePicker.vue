<template>
    <div class="mb-3">
        <label for="datepicker" class="ml-2 mb-2">{{ label }}</label>
        <b-form-datepicker :disabled="disabled" id="datepicker" :date-format-options="{ year: 'numeric', month: 'long', day: '2-digit' }"
            v-model="value">
        </b-form-datepicker>
    </div>
</template>

<script>
export default {
    name: "DatePicker",
    props: {
        label: String,
        disabled: Boolean,
    },
    data() {
        return {
            state: 'disabled'
        }
    }
}
</script>

<style scoped>
</style>