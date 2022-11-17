<template>
  <nav>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </nav>
  <router-view />
</template>

<style lang="scss">
// reset__css
* {
  width: 100%;
  margin: 0;
  width: 100%;
  font-family: serif;
  font-weight: bold;
}
body {
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
  text-align: center;
  color: #000;
  object-fit: contain;
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
// mixin
@mixin textShadowColor($textShadowColor) {
  text-shadow: $color 1px 0px 1px, $textShadowColor -1px 0px 1px,
    $textShadowColor -1px 0px 1px, $textShadowColor -1px 0px 1px,
    $textShadowColor 1px 1px 1px, $textShadowColor -1px 1px 1px,
    $textShadowColor 1px -1px 1px, $textShadowColor -1px -1px 1px,
    $textShadowColor 1px 1px 1px, $textShadowColor -1px 1px 1px;
}
@mixin boxShadowColor($boxShadowColor) {
  box-shadow: 0px 0px $boxShadowColor;
}
@mixin gradientColor($direction, $colorFirst, $colorSecond) {
  background-image: linear-gradient($direction, $colorFirst, $colorSecond);
}
</style>
