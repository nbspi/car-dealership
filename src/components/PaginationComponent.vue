<template>
    <div class="overflow-auto">
        <div class="mt-5 d-flex justify-content-end">
            <b-pagination v-model="currentPage" pills :total-rows="rows"></b-pagination>
        </div>
    </div>
</template>

<script>
export default {
    name: "PaginationComponent",
    data() {
        return {
            rows: 50,
            currentpage: 1
        }
    }
}
</script>
