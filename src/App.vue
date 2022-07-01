<template>
  <AppHeader @open-login-modal="isLoginOpen = true" :isLoggedIn="isLoggedIn" />
  <div class="w-full flex justify-center">
    <router-view></router-view>
  </div>
  <teleport to="body">
    <LoginModal @close-login="isLoginOpen = false"  v-if="isLoginOpen"/>
  </teleport>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import LoginModal from './components/LoginModal.vue'
import {authService} from './utilities/firebase'

export default {
  name: 'App',
  components: {
    AppHeader,
    LoginModal
  },
  mounted() {
    authService.onAuthStateChanged((user)=> {
      if(user){
        this.$store.commit('setIsLoggedIn', true)
        // this.isLoggedIn = true
        this.$store.commit('setAuthUser', user)
        // this.authUser = user
        console.log(user)
      }else{
        this.$store.commit('setIsLoggedIn', false)
        // this.isLoggedIn = true
        this.$store.commit('setAuthUser', {})
        console.log('No user')
      }
    })
  },
  data() {
    return {
      isLoginOpen: false,
      // isLoggedIn : false,
      // authUser : {},
    }
  }
}
</script>
