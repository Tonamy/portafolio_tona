<script setup lang="ts">
import { computed } from "vue";
import { tagLabels, type TagVariant } from "./tagVariants";

const props = defineProps<{
  variant: TagVariant;
}>();

const classes = computed(() => ["tag", `tag-variant-${props.variant}`]);

// Propiedad computada de seguridad para garantizar que el texto se pinte siempre
const displayLabel = computed(() => {
  return tagLabels[props.variant] || props.variant;
});
</script>

<template>
  <div :class="classes">
    <p class="tag-copy">{{ displayLabel }}</p>
  </div>
</template>

<style scoped lang="scss">
.tag {
  border-radius: var(--radius-md);
  padding: calc(var(--space-xxs) - var(--stroke-md)) calc(var(--space-sm) - var(--stroke-md));
  border: var(--stroke-md) solid transparent;
  display: inline-block; /* Asegura que la píldora envuelva bien al texto */

  &-copy {
    font-size: var(--font-size-xs);
    font-weight: 700;
    margin: 0; /* Evita desfases por márgenes por defecto */
    white-space: nowrap; /* Impide que el texto interno de la etiqueta se corte */
  }

  &-variant {
    &-three {
      background-color: #ed9c55;
      color: #492708;
    }

    &-react {
      background-color: #61dafb;
      color: #0f2e36;
    }

    &-websockets {
      background-color: #2674a4;
      color: white;
    }

    &-redis {
      background-color: #ce4036;
      color: white;
    }

    &-html {
      color: var(--color-text-400);
      border-color: var(--color-grayscale-400);
    }

    &-css {
      color: var(--color-text-400);
      border-color: var(--color-grayscale-400);
    }

    &-javascript {
      background-color: #ffdf4f;
      color: #362d03;
    }

    &-node {
      background-color: #237d23;
      color: white;
    }

    &-python {
      background-color: #3776ab;
      color: white;
    }

    &-hubspot {
      background-color: #ff7a59;
      color: white;
    }

    &-teamtailor {
      background-color: #ff2a5f;
      color: white;
    }

    &-apps-script {
      background-color: #1a73e8;
      color: white;
    }

    &-next {
      background-color: white;
      color: black;
    }

    &-kubernetes {
      background-color: #326ce5;
      color: white;
    }

    &-postgresql {
      background-color: #2f6c92;
      color: white;
    }

    &-ogl {
      background-color: #0e5495;
      color: white;
    }

    &-glsl {
      background-color: #95630e;
      color: white;
    }

    /* 🧠 Inteligencia Artificial - Púrpura sofisticado */
    &-ai {
      background-color: #2e1a47;
      color: #d8b4fe;
    }

    /* 💙 Meta API - Azul corporativo */
    &-meta {
      background-color: #0c1b33;
      color: #0081fb;
    }

    /* 🖤 TikTok Trends - Fondo oscuro con acento cian brillante */
    &-tiktok {
      background-color: #121212;
      color: #00f2fe;
      border-color: #ff0050;
    }
  }
}
</style>