<template>
  <footer
    class="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-10 mt-12"
  >
    <div
      class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6"
    >
      <p class="text-lg font-semibold">Biz bilan bog‘laning</p>
      <div class="flex flex-col md:flex-row items-center gap-6">
        <a
          :href="`tel:${phone}`"
          class="flex items-center gap-2 text-green-400 hover:text-green-500 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            class="w-5 h-5"
          >
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 
                       19.79 19.79 0 0 1-8.63-3.07 
                       19.5 19.5 0 0 1-6-6 
                       19.79 19.79 0 0 1-3.07-8.63 
                       A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 
                       1.72c.12.81.37 1.6.73 2.34a2 2 0 0 1-.45 
                       2.11L8.09 9.91a16 16 0 0 0 6 6l1.74-1.3a2 
                       2 0 0 1 2.11-.45c.74.36 1.53.61 
                       2.34.73A2 2 0 0 1 22 16.92z"
            />
          </svg>
          {{ phone }}
        </a>

        <a
          href="https://t.me/username"
          target="_blank"
          class="flex items-center gap-2 hover:text-blue-400 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M9.999 15.168 9.94 19l2.583-2.312 
                       4.63 3.594c.825.527 1.422.256 1.63-.765 
                       l2.955-13.864c.27-1.211-.44-1.682-1.24-1.39 
                       L2.95 9.362c-1.18.465-1.168 1.13-.2 1.42 
                       l5.355 1.674L18.4 5.9c.398-.242.76-.108.462.134z"
            />
          </svg>
          @username
        </a>

        <a
          href="mailto:demo@gmail.com"
          class="flex items-center gap-2 hover:text-red-400 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M20 4H4c-1.103 0-2 .897-2 2v12c0 
                       1.103.897 2 2 2h16c1.103 0 2-.897 
                       2-2V6c0-1.103-.897-2-2-2zM4 8l8 
                       5 8-5v2l-8 5-8-5V8z"
            />
          </svg>
          demo@gmail.com
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
defineProps({
  phone: String,
});
</script>
