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
      inputData : {email : '' ,  password : '',remember_me:''}
    }
  },
  mounted(){
    this.cekLogin();
  },
  methods : {
    login(){
      // var options = {
      //     method: 'POST',
      //     url: 'http://localhost:8080/api/login_user',
          
      //   };
      // axios.request(options,this.inputData).then((res)=>{
      //   console.log(res.data);
      // }).catch(err=>{
      //   alert('error');
      //   this.$session.start();
      //   this.$session.set('token','error');
      //   console.log(this.$session)
      // })
      var emailAsli = 'admin@gmail.com';
      var passwordAsli = 'Admin_Admin2';
      if(this.inputData.email == emailAsli && this.inputData.password == passwordAsli){
        sessionStorage.setItem('token','lala');
        alert("login Berhasil");
        this.cekLogin();
      }else{
        alert('email / password salah!');
      }
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
</style>
