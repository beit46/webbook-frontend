<template>
  <div>

    <h1 class="title">
      WEBBOOK
    </h1>

    <websites-list></websites-list>

    <button class="button is-primary is-medium"
            @click="isComponentModalActive = true"
    >
      New
    </button>

    <b-modal :active.sync="isComponentModalActive"
             has-modal-card
             full-screen
             :can-cancel="false"
    >
      <create-website-modal></create-website-modal>
    </b-modal>

  </div>
</template>

<script>
  import WebsitesList from './WebsitesList';
  import CreateWebsiteModal from './CreateWebsiteModal';

  export default {
    name: 'WebsitesIndex',

    components: {
      CreateWebsiteModal,
      WebsitesList
    },

    data() {
      return {
        isComponentModalActive: false,
      }
    }
  };
</script>

<style scoped>

</style>
