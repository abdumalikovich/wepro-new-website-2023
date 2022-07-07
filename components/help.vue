<template>
    <div class="dont-know dark">
        <div class="_width_small img-text">
            <div class="side">
                <div class="_heading">
                    <span class="_h2">Не знаете с чего начать?</span>
                    <p>Оставьте свои контакты и получите бесплатную консультацию по курсу, программе и спикерам.</p>
                </div>

                <div class="_buttons">
                    <button class="style-5" @click="openModalWindow({ name: 'consultation', bg: true })">Проконсультироваться</button>
                </div>
            </div>
            <img class="_pc" src="~/static/img/window.svg">
        </div>
    </div>
</template>

<script lang="ts">
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";

export default {
    methods: {
        ...mapMutations(["openModalWindow"]),
        ...mapActions(["log_out"]),
    },
}
</script>
