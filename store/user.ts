import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = () => ({
    user: {
        email: "",
        phone: "+998",
        firstName: "",
        lastName: "",
    }
})

const getters = {
    user: (state: { user: any }) => state.user
}

const mutations = {
    // log_out(state: any) {
    //     for(let key in state.user) {
    //         delete state.user[key]
    //     }

    //     this.$router.go()
    // },
    // async leaveRequestForJob(state: any) {
    //     this.dispatch('teacher-requests', { createRequest: "create" }, { root: true })
    //         .then(res => {
    //             console.log(res);
    //         })
    //         .catch(res => {
    //             console.log(res);
    //         })
    //     // try {
    //     //     await this.dispatch('teacher-requests', { createRequest: "create" })
    //     //     await this.commit("showNotification", { bool: true, text: "Rahmat! Arizangiz qabul qilindi" })
    //     // } catch (error: any) {
    //     //     this.commit("showNotification", { bool: false, text: "Xatolik yuz berdi" })
    //     // }
    // }
}

const actions = {
    get_user({ commit, rootState, dispatch }: {commit: any, rootState: any, dispatch: any}) {
        if(localStorage.user) {
            rootState.user.user = JSON.parse(localStorage.user)
        }
    },
    log_out({ commit, rootState, dispatch }: {commit: any, rootState: any, dispatch: any}) {
        localStorage.clear()
        
        commit("log_out")
    }
}

export default {
  state,
  getters,
  actions,
  mutations
}

