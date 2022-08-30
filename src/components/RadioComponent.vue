<template>
    <div class="mb-3">
        <b-form-group label="For Sale?" class="ml-2" v-slot="{ ariaDescribedby }">
            <b-row class="d-flex">
                <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="A">Yes
                </b-form-radio>
                <b-form-radio class="ml-3" v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios"
                    value="B">No
                </b-form-radio>
            </b-row>

        </b-form-group>
    </div>
</template>

<script>
export default {
    name: "RadioComponent",
    data() {
        return {
            selected: ''
        }
    }
}
</script>