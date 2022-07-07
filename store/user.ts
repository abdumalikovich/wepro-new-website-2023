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

const mutations = {}

const actions = {}

export default {
  state,
  getters,
  actions,
  mutations
}

