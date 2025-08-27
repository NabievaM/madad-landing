<template>
  <div
    class="w-full max-w-5xl mx-auto cursor-pointer transition-all duration-500 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.01] overflow-hidden"
    @click="toggle"
  >
    <div
      class="flex items-center p-6 bg-gradient-to-r text-white"
      :class="`bg-gradient-to-r ${gradient}`"
    >
      <div class="flex items-center gap-4">
        <div class="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
          <component :is="icon" class="w-7 h-7" />
        </div>
        <h2 class="text-2xl font-bold tracking-wide">
          {{ title }}
        </h2>
      </div>
    </div>

    <transition name="expand">
      <div v-if="modelValue" class="px-6 pb-6 pt-4 space-y-3 bg-white">
        <div
          v-for="(line, i) in description"
          :key="i"
          class="flex items-start p-3 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition"
        >
          <div class="text-green-500 mt-1">
            <CheckCircle class="w-5 h-5" />
          </div>
          <p class="ml-3 text-gray-700 leading-relaxed tracking-wide">
            {{ line }}
          </p>
        </div>

        <div class="mt-6 font-semibold text-gray-900 text-lg flex items-center">
          <Phone class="w-5 h-5 text-green-600 mr-2" /> {{ phone }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { CheckCircle, Phone } from "lucide-vue-next";

const props = defineProps({
  title: String,
  description: Array,
  phone: String,
  modelValue: Boolean,
  icon: Object,
  gradient: String,
});

const emit = defineEmits(["update:modelValue"]);

const toggle = () => {
  emit("update:modelValue", !props.modelValue);
};
</script>

<style>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.4s ease;
}
.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}
.expand-enter-to,
.expand-leave-from {
  max-height: 1000px;
  opacity: 1;
}
</style>
