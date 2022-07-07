import Vue from 'vue'
import Vuex from 'vuex'
import user from "./user"

Vue.use(Vuex)

export default () => new Vuex.Store({
    state: {
        // showCoursesAsGrid: false,
        modals: {
            menu: {
                status: false,
            },
            together: {
                status: false,
            },
            background: {
                status: false,
            },
            register: {
                status: false,
            },
            openLesson: {
                status: false,
            },
            success: {
                status: false,
                text: "Yaxshi!"
            },
            error: {
                status: false,
                text: "Yomon!"
            },
            loading: {
                status: false
            },
            consultation: {
                status: false
            },
        }
    },
    getters: {
        modals: (state: { modals: any }) => state.modals,
    },
    mutations: {
        setButtonLoadingStatus(state: any, {evt, bool}: {evt: any, bool: boolean}) {
            if(bool) evt.classList.add("loading")
            else evt.classList.remove("loading")
        },
        showNotification(state: any, {bool, text}: {bool: boolean, text: string}) {
            if(bool) {
                state.modals.success.status = true
                state.modals.success.text = text
            } else {
                state.modals.error.status = true
                state.modals.error.text = text
            }
            
            setTimeout(() => {
                state.modals.success.status = false
                state.modals.error.status = false
            }, 3000)
        },
        closeAllModals(state: any) {
            for (let item in state.modals) {
                state.modals[item].status = false
            }
        },
        openModalWindow(state: any, details: any) {
            if (details.closeAll) {
                for (let item in state.modals) {
                    state.modals[item].status = false
                }
            }
    
            state.modals[details.name].status = !state.modals[details.name].status
            state.modals[details.name].text = details.text
    
            state.globalElementId = details.id
    
            if (details.bg) state.modals.background.status = true
        },
        // setLocalVariables(state: any) {
        //     // toggle view
        //     if(localStorage.showCoursesAsGrid) {
        //         state.showCoursesAsGrid = JSON.parse(localStorage.showCoursesAsGrid)
        //     } else {
        //         state.showCoursesAsGrid = false
        //         localStorage.showCoursesAsGrid = false
        //     }
        // },
    },
    actions: {
    },
    modules: {
        user
    }
})

// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// const state = () => ({
//     registerUser: {
//         strategy: "local"
//     },
// })

// const getters = {
//     registerUser: (state: { registerUser: any }) => state.registerUser
// }

// const mutations = {
// }

// const actions = {
//     abc({ commit, rootState, dispatch }: {commit: any, rootState: any, dispatch: any}) {
        
//     },
// }

// export default {
//   state,
//   getters,
//   actions,
//   mutations
// }
