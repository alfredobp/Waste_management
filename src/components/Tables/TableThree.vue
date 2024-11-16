<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getReportsForCompany } from '@/services/company';
import { useAuthStore } from '@/stores/authStore';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const authStore = useAuthStore();
const uidCompany = authStore?.userData?.company ?? '4cs12ENBMQdRf9m8j48B';

const packages = ref([]);

const fetchReportsForCompany = async (companyId: string) => {
  try {
    console.log(uidCompany);
    packages.value = await getReportsForCompany(uidCompany);
    console.log(`Reportes para la compañía ${companyId}:`, packages.value);
  } catch (error) {
    console.error(`Error al obtener los reportes de la compañía ${uidCompany}:`, error);
  }
};

onMounted(async () => {
  await fetchReportsForCompany(uidCompany);
});

// Función para descargar el PDF
const downloadPDF = () => {
  const doc = new jsPDF();

  // Título del PDF
  doc.text('Reportes de la Compañía', 14, 10);

  // Configuración de la tabla
  const tableColumn = ['Período', 'Descripción', 'Código LER', 'Fecha Emisión', 'Estado'];
  const tableRows = packages.value.map((item: any) => [
    '06-2024', // Período (puedes reemplazarlo si tienes el dato)
    item.description_waste || '-',
    item.code_ler || '-',
    new Date(item.created_at.seconds * 1000 + item.created_at.nanoseconds / 1e6).toLocaleDateString(),
    item.status || '-',
  ]);

  // Generar la tabla
  autoTable(doc, {
    head: [tableColumn],
    body: tableRows,
    startY: 20,
  });

  // Descargar el archivo PDF
  doc.save('reportes.pdf');
};
</script>

<template>
  <div
    class="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1"
  >
    <button @click="downloadPDF" class="mb-4 bg-primary text-white py-2 px-4 rounded">
      Descargar PDF
    </button>

    <div class="max-w-full overflow-x-auto">
      <table class="w-full table-auto">
        <thead>
          <tr class="bg-gray-2 text-left dark:bg-meta-4">
            <th class="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
              {{$t('Período')}}
            </th>
            <th class="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
              {{$t('Descripción')}}
            </th>
            <th class="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
              {{$t('Código LER')}}
            </th>
            <th class="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
              {{$t('Fecha emisión')}}
            </th>
            <th class="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white"> {{$t('Estado')}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in packages" :key="index">
            <td class="py-5 px-4 pl-9 xl:pl-11">
              <h5 class="font-medium text-black dark:text-white">06-2024</h5>
            </td>
            <td class="py-5 px-4 pl-9 xl:pl-11">
              <h5 class="font-medium text-black dark:text-white">{{ item.description_waste }}</h5>
            </td>
            <td class="py-5 px-4">
              <h5 class="font-medium text-xs">{{ item.code_ler }}</h5>
            </td>
            <td class="py-5 px-4" v-if="item.created_at">
              {{ new Date(item.created_at.seconds * 1000 + item.created_at.nanoseconds / 1e6).toLocaleDateString() }}
            </td>
            <td class="py-5 px-4">
              <p
                class="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium"
                :class="{
                  'bg-warning text-warning': item.status === $t('pending'),
                  'bg-danger text-danger': item.status === $t('Active'),
                  'bg-success text-success': item.status === $t('Draft')
                }"
              >
                {{ item.status }}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
