<template>
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://unpkg.com/buefy/dist/buefy.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">
    <link rel="stylesheet" href="https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css">

  </head>

  <body>
  <div id="app">
    <!-- Buefy components goes here -->
    <div class="container">
      <div class="notification">

        <websites-index></websites-index>
      </div>
    </div>
  </div>

  </body>
  </html>
</template>

<script>

import WebsitesIndex from './components/WebsitesIndex.vue';

export default {
  name: 'app',
  components: {
    WebsitesIndex,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: white;
}
</style>
