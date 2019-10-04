<template>
    <section class="section container skills">
        <div class="columns is-vcentered">
            <div class="column has-text-centered">
                <p class="title is-5 has-text-danger">Laravel</p>
            </div>
            <div class="column is-half">
                <b-progress :value="90" show-value format="percent" type="is-danger"></b-progress>
            </div>
            <div class="column"></div>
        </div>

        <div class="columns is-vcentered">
            <div class="column has-text-centered">
                <p class="title is-5 has-text-primary">PHP</p>
            </div>
            <div class="column is-half">
                <b-progress :value="85" show-value format="percent" type="is-primary"></b-progress>
            </div>
            <div class="column"></div>
        </div>

        <div class="columns is-vcentered">
            <div class="column has-text-centered">
                <p class="title is-5 has-text-warning">CSS</p>
            </div>
            <div class="column is-half">
                <b-progress :value="90" show-value format="percent" type="is-warning"></b-progress>
            </div>
            <div class="column"></div>
        </div>

        <div class="columns is-vcentered">
            <div class="column has-text-centered">
                <p class="title is-5 has-text-success">Vue</p>
            </div>
            <div class="column is-half">
                <b-progress :value="85" show-value format="percent" type="is-success"></b-progress>
            </div>
            <div class="column"></div>
        </div>

        <div class="columns is-vcentered">
            <div class="column has-text-centered">
                <p class="title is-5 has-text-primary">Javascript</p>
            </div>
            <div class="column is-half">
                <b-progress :value="85" show-value format="percent" type="is-primary"></b-progress>
            </div>
            <div class="column"></div>
        </div>

        <div class="columns is-vcentered">
            <div class="column has-text-centered">
                <p class="title is-5 has-text-danger">Git</p>
            </div>
            <div class="column is-half">
                <b-progress :value="80" show-value format="percent" type="is-danger"></b-progress>
            </div>
            <div class="column"></div>
        </div>

        <div class="columns is-vcentered">
            <div class="column has-text-centered">
                <p class="title is-5">WordPress</p>
            </div>
            <div class="column is-half">
                <b-progress :value="80" show-value format="percent"></b-progress>
            </div>
            <div class="column"></div>
        </div>

        <div class="columns is-vcentered">
            <div class="column has-text-centered">
                <p class="title is-5">Code Igniter</p>
            </div>
            <div class="column is-half">
                <b-progress :value="80" show-value format="percent"></b-progress>
            </div>
            <div class="column"></div>
        </div>
    </section>
</template>