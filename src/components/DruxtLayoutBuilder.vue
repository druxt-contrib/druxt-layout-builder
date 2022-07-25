<template>
  <div class="layout_builder">
    <template v-for="(section, index) of sections">
      <component
        :is="componentIs(section.layout_id)"
        v-if="componentIs(section.layout_id) !== 'div'"
        :key="index"
        :section="section"
      >
        <template
          v-for="component of Object.values(section.components)"
          #[component.uuid]
        >
          <component
            :is="componentIs(component.configuration.id)"
            v-if="componentIs(component.configuration.id) !== 'div'"
            :key="component.uuid"
            :component="component"
            :entity="entity"
          />

          <DruxtDebug
            v-else
            :key="component.uuid"
            :summary="`${componentName(component.configuration.id)} missing`"
          >
            <pre><code>{{ JSON.stringify(component, null, '  ') }}</code></pre>
          </DruxtDebug>
        </template>
      </component>

      <DruxtDebug
        v-else
        :key="index"
        :summary="`${componentName(section.layout_id)} missing`"
      >
        <pre><code>{{ JSON.stringify(section, null, '  ') }}</code></pre>
      </DruxtDebug>
    </template>
  </div>
</template>

<script>
import { pascalCase, upperFirst } from 'scule'

export default {
  name: 'DruxtLayoutBuilder',

  props: {
    entity: {
      type: Object,
      required: true,
    }
  },

  computed: {
    sections: ({ entity }) => entity.attributes.layout_builder__layout
  },

  methods: {
    componentIs(id) {
      const name = this.componentName(id)
      return this.$nuxt.$options.components[name] ? name : 'div'
    },

    componentName(id) {
      return `DruxtLayoutBuilder${pascalCase(id.split(':').map((s) => upperFirst(s)).join(''))}`
    },
  }
}
</script>
