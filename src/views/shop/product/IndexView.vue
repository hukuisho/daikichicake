<template>
  <div id="product__index" class="product__index">
    <ul v-for="product in productItems" :key="product">
      <li>{{ $store.state.productItemsId }}{{ product.productId }}</li>
      <li>{{ $store.state.productItemsName }}{{ product.productName }}</li>
      <li>{{ $store.state.productItemsRelease }}{{ product.releaseDate }}</li>
      <li>{{ $store.state.productItemsRanking }}{{ product.ranking }}</li>
      <!-- <li>ほしい物リスト追加</li>
      <li>カートに追加</li> -->
    </ul>
  </div>
</template>
<style lang="scss">
.product__index {
  background-color: antiquewhite;
  min-height: 100vh;
}
</style>
<script>
export default {
  name: "IndexView",
  data: () => ({
    productItems: [
      {
        productId: 1,
        imageUrl: "../assets/short_cake.png",
        productName: "ショートケーキ",
        releaseDate: "2022-11-12",
        ranking: 4,
        want: "no",
        cart: "no",
        purchased: "no",
      },
      {
        productId: 2,
        imageUrl: "../assets/cheese_cake.png",
        productName: "チーズケーキ",
        releaseDate: "2022-11-12",
        ranking: 3,
        want: "no",
        cart: "no",
        purchased: "no",
      },
      {
        productId: 3,
        imageUrl: "../assets/gateau_chocolat.png",
        productName: "ガトーショコラ",
        releaseDate: "2022-11-12",
        ranking: 1,
        want: "no",
        cart: "no",
        purchased: "no",
      },
      {
        productId: 4,
        imageUrl: "../assets/mont_blanc.png",
        productName: "モンブラン",
        releaseDate: "2022-11-13",
        ranking: 2,
        want: "no",
        cart: "no",
        purchased: "no",
      },
    ],
  }),
};
</script>
