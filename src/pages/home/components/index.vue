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
                        <a
                            href="https://stackoverflow.com/users/8028983/kenneth"
                            target="_blank"
                            class="no-color opacity80"
                        >
                            <img
                                src="data:image/png;base64,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"
                                style="height: 45px;"
                            >
                            <!-- <b-icon pack="fa" icon="twitter-square" size="is-large"></b-icon> -->
                            <br>
                            <small>Stackoverflow</small>
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
                <router-link :to="{ name: 'experience' }">
                    <div class="card notification is-warning">
                        <div class="card-content has-text-centered">
                            <b-icon pack="fa" icon="tasks" size="is-large" custom-class="opacity50"></b-icon>
                        </div>
                        <div class="card-footer no-border-top">Experience</div>
                    </div>
                </router-link>
            </div>
            <div class="column">
                <router-link :to="{ name: 'projects' }">
                    <div class="card notification is-link">
                        <div class="card-content has-text-centered">
                            <b-icon
                                pack="fa"
                                icon="laptop"
                                size="is-large"
                                custom-class="opacity50"
                            ></b-icon>
                        </div>
                        <div class="card-footer no-border-top">Projects</div>
                    </div>
                </router-link>
            </div>
            <div class="column">
                <router-link :to="{ name: 'hire' }">
                    <div class="card notification is-dark">
                        <div class="card-content has-text-centered">
                            <b-icon
                                pack="fa"
                                icon="briefcase"
                                size="is-large"
                                custom-class="opacity50"
                            ></b-icon>
                        </div>
                        <div class="card-footer no-border-top">Hire Me</div>
                    </div>
                </router-link>
            </div>
        </div>
    </section>
</template>

<style scoped>
@import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
</style>
