<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <section
      class="px-6 md:px-12 py-8 bg-gradient-to-r from-blue-50 to-cyan-50"
    >
      <div class="max-w-3xl mx-auto text-center">
        <h1
          class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
        >
          Madad IT Agency
        </h1>
        <p class="mt-3 text-gray-700 text-lg leading-relaxed">
          Biznesingizni yangi bosqichga olib chiqing – xizmat, savdo va ta’lim
          bitta ekotizimda.
        </p>
        <p class="mt-2 text-sm text-gray-500 italic">
          MADAD raqamli texnologiyalar agentligi
        </p>

        <div class="mt-6 flex justify-center gap-4">
          <a
            href="tel:+998336007707"
            class="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium shadow hover:opacity-90 transition"
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
            +998 33 600 77 07
          </a>
          <a
            href="https://madad.top/"
            target="_blank"
            class="px-4 py-2 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-white/70 transition"
          >
            🌐 madad.top
          </a>
        </div>
      </div>
    </section>

    <main class="flex-1 px-0 py-10 space-y-6">
      <ServiceCard
        v-for="(item, i) in services"
        :key="i"
        :title="item.title"
        :description="item.desc"
        :phone="phone"
        :icon="item.icon"
        :gradient="item.gradient"
        :url="item.url"
        v-model="openIndex[i]"
        @update:modelValue="(val) => handleToggle(i, val)"
      />
    </main>

    <Footer :phone="phone" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ServiceCard from "./components/ServiceCard.vue";
import Footer from "./components/Footer.vue";
import { services } from "./data/servicesData";

const phone = "+998501500909";
const openIndex = ref(services.map(() => false));

function handleToggle(index, value) {
  openIndex.value = openIndex.value.map((_, i) =>
    i === index ? value : false
  );
}
</script>
