<template>
    <div class="mb-3">
        <b-form-group :label="label" id="label" class="ml-2">
        </b-form-group>
        <b-form-select v-model="selected" :options="options"></b-form-select>
    </div>
</template>

<script>
export default {
    name: "SelectComponent",
    props: {
        label: {
            type: String
        }
    },
    data() {
        return {
            selected: null,
            options: [
                { value: null, text: 'Please select an option', disabled: true },
                { value: 'a', text: 'Car 1' },
                { value: 'b', text: 'Car 2' }
            ]
        }
    }
}
</script>