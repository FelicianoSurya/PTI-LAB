<template>
  
  <div>
  
    <div class="container mt-5 p-2">
        <div v-for="blog in blogs" :key="blog.id" class="row mt-5 box-news">
          <div class="col-lg-5 p-0 d-flex justify-content-start">
              <img :src="blog.image" alt="image_media">
          </div>  
          <div class="col-lg-7 p-3 d-flex flex-column align-items-start information">
              <h3><b>{{ blog.title }}</b></h3>
              <p class="desc">{{ blog.summary }}</p>
              <p>{{ blog.author }}</p>
          </div>
        </div> 
    </div>

  </div>

</template>

<script>
export default {
  name: 'Blog',
  data(){
    return {
      blogs : [],
      message : '',
    }
  },
  mounted(){
      this.getBlogs(); 
      this.cekLogin();
  },
  methods : {
      getBlogs(){
          var options = {
          method: 'GET',
          url: 'https://newsx.p.rapidapi.com/search',
          params: {limit: '7', skip: '0'},
          headers: {
            'x-rapidapi-host': 'newsx.p.rapidapi.com',
            'x-rapidapi-key': '5d58d356c4msh6e13f05a08b72adp1702eejsnc8b65acff671'
          }
        };
        axios.request(options).then((response) => {
          console.log(response.data);
          this.blogs = response.data;
        }).catch(function (error) {
          console.error(error);
      });
    },
    cekLogin(){
      if(!sessionStorage.getItem('token')){
          alert('login terlebih dahulu!');
          this.$router.push({path : "login"});
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../assets/css/news.css';
</style>
