<template>

  <div class="container">
  <h1>Markdown Parser</h1>
  <div class="preview">
      <div class="row">
        <div class="col"> 
          <h2>Markdown</h2>
          <textarea 
          class="info"
          v-model="markdown" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h2>Preview</h2>
          <div 
          :key="markdown"
          class="info"
          v-markdown
          >
            {{markdown}}
          </div>
        </div>
      </div> 
    </div> 
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
  return {
    markdown: '',
  };
},
}
</script>

<style scoped>
.info {
  height: 400px;
  width: 400px;
}
</style>
