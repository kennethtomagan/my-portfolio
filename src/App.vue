<template>
    <div id="app">
        <!-- <the-navbar></the-navbar> -->
        <header-section></header-section>
        <router-view></router-view>
        <b-loading :is-full-page="true" :active.sync="isLoading"></b-loading>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

// import TheNavbar from "@/components/Navbar";
import HeaderSection from "@/components/HeaderSection";
import { setTimeout } from "timers";
export default {
    data() {
        return {
            isLoading: true
        };
    },
    mounted() {
        setTimeout(() => {
            this.isLoading = false;
        }, 1500);
    },
    name: "app",
    components: {
        // TheNavbar,
        HeaderSection
    }
};
</script>
