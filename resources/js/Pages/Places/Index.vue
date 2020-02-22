<template>
  <div>
    <h1 class="mb-8 font-bold text-3xl">Places</h1>
      <input class="p-4 full-width block border" type="text" v-model="form.search" />
    <div class="grid grid-cols-4 gap-4">
      <place v-for="place in places" :key="place.id" :place="place" />
    </div>
  </div>
</template>

<script>
import Layout from '@/Shared/Layout'
import Place from '@/Pages/Places/View';
import {throttle, pickBy} from 'lodash';

export default {
  metaInfo: { title: 'Places' },
  layout: Layout,
  components: {
      Place
  },
  props: {
      places: Array,
      filters: Object
  },
  data() {
    return {
      form: {
        search: this.filters.search,
        type: 'towns'
      }
    }
  },
  watch: {
      form: {
          handler: throttle(function() {
              let query = pickBy(this.form);
              this.$inertia.replace(this.route('places.index', Object.keys(query).length ? query : { remember: 'forget' }));
          }, 150),
          deep: true,
      },
  },
}
</script>