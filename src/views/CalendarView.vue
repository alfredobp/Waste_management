<script setup lang="ts">
import { ref } from 'vue'
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'

import TableThree from '@/components/Tables/TableThree.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const pageTitle = ref('Declaración Anual')
</script>

<template>
  <DefaultLayout>
    <div class="mx-auto max-w-7xl">
      <!-- Breadcrumb Start -->
      <BreadcrumbDefault :pageTitle="pageTitle" />
      <!-- Breadcrumb End -->

    <TableThree></TableThree>
    </div>
  </DefaultLayout>
</template>
