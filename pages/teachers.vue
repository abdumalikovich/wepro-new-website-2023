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
                <client-only>
                    <teachers-list v-if="allData.teachers.body.length" :list="allData.teachers.body"></teachers-list>
                    <loading-courses v-else></loading-courses>
                </client-only>
            </div>
        </div>

        <div class="_margin"></div>
    </main>
</template>

<script lang="ts">
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
		this.GET_DATA(["teachers"])
	},
}
</script>
