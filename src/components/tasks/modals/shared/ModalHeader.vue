<template>
  <q-card-section class="row">
    <div class="text-h6"><slot></slot></div>
    <q-space />
    <q-btn flat round dense icon="close" v-close-popup />
  </q-card-section>
</template>
