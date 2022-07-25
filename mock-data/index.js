export const CATEGORIES_MOCK = [
  {
    id: "1",
    imgUrl:
      "https://cdn.pixabay.com/photo/2014/05/26/14/53/sushi-354628_960_720.jpg",
    title: "Testing 1",
  },
  {
    id: "2",
    imgUrl:
      "https://cdn.pixabay.com/photo/2017/01/03/11/33/pizza-1949183_960_720.jpg",
    title: "Testing 2",
  },
  {
    id: "3",
    imgUrl:
      "https://cdn.pixabay.com/photo/2021/02/15/11/43/hot-dog-6017568_960_720.jpg",
    title: "Testing 3",
  },
  {
    id: "4",
    imgUrl:
      "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg",
    title: "Testing 4",
  },
  {
    id: "5",
    imgUrl:
      "https://cdn.pixabay.com/photo/2018/08/16/22/59/ice-cream-3611698_960_720.jpg",
    title: "Testing 5",
  },
  {
    id: "6",
    imgUrl:
      "https://cdn.pixabay.com/photo/2018/11/08/22/12/beer-3803425_960_720.jpg",
    title: "Testing 6",
  },
];

export const FEATURED_CATEGORIES_MOCK = [
  {
    id: "1",
    title: "Featured",
    description: "Paid placements from our partners",
    restaurants: [
      {
        id: "123",
        imgUrl:
          "https://cdn.pixabay.com/photo/2017/03/29/20/58/maki-roll-2186518_960_720.jpg",
        title: "Yo! Sushi",
        rating: 4.5,
        genre: "Japanese",
        address: "123 Main St",
        short_description:
          "Explore our menu for dishes made from the freshest ingredients, sustainably-sourced seafood and authentic products.",
        dishes: [
          {
            id: "1",
            name: "Nigiri",
            short_description:
              "A topping, usually fish, served on top of sushi rice",
            price: 4.5,
            image:
              "https://st2.depositphotos.com/38693846/47810/i/450/depositphotos_478105876-stock-photo-homemade-sushi-salmon-japanese-food.jpg",
          },
          {
            id: "2",
            name: "Makizushi",
            short_description:
              "Makizushi is usually wrapped in nori, a sheet of dehydrated seaweed that houses the rice and stuffing.",
            price: 3.99,
            image:
              "https://static3.depositphotos.com/1010613/261/i/450/depositphotos_2614550-stock-photo-makizushi-and-soy-sauce.jpg",
          },
        ],
        long: -0.1323491652193389,
        lat: 51.51923880936022,
      },
      {
        id: "321",
        imgUrl:
          "https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272_960_720.jpg",
        title: "Yo! Sushi",
        rating: 4.5,
        genre: "Japanese",
        address: "123 Main St",
        short_description:
          "Explore our menu for dishes made from the freshest ingredients, sustainably-sourced seafood and authentic products.",
        dishes: [
          {
            id: "3",
            name: "Temaki",
            short_description:
              "The conelike form of temaki incorporates rice, specially prepared seaweed called nori, and a variety of fillings known as neta.",
            price: 2.59,
            image:
              "https://st2.depositphotos.com/1373322/9265/i/450/depositphotos_92656500-stock-photo-japanese-salmon-temaki-sushi-ginger.jpg",
          },
        ],
        long: -0.1323491652193389,
        lat: 51.51923880936022,
      },
      {
        id: "213",
        imgUrl:
          "https://cdn.pixabay.com/photo/2017/03/29/20/58/maki-roll-2186518_960_720.jpg",
        title: "Yo! Sushi",
        rating: 4.5,
        genre: "Japanese",
        address: "123 Main St",
        short_description:
          "Explore our menu for dishes made from the freshest ingredients, sustainably-sourced seafood and authentic products.",
        dishes: [],
        long: -0.1323491652193389,
        lat: 51.51923880936022,
      },
    ],
  },
  {
    id: "2",
    title: "Tasty Discounts",
    description: "Everyone's been enjoying these juicy discounts!",
    restaurants: [
      {
        id: "123",
        imgUrl:
          "https://cdn.pixabay.com/photo/2017/06/06/22/37/italian-cuisine-2378729_960_720.jpg",
        title: "Yo! Sushi",
        rating: 4.5,
        genre: "Japanese",
        address: "123 Main St",
        short_description:
          "Explore our menu for dishes made from the freshest ingredients, sustainably-sourced seafood and authentic products.",
        dishes: [],
        long: -0.1323491652193389,
        lat: 51.51923880936022,
      },
      {
        id: "321",
        imgUrl:
          "https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_960_720.jpg",
        title: "Yo! Sushi",
        rating: 4.5,
        genre: "Japanese",
        address: "123 Main St",
        short_description:
          "Explore our menu for dishes made from the freshest ingredients, sustainably-sourced seafood and authentic products.",
        dishes: [],
        long: -0.1323491652193389,
        lat: 51.51923880936022,
      },
      {
        id: "213",
        imgUrl:
          "https://cdn.pixabay.com/photo/2017/03/29/20/58/maki-roll-2186518_960_720.jpg",
        title: "Yo! Sushi",
        rating: 4.5,
        genre: "Japanese",
        address: "123 Main St",
        short_description:
          "Explore our menu for dishes made from the freshest ingredients, sustainably-sourced seafood and authentic products.",
        dishes: [],
        long: -0.1323491652193389,
        lat: 51.51923880936022,
      },
    ],
  },
  {
    id: "3",
    title: "Offers near you!",
    description: "Why not support your local restaurant tonight!",
    restaurants: [
      {
        id: "123",
        imgUrl:
          "https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_960_720.jpg",
        title: "Yo! Sushi",
        rating: 4.5,
        genre: "Japanese",
        address: "123 Main St",
        short_description:
          "Explore our menu for dishes made from the freshest ingredients, sustainably-sourced seafood and authentic products.",
        dishes: [],
        long: -0.1323491652193389,
        lat: 51.51923880936022,
      },
      {
        id: "321",
        imgUrl:
          "https://cdn.pixabay.com/photo/2016/11/29/05/07/breads-1867459_960_720.jpg",
        title: "Yo! Sushi",
        rating: 4.5,
        genre: "Japanese",
        address: "123 Main St",
        short_description:
          "Explore our menu for dishes made from the freshest ingredients, sustainably-sourced seafood and authentic products.",
        dishes: [
          {
            id: "1",
            name: "Nigiri",
            short_description:
              "A topping, usually fish, served on top of sushi rice",
            price: 2.99,
            image: "https://cdn.diferenca.com/imagens/niguiri-0-cke.jpg",
          },
        ],
        long: -0.1323491652193389,
        lat: 51.51923880936022,
      },
      {
        id: "213",
        imgUrl:
          "https://cdn.pixabay.com/photo/2017/03/29/20/58/maki-roll-2186518_960_720.jpg",
        title: "Yo! Sushi",
        rating: 4.5,
        genre: "Japanese",
        address: "123 Main St",
        short_description:
          "Explore our menu for dishes made from the freshest ingredients, sustainably-sourced seafood and authentic products.",
        dishes: [],
        long: -0.1323491652193389,
        lat: 51.51923880936022,
      },
    ],
  },
];
