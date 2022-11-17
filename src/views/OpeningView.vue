<template>
  <router-link to="/shop/">
    <div id="opening" class="opening">
      <div class="opening__container">
        <h1 class="opening__title">{{ $store.state.openingTitle }}</h1>
        <p class="opening__userTouchMessage">click page!!!</p>
        <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
        <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
      </div>
    </div>
  </router-link>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

// export default {
//   name: "HomeView",
//   components: {
//     HelloWorld,
//   },
// };
</script>
<style lang="scss">
.opening {
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #965642;
  border: 3px #f6fad7 solid;
  &__title {
    color: #f6fad7;
    text-decoration: underline dotted;
    margin: 5% auto;
  }
  &__userTouchMessage {
    color: #ffa726;
    animation: flash 2s linear infinite;
  }
}
</style>
