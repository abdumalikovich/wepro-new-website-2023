<template>
    <form @submit.prevent="sendRequest()">
        <span class="error-text" v-show="error">{{ error }}</span>

        <input type="text" placeholder="Ваше имя" v-model.trim="user.firstName">
        <input type="text" v-mask="'+998 (##) ###-##-##'" placeholder="Номер телефона" v-model.trim="user.phone">
        <select name="" id=""></select>
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
            user: {
                firstName: "",
                phone: "+998",
                courseId: ""
            },
        }
    },
    methods: {
        ...mapMutations(["closeAllModals", "showNotification"]),
        sendRequest() {
            
        }
    }
}
</script>