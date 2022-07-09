<template>
    <form @submit.prevent="sendForm({ id: 'leadsConsultations' })">
        <span class="error-text" v-show="error">{{ error }}</span>

        <input data-min="3" type="text" name="name" placeholder="Ваше имя">
        <input data-min="19" type="text" name="phone" v-mask="'+998 (##) ###-##-##'" v-model="inputPhoneModel" placeholder="Номер телефона">
        <input type="text" name="courseId" :value="allData.course.body._id" hidden v-if="allData.course.body.title">
        <textarea name="message" placeholder="Сообщение"></textarea>
        <button :class="{ 'loading': buttonLoading }">Отправить</button>
    </form>
</template>

<script>
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
		...mapGetters(["allData"]),
	},
    methods: {
        ...mapMutations(["closeAllModals", "showNotification"]),
        ...mapActions(["sendForm"])
    }
}
</script>