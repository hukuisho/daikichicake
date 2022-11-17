<template>
  <router-link to="/shop/">
    <div id="opening" class="opening">
      <div class="opening__container">
        <h1 class="opening__title">{{ $store.state.openingTitle }}</h1>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "OpeningView",
  mounted() {
    let time = 1500;
    onload = () => {
      setTimeout(() => {
        this.$router.push("/shop/");
      }, time);
    };
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
  &__title {
    color: #f6fad7;
    text-decoration: underline dotted;
    margin: 5% auto;
  }
}
</style>
