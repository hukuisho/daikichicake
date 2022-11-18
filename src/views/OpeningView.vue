<template>
  <router-link to="/shop/">
    <div id="opening" class="opening">
      <div class="opening__container">
        <h2 class="opening__welcome">{{ $store.state.openingWelcome }}</h2>
        <img
          class="opening__daikitchi"
          alt="大吉"
          src="../assets/short_cake.png"
        />
        <h1 class="opening__title">{{ $store.state.openingTitle }}</h1>
        <h6 class="opening__subtitle">{{ $store.state.openingSubTitle }}</h6>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "OpeningView",
  mounted() {
    onload = () => setTimeout('location.href = "/shop/"', 2500);
  },
};
</script>
<style lang="scss">
.opening {
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #965642;
  border: 3px #f6fad7 solid;
  &__welcome {
    margin-bottom: 10%;
    color: aliceblue;
  }
  &__daikitchi {
    width: 70%;
  }
  &__title {
    color: #f6fad7;
    text-decoration: underline dotted;
    margin: 10% auto 5%;
    transition: all 1000ms ease-in-out;
    animation: textFlash 2s linear forwards;
  }
  &__subtitle {
    color: aliceblue;
  }
}
</style>
