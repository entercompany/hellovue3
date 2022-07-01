<template>
  <div class="flex">
    <div class="m-auto">
      <h1 class="text-center">Welcome to vue 3</h1>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      data : this.$store.state
    }
  },
  mounted() {
    console.log(this.$store.state);
  }
}
</script>

<style>

</style>