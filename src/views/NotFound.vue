<template>
  <div class="grid h-[80vh] place-content-center">
    <div class="flex flex-col items-center gap-10 text-center">
      <h2>Page Not Found</h2>
      <p>
        很抱歉， 無法查詢到你輸入的連結。<br />請確定該連結正確無誤後再嘗試輸入。
      </p>
      <router-link class="btn font-bold" :to="{ name: 'Home' }"
        >返回首頁</router-link
      >
    </div>
  </div>
</template>

<script setup></script>
