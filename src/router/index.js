import { createRouter, createWebHistory } from "vue-router";
import OpeningView from "../views/OpeningView.vue";
import TopView from "../views/shop/TopView.vue";
import AboutView from "../views/shop/AboutView.vue";
import IndexView from "../views/shop/product/IndexView.vue";
import ShowView from "../views/shop/product/ShowView.vue";
import CartView from "../views/shop/product/CartView.vue";
import PurchaseLoadingView from "../views/shop/product/PurchaseLoadingView.vue";
import GetView from "../views/shop/product/GetView.vue";
import FailureView from "../views/shop/product/FailureView";
import MyPageView from "../views/shop/user/MyPageView";
import WantView from "../views/shop/user/WantView";
import HistoryView from "../views/shop/user/HistoryView";
const routes = [
  {
    path: "/",
    name: "opening",
    component: OpeningView,
  },
  {
    path: "/shop/",
    name: "shop/top",
    component: TopView,
  },
  {
    path: "/shop/about",
    name: "shop/about",
    component: AboutView,
  },
  {
    path: "/shop/product/",
    name: "shop/product/",
    component: IndexView,
  },
  {
    path: "/shop/product/show",
    name: "shop/product/show",
    component: ShowView,
  },
  {
    path: "/shop/product/cart",
    name: "shop/product/cart",
    component: CartView,
  },
  {
    path: "/shop/product/purchase_loaging",
    name: "shop/product/purchase_loading",
    component: PurchaseLoadingView,
  },
  {
    path: "/shop/product/get",
    name: "shop/product/get",
    component: GetView,
  },
  {
    path: "/shop/product/failure",
    name: "shop/product/failure",
    component: FailureView,
  },
  {
    path: "/shop/user/",
    name: "shop/user/",
    component: MyPageView,
  },
  {
    path: "/shop/user/want",
    name: "shop/user/want",
    component: WantView,
  },
  {
    path: "/shop/user/history",
    name: "shop/user/history",
    component: HistoryView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
