<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
  <div></div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
export default {
  name: 'EventList',
  data() {
    return {}
  },
  created() {
    this.$store.dispatch('fetchEvents')
  },
  components: {
    EventCard
  },
  computed: {
    events() {
      return this.$store.state.events
    }
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
