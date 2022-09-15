<template>
    <div>
        <b-button v-b-modal.modal-center>
            <b-icon class="delete-btn" icon="trash-fill"></b-icon>
        </b-button>

        <b-modal id="modal-center" title="Delete Confirmation" @ok="onDelete(mechanic_id)">
            <b-row class="d-flex justify-content-center">
                <img src="../assets/img/delete.svg" alt="" style="height:200px; width:200px">

            </b-row>
            <p class="my-4">Are you sure you want to proceed?</p>
        </b-modal>
    </div>
</template>

<script>
// import mechanic from '@/store/modules/mechanic';
import { mapState, mapGetters } from 'vuex'

export default {
    name: "DeleteModalComponent",
    computed: {
        ...mapState(['mechanicState']),
        ...mapGetters({
            mechanicList: "fetchMechanic"
        }),
    },
    data() {
        return {
            mechanic_id: this.index,
        }
    },
    methods: {
        // actionDelete(mechanic_id) {
        //     alert("Delete " + mechanic_id)

        // },   

        onDelete(mechanic_id) {
            this.$emit('delete-mechanic', mechanic_id)
        }
    },

}
</script>