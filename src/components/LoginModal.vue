<template>

    <section @click="close" class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"></section>
    <div class="absolute inset-0">
      <div class="flex h-full">
        <div class="z-30 m-auto bg-white p-2 rounded shadow">
          <div class="border p-2">
          <h1 class="text-2xl text-center">Login</h1>
          <GoogleLogin @close-login-from-google="close" />
          <p class="my-3 text-center">Or</p>
          <form action="" class="p-2 my-2" @submit.prevent="submit">
            <div class="my-4">
              <label>Email or Username</label>
              <input ref="emailRef" v-model="email" class="rounded shadow p-2 w-full" placeholder="Enter your email or username"/>
            </div>
            <div class="my-4">
              <label>Password</label>
              <input v-model="password" type="password" class="rounded shadow p-2 w-full" placeholder="Enter your password" />
            </div>
            <div class="my-4">
              <button type="submit" class="w-full rounded shadow-md bg-red-800 text-white">
                <span v-if="!isLoading">Login</span>
                  <span v-else>Loading</span>
              </button>
            </div>
          </form>
          </div>
          
        </div>
      </div>
    </div>

</template>

<script>
// import firebase from 'firebase/compat/app'
import {authService} from '../utilities/firebase'
import GoogleLogin from './Login/GoogleLogin.vue'

export default {
  components: { GoogleLogin },
  data(){
    return {
      
        email: 'user1@gmail.com',
        password: 'password',
      isLoading : false,
    }
  },
  mounted() {
    this.$refs.emailRef.focus()
  },
 methods: {
  submit(){
    this.isLoading=true;
    // axios.post('url', this.form);
    authService.signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        // console.log(res);
        this.email = ''
        this.password = ''
        this.isLoading = false;
        this.close()
      }).catch(() => {
        // console.log(e)
        this.isLoading = false;
      });
  },
  close() {
    this.$emit('close-login')
  },
  
 }
}
</script>

<style>

</style>