<template>
  <div>
    <section id="contact-hero" class="relative py-24 lg:py-40 bg-gray-900 overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-0 left-0 w-96 h-96 bg-zameen-green rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-zameen-gold rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <span class="inline-block bg-zameen-green/20 text-zameen-green px-4 py-2 rounded-full text-sm font-bold mb-6 tracking-wider uppercase animate-pulse">Get in Touch</span>
          <h1 class="contact-title text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">Let's Build Your <span class="text-zameen-green">Dream Space</span> Together</h1>
          <p class="contact-subtitle text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">Whether you're planning a new home or renovating an existing one, our experts are here to help you every step of the way.</p>
        </div>
      </div>
    </section>

    <section id="contact-info" class="py-24 lg:py-32 bg-white relative">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div class="contact-form-section bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
            
            <form @submit.prevent="submitForm" class="space-y-8">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="space-y-2">
                  <label for="name" class="block text-sm font-semibold text-gray-700">Full Name *</label>
                  <input
                    v-model="form.name"
                    type="text"
                    id="name"
                    required
                    class="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-zameen-green focus:border-transparent transition-all outline-none"
                    placeholder="John Doe"
                  >
                </div>
                <div class="space-y-2">
                  <label for="phone" class="block text-sm font-semibold text-gray-700">Phone Number *</label>
                  <input
                    v-model="form.phone"
                    type="tel"
                    id="phone"
                    required
                    class="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-zameen-green focus:border-transparent transition-all outline-none"
                    placeholder="+92 300 1234567"
                  >
                </div>
              </div>

              <div class="space-y-2">
                <label for="email" class="block text-sm font-semibold text-gray-700">Email Address *</label>
                <input
                  v-model="form.email"
                  type="email"
                  id="email"
                  required
                  class="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-zameen-green focus:border-transparent transition-all outline-none"
                  placeholder="john@example.com"
                >
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="space-y-2">
                  <label for="service" class="block text-sm font-semibold text-gray-700">Service Interested In</label>
                  <select
                    v-model="form.service"
                    id="service"
                    class="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-zameen-green focus:border-transparent transition-all outline-none"
                  >
                    <option value="">Select a Service</option>
                    <option value="architecture">Architecture Design</option>
                    <option value="interior">Interior Design</option>
                    <option value="renovation">Renovation</option>
                    <option value="commercial">Commercial Design</option>
                    <option value="consultation">Free Consultation</option>
                  </select>
                </div>
                <div class="space-y-2">
                  <label for="location" class="block text-sm font-semibold text-gray-700">Property Location</label>
                  <select
                    v-model="form.location"
                    id="location"
                    class="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-zameen-green focus:border-transparent transition-all outline-none"
                  >
                    <option value="">Select Location</option>
                    <option value="parkview-city">Parkview City</option>
                    <option value="dha">DHA Lahore</option>
                    <option value="bahria-town">Bahria Town</option>
                    <option value="gulberg">Gulberg</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div class="space-y-2">
                <label for="message" class="block text-sm font-semibold text-gray-700">Message *</label>
                <textarea
                  v-model="form.message"
                  id="message"
                  rows="5"
                  required
                  class="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-zameen-green focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-zameen-green text-white py-5 rounded-xl font-bold text-lg hover:bg-zameen-green-dark transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-3 shadow-lg shadow-zameen-green/30"
              >
                <span v-if="!isSubmitting">Send Message</span>
                <span v-else class="flex items-center">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
                <svg v-if="!isSubmitting" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </button>

              <div v-if="submitSuccess" class="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-xl flex items-center space-x-3">
                <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <p class="font-medium">Thank you! Your message has been sent successfully. We'll contact you soon.</p>
              </div>
            </form>
          </div>

          <div class="contact-details space-y-10">
            <div>
              <h3 class="text-3xl font-bold text-gray-900 mb-8">Contact Information</h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                <!-- Info Cards -->
                <div class="bg-gray-50 rounded-2xl p-6 flex items-start space-x-4 border border-gray-100 hover:border-zameen-green transition-colors group">
                  <div class="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-zameen-green transition-colors">
                    <svg class="w-7 h-7 text-zameen-green group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 text-lg mb-1">Office Address</h4>
                    <p class="text-gray-600 leading-relaxed">Parkview City, Lahore, Pakistan</p>
                    <p class="text-zameen-green font-medium text-sm mt-1">Affiliated with Zameen.com</p>
                  </div>
                </div>

                <div class="bg-gray-50 rounded-2xl p-6 flex items-start space-x-4 border border-gray-100 hover:border-zameen-green transition-colors group">
                  <div class="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-zameen-green transition-colors">
                    <svg class="w-7 h-7 text-zameen-green group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 text-lg mb-1">Phone Number</h4>
                    <a href="tel:03134487315" class="text-zameen-green hover:underline text-xl font-bold">0313-4487315</a>
                    <p class="text-gray-500 text-sm mt-1">Available on WhatsApp & Call</p>
                  </div>
                </div>

                <div class="bg-gray-50 rounded-2xl p-6 flex items-start space-x-4 border border-gray-100 hover:border-zameen-green transition-colors group">
                  <div class="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-zameen-green transition-colors">
                    <svg class="w-7 h-7 text-zameen-green group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 text-lg mb-1">Email Address</h4>
                    <a href="mailto:asadrogi@rocketmail.com" class="text-zameen-green hover:underline text-lg font-medium">asadrogi@rocketmail.com</a>
                    <p class="text-gray-500 text-sm mt-1">We'll get back to you within 24h</p>
                  </div>
                </div>

                <div class="bg-gray-50 rounded-2xl p-6 flex items-start space-x-4 border border-gray-100 hover:border-zameen-green transition-colors group">
                  <div class="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-zameen-green transition-colors">
                    <svg class="w-7 h-7 text-zameen-green group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 text-lg mb-1">Working Hours</h4>
                    <p class="text-gray-600 leading-relaxed">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    <p class="text-gray-500 text-sm mt-1">Sunday: By Appointment</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-br from-zameen-green to-zameen-green-dark rounded-3xl p-8 text-white shadow-xl shadow-zameen-green/20 relative overflow-hidden group">
              <div class="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <div class="relative z-10">
                <h3 class="text-2xl font-bold mb-4">Immediate Assistance?</h3>
                <p class="text-white/80 mb-6">Chat with our lead designer directly on WhatsApp for a quick response.</p>
                <a href="https://wa.me/923134487315" target="_blank" class="inline-flex items-center bg-white text-zameen-green px-8 py-4 rounded-xl font-bold hover:bg-zameen-gold hover:text-white transition-all transform hover:scale-105 active:scale-95">
                  <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Now
                </a>
              </div>
            </div>

            <div class="mt-8">
              <h3 class="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
              <div class="flex space-x-4">
                <a href="https://www.facebook.com/share/1JFuAoDXzr/" target="_blank" class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.instagram.com/chasad_ali/" target="_blank" class="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center text-white hover:bg-pink-700 transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="map" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <span class="inline-block bg-zameen-gold/20 text-zameen-gold px-4 py-2 rounded-full text-sm font-medium mb-4">Find Us</span>
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Location</h2>
          <p class="text-gray-600">Visit our office at Parkview City, Lahore - Pakistan's premier housing society</p>
        </div>
        <div class="bg-gray-200 rounded-2xl overflow-hidden h-96 flex items-center justify-center">
          <div class="text-center p-8">
            <div class="w-20 h-20 bg-zameen-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10 text-zameen-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Parkview City, Lahore</h3>
            <p class="text-gray-600 mb-4">Affiliated with Zameen.com</p>
            <a href="https://maps.google.com/?q=Parkview+City+Lahore" target="_blank" class="inline-flex items-center text-zameen-green font-medium hover:underline">
              Open in Google Maps
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id="faq" class="py-20 lg:py-28 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="inline-block bg-zameen-green/10 text-zameen-green px-4 py-2 rounded-full text-sm font-medium mb-4">FAQ</span>
          <h2 class="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        </div>

        <div class="max-w-3xl mx-auto space-y-4">
          <div v-for="(faq, index) in faqs" :key="index" class="bg-gray-50 rounded-xl overflow-hidden">
            <button
              @click="toggleFaq(index)"
              class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
            >
              <span class="font-bold text-gray-900">{{ faq.question }}</span>
              <svg
                :class="['w-5 h-5 text-gray-500 transition-transform', openFaq === index ? 'rotate-180' : '']"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div v-if="openFaq === index" class="px-6 pb-4">
              <p class="text-gray-600">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const route = useRoute()

useHead({
  title: 'Contact H&Q Design Services | Architecture & Interior Design Lahore',
  meta: [
    { name: 'description', content: 'Contact H&Q Design Services for architecture and interior design in Lahore. Call 0313-4487315 or email asadrogi@rocketmail.com. Parkview City affiliated, Zameen.com partner.' },
    { name: 'keywords', content: 'contact architecture firm Lahore, interior design contact, H&Q Design Services, Parkview City, Zameen.com partner' },
    { property: 'og:title', content: 'Contact H&Q Design Services - Architecture & Interior Design' },
    { property: 'og:description', content: 'Get in touch for architecture and interior design services in Lahore.' },
    { name: 'robots', content: 'index, follow' }
  ]
})

const form = ref({
  name: '',
  phone: '',
  email: '',
  service: '',
  location: '',
  message: ''
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const openFaq = ref(null)

const faqs = ref([
  {
    question: 'What services does H&Q Design Services offer?',
    answer: 'We offer comprehensive architecture design, interior design, 3D visualization, space planning, furniture design, and renovation services for residential and commercial projects.'
  },
  {
    question: 'Where is H&Q Design Services located?',
    answer: 'Our office is located in Parkview City, Lahore, Pakistan. We are affiliated with Zameen.com and serve clients across Lahore and surrounding areas.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope. A complete home design can take 3-6 months, while interior design projects typically take 4-8 weeks. We provide detailed timelines during consultation.'
  },
  {
    question: 'Do you offer free consultations?',
    answer: 'Yes, we offer free initial consultations to discuss your project requirements, vision, and budget. Contact us to schedule your appointment.'
  },
  {
    question: 'What areas do you serve?',
    answer: 'We primarily serve Lahore and surrounding areas including DHA, Cantt, Gulberg, Parkview City, and all major housing societies.'
  },
  {
    question: 'Are you affiliated with Zameen.com?',
    answer: 'Yes, H&Q Design Services is an official partner affiliated with Zameen.com and works closely with Parkview City housing society.'
  }
])

const submitForm = async () => {
  isSubmitting.value = true
  submitSuccess.value = false
  
  // Keep a copy of the form data for WhatsApp
  const formData = { ...form.value }
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    const data = await response.json()

    if (response.ok) {
      submitSuccess.value = true
      
      // WhatsApp Redirection Logic
      const whatsappNumber = '923134487315'
      const message = `*New Query from H&Q Design Services*%0A%0A` +
                      `*Name:* ${formData.name}%0A` +
                      `*Phone:* ${formData.phone}%0A` +
                      `*Email:* ${formData.email}%0A` +
                      `*Service:* ${formData.service || 'Not specified'}%0A` +
                      `*Location:* ${formData.location || 'Not specified'}%0A` +
                      `*Message:* ${formData.message}`
      
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank')
      
      form.value = { name: '', phone: '', email: '', service: '', location: '', message: '' }
    } else {
      alert(data.error || 'Something went wrong. Please try again.')
    }
  } catch (error) {
    console.error('Submission error:', error)
    // For local development where /api/contact might not exist, we'll simulate success
    if (import.meta.env.DEV) {
      await new Promise(resolve => setTimeout(resolve, 1500))
      submitSuccess.value = true
      
      // WhatsApp Redirection for Dev mode too
      const whatsappNumber = '923134487315'
      const message = `*New Query from H&Q Design Services (Dev)*%0A%0A` +
                      `*Name:* ${formData.name}%0A` +
                      `*Phone:* ${formData.phone}%0A` +
                      `*Email:* ${formData.email}%0A` +
                      `*Service:* ${formData.service || 'Not specified'}%0A` +
                      `*Location:* ${formData.location || 'Not specified'}%0A` +
                      `*Message:* ${formData.message}`
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`
      window.open(whatsappUrl, '_blank')
      
      form.value = { name: '', phone: '', email: '', service: '', location: '', message: '' }
    } else {
      alert('Network error. Please check your connection and try again.')
    }
  } finally {
    isSubmitting.value = false
    if (submitSuccess.value) {
      setTimeout(() => { submitSuccess.value = false }, 5000)
    }
  }
}

const toggleFaq = (index) => {
  openFaq.value = openFaq.value === index ? null : index
}

watch(() => route.query.service, (newService) => {
  if (newService) {
    form.value.service = newService
  }
})

onMounted(() => {
  if (route.query.service) {
    form.value.service = route.query.service
  }

  gsap.from('.contact-title', {
    scrollTrigger: { trigger: '.contact-title', start: 'top 80%' },
    opacity: 0, y: 50, duration: 1
  })

  gsap.from('.contact-form-section', {
    scrollTrigger: { trigger: '.contact-form-section', start: 'top 80%' },
    opacity: 0, x: -50, duration: 1
  })

  gsap.from('.contact-details', {
    scrollTrigger: { trigger: '.contact-details', start: 'top 80%' },
    opacity: 0, x: 50, duration: 1
  })
})
</script>
