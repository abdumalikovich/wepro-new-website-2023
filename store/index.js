import Vue from 'vue'
import Vuex from 'vuex'
import apiRoutes from "../services/routes";

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
        },
        allData: {
            groups: {
                method: "get",
                api: "groups",
                body: []
            },
            courses: {
                method: "get",
                api: "courses",
                body: []
            },
            course: {
                method: "get",
                api: "courses",
                body: []
            },
            teachers: {
                method: "get",
                api: "teachers",
                body: []
            },
        }
    },
    getters: {
        modals: state => state.modals,
        allData: state => state.allData,
    },
    mutations: {
        setButtonLoadingStatus(state, {evt, bool}) {
            if(bool) evt.classList.add("loading")
            else evt.classList.remove("loading")
        },
        showNotification(state, {evt, bool}) {
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
        closeAllModals(state) {
            for (let item in state.modals) {
                state.modals[item].status = false
            }
        },
        openModalWindow(state, details) {
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
        GET_DATA(state, data) {
            state.allData[data.key].body = data.value
        },
    },
    actions: {
        async GET_DATA({ commit, rootState, dispatch }, routes) {
            for(let item of routes) {
                let api = rootState.allData[item].api
    
                if(!rootState.allData[item].body.length || rootState.allData[item].length == 0) {
                    // IF EMPTY DATA
                    await apiRoutes
                        .get({
                            api: api,
                        })
                        .then((res) => {
                            commit("GET_DATA", { key: item, value: res.data });
                        })
                        .catch((error) => {
                            console.log(error);
                        })
                } else {
                    console.log("Already here");
                }
            }
        },
    },
})
