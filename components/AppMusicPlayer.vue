<script setup>
import { track } from "@vue/reactivity";

defineProps({
  title: String,
  artist: String,

  src: String,
  img: String,
  alt: String,
});

const trackDuration = ref(null);

//Play Track

function playTrack() {
  const audio = document.querySelector(".track");
  const trackImg = document.querySelector(".track-img");

  trackImg.classList.add("rotate");

  getDuration();

  setInterval(() => this.currentPosition(), 1000);
  audio.play();
}

//Pause track

function pauseTrack() {
  const audio = document.querySelector(".track");

  const trackImg = document.querySelector(".track-img");

  trackImg.classList.remove("rotate");

  audio.pause();
}

////Get Track Duration

function getDuration() {
  const audio = document.querySelector(".track");
  const audioDuration = document.querySelector(".track-duration");

  let duration = audio.duration;

  let totalMinutes = Math.floor(duration / 60);
  let totalSeconds = Math.floor(duration % 60);

  let totalDuration = totalMinutes + ":" + (totalSeconds < 10 ? "0" : "") + totalSeconds;

  audioDuration.innerText = totalDuration;
}

///Get track current position

function currentPosition() {
  const audio = document.querySelector(".track");

  const audioTime = document.querySelector(".track-time");
  let position = audio.currentTime;

  let minutes = Math.floor(position / 60);
  let seconds = Math.floor(position % 60);

  let trackCurrentTime = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

  audioTime.innerText = trackCurrentTime;
}
</script>

<template>
  <div
    class="music-player p-4 md:p-16 border-4 m-1 md:m-6 border-black rounded-sm dark:text-white text-black"
  >
    <div class="track-header flex flex-col md:flex-row md:space-x-16 items-center">
      <div class="track-img relative h-52 w-52 rounded-full">
        <img :src="img" :alt="alt" class="w-full rounded-full" />
      </div>

      <div class="track-info p-6">
        <strong class="text-3xl">{{ title }}</strong>
        <p class="track-artist text-xl">{{ artist }}</p>
        <p><span class="track-time"> </span> / <span class="track-duration"> </span></p>
      </div>
    </div>
    <audio class="track hidden" controls>
      <source class="track-src" :src="src" type="audio/mpeg" preload autoplay />
    </audio>

    <div class="music-controls flex flex-row justify-center md:justify-end">
      <AppButton title="Play" @click="playTrack()" />
      <AppButton title="Pause" @click="pauseTrack()" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.music-player {
  min-height: 25rem;
  position: relative;
}

.track-img .rotate {
  animation-play-state: running;
}

.music-player .track-img img {
  width: inherit;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  bottom: 0;
  left: 0;
  animation: rotate 3s linear infinite;
  animation-play-state: paused;
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.active {
  box-shadow: 8px 10px #ff6b6b;
  border: 0.4rem solid black;
  transform: translateX(15px);
}
</style>
