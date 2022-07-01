<template>
  <section class="my-5 text-center">
    <button class="border rounded px-2" @click="loginWithGoogle">Login with Google</button>
  </section>
</template>

<script>
import firebase from 'firebase/compat/app'
import {authService} from '../../utilities/firebase'
export default {
  methods: {
    loginWithGoogle(){
    // var provider = authService.GoogleAuthProvider;
    var provider = new firebase.auth.GoogleAuthProvider();
    authService.signInWithPopup(provider)
    .then(()=>{
      // this.close()
      this.$emit('close-login-from-google');
      })
  }
  }
}
</script>

<style>

</style>