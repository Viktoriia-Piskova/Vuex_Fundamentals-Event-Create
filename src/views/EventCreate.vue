<template>
  <h1>Hello, {{ user.name }}! Create your event</h1>
  <div class="form-container">
    <form @submit.prevent="onSubmit">
      <label>Select a category: </label>
      <select v-model="event.category">
        <option
          v-for="option in categories"
          :value="option"
          :key="option"
          :selected="option === event.category"
          >{{ option }}</option
        >
      </select>

      <h3>Name & describe your event</h3>

      <label>Title</label>
      <input v-model="event.title" type="text" placeholder="Title" />

      <label>Description</label>
      <input
        v-model="event.description"
        type="text"
        placeholder="Description"
      />

      <h3>Where is your event?</h3>

      <label>Location</label>
      <input v-model="event.location" type="text" placeholder="Location" />

      <h3>When is your event?</h3>
      <label>Date</label>
      <input v-model="event.date" type="text" placeholder="Date" />

      <label>Time</label>
      <input v-model="event.time" type="text" placeholder="Time" />

      <label>Organiser {{ event.organiser }}</label>
      <input v-model="event.organiser" type="text" :placeholder="user.name" />

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid' //     generating ids module
import { mapState } from 'vuex'
export default {
  data() {
    return {
      event: {
        id: '',
        category: '',
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        organiser: ''
      }
    }
  },

  computed: mapState(
    ['categories', 'user']
    // {user: 'user',
    // categories: 'categories'}
  ),
  methods: {
    onSubmit() {
      const event = {
        ...this.event,
        id: uuidv4(),
        organiser: this.$store.state.organiser
      }
      this.$store.dispatch('createEvent', event)
    }
  }
}
</script>
