<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
  <div>
    <p>Your events: {{ userEvents }}</p>
  </div>
</template>

<script>
//import createStore from '@/store/index.js'
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'
export default {
  name: 'EventList',
  components: {
    EventCard
  },
  data() {
    return {
      events: null,
      userEvents: []
    }
  },
  created() {
    EventService.getEvents()
      .then(response => {
        this.events = response.data
        this.userEvents = this.$store.state.events
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
