<template>
    <div id="product-list-one">
        <h2>Product List One</h2>
        <!-- <ul>
            <li v-for="product in products" v-bind:key="product">
                <span class="name">{{ product.name }}</span>
                <span class="price">{{ product.price }}</span>
            </li>
        </ul> -->
        <ul>
            <li v-for="item in items" v-bind:key="item">
                <span class="ID">{{ item.ID }}</span>
            </li>
            <li v-for="item in items" v-bind:key="item">
                <span class="first_name">{{ item.first_name }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "ProductListOne",
    computed: {
        // products() {
        //     return this.$store.state.products;
        // },
        items() {
            return this.$store.state.items;
        }
    }
}
</script>

<style scoped>
div {
    background-color: teal;
}

span {
    color: #fff;
}
</style>