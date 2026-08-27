<template>
  <div class="relative w-full rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl group">
    
    <!-- Header / Brand Tag -->
    <div class="absolute top-4 left-4 z-30 flex items-center gap-3">
      <div class="px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-500/30 text-amber-300 text-xs font-bold flex items-center gap-2 shadow-lg">
        <span class="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
        <span class="tracking-wider uppercase">4K Cinematic Commercial</span>
      </div>
      <div class="px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700/60 text-slate-300 text-xs font-medium hidden sm:flex items-center gap-1.5">
        <i class="fa-solid fa-film text-[#088C7E]"></i>
        <span>H&Q Design Services Showreel</span>
      </div>
    </div>

    <!-- Top Right Controls (Audio, Fullscreen) -->
    <div class="absolute top-4 right-4 z-30 flex items-center gap-2">
      <button 
        @click="toggleAudio" 
        class="p-2.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/70 text-slate-200 hover:text-white hover:bg-slate-800 transition-all cursor-pointer shadow-lg"
        :title="audioEnabled ? 'Mute Audio & Voiceover' : 'Enable Voiceover & Ambient Soundtrack'"
      >
        <i :class="audioEnabled ? 'fa-solid fa-volume-high text-emerald-400' : 'fa-solid fa-volume-xmark text-slate-400'"></i>
      </button>

      <button 
        @click="toggleFullscreen" 
        class="p-2.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/70 text-slate-200 hover:text-white hover:bg-slate-800 transition-all cursor-pointer shadow-lg"
        title="Toggle Fullscreen"
      >
        <i class="fa-solid fa-expand"></i>
      </button>
    </div>

    <!-- Main Video Frame Aspect Ratio Container (16:9) -->
    <div ref="videoContainer" class="relative w-full aspect-video overflow-hidden bg-black flex items-center justify-center">
      
      <!-- Scene Background Images with Dynamic Cinematic Camera Ken-Burns Effect -->
      <transition name="fade-scene" mode="out-in">
        <div :key="currentSceneIndex" class="absolute inset-0 w-full h-full">
          <img 
            :src="scenes[currentSceneIndex].image" 
            :alt="scenes[currentSceneIndex].title"
            :class="[
              'w-full h-full object-cover origin-center transition-transform duration-[6500ms] ease-out',
              isPlaying ? scenes[currentSceneIndex].motionClass : 'scale-100'
            ]"
          />
        </div>
      </transition>

      <!-- Vignette & Luxury Gradient Shading -->
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40 pointer-events-none"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-slate-950/40 pointer-events-none"></div>
      <div class="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.85)] pointer-events-none"></div>

      <!-- Center Play Overlay when Paused -->
      <div 
        v-if="!isPlaying" 
        @click="togglePlay"
        class="absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-950/40 backdrop-blur-xs cursor-pointer group-hover:bg-slate-950/30 transition-all"
      >
        <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#088C7E]/90 text-white flex items-center justify-center pl-1 shadow-2xl shadow-[#088C7E]/50 transform group-hover:scale-110 transition-transform duration-300 border border-emerald-300/40">
          <i class="fa-solid fa-play text-2xl sm:text-3xl text-white"></i>
        </div>
        <p class="mt-4 text-white text-sm sm:text-base font-bold tracking-widest uppercase drop-shadow-md">
          Play Cinematic Commercial
        </p>
      </div>

      <!-- Lower-Third Cinematic Brand Overlays & Subtitles -->
      <div class="absolute bottom-16 left-6 sm:left-10 right-6 sm:right-10 z-20 pointer-events-none">
        <transition name="slide-up" mode="out-in">
          <div :key="currentSceneIndex" class="space-y-2 max-w-2xl">
            <!-- Scene Tag / Badge -->
            <span class="inline-block px-3 py-1 rounded-md bg-[#088C7E]/90 text-white text-[10px] sm:text-xs font-black uppercase tracking-widest shadow-lg">
              {{ scenes[currentSceneIndex].tag }}
            </span>

            <!-- Main Heading -->
            <h2 class="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-2xl font-serif">
              {{ scenes[currentSceneIndex].title }}
            </h2>

            <!-- Voiceover Subtitle Line -->
            <p class="text-slate-200 text-xs sm:text-sm lg:text-base font-medium leading-relaxed drop-shadow-lg max-w-xl italic">
              "{{ scenes[currentSceneIndex].voiceover }}"
            </p>
          </div>
        </transition>
      </div>

      <!-- Timeline Progress Bar -->
      <div class="absolute bottom-0 inset-x-0 h-1.5 bg-slate-800/80 z-30 cursor-pointer" @click="seekTimeline">
        <div 
          class="h-full bg-gradient-to-r from-[#088C7E] via-emerald-400 to-amber-400 transition-all duration-200"
          :style="{ width: `${totalProgressPercent}%` }"
        ></div>
      </div>
    </div>

    <!-- Bottom Controls & Scene Navigation Drawer -->
    <div class="p-4 sm:p-5 bg-slate-900/95 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
      
      <!-- Playback Controls -->
      <div class="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
        <button 
          @click="togglePlay" 
          class="px-5 py-2.5 rounded-xl bg-[#088C7E] hover:bg-[#066D62] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-[#088C7E]/30 cursor-pointer"
        >
          <i :class="isPlaying ? 'fa-solid fa-pause' : 'fa-solid fa-play'"></i>
          <span>{{ isPlaying ? 'Pause' : 'Play Commercial' }}</span>
        </button>

        <button 
          @click="prevScene" 
          class="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-all cursor-pointer"
          title="Previous Scene"
        >
          <i class="fa-solid fa-backward-step"></i>
        </button>

        <button 
          @click="nextScene" 
          class="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-all cursor-pointer"
          title="Next Scene"
        >
          <i class="fa-solid fa-forward-step"></i>
        </button>

        <span class="text-xs font-mono text-slate-400 ml-2">
          Scene {{ currentSceneIndex + 1 }} / {{ scenes.length }}
        </span>
      </div>

      <!-- Scene Thumbnails Mini Bar -->
      <div class="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
        <button 
          v-for="(scene, idx) in scenes" 
          :key="idx"
          @click="jumpToScene(idx)"
          :class="[
            'relative w-12 h-8 sm:w-14 sm:h-9 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer',
            currentSceneIndex === idx ? 'border-amber-400 scale-105 shadow-md shadow-amber-400/30' : 'border-slate-700/80 opacity-60 hover:opacity-100'
          ]"
          :title="scene.title"
        >
          <img :src="scene.image" :alt="scene.title" class="w-full h-full object-cover" />
        </button>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const isPlaying = ref(true)
const currentSceneIndex = ref(0)
const sceneProgress = ref(0)
const audioEnabled = ref(true)
const videoContainer = ref(null)
let timer = null
const SCENE_DURATION_MS = 6000

const scenes = [
  {
    tag: 'Scene 1 · Architecture',
    title: 'H&Q DESIGN SERVICES',
    voiceover: 'Every extraordinary space begins with a vision.',
    image: '/images/scene1_villa.jpg',
    motionClass: 'scale-115 translate-x-3 translate-y-2'
  },
  {
    tag: 'Scene 2 · Planning',
    title: 'Architectural Design',
    voiceover: 'At H&Q Design Services, we transform ideas into thoughtful architectural and interior design concepts.',
    image: '/images/scene2_studio.jpg',
    motionClass: 'scale-110 -translate-x-3'
  },
  {
    tag: 'Scene 3 · Interiors',
    title: 'Modern Interior Design',
    voiceover: 'From elegant living spaces to carefully crafted details, every element is designed with purpose.',
    image: '/images/scene3_living.jpg',
    motionClass: 'scale-120 translate-y-3'
  },
  {
    tag: 'Scene 4 · Master Suite',
    title: 'Luxury Bedroom Design',
    voiceover: 'We create bedrooms that feel peaceful, luxurious, and truly personal.',
    image: '/images/scene4_bedroom.jpg',
    motionClass: 'scale-115 -translate-y-2'
  },
  {
    tag: 'Scene 5 · Dining Space',
    title: 'Elegant. Functional. Timeless.',
    voiceover: 'Beautiful design should not only look impressive. It should work beautifully for the way you live.',
    image: '/images/scene5_dining.jpg',
    motionClass: 'scale-110 translate-x-2'
  },
  {
    tag: 'Scene 6 · Culinary Studio',
    title: 'Functional Kitchen Design',
    voiceover: 'Combining aesthetics, functionality, and intelligent space planning...',
    image: '/images/scene6_kitchen.jpg',
    motionClass: 'scale-118 -translate-x-2 translate-y-1'
  },
  {
    tag: 'Scene 7 · CGI Modeling',
    title: '3D Visualization & Planning',
    voiceover: '...we help you see your space before it becomes reality.',
    image: '/images/scene7_3d.jpg',
    motionClass: 'scale-110 translate-x-3'
  },
  {
    tag: 'Scene 8 · Space Transformation',
    title: 'Your Space → Our Vision → Your Dream',
    voiceover: 'From concept to completion, we turn ordinary spaces into extraordinary experiences.',
    image: '/images/scene8_transformation.jpg',
    motionClass: 'scale-115 -translate-x-3'
  },
  {
    tag: 'Scene 9 · Hero Showcase',
    title: 'H&Q Luxury Penthouses',
    voiceover: 'Your vision. Our expertise. A space designed for you.',
    image: '/images/scene9_hero.jpg',
    motionClass: 'scale-120 translate-y-3'
  }
]

const totalProgressPercent = computed(() => {
  const percentPerScene = 100 / scenes.length
  return (currentSceneIndex.value * percentPerScene) + (sceneProgress.value * percentPerScene)
})

function speakCurrentScene() {
  if (!audioEnabled.value || typeof window === 'undefined' || !window.speechSynthesis) return
  window.speechSynthesis.cancel()
  const text = scenes[currentSceneIndex.value].voiceover
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.rate = 0.95
  utterance.pitch = 1.0
  const voices = window.speechSynthesis.getVoices()
  const englishVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Premium'))) || voices.find(v => v.lang.startsWith('en'))
  if (englishVoice) utterance.voice = englishVoice
  window.speechSynthesis.speak(utterance)
}

function startPlayback() {
  stopPlayback()
  speakCurrentScene()
  const interval = 50
  const step = interval / SCENE_DURATION_MS

  timer = setInterval(() => {
    if (!isPlaying.value) return
    sceneProgress.value += step
    if (sceneProgress.value >= 1) {
      sceneProgress.value = 0
      currentSceneIndex.value = (currentSceneIndex.value + 1) % scenes.length
      speakCurrentScene()
    }
  }, interval)
}

function stopPlayback() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

function togglePlay() {
  isPlaying.value = !isPlaying.value
  if (isPlaying.value) {
    startPlayback()
  } else {
    stopPlayback()
    if (window.speechSynthesis) window.speechSynthesis.cancel()
  }
}

function nextScene() {
  sceneProgress.value = 0
  currentSceneIndex.value = (currentSceneIndex.value + 1) % scenes.length
  speakCurrentScene()
}

function prevScene() {
  sceneProgress.value = 0
  currentSceneIndex.value = (currentSceneIndex.value - 1 + scenes.length) % scenes.length
  speakCurrentScene()
}

function jumpToScene(idx) {
  sceneProgress.value = 0
  currentSceneIndex.value = idx
  speakCurrentScene()
}

function toggleAudio() {
  audioEnabled.value = !audioEnabled.value
  if (audioEnabled.value && isPlaying.value) {
    speakCurrentScene()
  } else if (!audioEnabled.value && window.speechSynthesis) {
    window.speechSynthesis.cancel()
  }
}

function toggleFullscreen() {
  if (!videoContainer.value) return
  if (!document.fullscreenElement) {
    videoContainer.value.requestFullscreen?.()
  } else {
    document.exitFullscreen?.()
  }
}

function seekTimeline(e) {
  const rect = e.currentTarget.getBoundingClientRect()
  const clickX = e.clientX - rect.left
  const ratio = Math.max(0, Math.min(1, clickX / rect.width))
  const targetSceneExact = ratio * scenes.length
  const sceneIdx = Math.floor(targetSceneExact)
  currentSceneIndex.value = Math.min(scenes.length - 1, sceneIdx)
  sceneProgress.value = targetSceneExact - sceneIdx
  speakCurrentScene()
}

onMounted(() => {
  startPlayback()
})

onUnmounted(() => {
  stopPlayback()
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    window.speechSynthesis.cancel()
  }
})
</script>

<style scoped>
.fade-scene-enter-active,
.fade-scene-leave-active {
  transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-scene-enter-from,
.fade-scene-leave-to {
  opacity: 0;
}

.slide-up-enter-active {
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-up-leave-active {
  transition: all 0.4s ease-in;
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
