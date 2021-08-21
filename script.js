const HelloVueApp = {
  data() {
    return {
      products: [
        { id: 1, name: "Boots", quantity: 1 },
        { id: 2, name: "Jacket", quantity: 0 },
        { id: 3, name: "Hiking Socks", quantity: 5 },
        { id: 4, name: "Compass", quantity: 2 },
      ],
      title: "Vue tutorial",
    };
  },
  methods: {},
  computed: {
    totalProducts() {
      return this.products.reduce((sum, product) => {
        return sum + product.quantity;
      }, 0);
    },
  },
  // created(){
  //   fetch ('https://api.myjson.com/bins/74l63')
  //   .then(response=>response.json())
  //   .then(json=>{
  //     this.products = json.products
  //   })
  // }
};

Vue.createApp(HelloVueApp).mount("#app");
