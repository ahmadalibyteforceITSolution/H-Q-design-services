<template>
  <div class="fixed bottom-6 right-6 z-50">
    <!-- Chat Window -->
    <Transition name="slide-up">
      <div 
        v-if="isOpen" 
        class="w-80 sm:w-96 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden mb-4 flex flex-col h-[480px]"
      >
        <!-- Header -->
        <div class="p-4 bg-gradient-to-r from-slate-900 to-slate-950 text-white flex items-center justify-between border-b border-slate-800">
          <div class="flex items-center gap-3">
            <div class="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-amber-500 p-0.5">
              <div class="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-bold text-xs">
                H&Q
              </div>
              <span class="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-950"></span>
            </div>
            <div>
              <h4 class="font-bold text-sm leading-tight flex items-center gap-1.5">
                <i class="fa-solid fa-robot text-emerald-400 text-xs"></i>
                H&Q AI Design Advisor
              </h4>
              <p class="text-[10px] text-slate-400">Parkview City Studio · Zameen.com Partner</p>
            </div>
          </div>
          <button 
            @click="isOpen = false"
            class="text-slate-400 hover:text-white transition-colors w-7 h-7 rounded-full flex items-center justify-center bg-slate-800/50"
          >
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        <!-- Messages Area -->
        <div ref="messageBox" class="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50/50 dark:bg-slate-950/40 text-xs">
          <div 
            v-for="(msg, i) in messages" 
            :key="i"
            :class="['flex gap-2 max-w-[85%]', msg.sender === 'user' ? 'ml-auto flex-row-reverse' : '']"
          >
            <div 
              v-if="msg.sender === 'bot'" 
              class="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-500 font-bold flex items-center justify-center text-[10px] shrink-0"
            >
              HQ
            </div>
            <div 
              :class="[
                'p-3 rounded-2xl text-xs leading-relaxed',
                msg.sender === 'user' 
                  ? 'bg-emerald-600 text-white rounded-tr-none' 
                  : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/60 rounded-tl-none shadow-sm'
              ]"
            >
              {{ msg.text }}
            </div>
          </div>

          <div v-if="isTyping" class="flex gap-2 text-slate-400 items-center text-[11px]">
            <span class="animate-bounce">●</span>
            <span class="animate-bounce delay-100">●</span>
            <span class="animate-bounce delay-200">●</span>
            <span>H&Q Advisor is typing...</span>
          </div>
        </div>

        <!-- Quick Action Prompt Pills -->
        <div class="p-2 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex gap-1.5 overflow-x-auto text-[11px]">
          <button 
            v-for="pill in promptPills" 
            :key="pill"
            @click="sendQuickPrompt(pill)"
            class="whitespace-nowrap px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-emerald-500 hover:text-white text-slate-600 dark:text-slate-300 transition-colors shrink-0"
          >
            {{ pill }}
          </button>
        </div>

        <!-- Input Box -->
        <form @submit.prevent="sendMessage" class="p-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex gap-2">
          <input 
            v-model="inputQuery" 
            type="text" 
            placeholder="Ask about floor plans, 3D renders, Parkview City..."
            class="flex-1 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-xs border border-transparent focus:border-emerald-500 focus:outline-none"
          />
          <button 
            type="submit"
            class="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-semibold text-xs transition-colors shrink-0 flex items-center gap-1"
          >
            <i class="fa-solid fa-paper-plane text-xs"></i>
          </button>
        </form>

      </div>
    </Transition>

    <!-- Floating Toggle Button -->
    <button 
      @click="isOpen = !isOpen"
      aria-label="Open H&Q AI Design Advisor"
      class="relative group w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-amber-500 text-white shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer text-xl"
    >
      <i v-if="isOpen" class="fa-solid fa-xmark"></i>
      <i v-else class="fa-solid fa-comments"></i>
      <span class="absolute -top-1 -right-1 flex h-3.5 w-3.5">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-500 border-2 border-white dark:border-slate-900"></span>
      </span>
    </button>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const isOpen = ref(false)
const inputQuery = ref('')
const isTyping = ref(false)
const messageBox = ref(null)

const messages = ref([
  { sender: 'bot', text: 'Welcome to H&Q Design Services! I am your AI Design Advisor. How can we help transform your home or office space in Parkview City, DHA, or Lahore?' }
])

const promptPills = [
  'What services do you offer?',
  'Where is your Lahore office?',
  'How much for 10 Marla 3D layout?',
  'WhatsApp direct call'
]

const scrollToBottom = () => {
  nextTick(() => {
    if (messageBox.value) {
      messageBox.value.scrollTop = messageBox.value.scrollHeight
    }
  })
}

const sendQuickPrompt = (pillText) => {
  inputQuery.value = pillText
  sendMessage()
}

const sendMessage = () => {
  const q = inputQuery.value.trim()
  if (!q) return

  messages.value.push({ sender: 'user', text: q })
  inputQuery.value = ''
  scrollToBottom()

  isTyping.value = true

  setTimeout(() => {
    isTyping.value = false
    let reply = "Thank you for reaching out! You can call us directly at 0341-6887454 or +966 50 714 3124, or click 'Get Free Quote' at the top to book an architect consultation."

    const lower = q.toLowerCase()
    if (lower.includes('service') || lower.includes('offer')) {
      reply = "H&Q Design Services offers Architectural Floor Planning, Luxury Interior Design, Photorealistic 3D Renders, Space Planning, Custom Furniture, and Full Home Renovation."
    } else if (lower.includes('office') || lower.includes('location') || lower.includes('parkview')) {
      reply = "Our flagship studio is located in Parkview City, Lahore. We also serve clients across DHA, Gulberg, Bahria Town, and overseas clients."
    } else if (lower.includes('cost') || lower.includes('pricing') || lower.includes('10 marla') || lower.includes('3d')) {
      reply = "Architectural drawing and 3D rendering packages depend on plot size (5 Marla, 10 Marla, 1 Kanal). Check out our interactive Design Estimator tool on the homepage!"
    } else if (lower.includes('whatsapp') || lower.includes('call') || lower.includes('phone')) {
      reply = "You can chat with us instantly on WhatsApp at 0341-6887454 (or +966 50 714 3124). Click the green WhatsApp button at the bottom left!"
    }

    messages.value.push({ sender: 'bot', text: reply })
    scrollToBottom()
  }, 1000)
}
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}
</style>
