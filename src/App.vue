<template>
    <div id="app">
        <!-- <the-navbar></the-navbar> -->
        <header-section></header-section>
        <router-view></router-view>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

// import TheNavbar from "@/components/Navbar";
import HeaderSection from "@/components/HeaderSection";
export default {
    name: "app",
    components: {
        // TheNavbar,
        HeaderSection
    }
};
</script>
