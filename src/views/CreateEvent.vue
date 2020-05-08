<template>
  <div>
    <h1>Create an Event</h1>
    <form>
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
export default {
  data() {
    return {
      event: {
        title: ""
      }
    };
  }
};
</script>

<style scoped></style>
