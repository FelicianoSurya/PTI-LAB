<template>
  
  <div>
  
    <div class="container mt-2 col-md-11 col-sm-9 col-11">
        <div v-for="data in news" :key="data.id" class="row mt-5 box-news">
          <div class="col-md-4 p-0 d-flex">
              <img :src="data.media" alt="image_media">
          </div>  
          <div class="col-md-8 p-3 d-flex flex-column align-items-start justify-content-between information">
            <div>
              <h3><b>{{ data.title }}</b></h3>
              <p class="desc">{{ data.summary }}</p>
            </div>
            <div class="card-footer col-12 d-flex justify-content-end text-muted">
                <h6>{{ data.published_date }}</h6>
            </div> 
          </div>
        </div> 
    </div>

  </div>

</template>

<script>
export default {
  name: 'News',
  data(){
    return {
      news : [],
      message : '',
    }
  },
  mounted(){
      this.getNews(); 
  },
  methods : {
    getNews(){
        var options = {
        method: 'GET',
        url: 'https://free-news.p.rapidapi.com/v1/search',
        params: {q: 'Elon Musk', lang: 'en'},
        headers: {
          'x-rapidapi-host': 'free-news.p.rapidapi.com',
          'x-rapidapi-key': '5d58d356c4msh6e13f05a08b72adp1702eejsnc8b65acff671'
        }
      };

      axios.request(options).then((res)=> {
        this.news = res.data.articles;
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../assets/css/news.css';
</style>
