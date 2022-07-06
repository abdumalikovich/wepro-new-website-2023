<template>
    <form @submit.prevent="leaveRequestForuser">
        <span class="error-text" v-show="error">{{ error }}</span>

        <input type="text" placeholder="Ism" v-model="user.firstName">
        <input type="text" placeholder="Familiya" v-model="user.lastName">
        <input type="text" v-mask="'+998 (##) ###-##-##'" placeholder="Telefon raqam" v-model="user.phone">
        <textarea type="text" placeholder="O'zingiz haqida" v-model="user.about"></textarea>
        <button :class="{ 'loading': buttonLoading }">Yuborish</button>
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
                lastName: "",
                phone: "+998",
                about: ""
            },
        }
    },
    methods: {
        ...mapMutations(["closeAllModals", "showNotification"]),
    }
}
</script>