<template>
    <main id="page-courses">
        <div class="_main_heading">
            <div class="_width">
                <h1>Успейте записаться</h1>
                <p>Успейте записаться в одну из доступых групп ниже. Кликните на карточку для записи.</p>
            </div>
        </div>

        <div class="_margin"></div>

        <div class="all-courses _width">
            <div class="wrapper">
                <client-only>
                    <groups-list v-if="allData.groups.body.length" :list="allData.groups.body"></groups-list>
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
		this.GET_DATA(["groups"])
	},
}
</script>
