<template>
    <b-container class="vh-100 vw-100 bg-danger">
        <h1>hello</h1>        <b-button v-b-modal.modal-center>Vue Bootstrap Modal Example</b-button>

        <b-modal id="modal-center" centered title="Vue Bootstrap Centered Modal Example">
            <p class="my-4">Knowing yourself is the beginning of all wisdom.</p>
        </b-modal>
    </b-container>
</template>

<script>
export default {
    name: "ModalComp",
    data() {
        return {}
    }
}
</script>