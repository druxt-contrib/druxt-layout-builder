<script>
import DruxtModule from 'druxt/dist/components/DruxtModule.vue'

export default {
  name: 'DruxtLayoutBuilderSection',

 extends: DruxtModule,

  props: {
    entity: {
      type: Object,
      required: true,
    },

    section: {
      type: Object,
      required: true,
    }
  },

  computed: {
    components: ({ section }) => section.components
  },

  druxt: {
    /**
     * @param {object} context - The module component ViewModel.
     * @returns {ComponentOptions}
     */
    componentOptions: ({ section }) => [
      [section.layout_id],
      ['default'],
    ],

    /**
     * Provides propsData for the DruxtWrapper.
     *
     * @param {object} context - The module component ViewModel.
     * @returns {PropsData}
     */
    propsData: ({ entity, section }) => ({ entity, section }),

    /**
     * @return {ScopedSlots} The Scoped slots object.
     */
    slots(h) {
      const slots = {}

      this.components.forEach((component, index) => {
        slots[`component-${index}`] = () => h('DruxtLayoutBuilderComponent', {
          props: {
            entity: this.entity,
            item: component,
          }
        })
      })

      slots.default = () => h('div', this.components.map((component, index) => slots[`component-${index}`]()))

      return slots
    }
  }
}
</script>
