<template>
    <main id="page-courses">
        <div class="_main_heading">
            <div class="_width">
                <h1>Наши преподаватели</h1>
            </div>
        </div>

        <div class="_margin"></div>

        <div class="all-courses _width">
            <div class="wrapper">
                <teachers-list/>
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
