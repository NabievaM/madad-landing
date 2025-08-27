<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <div class="flex-1 container mx-auto px-4 py-10 space-y-6">
      <ServiceCard
        v-for="(item, i) in services"
        :key="i"
        :title="item.title"
        :description="item.desc"
        :phone="phone"
        :icon="item.icon"
        :gradient="item.gradient"
        v-model="openIndex[i]"
        @update:modelValue="(val) => handleToggle(i, val)"
      />
    </div>

    <Footer :phone="phone" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ServiceCard from "./components/ServiceCard.vue";
import Footer from "./components/Footer.vue";
import { services } from "./data/servicesData";

const phone = "+99850 150 0909";

const openIndex = ref(services.map(() => false));

function handleToggle(index, value) {
  openIndex.value = openIndex.value.map((_, i) =>
    i === index ? value : false
  );
}
</script>
