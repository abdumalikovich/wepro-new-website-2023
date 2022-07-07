<template>
    <main id="page-courses">
        <div class="_main_heading">
            <div class="_width">
                <h1>Все курсы</h1>
                <p>Здесь вы можете просмотреть все доступные к записи курсы. Узнайте подробнее кликнув на одну из карточек.</p>
            </div>
        </div>

        <div class="_margin"></div>

        <div class="all-courses _width">
            <div class="wrapper">
                <courses-list :list="JSON.parse(JSON.stringify(courses)).filter(item => item.price == 0)" v-if="courses.length"/>
                <loading-courses v-else/>
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
