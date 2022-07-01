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
        this.isLoggedIn = true
        this.authUser = user
        console.log(user)
      }else{
       this.isLoggedIn = false
       this.authUser = {}
        console.log('No user')
      }
    })
  },
  data() {
    return {
      isLoginOpen: false,
      isLoggedIn : false,
      authUser : {},
    }
  }
}
</script>
