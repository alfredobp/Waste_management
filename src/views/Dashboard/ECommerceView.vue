<script setup lang="ts">
import DataStatsOne from '@/components/DataStats/DataStatsOne.vue'
import ChartOne from '@/components/Charts/ChartOne.vue'
import ChartThree from '@/components/Charts/ChartThree.vue'
import ChartTwo from '@/components/Charts/ChartTwo.vue'
import ChatCard from '@/components/ChatCard.vue'
import MapOne from '@/components/Maps/MapOne.vue'
import TableOne from '@/components/Tables/TableOne.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { getUserData } from '@/services/users';
import { onMounted, ref } from 'vue'

interface UserData {
  first_name: string;
  last_name: string;
  rol: string;
}

const userData = ref<UserData | null>(null);

onMounted(async () => {
  try {
    userData.value = await getUserData() as UserData;
  } catch (error) {
    console.error("Error al cargar los datos del usuario:", error);
  }
})

</script>

<template>
<DefaultLayout>
   Hello {{ userData?.first_name }} {{ userData?.last_name }} ({{ userData?.rol }})
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      <DataStatsOne />
    </div>

    <!-- <div class="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5"> -->
      <!-- ====== Chart One Start -->
      <!-- <ChartOne /> -->
      <!-- ====== Chart One End -->

      <!-- ====== Chart Two Start -->
      <ChartTwo />
      <!-- ====== Chart Two End -->

      <!-- ====== Chart Three Start -->
      <ChartThree />
      <!-- ====== Chart Three End -->

      <!-- ====== Map One Start -->
      <!-- <MapOne /> -->
      <!-- ====== Map One End -->

      <!-- ====== Table One Start -->
      <!-- <div class="col-span-12 xl:col-span-8"> -->
        <!-- <TableOne /> -->
      <!-- </div> -->
      <!-- ====== Table One End -->

      <!-- ====== Chat Card Start -->
      <!-- <ChatCard /> -->
      <!-- ====== Chat Card End -->
    <!-- </div> -->
  </DefaultLayout>
</template>
