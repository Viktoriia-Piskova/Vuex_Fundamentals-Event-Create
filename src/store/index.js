import { createStore } from 'vuex'
import EventService from '@/services/EventService.js'

export default createStore({
  state: {
    user: {
      id: 123,
      name: 'Adam'
    },
    events: [],
    event: {},
    categories: [
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ]
  },

  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    SET_EVENTS(state, events) {
      state.events = events
    },
    SET_EVENT(state, event) {
      state.event = event
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
    },
    fetchEvents({ commit }) {
      EventService.getEvents()
        .then(response => {
          commit('SET_EVENTS', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    fetchEvent({ commit }, id) {
      EventService.getEvent(id).then(response =>
        commit('SET_EVENT', response.data)
      )
    }
  },
  modules: {}
})
