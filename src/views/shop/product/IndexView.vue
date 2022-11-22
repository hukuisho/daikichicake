<template>
  <div id="product__index" class="product__index">
    <h6 class="product__index__explanation">
      {{ $store.state.productExplanation }}
    </h6>
    <table class="product__index__table">
      <tr>
        <th class="product__index__th">{{ $store.state.productItemsId }}</th>
        <th class="product__index__th">{{ $store.state.productItemsName }}</th>
        <th class="product__index__th">
          {{ $store.state.productItemsRelease }}
        </th>
        <th class="product__index__th">
          {{ $store.state.productItemsCart }}
        </th>
      </tr>
      <tr v-for="product in productItems" :key="product">
        <td class="product__index__td">{{ product.productId }}</td>
        <td class="product__index__td">{{ product.productName }}</td>
        <td class="product__index__td">{{ product.releaseDate }}</td>
        <td class="product__index__td">
          <button class="product__index__td__button">
            {{ $store.state.productItemsBeforeButton }}
          </button>
        </td>
      </tr>
    </table>
    <router-link to="/shop/product/cart" class="product__index__cart--to--link">
      {{ $store.state.productCart }}
    </router-link>
  </div>
</template>
<style lang="scss">
.product__index {
  background-color: antiquewhite;
  min-height: 100vh;
  &__explanation {
    background-color: #ffff;
  }
  &__table {
    width: 100%;
    border-collapse: collapse;
  }
  $productLists: th, td;
  @each $productList in $productLists {
    &__#{$productList} {
      border: 1px solid;
      @if ($productList == th) {
        background-color: orange;
      } @else {
        background-color: #ffff;
        &__button {
          width: 100%;
          background-color: burlywood;
        }
      }
    }
  }
  &__cart--to--link {
    font-size: 150%;
    color: #3f51b5;
    text-decoration: underline 2px #3f51b5 dotted;
  }
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
        releaseDate: "2022-11-19",
        ranking: 4,
        want: "no",
        cart: "no",
        purchased: "no",
      },
      {
        productId: 2,
        imageUrl: "../assets/cheese_cake.png",
        productName: "チーズケーキ",
        releaseDate: "2022-11-19",
        ranking: 3,
        want: "no",
        cart: "no",
        purchased: "no",
      },
      {
        productId: 3,
        imageUrl: "../assets/gateau_chocolat.png",
        productName: "ガトーショコラ",
        releaseDate: "2022-11-19",
        ranking: 1,
        want: "no",
        cart: "no",
        purchased: "no",
      },
      {
        productId: 4,
        imageUrl: "../assets/mont_blanc.png",
        productName: "モンブラン",
        releaseDate: "2022-11-19",
        ranking: 2,
        want: "no",
        cart: "no",
        purchased: "no",
      },
      {
        productId: 5,
        imageUrl: "../assets/mont_blanc.png",
        productName: "フルーツタルト",
        releaseDate: "2022-11-19",
        ranking: 8,
        want: "no",
        cart: "no",
        purchased: "no",
      },
      {
        productId: 6,
        imageUrl: "../assets/mont_blanc.png",
        productName: "ミルクレープ",
        releaseDate: "2022-11-19",
        ranking: 7,
        want: "no",
        cart: "no",
        purchased: "no",
      },
      {
        productId: 7,
        imageUrl: "../assets/mont_blanc.png",
        productName: "ティラミス",
        releaseDate: "2022-11-19",
        ranking: 6,
        want: "no",
        cart: "no",
        purchased: "no",
      },
      {
        productId: 8,
        imageUrl: "../assets/mont_blanc.png",
        productName: "抹茶ムース",
        releaseDate: "2022-11-19",
        ranking: 5,
        want: "no",
        cart: "no",
        purchased: "no",
      },
      {
        productId: 9,
        imageUrl: "../assets/mont_blanc.png",
        productName: "フルーツタルト",
        releaseDate: "2022-11-19",
        ranking: 9,
        want: "no",
        cart: "no",
        purchased: "no",
      },
      {
        productId: 10,
        imageUrl: "../assets/mont_blanc.png",
        productName: "スフレチーズ",
        releaseDate: "2022-11-19",
        ranking: 10,
        want: "no",
        cart: "no",
        purchased: "no",
      },
    ],
  }),
};
</script>
