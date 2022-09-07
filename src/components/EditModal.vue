<template>
    <div>
        <b-button v-b-modal.modal-form>
            <b-icon class="delete-btn" icon="pencil-square"></b-icon>
        </b-button>

        <b-modal id="modal-form" :title="title">
            <div>
                <FormInput label="First Name" />
                <FormInput label="Last Name" />
                <FormInput label="Phone Number" />
            </div>
        </b-modal>
    </div>
</template>

<script>
import FormInput from "./FormInput.vue"

export default {
    name: "EditModal",
    components: {
        FormInput
    }, 
    props: {
        title: {
            type: String
        }
    }

}
</script>