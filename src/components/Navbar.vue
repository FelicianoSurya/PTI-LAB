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
            </ul>
        </div> 
    </div>

  </div>

</template>

<script>
export default {
  name: 'Navbar',
  props: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../assets/css/news.css';
</style>
