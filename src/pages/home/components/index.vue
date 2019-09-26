<template>
    <section class="section container home">
        <div class="columns">
            <div class="column"></div>

            <div class="column is-two-fifths">
                <div class="columns">
                    <div class="column has-text-centered">
                        <a
                            href="https://github.com/kennethtomagan"
                            target="_blank"
                            class="no-color opacity80"
                        >
                            <b-icon pack="fa" icon="github-square" size="is-large"></b-icon>
                            <br>
                            <small>Github</small>
                        </a>
                    </div>
                    <div class="column has-text-centered">
                        <a
                            href="https://ph.linkedin.com/in/kenneth-tomagan-0a9293137"
                            target="_blank"
                            class="no-color opacity80"
                        >
                            <b-icon pack="fa" icon="linkedin-square" size="is-large"></b-icon>
                            <br>
                            <small>LinkedIn</small>
                        </a>
                    </div>
                    <div class="column has-text-centered">
                        <a href="#" target="_blank" class="no-color opacity80">
                            <b-icon pack="fa" icon="facebook-official" size="is-large"></b-icon>
                            <br>
                            <small>Facebook</small>
                        </a>
                    </div>

                    <div class="column has-text-centered">
                        <a href="#" target="_blank" class="no-color opacity80">
                            <b-icon pack="fa" icon="twitter-square" size="is-large"></b-icon>
                            <br>
                            <small>Twitter</small>
                        </a>
                    </div>
                </div>
            </div>
            <div class="column"></div>
        </div>
        <div class="columns">
            <div class="column">
                <router-link :to="{ name: 'skills' }">
                    <div class="card notification is-primary">
                        <div class="card-content has-text-centered">
                            <b-icon
                                pack="fa"
                                icon="rocket"
                                size="is-large"
                                custom-class="opacity50"
                            ></b-icon>
                        </div>
                        <div class="card-footer no-border-top">Skills</div>
                    </div>
                </router-link>
            </div>
            <div class="column">
                <div class="card notification is-warning">
                    <div class="card-content has-text-centered">
                        <b-icon pack="fa" icon="tasks" size="is-large" custom-class="opacity50"></b-icon>
                    </div>
                    <div class="card-footer no-border-top">Experience</div>
                </div>
            </div>
            <div class="column">
                <div class="card notification is-link">
                    <div class="card-content has-text-centered">
                        <b-icon pack="fa" icon="laptop" size="is-large" custom-class="opacity50"></b-icon>
                    </div>
                    <div class="card-footer no-border-top">Projects</div>
                </div>
            </div>
            <div class="column">
                <div class="card notification is-dark">
                    <div class="card-content has-text-centered">
                        <b-icon pack="fa" icon="briefcase" size="is-large" custom-class="opacity50"></b-icon>
                    </div>
                    <div class="card-footer no-border-top">Hire Me</div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
@import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
</style>
