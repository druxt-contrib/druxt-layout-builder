const baseUrl = process.env.GITPOD_WORKSPACE_ID
  ? `https://8080-${process.env.GITPOD_WORKSPACE_ID}.${process.env.GITPOD_WORKSPACE_CLUSTER_HOST}`
  : 'http://druxt-contrib-layout-builder.ddev.site'

export default {
  buildModules: [
    'druxt-entity',
    'druxt-router/nuxt',
    '@druxt-contrib/layout-builder'
  ],
  druxt: { baseUrl }
}
