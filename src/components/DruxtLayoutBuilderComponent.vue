<script>
import DruxtModule from 'druxt/dist/components/DruxtModule.vue'

export default {
  name: 'DruxtLayoutBuilderComponent',

 extends: DruxtModule,

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

  // computed: {
  //   components: ({ section }) => section.components
  // },

  druxt: {
    /**
     * @param {object} context - The module component ViewModel.
     * @returns {ComponentOptions}
     */
    componentOptions: ({ item }) => [
      ((item.configuration || {}).id || '').split(':'),
      [item.region],
      [item.uuid],
      ['default'],
    ],

    /**
     * Provides propsData for the DruxtWrapper.
     *
     * @param {object} context - The module component ViewModel.
     * @returns {PropsData}
     */
    propsData: ({ entity, item }) => ({ entity, item }),

    /**
     * @return {ScopedSlots} The Scoped slots object.
     */
    slots() {
      const slots = {}

      // slots.default = () => h('DruxtDebug', {
      //   props: {
      //     json: this.item
      //   }
      // })

      return slots
    }
  }
}
</script>
