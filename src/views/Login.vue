<template>
  
  <div>
  
    <div class="container col-12 pt-5 p-2 d-flex flex-column align-items-center justify-content-center">
        <form class="p-3 card login-box">
          <div class="text-center"><h4><b>Login</b></h4></div>
          <div class="line col-12 my-2"></div>
            <div class="group-form d-flex flex-column align-items-start my-2">
                <label for="email">Email</label>
                <input type="text" v-model="inputData.email" id="email" class="form-control">
            </div>
            <div class="group-form d-flex flex-column align-items-start">
                <label for="password">Password</label>
                <input type="password" v-model="inputData.password" id="password" class="form-control">
            </div>
            <input type="button" @click="login()" class="btn btn-secondary btn-sm mt-4 mx-5" value="Login">
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
  mounted(){
    this.cekLogin();
  },
  methods : {
    login(){
      console.log(this.inputData)
      axios.post('http://localhost:8080/api/login_user',this.inputData).then((res)=>{
          sessionStorage.setItem('token',res.data.data.token);
          alert('Login Successfull');
          this.$router.go(); 
          this.cekLogin();
      }).catch(err=>{
        alert('Email atau Password Salah!');
      })
    },
    cekLogin(){
      if(sessionStorage.getItem('token')){
          this.$router.push({path : "blog"});
      }
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

  @import '../assets/css/login.css';
</style>
