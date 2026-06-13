<script setup lang="ts">
import { ref, nextTick } from "vue";

// Control de estado de la ventana
const isOpen = ref(false);
const messageInput = ref("");
const chatContainer = ref<HTMLElement | null>(null);

// Tipado básico de mensajes
interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  time: string;
}

// Función generadora de ID compatible con todos los navegadores
const generateId = () => Math.random().toString(36).substring(2, 9);

// Mensaje de bienvenida inicial
const messages = ref<Message[]>([
  {
    id: "welcome",
    sender: "bot",
    text: "¡Hola! ¿Te gustaría automatizar algún proceso, diseñar un bot o implementar un chat conversacional? Escribe 'Hola' para comenzar y analicemos tu idea.",
    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
  },
]);

const toggleChat = () => {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    scrollToBottom();
  }
};

const sendMessage = async () => {
  if (!messageInput.value.trim()) return;

  const userMessage: Message = {
    id: generateId(),
    sender: "user",
    text: messageInput.value.trim(),
    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
  };

  messages.value.push(userMessage);
  const textToSend = messageInput.value;
  messageInput.value = "";
  
  await scrollToBottom();

  try {
    // 🚀 Conexión real con tu backend en Render
    const response = await fetch("https://portafolio-ea1k.onrender.com/chat", { 
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: textToSend })
  });

    if (!response.ok) throw new Error("Error en el servidor");

    const data = await response.json();

    messages.value.push({
      id: generateId(),
      sender: "bot",
      text: data.reply || "No obtuve una respuesta válida.",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    });
  } catch (error) {
    console.error("Error al conectar con Render:", error);
    messages.value.push({
      id: generateId(),
      sender: "bot",
      text: "Lo siento, hubo un problema al conectar con mi servidor. Por favor, intenta de nuevo más tarde.",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    });
  }
  
  await scrollToBottom();
};

const scrollToBottom = async () => {
  await nextTick();
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
  }
};
</script>

<template>
  <div class="ai-chat-widget">
    <button 
      class="chat-trigger" 
      :class="{ 'is-active': isOpen }" 
      @click="toggleChat"
      aria-label="Hablar con mi asistente de IA"
    >
      <div v-if="!isOpen" class="icon-chat">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
          <circle cx="18" cy="18" r="4" fill="#ff4081" stroke="none"></circle> 
          <path d="M18 16v4M16 18h4" stroke="white" stroke-width="2"></path> 
        </svg>
      </div>
      <span v-else class="icon-close">✕</span>
    </button>

    <Transition name="fade-slide">
      <div v-if="isOpen" class="chat-window">
        <div class="chat-header">
          <div class="bot-avatar">
            <span class="avatar-pulse"></span>
            <span class="avatar-icon">🤖</span>
          </div>
          <div class="header-info">
            <h3>Omnichannel AI Bot</h3>
            <p>En línea • Backend en Python</p>
          </div>
        </div>

        <div ref="chatContainer" class="chat-messages">
          <div 
            v-for="msg in messages" 
            :key="msg.id" 
            class="message-wrapper"
            :class="`is-${msg.sender}`"
          >
            <div class="message-bubble">
              <p class="message-text" v-html="msg.text"></p>
              <span class="message-time">{{ msg.time }}</span>
            </div>
          </div>
        </div>

        <form @submit.prevent="sendMessage" class="chat-input-area">
          <input 
            v-model="messageInput"
            type="text" 
            placeholder="Escribe un mensaje..." 
            class="chat-input"
          />
          <button type="submit" class="chat-send-btn" :disabled="!messageInput.trim()">
            ➔
          </button>
        </form>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.ai-chat-widget { position: fixed; bottom: 24px; right: 24px; z-index: 1000; font-family: system-ui, -apple-system, sans-serif; }
.chat-trigger { width: 56px; height: 56px; border-radius: 50%; background: linear-gradient(135deg, #00f2fe 0%, #a855f7 100%); border: none; color: #ffffff; font-size: 24px; cursor: pointer; box-shadow: 0 8px 24px rgba(0, 242, 254, 0.2); display: flex; align-items: center; justify-content: center; transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease; }
.chat-trigger:hover { transform: scale(1.05) translateY(-2px); box-shadow: 0 12px 28px rgba(168, 85, 247, 0.4); }
.chat-trigger.is-active { background: #1a1a1a; border: 1px solid rgba(255, 255, 255, 0.1); }
.chat-window { position: fixed; bottom: 96px; right: 24px; width: 360px; height: min(550px, calc(100vh - 140px)); background: #0d0d11; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; box-shadow: 0 12px 40px rgba(0, 0, 0, 0.7); display: flex; flex-direction: column; overflow: hidden; backdrop-filter: blur(10px); }
.chat-header { padding: 16px; background: rgba(255, 255, 255, 0.02); border-bottom: 1px solid rgba(255, 255, 255, 0.05); display: flex; align-items: center; gap: 12px; }
.bot-avatar { position: relative; width: 36px; height: 36px; background: #16161f; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(0, 242, 254, 0.3); }
.avatar-pulse { position: absolute; width: 8px; height: 8px; background: #63ffb4; border-radius: 50%; bottom: 0; right: 0; border: 2px solid #0d0d11; }
.header-info h3 { font-size: 14px; font-weight: 600; color: #ffffff; margin: 0; }
.header-info p { font-size: 11px; color: #63ffb4; margin: 0; }
.chat-messages { flex: 1; padding: 16px; overflow-y: auto; display: flex; flex-direction: column; gap: 12px; scroll-behavior: smooth; }
.message-wrapper { display: flex; width: 100%; }
.message-wrapper.is-bot { justify-content: flex-start; }
.message-wrapper.is-user { justify-content: flex-end; }
.message-bubble { max-width: 80%; padding: 10px 14px; position: relative; }
.message-wrapper.is-bot .message-bubble { background: #161622; border-radius: 12px 12px 12px 4px; color: #e2e8f0; border: 1px solid rgba(255, 255, 255, 0.03); }
.message-wrapper.is-user .message-bubble { background: linear-gradient(135deg, rgba(0, 242, 254, 0.15) 0%, rgba(168, 85, 247, 0.15) 100%); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 12px 12px 4px 12px; color: #ffffff; }
.message-text { font-size: 13px; line-height: 1.5; margin: 0; }
.message-time { font-size: 9px; color: rgba(255, 255, 255, 0.3); display: block; text-align: right; margin-top: 4px; }
.chat-input-area { padding: 12px; background: rgba(0, 0, 0, 0.2); border-top: 1px solid rgba(255, 255, 255, 0.05); display: flex; gap: 8px; }
.chat-input { flex: 1; background: #141419; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 8px; padding: 8px 12px; color: #ffffff; font-size: 13px; }
.chat-input:focus { outline: none; border-color: #00f2fe; }
.chat-send-btn { background: transparent; border: none; color: #a855f7; cursor: pointer; padding: 0 8px; }
.chat-send-btn:disabled { color: rgba(255, 255, 255, 0.2); }
</style>