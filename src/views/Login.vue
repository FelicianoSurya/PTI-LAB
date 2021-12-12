<template>
  
  <div>
  
    <div class="container pt-5 p-2 d-flex flex-column justify-content-center">
        <form class="p-3">
            <div class="group-form d-flex flex-column align-items-start">
                <label for="email">Email</label>
                <input type="text" v-model="inputData.email" id="email" class="form-control">
            </div>
            <div class="group-form d-flex flex-column align-items-start">
                <label for="password">Password</label>
                <input type="password" v-model="inputData.password" id="password" class="form-control">
            </div>
            <input type="button" @click="login()" class="btn btn-info m-2" value="Login">
        </form>
    </div>

  </div>

</template>

<script>
export default {
  name: 'Login',
  data(){
    return{
      inputData : {email : '' ,  password : ''}
    }
  },
  methods : {
    login(){
      axios.post('http://api-login-pti.herokuapp.com/api/login_user',this.data).then((res)=>{
        console.log(res.data);
        // this.$session.start();
        // this.$session.set('token',this.res.data.token);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  form{
      max-width: 400px;
  }
  .btn{
      color:white;
  }
</style>
