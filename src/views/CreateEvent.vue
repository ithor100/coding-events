<template>
  <div>
    <h1>Create an Event</h1>
    <form @submit.prevent="submit">
      <input
        v-model="event.title"
        type="text"
        name="title"
        placeholder="Add a title"
      />
      <input type="submit" value="Create Event" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      event: {
        title: ""
      }
    };
  },
  methods: {
    submit() {
      axios
        .post("http://localhost:3000/events", this.event)
        .then(res => {
          console.log("New event created", res.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>

<style scoped></style>
