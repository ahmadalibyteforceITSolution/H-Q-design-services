<template>
  <div class="fixed bottom-24 right-6 z-50">
    <!-- Chat Toggle Button -->
    <button
      @click="toggleChat"
      class="w-14 h-14 bg-zameen-green text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-zameen-green-dark transition-all duration-300 transform hover:scale-110"
    >
      <svg v-if="!isOpen" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
      </svg>
      <svg v-else class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>

    <!-- Chat Window -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="translate-y-10 opacity-0 scale-95"
      enter-to-class="translate-y-0 opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-y-0 opacity-100 scale-100"
      leave-to-class="translate-y-10 opacity-0 scale-95"
    >
      <div v-if="isOpen" class="absolute bottom-20 right-0 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col h-[500px]">
        <!-- Header -->
        <div class="bg-zameen-green p-4 flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span class="text-white font-bold text-sm">H&Q</span>
            </div>
            <div>
              <h3 class="text-white font-bold">H&Q AI Assistant</h3>
              <p class="text-white/80 text-xs">Online | Ask us anything</p>
            </div>
          </div>
          <a 
            :href="'https://wa.me/923134487315?text=' + encodeURIComponent('Hello! I have a query from your website: ' + (messages.length > 1 ? messages[messages.length-2].text : ''))"
            target="_blank"
            class="text-white hover:text-zameen-gold transition-colors"
            title="Chat on WhatsApp"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </div>

        <!-- Messages -->
        <div class="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50" ref="messageContainer">
          <div v-for="(msg, index) in messages" :key="index" :class="['flex', msg.role === 'user' ? 'justify-end' : 'justify-start']">
            <div :class="[
              'max-w-[80%] p-3 rounded-2xl text-sm shadow-sm',
              msg.role === 'user' ? 'bg-zameen-green text-white rounded-tr-none' : 'bg-white text-gray-800 rounded-tl-none'
            ]">
              {{ msg.text }}
            </div>
          </div>
          <div v-if="isTyping" class="flex justify-start">
            <div class="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm flex space-x-1">
              <div class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
              <div class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
          </div>
        </div>

        <!-- Input -->
        <div class="p-4 bg-white border-t border-gray-100">
          <form @submit.prevent="sendMessage" class="flex items-center space-x-2">
            <input
              v-model="userInput"
              type="text"
              placeholder="Type your message..."
              class="flex-1 bg-gray-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-zameen-green transition-all"
            >
            <button
              type="submit"
              class="p-2 bg-zameen-green text-white rounded-xl hover:bg-zameen-green-dark transition-colors"
              :disabled="!userInput.trim()"
            >
              <svg class="w-5 h-5 transform rotate-90" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onUpdated, nextTick } from 'vue'

const isOpen = ref(false)
const isTyping = ref(false)
const userInput = ref('')
const messageContainer = ref(null)

const messages = ref([
  { role: 'bot', text: 'Hello! I am your H&Q AI Assistant. How can I help you today? You can ask about our services, projects, or our affiliation with Zameen.com.' }
])

const toggleChat = () => {
  isOpen.value = !isOpen.value
}

const scrollToBottom = async () => {
  await nextTick()
  if (messageContainer.value) {
    messageContainer.value.scrollTop = messageContainer.value.scrollHeight
  }
}

const sendMessage = async () => {
  if (!userInput.value.trim()) return

  const userText = userInput.value
  messages.value.push({ role: 'user', text: userText })
  userInput.value = ''
  scrollToBottom()

  isTyping.value = true
  
  // Simulate AI Response based on website data
  setTimeout(() => {
    let botResponse = ''
    const input = userText.toLowerCase()

    if (input.includes('service') || input.includes('what do you do') || input.includes('work')) {
      botResponse = 'We offer premium architecture design, interior design, 3D visualization, space planning, furniture design, and renovation services for both residential and commercial projects in Pakistan. Which one would you like to know more about?'
    } else if (input.includes('location') || input.includes('office') || input.includes('where') || input.includes('address')) {
      botResponse = 'Our main office is located in Parkview City, Lahore. We serve clients across major cities in Pakistan including DHA, Gulberg, and Cantt. You can find our exact location on the Contact page.'
    } else if (input.includes('zameen') || input.includes('affiliation') || input.includes('partner')) {
      botResponse = 'Yes! H&Q Design Services is an official partner affiliated with Zameen.com, Pakistan\'s leading real estate portal. This partnership ensures we stay at the forefront of the property market.'
    } else if (input.includes('parkview') || input.includes('lahore')) {
      botResponse = 'We have a strong presence in Parkview City, Lahore, and have completed numerous architecture and interior projects there. Our lead office is also located within the society.'
    } else if (input.includes('contact') || input.includes('phone') || input.includes('whatsapp') || input.includes('call') || input.includes('number')) {
      botResponse = 'You can reach us at 0313-4487315 via call or WhatsApp. We also respond to emails at asadali2899@gmail.com. Would you like to go to our contact page?'
    } else if (input.includes('price') || input.includes('cost') || input.includes('quote') || input.includes('how much')) {
      botResponse = 'Project costs vary depending on the scope and materials. We offer free initial consultations to provide accurate quotes. Please visit our Contact page to book yours!'
    } else if (input.includes('portfolio') || input.includes('projects') || input.includes('designs')) {
      botResponse = 'We have a diverse portfolio of residential and commercial projects. You can view our latest work in the Portfolio section of our website.'
    } else if (input.includes('blog') || input.includes('articles') || input.includes('read')) {
      botResponse = 'We have over 50 blogs on our website covering architecture trends, interior design tips, and sustainable building materials. Check out our Blog section!'
    } else if (input.includes('hi') || input.includes('hello') || input.includes('hey') || input.includes('salaam')) {
      botResponse = 'Hello! How can I assist you today? I can help you with information about our services, location, or how to get a quote.'
    } else if (input.includes('thanks') || input.includes('thank you')) {
      botResponse = 'You\'re very welcome! If you have any more questions, feel free to ask. Have a great day!'
    } else {
      botResponse = 'I\'m sorry, I didn\'t quite catch that. Could you please rephrase your question? You can ask about our services, location, portfolio, or how to contact us.'
    }

    messages.value.push({ role: 'bot', text: botResponse })
    isTyping.value = false
    scrollToBottom()
  }, 1000)
}

onUpdated(scrollToBottom)
</script>
