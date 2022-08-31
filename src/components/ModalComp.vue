<template>
    <div>
        <b-button v-b-modal.modal-1>Launch demo modal</b-button>

        <b-modal id="modal-1" title="BootstrapVue">
            <p class="my-4">Are you sure you want to proceed?</p>
        </b-modal>
    </div>
</template>

<script>
export default {
    name: "ModalComp",
    data() {
        return {}
    }
}
</script>

<style scoped>
.mymodal > div {
    position: absolute !important;
    top: 300px !important;
    right: 100px;
    background-color: yellow;
}

p {
    color: black !important;
}

title {
    color: black !important;
}
</style>