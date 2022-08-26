<template>
    <b-col xl="2" lg="3" sm="3">
        <div class="sidebar-div p-3">
            <div class="d-flex flex-column align-items-center justify-content-center">
                <img src="../assets/img/lougeh.png" alt="" class="lou-geh">
                <h4 id="sidebar-title">LG CAR DEALERSHIP</h4>

            </div>
            <nav class="sidebar mb-3 mt-3">
                <b-nav vertical>
                    <div class="mb-2 inactive">
                        <router-link to="/dashboard" class="nav-link" exact>Dashboard</router-link>
                    </div>
                    <div class="mb-2 inactive">
                        <router-link to="/customers" class="nav-link" exact>Customers</router-link>
                    </div>
                    <div class="mb-2 inactive">
                        <router-link to="/cars" class="nav-link" exact>Cars</router-link>
                    </div>
                    <div class="mb-2 inactive">
                        <router-link to="/invoice" class="nav-link" exact>Invoice</router-link>
                    </div>
                    <div class="mb-2 inactive">
                        <router-link to="/salesperson" class="nav-link" exact>Salesperson</router-link>
                    </div>
                    <div class="mb-2 inactive">
                        <router-link to="/mechanic" class="nav-link" exact>Mechanic</router-link>
                    </div>
                    <div class="mb-2 inactive">
                        <router-link to="/service-ticket" class="nav-link" exact>Service Ticket</router-link>
                    </div>
                </b-nav>
            </nav>
        </div>
    </b-col>
</template>

<script>

export default {
    name: "SideBar",

}
</script>

<style scoped>
.sidebar a.router-link-active {
    background-color: #4A5376;
    color: white;
    border-radius: 7px !important;
}

/* Links on mouse-over */
.sidebar a:hover:not(.active) {
    background-color: #4A5376;
    color: white;
    border-radius: 7px !important;
}

.sidebar .inactive {
    background-color: #f4f6fa;
    border-radius: 7px !important;

}

.inactive a {
    font-weight: 500;
}

.lou-geh {
    height: 150px;
    width: 150px;
}

#sidebar-title {
    font-weight: 600;
}

.mb-3 {
    padding: 10px !important;
}

@media (max-width:1200px) {
    h4 {
        font-size: 18px !important;
        text-align: center !important;
    }
}

@media (max-width:1790px) {
    h4 {
        text-align: center !important;
    }
}
</style>