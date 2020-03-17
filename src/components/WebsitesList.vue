<template>
    <div>
      <section>
        <b-table
          :data="websites"
          :paginated="isPaginated"
          :per-page="perPage"
          :current-page.sync="currentPage"
          :pagination-simple="isPaginationSimple"
          :pagination-position="paginationPosition"
          :default-sort-direction="defaultSortDirection"
          :sort-icon="sortIcon"
          :sort-icon-size="sortIconSize"
          default-sort="user.first_name"
          aria-next-label="Next page"
          aria-previous-label="Previous page"
          aria-page-label="Page"
          aria-current-label="Current page">

          <template slot-scope="props">
            <b-table-column field="id" label="ID" width="40" sortable numeric>
              {{ props.row.id }}
            </b-table-column>

            <b-table-column field="name" label="name" sortable>
              {{ props.row.name }}
            </b-table-column>

            <b-table-column field="url" label="url" sortable>
                    <span>
                        <b-icon pack="fas"
                                icon="mars">
                        </b-icon>
                        {{ props.row.url }}
                    </span>

            </b-table-column>
          </template>

          <template slot="bottom-left">
            <b-select v-model="perPage" :disabled="!isPaginated">
              <option value="5">5 per page</option>
              <option value="10">10 per page</option>
              <option value="15">15 per page</option>
              <option value="20">20 per page</option>
            </b-select>
          </template>
        </b-table>
      </section>

      <b-button type="is-primary">Primary</b-button>

    </div>
</template>

<script>

  import { mapGetters } from 'vuex';

  export default {
  name: 'WebsitesList',

  data() {
    return {
      isPaginated: true,
      isPaginationSimple: false,
      paginationPosition: 'bottom',
      defaultSortDirection: 'asc',
      sortIcon: 'chevron-up',
      sortIconSize: 'is-medium',
      currentPage: 1,
      perPage: 5,
    };
  },

  computed: {
    ...mapGetters([
      'websites',
      // ...
    ]),
  },

};
</script>

<style scoped>

</style>
