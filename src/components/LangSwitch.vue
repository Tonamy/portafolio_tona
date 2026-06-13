<script setup lang="ts">
import { computed } from "vue";
import Button from "./Button.vue";
import { locale } from "../i18n/store";
import { changeLocale } from "../i18n/utils/locale";

// Lista ordenada de los 3 idiomas permitidos
const availableLocales = ["es", "en", "de"] as const;

// Valor seguro para mostrar en pantalla
const safeLocale = computed(() => locale.value || "es");

const handleLangSwitch = () => {
  // 1. Obtenemos el índice actual. Usamos 'as any' porque el store podría tener cualquier valor
  const currentIndex = availableLocales.indexOf(safeLocale.value as any);
  
  // 2. Calculamos el siguiente índice
  const nextIndex = (currentIndex + 1) % availableLocales.length;
  
  // 3. Obtenemos el idioma siguiente de forma segura
  const nextLocale = availableLocales[nextIndex];

  // 4. VALIDACIÓN: Aseguramos que nextLocale es uno de los idiomas válidos antes de llamar a la función
  if (nextLocale === "es" || nextLocale === "en" || nextLocale === "de") {
    changeLocale(nextLocale);
  } else {
    // Fallback: si por alguna razón falla, forzamos a español
    changeLocale("es");
  }
};
</script>

<template>
  <Button
    variant="border"
    size="sm"
    @click="handleLangSwitch"
    data-cursor="circle-white"
    data-sound="click"
    data-hoversound="hover"
  >
    {{ safeLocale.toUpperCase() }}
  </Button>
</template>