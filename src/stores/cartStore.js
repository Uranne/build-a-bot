/* eslint-disable */
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const userCartStore = defineStore('cart', () => {
  const cart = ref([]);
  const cartTotal = computed(() => cart.value.reduce((prev, cur) => prev += cur.cost, 0));
  return { cart, cartTotal };
});
