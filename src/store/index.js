import { createStore } from 'vuex'

export default createStore({
  state: {
    user: 'Unknown user',
    events: []
  },
  mutations: {
    ADD_EVENT(state, event) {
      this.state.events.push(event)
    }
  },
  actions: {},
  modules: {}
})
