<template>
  <div class="space-y-6">
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
  </div>
</template>

<script setup>
import { ref } from "vue";
import ServiceCard from "../components/ServiceCard.vue";
import { services } from "../data/servicesData";

const phone = "+998501500909";
const openIndex = ref(services.map(() => false));

function handleToggle(index, value) {
  openIndex.value = openIndex.value.map((_, i) =>
    i === index ? value : false
  );
}
</script>
