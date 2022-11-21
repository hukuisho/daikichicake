<template>
  <router-view />
</template>

<style lang="scss">
//reset
* {
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
  background-color: coral;
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
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes flashing {
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
@keyframes textFlash {
  from {
    text-shadow: 0 #fff, 0 #fff;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff;
  }
}
@keyframes shutter {
  from {
    bottom: 0%;
  }
  50% {
    bottom: 50%;
  }
  to {
    bottom: 100%;
  }
}
</style>
