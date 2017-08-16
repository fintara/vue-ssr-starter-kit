<template>
  <div>
    <div v-for="topic in topics">
      <p>{{topic.title}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('base', {
      topics: 'getTopics',
    }),
  },

  asyncData ({ store }) {
    return store.dispatch(`base/getTopics`)
  },
}
</script>
