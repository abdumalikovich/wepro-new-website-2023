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
                <client-only>
                    <courses-list v-if="allData.courses.body.length" :list="allData.courses.body"></courses-list>
                    <loading-courses v-else></loading-courses>
                </client-only>
            </div>
        </div>

        <div class="_margin"></div>
    </main>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";

export default {
	computed: {
		...mapGetters(["allData"]),
	},
    methods: {
        ...mapMutations(["openModalWindow"]),
		...mapActions(["GET_DATA"]),
    },
	created() {
		this.GET_DATA(["courses"])
	},
}
</script>
