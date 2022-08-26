<template>
    <div>
        <b-container fluid class="header-nav pt-3 justify-content-between d-xl-flex">
            <b-col sm="12" xl="2" class="d-flex align-items-center justify-content-sm-center justify-content-xl-start">
                <div class="d-flex align-items-center">
                    <h2>{{ title }}</h2>
                </div>
            </b-col>
            <b-col sm="12" xl="10" class="d-flex justify-content-sm-center justify-content-xl-end">
                <b-nav-form class="mr-3">
                    <b-form-input class="mr-sm-2" placeholder="Search"></b-form-input>
                    <b-button variant="outline-light" class="my-sm-0 btn d-flex " type="submit"><b-icon icon="search"></b-icon></b-button>
                </b-nav-form>
                <div>
                    <b-dropdown text="UserName" variant="secondary" class="user-dropdown m-2">
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="/">Sign Out</b-dropdown-item>
                    </b-dropdown>
                </div>
            </b-col>
        </b-container>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/dashboard">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">{{ title }}</li>
            </ol>
        </nav>
    </div>
</template>

<script>
export default {
    name: "HeaderComponent",
    props: {
        title: String
    }
}
</script>

<style scoped>
.btn {
    border: solid 1px #829BB8;
    color: #4a5376;
}

.btn:hover,
.btn:focus {
    background-color: #4a5376 !important;
    color: white !important;
    outline: none !important;
}

nav {
    padding: 0px 25px 10px 25px;
}

.breadcrumb {
    background-color: #F6F9FF;
}

.user-dropdown {
    outline: #829BB8 !important;
}
</style>