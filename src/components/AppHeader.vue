<template>
  <nav class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2">
    <router-link v-for="(item,index) in list" class="mx-2" :to="item.to" :key="index">{{item.title}}</router-link>
    <button v-if="!isLoggedIn" class="mx-2" @click="$emit('open-login-modal')">Login</button>
    <button v-else class="mx-2" @click="logout">Logout</button>
  </nav>
</template>

<script>
import { authService } from '../utilities/firebase'
export default {
  props:{isLoggedIn: {type:Boolean,default: false}},
  data(){
    return {
      list : [
        {title: 'Home', to: '/'},
        {title: 'DcHeroes', to: '/dc-heroes'},
        {title: 'Calendar', to: '/calendar'},
        {title: 'Markedown', to: '/marked'},
        {title: 'Slider', to: '/slider'},
        {title: 'Calculator', to: '/calculator'},
        {title: 'ReuseableModal', to: '/reuseable-modal'},
      ],
    
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn
    }
  },
  methods: {
    logout(){
      authService.signOut()
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
