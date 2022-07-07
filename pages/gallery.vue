<template>
    <main id="page-courses">
        <div class="_main_heading">
            <div class="_width">
                <h1>Лучшие моменты</h1>
                <p>Мы старемся снимать все события в жизни студентов и нашей школы. Эта галерея постоянно пополняется.</p>
            </div>
        </div>

        <div class="_margin"></div>

        <div class="all-courses _width">
            <div class="wrapper">
                <gallery-list/>
                <!-- <loading-courses v-else/> -->
            </div>
        </div>

        <div class="_margin"></div>
    </main>
</template>

<script lang="ts">
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";

export default {
    data() {
        return {
            courses: []
        }
    },
    methods: {
        ...mapMutations(["openModalWindow"]),
        ...mapMutations(["openModalWindow"]),
    },
}
</script>
