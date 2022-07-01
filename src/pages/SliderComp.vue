<template>
  <div class="flex flex-wrap w-full relative">
    
    <div v-for="(color, index) in sliders" :key="color"  class="absolute w-full ">
      <transition name="fade">
      <div  v-if="currentSlide==index" :class="color" style="height:350px"></div>
      </transition>
    </div>
    <div class="w-full" style="height:340px">
      <div class="absolute bottom-0 flex w-full justify-center">
        <div v-for="(item,index) in sliders" :key="item" @click="makeActive(index)" :class="currentSlide == index ?
         'bg-gray-700': 'bg-gray-300'" class="w-4 h-4 mx-2 rounded-full z-20 cursor-pointer shadow-md"></div>
      </div>
    </div>
    <!-- <div class="my-10 flex w-full">
      <div class="m-auto">
        <transition name="fade">
          <h1 v-if="isTitleShowing">Slider Carusel</h1>
        </transition>
        <button @click="isTitleShowing = !isTitleShowing" class="px-2 rounded border">Toggle Text</button>
      </div>
    </div> -->
  </div>
</template>

<script>

export default {
  data() {
    return {
      currentSlide: 1,
      sliders : ['bg-teal-600', 'bg-blue-600','bg-yellow-600'],
      interval : '',
      isTitleShowing : false,
    }
  },
  mounted(){
    this.interval = setInterval(()=>{
      console.log('I am changing current slide '+this.currentSlide);
      this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide+1;

    },2000)
  },
  unmounted(){
    clearInterval(this.interval)
  },
  methods: {
    makeActive(index){
      this.currentSlide = index;

    }
  },
  computed: {
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}
.fade-enter-from{
    opacity: 0;
  transform: translateX(-100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
