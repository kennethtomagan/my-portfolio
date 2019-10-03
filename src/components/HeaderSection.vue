<template>
    <section class="header-section">
        <vue-particles
            color="#dedede"
            class="header-bg"
            :moveSpeed="2"
            shapeType="circle"
            :linesWidth=".2"
            :particleSize="3"
            :particlesNumber="160"
        ></vue-particles>
        <!-- <section class="header-bg"></section> -->
        <section class="container p-t-80">
            <div class="columns">
                <div class="column"></div>

                <div class="column is-two-fifths">
                    <div class="box columns">
                        <div class="column">
                            <figure class="image is-96x96">
                                <img class="is-rounded" src="@/assets/photo.png">
                            </figure>
                        </div>
                        <div class="column is-four-fifths">
                            <label class="title is-5">Kenneth E. Tomagan</label>
                            <p>Web Developer</p>
                            <p>
                                <b-icon pack="fa" icon="map-marker" size="is-small"></b-icon>Rizal, Philippines
                            </p>
                        </div>
                    </div>

                    <div class="box columns p-t-10 p-b-10 m-t-sm" v-if="$route.path != '/'">
                        <router-link :to="{ name: 'home' }">
                            <b-icon pack="fa" icon="home" size="is-small"></b-icon>Home
                        </router-link>
                    </div>
                </div>
                <div class="column"></div>
            </div>
        </section>
    </section>
</template>