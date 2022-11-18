<template>
  <nav>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </nav>
  <router-view />
</template>

<style lang="scss">
* {
  width: 100%;
  margin: 0;
  font-family: serif;
  font-weight: bold;
  box-sizing: border-box;
}
body {
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
  text-align: center;
  color: #000;
  object-fit: contain;
  overflow: hidden;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
// keyframes
@keyframes flash {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
