<template>
  <div v-html="html" />
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
    html: ({ entity, field }) => {
      if (!entity.attributes[field]) return undefined
      if (typeof entity.attributes[field] === 'string') return entity.attributes[field]
      if (typeof entity.attributes[field] === 'object' && entity.attributes[field].processed) return entity.attributes[field].processed
      return undefined
    }
  }
}
</script>
