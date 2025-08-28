<template>
  <div
    class="w-full cursor-pointer transition-all duration-500 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.005] overflow-hidden"
    @click="toggle"
  >
    <div
      class="flex items-center p-6 text-white"
      :class="`bg-gradient-to-r ${gradient}`"
    >
      <div class="flex items-center gap-4">
        <div class="p-3 rounded-full bg-white/20 backdrop-blur-sm">
          <component :is="icon" class="w-12 h-12" />
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

        <div
          class="mt-6 font-semibold text-gray-900 text-lg flex flex-wrap items-center gap-6"
        >
          <a
            :href="`tel:${phone}`"
            class="flex items-center gap-2 text-green-600 hover:text-green-700 transition"
          >
            <Phone class="w-5 h-5" />
            {{ phone }}
          </a>

          <a
            v-if="url"
            :href="url"
            target="_blank"
            class="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition"
          >
            🌐 {{ cleanUrl }}
          </a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { CheckCircle, Phone } from "lucide-vue-next";
import { computed } from "vue";

const props = defineProps({
  title: String,
  description: Array,
  phone: String,
  modelValue: Boolean,
  icon: Object,
  gradient: String,
  url: String,
});

const emit = defineEmits(["update:modelValue"]);

const toggle = () => {
  emit("update:modelValue", !props.modelValue);
};

const cleanUrl = computed(() => {
  if (!props.url) return "";
  try {
    return new URL(props.url).hostname.replace("www.", "");
  } catch {
    return props.url;
  }
});
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
