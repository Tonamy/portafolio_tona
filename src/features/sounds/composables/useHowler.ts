import { onMounted, onBeforeUnmount, ref, watch } from "vue"; // Cambiado onUnmounted por onBeforeUnmount por consistencia
import gsap from "gsap";
import { lerp } from "../../../utils/math";
import { Howler } from "howler";
import { isFeatureEnabled } from "../../../utils/features";
import { tick as contactTick } from "../core/contact";
import { useAgent } from "../../../composables/useAgent";
import { stopSnoreRepetition } from "../core/contact";
import { tick as roomTick } from "../core/room";
import { sounds } from "../definitions/sounds";
import { getSoundsHowl } from "../utils/sounds";

import type { SoundKey } from "../types";

export const howlerUnlocked = ref(false);
export const soundsEnabled = ref(false);

Howler.volume(0);

export const useHowler = () => {
  const { isTouch } = useAgent();
  const enabledVolume = ref<number>(0);

  const handleUnlocked = () => {
    howlerUnlocked.value = true;

    if (isTouch.value) {
      soundsEnabled.value = false;
      return;
    }

    const storeItem = localStorage.getItem("portfolio-soundsEnabled");
    if (storeItem) {
      soundsEnabled.value = storeItem === "true";
    } else {
      soundsEnabled.value = true;
      localStorage.setItem("portfolio-soundsEnabled", "true");
    }
  };

  const tick = () => {
    // Si el navegador bloqueó el audio, forzamos el desbloqueo lógico 
    // para que el preloader no se congele. El audio real despertará al interactuar.
    if (!howlerUnlocked.value) {
      handleUnlocked();
    } else if (!isTouch.value) {
      contactTick();
      roomTick();

      const currentVolume = Howler.volume();
      if (currentVolume > 0.99 && enabledVolume.value === 1) {
        return;
      }
      const speed = enabledVolume.value === 1 ? 0.01 : 0.05;
      Howler.volume(lerp(currentVolume, enabledVolume.value, speed));
    }
  };

  const handleVisibilityChange = () => {
    Howler.mute(document.visibilityState === "hidden");
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.code === "KeyM" && !isTouch.value) {
      soundsEnabled.value = !soundsEnabled.value;
    }
  };

  // Disparador para despertar el motor de audio de Howler en cuanto el usuario interactúe
  const resumeAudioContext = () => {
    if (Howler.ctx && Howler.ctx.state === "suspended") {
      Howler.ctx.resume().then(() => {
        console.log("[Audio] Context resumed successfully via interaction.");
      }).catch(err => console.log("[Audio] Failed to resume context:", err));
    }
  };

  watch(soundsEnabled, (newVal) => {
    if (!isFeatureEnabled("sounds") || isTouch.value) return;
    enabledVolume.value = newVal ? 1 : 0;
    localStorage.setItem("portfolio-soundsEnabled", newVal.toString());
  });

  const loadAllSounds = () => {
    for (const sound of Object.keys(sounds) as SoundKey[]) {
      const howl = getSoundsHowl(sound);
      if (howl) {
        howl.load();
      }
    }
  };

  onMounted(() => {
    if (!isFeatureEnabled("sounds")) return;
    Howler.volume(0);

    if (howlerUnlocked.value) {
      soundsEnabled.value = localStorage.getItem("portfolio-soundsEnabled") === "true";
    }

    gsap.ticker.add(tick);
    window.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("keydown", handleKeyPress);
    
    // Escuchamos cualquier interacción inicial en la ventana para activar el audio de Howler
    window.addEventListener("click", resumeAudioContext, { once: true });
    window.addEventListener("keydown", resumeAudioContext, { once: true });

    if (!isTouch.value) {
      loadAllSounds();
    }
  });

  onBeforeUnmount(() => {
    if (!isFeatureEnabled("sounds")) return;
    gsap.ticker.remove(tick);
    window.removeEventListener("visibilitychange", handleVisibilityChange);
    window.removeEventListener("keydown", handleKeyPress);
    window.removeEventListener("click", resumeAudioContext);
    window.removeEventListener("keydown", resumeAudioContext);
    stopSnoreRepetition();
  });
};