<template>
  
  <div>
  
    <div class="container-fluid p-0">
        <div class="background p-5 d-flex flex-column justify-content-center align-items-center">
          <h1>{{ title }}</h1>  
          <p><i>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</i></p>
        </div> 
    </div>

  </div>

</template>

<script>
export default {
  name: 'Banner',
  props: {
    title : String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../assets/css/news.css';
</style>
