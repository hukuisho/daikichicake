<template>
  <div id="product__get" class="product__get">
    <h5 class="product__get__thanks">{{ $store.state.getThanks }}</h5>
    <div class="product__get__explanation">
      <h1 class="product__get__explanation__date">
        <!-- コチラ後ほど予約日に改修 -->
        {{ $store.state.getDate }}
      </h1>
      <h5 class="product__get__explanation__message">
        {{ $store.state.getExplanationMessageFirst }}
      </h5>
      <h5 class="product__get__explanation__message">
        {{ $store.state.getExplanationMessageSecond }}
      </h5>
      <router-link to="/shop/user/history">
        <h5 class="product__get__explanation__link--to--history">
          {{ $store.state.getLinkToHistory }}
        </h5>
      </router-link>
      <h5 class="product__get__explanation__note">
        {{ $store.state.getNote }}
      </h5>
      <h5 class="product__get__explanation__note">
        {{ $store.state.getPhoneNumber }}
      </h5>
    </div>
  </div>
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
.product__get {
  background-color: antiquewhite;
  min-height: 100vh;
  &__thanks {
    background-color: orange;
  }
  &__explanation {
    &__date {
      background-color: #ffff;
      padding: 15% 0;
      margin: 10% 0 10%;
      text-decoration: underline 3px palevioletred solid;
    }
    &__message {
      margin: 2% 0;
    }
    &__link--to--history {
      padding: 5% 0;
      text-decoration: underline 1.5px blue solid;
    }
    &__note {
      color: red;
      text-decoration: underline 2px red dotted;
    }
  }
}
</style>
