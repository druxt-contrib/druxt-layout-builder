<template>
  <DruxtRouter path="/node/1">
    <template #default="{ route }">
      <DruxtEntity v-bind="route.props">
        <template #default="{ entity }">
          <DruxtLayoutBuilder :entity="entity" />
        </template>
      </DruxtEntity>
    </template>
  </DruxtRouter>
</template>
