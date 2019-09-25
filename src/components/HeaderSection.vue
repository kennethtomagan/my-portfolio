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
        <section class="container p-t-120">
            <div class="columns">
                <div class="column"></div>

                <div class="column is-two-fifths">
                    <div class="tile">
                        <article class="tile is-child box"></article>
                    </div>
                </div>
                <div class="column"></div>
            </div>
        </section>
    </section>
</template>