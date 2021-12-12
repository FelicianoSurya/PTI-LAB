<template>
  
  <div>
  
    <div class="container-fluid p-0" style="background-color:black">
        <div class="nav p-2 d-flex justify-content-center align-items-center">
            <ul class="container d-flex m-0 justify-content-around align-items-center">
                <li class="nav-item">
                    <a class="nav-link"><router-link to="/">News</router-link></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"><router-link to="/blog">Blogs</router-link></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"><router-link to="/development">Development</router-link></a>
                </li>
                <li class="nav-item" v-show="isList" style="cursor:pointer">
                    <a class="nav-link" @click="logout()">Logout</a>
                </li>
            </ul>
        </div> 
    </div>

  </div>

</template>

<script>
export default {
  name: 'Navbar',
  data(){
    return {
      isList : 0,
    }
  },
  mounted(){
    this.cekLogin();
  },
  methods : {
    logout(){
      sessionStorage.removeItem('token');
      alert("Logout Successfull");
      this.isList = 0;
      this.$router.push('login');
    },
    cekLogin(){
        if(sessionStorage.getItem('token')){
          this.isList = 1;
        }else{
          this.isList = 0;
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../assets/css/news.css';
</style>
