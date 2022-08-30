<template>
    <b-col xl="2" lg="3" sm="3" class="sidebar-container vh-100">
        <div class="sidebar-div p-3">
            <div class="d-flex flex-column align-items-center justify-content-center">
                <img src="../assets/img/lougeh.png" alt="" class="lou-geh">
                <h4 id="sidebar-title">LG CAR DEALERSHIP</h4>

            </div>
            <nav class="sidebar mb-3 mt-3">
                <b-nav vertical>
                    <div class="mb-2 inactive">
                        <router-link to="/dashboard" class="nav-link d-flex align-items-center" exact>
                            <b-icon class="mr-3" icon="grid-fill" aria-hidden="true"></b-icon>
                            Dashboard
                        </router-link>
                    </div>
                    <div class="mb-2 inactive">
                        <router-link to="/customers" class="nav-link d-flex align-items-center" exact>
                            <b-icon class="mr-3" icon="people-fill" aria-hidden="true"></b-icon>
                            Customers
                        </router-link>
                    </div>
                    <div class="mb-2 inactive">
                        <router-link to="/cars" class="nav-link d-flex align-items-center" exact>
                            <b-icon class="mr-3" icon="truck" aria-hidden="true"></b-icon>Cars
                        </router-link>
                    </div>
                    <div class="mb-2 inactive">
                        <router-link to="/invoice" class="nav-link d-flex align-items-center" exact>
                            <b-icon class="mr-3" icon="receipt" aria-hidden="true"></b-icon>Invoice
                        </router-link>
                    </div>
                    <div class="mb-2 inactive">
                        <router-link to="/salesperson" class="nav-link d-flex align-items-center" exact>
                            <b-icon class="mr-3" icon="person-lines-fill" aria-hidden="true"></b-icon>Salesperson
                        </router-link>
                    </div>
                    <div class="mb-2 inactive">
                        <router-link to="/mechanic" class="nav-link d-flex align-items-center" exact>
                            <b-icon class="mr-3" icon="tools" aria-hidden="true"></b-icon>Mechanic
                        </router-link>
                    </div>
                    <div class="mb-2 inactive">
                        <router-link to="/service-ticket" class="nav-link d-flex align-items-center" exact>
                            <b-icon class="mr-3" icon="sliders" aria-hidden="true"></b-icon>Service Ticket
                        </router-link>
                    </div>
                </b-nav>
            </nav>
        </div>
    </b-col>
</template>

<script>

export default {
    name: "SideBar"
}
</script>

<style scoped>
.sidebar a.router-link-active {
    background-color: var(--primary-color);
    color: white;
    border-radius: 7px !important;
}

.sidebar a:hover:not(.active) {
    background-color: var(--primary-color);
    color: white;
    border-radius: 7px !important;
}

.sidebar .inactive {
    background-color: var(--background-color);
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
    color: #4A5376;
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

.sidebar-container {
    border-right: solid 2px var(--background-color);
}
</style>