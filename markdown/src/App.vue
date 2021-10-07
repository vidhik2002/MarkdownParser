<template>

  <div class="container">
  <h1>Markdown preview</h1>
  <div class="preview">
      <div class="row">
        <div class="col"> 
          <h2>Markdown</h2>
          <textarea class="info" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h2>Preview</h2>
          <textarea class="info" />
        </div>
      </div> 
    </div> 
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style scoped>
.info {
height: 400px;
width:400px;
}
</style>
