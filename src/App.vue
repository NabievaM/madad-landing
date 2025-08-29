<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <HeaderSection />

    <main class="flex-1 px-0 py-10 space-y-6">
      <ServicesSection />
    </main>

    <Footer :phone="phone" />
  </div>
</template>

<script setup>
import HeaderSection from "./components/HeaderSection.vue";
import ServicesSection from "./components/ServicesSection.vue";
import Footer from "./components/Footer.vue";

const phone = "+998501500909";
</script>
