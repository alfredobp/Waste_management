<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from "vue-router";
import { getUserData, saveUserData } from '@/services/users';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

interface FormData {
  first_name: string;
  last_name: string;
  phone: string;
  email:string;
  rol:string;
  DocumentData: any;
  
  // Add other properties as needed
}

const formData = ref<FormData>( {
  first_name: '',
  last_name: '',
  phone: '',
  email: '',
  rol: '',
  DocumentData: {},

  // Add other properties as needed
})

const successSave=ref(false)
import AlertSuccess from './Alerts/AlertSuccess.vue';

const router=useRouter();
const handleSubmit = async () => {
  try {
    await saveUserData(formData.value);
    console.log("Datos guardados correctamente");
    successSave.value=true
    setInterval(()=>{successSave.value=false},2000)
  } catch (error) {
    console.error("Error al guardar datos del usuario:", error);
  }
  // Handle form submission for personal information
}

/**
 * Handles the cancel action for personal information form.
 * Redirects the user to the home page when the cancel button is clicked.
 */
const handleCancel = () => {
  // Handle cancel action for personal information
    router.push(('/'))
}

const handlePhotoSubmit = () => {
  // Handle form submission for user photo
}

const handleFileChange = () => {
  // Handle file change for user photo
}

const handlePhotoCancel = () => {
  // Handle cancel action for user photo
}

const deletePhoto = () => {
  // Handle delete action for user photo
}

const updatePhoto = () => {
  // Handle update action for user photo
}
onMounted(async ()=>{

   formData.value=await  getUserData();
})
</script>

<template>
  <AlertSuccess v-if="successSave"></AlertSuccess>
  <div class="grid grid-cols-5 gap-8">
    <!-- Personal Information Section -->
    <div class="col-span-5 xl:col-span-3">
      <div
        class="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
      >
        <div class="border-b border-stroke py-4 px-7 dark:border-strokedark">
          <h3 class="font-medium text-black dark:text-white">Personal Information</h3>
        </div>
        <div class="p-7">
          <form @submit.prevent="handleSubmit">
            <!-- Full Name Section -->
            <div class="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
              <div class="w-full sm:w-1/2">
                <label
                  class="mb-3 block text-sm font-medium text-black dark:text-white"
                  for="fullName"
                  >Full Name</label
                >
                <div class="relative">
                  <span class="absolute left-4.5 top-4">
                    <svg
                      class="fill-current"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.72039 12.887C4.50179 12.1056 5.5616 11.6666 6.66667 11.6666H13.3333C14.4384 11.6666 15.4982 12.1056 16.2796 12.887C17.061 13.6684 17.5 14.7282 17.5 15.8333V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333C16.2064 18.3333 15.8333 17.9602 15.8333 17.5V15.8333C15.8333 15.1703 15.5699 14.5344 15.1011 14.0655C14.6323 13.5967 13.9964 13.3333 13.3333 13.3333H6.66667C6.00363 13.3333 5.36774 13.5967 4.8989 14.0655C4.43006 14.5344 4.16667 15.1703 4.16667 15.8333V17.5C4.16667 17.9602 3.79357 18.3333 3.33333 18.3333C2.8731 18.3333 2.5 17.9602 2.5 17.5V15.8333C2.5 14.7282 2.93899 13.6684 3.72039 12.887Z"
                          fill=""/>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.99967 3.33329C8.61896 3.33329 7.49967 4.45258 7.49967 5.83329C7.49967 7.214 8.61896 8.33329 9.99967 8.33329C11.3804 8.33329 12.4997 7.214 12.4997 5.83329C12.4997 4.45258 11.3804 3.33329 9.99967 3.33329ZM5.83301 5.83329C5.83301 3.53211 7.69849 1.66663 9.99967 1.66663C12.3009 1.66663 14.1663 3.53211 14.1663 5.83329C14.1663 8.13448 12.3009 9.99996 9.99967 9.99996C7.69849 9.99996 5.83301 8.13448 5.83301 5.83329Z"
                          fill=""/>
                      </g>
                    </svg>
                  </span>
                  <input
                    v-model="formData.first_name"
                    class="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 font-normal text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Devid Jhon"
                  />
                </div>
              </div>
              <div class="w-full sm:w-1/2">
                <label
                  class="mb-3 block text-sm font-medium text-black dark:text-white"
                  for="fullName"
                  >Last Name</label
                >
                <div class="relative">
                  <span class="absolute left-4.5 top-4">
                    <svg
                      class="fill-current"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.72039 12.887C4.50179 12.1056 5.5616 11.6666 6.66667 11.6666H13.3333C14.4384 11.6666 15.4982 12.1056 16.2796 12.887C17.061 13.6684 17.5 14.7282 17.5 15.8333V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333C16.2064 18.3333 15.8333 17.9602 15.8333 17.5V15.8333C15.8333 15.1703 15.5699 14.5344 15.1011 14.0655C14.6323 13.5967 13.9964 13.3333 13.3333 13.3333H6.66667C6.00363 13.3333 5.36774 13.5967 4.8989 14.0655C4.43006 14.5344 4.16667 15.1703 4.16667 15.8333V17.5C4.16667 17.9602 3.79357 18.3333 3.33333 18.3333C2.8731 18.3333 2.5 17.9602 2.5 17.5V15.8333C2.5 14.7282 2.93899 13.6684 3.72039 12.887Z"
                          fill=""/>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.99967 3.33329C8.61896 3.33329 7.49967 4.45258 7.49967 5.83329C7.49967 7.214 8.61896 8.33329 9.99967 8.33329C11.3804 8.33329 12.4997 7.214 12.4997 5.83329C12.4997 4.45258 11.3804 3.33329 9.99967 3.33329ZM5.83301 5.83329C5.83301 3.53211 7.69849 1.66663 9.99967 1.66663C12.3009 1.66663 14.1663 3.53211 14.1663 5.83329C14.1663 8.13448 12.3009 9.99996 9.99967 9.99996C7.69849 9.99996 5.83301 8.13448 5.83301 5.83329Z"
                          fill=""/>
                      </g>
                    </svg>
                  </span>
                  <input
                    v-model="formData.last_name"
                    class="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 font-normal text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Doe"
                  />
                </div>
              </div>
            </div>
            <!-- Phone Section -->
            <div class="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
              <div class="w-full sm:w-1/2">
                <label
                  class="mb-3 block text-sm font-medium text-black dark:text-white"
                  for="phone"
                  >Phone</label
                >
                <div class="relative">
                  <span class="absolute left-4.5 top-4">
                    <svg
                      class="fill-current"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.72039 12.887C4.50179 12.1056 5.5616 11.6666 6.66667 11.6666H13.3333C14.4384 11.6666 15.4982 12.1056 16.2796 12.887C17.061 13.6684 17.5 14.7282 17.5 15.8333V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333C16.2064 18.3333 15.8333 17.9602 15.8333 17.5V15.8333C15.8333 15.1703 15.5699 14.5344 15.1011 14.0655C14.6323 13.5967 13.9964 13.3333 13.3333 13.3333H6.66667C6.00363 13.3333 5.36774 13.5967 4.8989 14.0655C4.43006 14.5344 4.16667 15.1703 4.16667 15.8333V17.5C4.16667 17.9602 3.79357 18.3333 3.33333 18.3333C2.8731 18.3333 2.5 17.9602 2.5 17.5V15.8333C2.5 14.7282 2.93899 13.6684 3.72039 12.887Z"
                          fill=""/>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.99967 3.33329C8.61896 3.33329 7.49967 4.45258 7.49967 5.83329C7.49967 7.214 8.61896 8.33329 9.99967 8.33329C11.3804 8.33329 12.4997 7.214 12.4997 5.83329C12.4997 4.45258 11.3804 3.33329 9.99967 3.33329ZM5.83301 5.83329C5.83301 3.53211 7.69849 1.66663 9.99967 1.66663C12.3009 1.66663 14.1663 3.53211 14.1663 5.83329C14.1663 8.13448 12.3009 9.99996 9.99967 9.99996C7.69849 9.99996 5.83301 8.13448 5.83301 5.83329Z"
                          fill=""/>
                      </g>
                    </svg>
                  </span>
                  <input
                    v-model="formData.phone"
                    class="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 font-normal text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>
            </div>
            <!-- Email Section -->
            <div class="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
              <div class="w-full sm:w-1/2">
                <label
                  class="mb-3 block text-sm font-medium text-black dark:text-white"
                  for="email"
                  >Email</label
                >
                <div class="relative">
                  <span class="absolute left-4.5 top-4">
                    <svg
                      class="fill-current"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.72039 12.887C4.50179 12.1056 5.5616 11.6666 6.66667 11.6666H13.3333C14.4384 11.6666 15.4982 12.1056 16.2796 12.887C17.061 13.6684 17.5 14.7282 17.5 15.8333V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333C16.2064 18.3333 15.8333 17.9602 15.8333 17.5V15.8333C15.8333 15.1703 15.5699 14.5344 15.1011 14.0655C14.6323 13.5967 13.9964 13.3333 13.3333 13.3333H6.66667C6.00363 13.3333 5.36774 13.5967 4.8989 14.0655C4.43006 14.5344 4.16667 15.1703 4.16667 15.8333V17.5C4.16667 17.9602 3.79357 18.3333 3.33333 18.3333C2.8731 18.3333 2.5 17.9602 2.5 17.5V15.8333C2.5 14.7282 2.93899 13.6684 3.72039 12.887Z"
                          fill=""/>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.99967 3.33329C8.61896 3.33329 7.49967 4.45258 7.49967 5.83329C7.49967 7.214 8.61896 8.33329 9.99967 8.33329C11.3804 8.33329 12.4997 7.214 12.4997 5.83329C12.4997 4.45258 11.3804 3.33329 9.99967 3.33329ZM5.83301 5.83329C5.83301 3.53211 7.69849 1.66663 9.99967 1.66663C12.3009 1.66663 14.1663 3.53211 14.1663 5.83329C14.1663 8.13448 12.3009 9.99996 9.99967 9.99996C7.69849 9.99996 5.83301 8.13448 5.83301 5.83329Z"
                          fill=""/>
                      </g>
                    </svg>
                  </span>
                  <input
                    v-model="formData.email"
                    class="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 font-normal text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="youremail@example.com"
                  />
                </div>
              </div>
            </div>
            <!-- Submit Button -->
            <div class="mt-5 flex justify-between gap-4">
              <button
                class="inline-flex items-center justify-center rounded bg-danger py-3.5 px-9 text-base font-semibold text-white shadow-md hover:bg-opacity-90 focus:outline-none focus:ring active:bg-danger"
                @click="handleCancel"
                type="button"
              >
                {{ t("cancel") }}
              </button>
              <button
                class="inline-flex items-center justify-center rounded bg-primary py-3.5 px-9 text-base font-semibold text-white shadow-md hover:bg-opacity-90 focus:outline-none focus:ring active:bg-primary"
                type="submit"
              >
                {{ t("save") }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- User Photo Section -->
    <div class="col-span-5 xl:col-span-2">
      <div
        class="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
      >
        <div class="border-b border-stroke py-4 px-7 dark:border-strokedark">
          <h3 class="font-medium text-black dark:text-white">User Photo</h3>
        </div>
        <div class="p-7">
          <form>
            <div class="mb-5">
            
            
              <div class="flex justify-center items-center">
                <div
                  class="h-32 w-32 flex justify-center items-center rounded-full overflow-hidden bg-gray-100 dark:bg-meta-4"
                >
                </div>
              </div>
            </div>
            <div class="mt-5 flex justify-between gap-4">
              <button
                class="inline-flex items-center justify-center rounded bg-danger py-3.5 px-9 text-base font-semibold text-white shadow-md hover:bg-opacity-90 focus:outline-none focus:ring active:bg-danger"
                @click="handlePhotoCancel"
                type="button"
              >
                {{ t("cancel") }}
              </button>
              <button
                class="inline-flex items-center justify-center rounded bg-primary py-3.5 px-9 text-base font-semibold text-white shadow-md hover:bg-opacity-90 focus:outline-none focus:ring active:bg-primary"
                @click="handlePhotoSubmit"
                type="submit"
              >
                {{ t("save") }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

