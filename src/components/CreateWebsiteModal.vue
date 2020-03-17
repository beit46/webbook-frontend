<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">What's firing you up today?</p>
    </header>
    <section class="modal-card-body">

      <div>
        <div class="form-group" :class="{ 'form-group--error': $v.website.name.$error }">
          <b-field label="name">
            <b-input
              type="name"
              :value="website.name"
              v-model.trim="$v.website.name.$model"
              placeholder="Website shortname"
            >
            </b-input>
          </b-field>
        </div>

        <div class="error" v-if="!$v.website.name.minLength">Name must have at least {{$v.website.name.$params.minLength.min}} letters.</div>


        <div class="form-group" :class="{ 'form-group--error': $v.website.url.$error }">
          <b-field label="url">
            <b-input
              v-model.trim.lazy="$v.website.url.$model"
              type="url"
              :value="website.url"
              placeholder="Your website url"
              required>
            </b-input>
          </b-field>
        </div>
        <div class="error" v-if="!$v.website.url.required">Field is required</div>
        <div class="error" v-if="!$v.website.url.minLength">Name must have at least {{$v.website.url.$params.minLength.min}} letters.</div>
      </div>


    </section>
    <footer class="modal-card-foot">
      <button class="button" type="button" @click="$parent.close()">Close</button>
      <button class="button is-primary" @click="save">Save</button>
    </footer>
  </div>
</template>

<script>
import { required, minLength, maxLength} from 'vuelidate/lib/validators';

const matchUrl = (value, vm) => value.substring(value.indexOf('@') + 1) === vm.url.substring(vm.url.indexOf('.') + 1);

export default {
  name: 'CreateWebsiteModal',

  data() {
    return {
      website: {
        url: undefined,
        name: undefined,
      },
    };
  },

  validations: {
    website: {
      url: {
        required,
        maxLength: maxLength(2083),
        minLength: minLength(3),
        matchUrl,
      },
      name: { required,
        maxLength: maxLength(255),
        minLength: minLength(3),
      },
    },
  },

  methods: {
    save() {
      this.$store.dispatch('create', this.website).then(() => {
        this.$parent.close();
      });
    },
  },
};
</script>

<style scoped>

</style>
