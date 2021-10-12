<template>

  <div class="container">
  <h1 class="heading">Markdown Parser</h1>
  <div class="preview">
      <div class="row">
        <div class="col"> 
          <h2 class="align">Markdown</h2>
          <textarea 
          class="inf"
          v-model="markdown" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h2 class="align">Preview</h2>
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
.inf {
  height: 400px;
  width: 400px;
}
textarea {
  resize: none;
}
</style>
