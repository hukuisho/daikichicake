import { createStore } from "vuex";

export default createStore({
  state: {
    //opening
    openingTitle: "DaikitchiCake",
    openingSubTitle: "Hope You Have a Wonderful Day!!!",
    openingWelcome: "Welcome To Store",
    //購入成功
    getThanks: "ご注文ありがとうございました🍴",
    getDate: "11月11日11時",
    getExplanationMessageFirst: "DaikitchiCake(木星店)にてお待ちしております。",
    getExplanationMessageSecond:
      "当日、現地で会計を済ませて商品をお受け取り下さい。",
    getLinkToHistory: "注文した商品はコチラから購入履歴をご確認下さい。",
    getNote: "受け取り時間変更はコチラまでご連絡下さい↓",
    getPhoneNumber: "AAA-BBB-CCC",
    // 商品一覧
    productItemsId: "商品ID",
    productItemsName: "商品名",
    productItemsRelease: "リリース日",
    productItemsCart: "カート",
    productItemsBeforeButton: "追加",
    productItemsAfterButton: "削除",
    productExplanation: "商品名をClickすると商品の詳細が確認できます",
    productCart: "カートの中身を確認する",
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
