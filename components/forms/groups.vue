<template>
    <form @submit.prevent="sendForm({ id: 'leadsGroups' })">
        <span class="error-text" v-show="error">{{ error }}</span>

        <input data-min="3" type="text" name="name" placeholder="Ваше имя">
        <input data-min="19" type="text" name="phone" v-mask="'+998 (##) ###-##-##'" v-model="inputPhoneModel" placeholder="Номер телефона">
        <input type="text" hidden name="groupId" :value="globalElementId">
        <button :class="{ 'loading': buttonLoading }">Оставить заявку</button>
    </form>
</template>

<script lang="ts">
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
    data() {
        return {
            buttonLoading: false,
            error: "",
			inputPhoneModel: "+998"
        }
    },
	computed: {
		...mapGetters(["allData", "globalElementId"]),
	},
    methods: {
        ...mapMutations(["closeAllModals", "showNotification"]),
        ...mapActions(["sendForm"])
    }
}
</script>