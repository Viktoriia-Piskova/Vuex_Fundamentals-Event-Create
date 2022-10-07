import { createStore } from 'vuex'
import EventService from '@/services/EventService.js'

export default createStore({
  state: {
    user: 'Unknown user',
    events: []
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    }
  },
  actions: {
    createEvent({ commit }, event) {
      EventService.postEvent(event) //post event into our mock database
        .then(() => {
          commit('ADD_EVENT', event)
          console.log(event)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  modules: {}
})
