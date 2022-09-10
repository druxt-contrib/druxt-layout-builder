<template>
  <DruxtRouter path="/node/1">
    <template #default="{ route }">
      <h1>@druxt-contrib/layout-builder module example:</h1>
      <details open>
        <summary>&lt;DruxtLayoutBulder :entity="entity" /&gt;</summary>
        <DruxtEntity v-bind="route.props">
          <template #default="{ entity }">
            <DruxtLayoutBuilder :entity="entity" />
          </template>
        </DruxtEntity>
      </details>
    </template>
  </DruxtRouter>
</template>

<style scoped>
details {
  border: 1px dashed lightgrey;
  padding: 1rem;
}

summary {
  font-weight: bold;
  margin-bottom: 2rem;
}
</style>
