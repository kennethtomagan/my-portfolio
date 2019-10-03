<template>
    <section class="section container hire">
        <div class="columns">
            <div class="column has-text-centered">
                <h1 class="title">Contact Me</h1>
            </div>
        </div>
        <div class="columns">
            <div class="column"></div>

            <div class="column is-two-half">
                <b-field label="Name">
                    <b-input v-model="data.name"></b-input>
                </b-field>

                <b-field label="Email">
                    <b-input type="email" maxlength="30" v-model="data.email"></b-input>
                </b-field>

                <b-field label="Message">
                    <b-input type="textarea" v-model="data.message"></b-input>
                </b-field>
                <b-button type="is-info" @click.prevent="submit">Submit</b-button>
            </div>
            <div class="column"></div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            data: { name: null, email: null, message: null }
        };
    },
    methods: {
        submit() {
            alert("under development!");
            alert("Contact me @ kenneth.tomagan123@gmail.com");
        }
    }
};
</script>