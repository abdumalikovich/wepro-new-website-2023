<template>
    <div id="page-register" class="auth-page">
        <div class="_main_heading">
            <div class="_width">
                <h1>Ro'yxatdan o'tish</h1>

                <div class="_margin-line"></div>

                <div class="form">
                    <div class="form-element">
                        <forms-register></forms-register>
                    </div>

                    <p class="_note">Ro'yxatdan o'tib bo'lganmisiz? <nuxt-link to="/forms/login"><span class="_link">Kirish</span></nuxt-link></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { mapActions, mapMutations, mapGetters, mapState } from "vuex"

export default {
    computed: {
        ...mapState("auth", ["user"])
    },
    created() {
        if(this.user) {
            this.$router.push("/me")
        }
    }
}
</script>
