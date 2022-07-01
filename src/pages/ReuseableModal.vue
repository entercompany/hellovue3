<template>
  <section class="flex w-full flex-wrap">
    <div class="m-auto">
      <h1 class="text-2xl my-5">Re-useable Modal</h1>
      <ModalComp v-if="isModalOpen" @close="isModalOpen = false">
        <template v-slot:title>
          Red Modal
        </template>
        <template v-slot:body>
          <p>this is body slot</p>
          <section>asdf</section>
        </template>
      </ModalComp>
      <button @click="isModalOpen = true" class="border rounded px-2 mx-4 bg-blue-800 text-white">Open Modal</button>
    </div>
  </section>
</template>

<script>
import ModalComp from '../components/ModalComp.vue'
import {ref} from 'vue'

export default {
    components: {ModalComp},
    setup() {
        const isModalOpen = ref(false)

        return {isModalOpen}
    }

}
</script>

<style>

</style>