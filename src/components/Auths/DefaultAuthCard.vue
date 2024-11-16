<script setup lang="ts">
const props = defineProps(['subtitle', 'title', 'customClasses'])
</script>

<template>
  <!-- ====== Forms Section Start -->
  <div
    class="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
  >
    <div class="flex flex-wrap items-center">
      <div class="hidden w-full xl:block xl:w-1/2">
        <div class="py-17.5 px-26 text-center">
          <router-link class="mb-5.5  flex align-middle justify-center items-center gap-1" to="/">
            <img class="hidden dark:block max-w-10" src="@/assets/images/illustration/logo.png" alt="Logo" />
            <img class="dark:hidden max-w-10" src="@/assets/images/illustration/logo.png" alt="Logo" />
            Waste Management Solution
          </router-link>

          <p class="font-medium 2xl:px-20">
            La plataforma para la gestión de residuos de su empresa, con una interfaz amigable.
          </p>

          <span class="mt-15 inline-block">
            <img src="@/assets/images/illustration/plastic-waste-7617451_1280.jpg" alt="illustration" />
          </span>
        </div>
      </div>
      <div class="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
        <div class="w-full p-4 sm:p-12.5 xl:p-17.5">
          <span class="mb-1.5 block font-medium">{{ props.subtitle }}</span>
          <h2 class="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
            {{ props.title }}
          </h2>

          <slot></slot>
        </div>
      </div>
    </div>
  </div>
  <!-- ====== Forms Section End -->
</template>
