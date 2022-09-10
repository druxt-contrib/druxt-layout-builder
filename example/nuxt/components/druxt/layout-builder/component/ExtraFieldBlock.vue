<template>
  <div v-if="field === 'links'">
    @TODO - Node page links
  </div>
  <div v-else />
</template>

<script>
export default {
  props: {
    entity: {
      type: Object,
      required: true,
    },

    item: {
      type: Object,
      required: true,
    }
  },

  computed: {
    field: ({ item }) => item.configuration.id.split(':').pop(),
  }
}
</script>
