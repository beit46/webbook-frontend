<template>
  <div>

    <h1 class="title">WEBBOOK</h1>
    <websites-list></websites-list>
  </div>
</template>

<script>
  import WebsitesList from './WebsitesList';

  export default {
    name: 'WebsitesIndex',
    components: { WebsitesList },
  };
</script>

<style scoped>

</style>
