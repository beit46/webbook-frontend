<template>
  <div>
    LIST ALL THE AVAILABLE WEBSITES

    PROVIDE PAGINATION
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
