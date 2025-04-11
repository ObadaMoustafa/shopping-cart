# Shopping Cart

---

* [Video Demo](https://youtu.be/CVT3GlA19mQ)

* [Demo website](https://dev-mentor-shopping-cart.netlify.app/)

---

## Description

This application is a simulation of a simple online shopping cart where you can add products and do different operations on it. You can see the spec of every product and add it to the cart by severals ways.

Also you can't access the cart without being logged in successfully because every user is allowed to read only the cart under his uid number and can't access the others.

* I used firebase realtime database to show our products and to control our shopping cart.

* So that I can add, subtract and delete products in the shopping cart.

* I used firebase authentication
* I secured the firebase database data and put rolls so that every user can only access his data even if he got my configuration object.
* I used redux toolkit and thunk as well.
* I built the app using MUI material react library

## How to use locally?

* Please follow these steps in order to be able to run it locally without issues.

* once you cloned or downloaded the project folder, you need to rename the `.env.example` to be `.env`

* You need to create your own database in your firebase and copy this in product object in you realtime database.

```json
"products": [
    {
      "category": "men's clothing",
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "id": 1,
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "price": 300,
      "rating": {
        "count": 120,
        "rate": 3.9
      },
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    },
    {
      "category": "men's clothing",
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "id": 2,
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "price": 22.3,
      "rating": {
        "count": 259,
        "rate": 4.1
      },
      "title": "Mens Casual Premium Slim Fit T-Shirts "
    },
    {
      "category": "men's clothing",
      "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      "id": 3,
      "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      "price": 55.99,
      "rating": {
        "count": 500,
        "rate": 4.7
      },
      "title": "Mens Cotton Jacket"
    },
    {
      "category": "men's clothing",
      "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      "id": 4,
      "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      "price": 300,
      "rating": {
        "count": 430,
        "rate": 2.1
      },
      "title": "Mens Casual Slim Fit"
    },
    {
      "category": "jewelery",
      "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      "id": 5,
      "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      "price": 695,
      "rating": {
        "count": 400,
        "rate": 4.6
      },
      "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet"
    },
    {
      "category": "jewelery",
      "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      "id": 6,
      "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      "price": 168,
      "rating": {
        "count": 70,
        "rate": 3.9
      },
      "title": "Solid Gold Petite Micropave "
    },
    {
      "category": "jewelery",
      "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      "id": 7,
      "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      "price": 9.99,
      "rating": {
        "count": 400,
        "rate": 3
      },
      "title": "White Gold Plated Princess"
    },
    {
      "category": "jewelery",
      "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      "id": 8,
      "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      "price": 10.99,
      "rating": {
        "count": 100,
        "rate": 1.9
      },
      "title": "Pierced Owl Rose Gold Plated Stainless Steel Double"
    },
    {
      "category": "electronics",
      "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      "id": 9,
      "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      "price": 64,
      "rating": {
        "count": 203,
        "rate": 3.3
      },
      "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 "
    },
    {
      "category": "electronics",
      "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
      "id": 10,
      "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      "price": 109,
      "rating": {
        "count": 470,
        "rate": 2.9
      },
      "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s"
    },
    {
      "category": "electronics",
      "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
      "id": 11,
      "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      "price": 109,
      "rating": {
        "count": 319,
        "rate": 4.8
      },
      "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5"
    },
    {
      "category": "electronics",
      "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      "id": 12,
      "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      "price": 114,
      "rating": {
        "count": 400,
        "rate": 4.8
      },
      "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive"
    },
    {
      "category": "electronics",
      "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
      "id": 13,
      "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      "price": 599,
      "rating": {
        "count": 250,
        "rate": 2.9
      },
      "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin"
    },
    {
      "category": "electronics",
      "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
      "id": 14,
      "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      "price": 999.99,
      "rating": {
        "count": 140,
        "rate": 2.2
      },
      "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED "
    },
    {
      "category": "women's clothing",
      "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
      "id": 15,
      "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      "price": 56.99,
      "rating": {
        "count": 235,
        "rate": 2.6
      },
      "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats"
    },
    {
      "category": "women's clothing",
      "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
      "id": 16,
      "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      "price": 29.95,
      "rating": {
        "count": 340,
        "rate": 2.9
      },
      "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket"
    },
    {
      "category": "women's clothing",
      "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
      "id": 17,
      "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      "price": 39.99,
      "rating": {
        "count": 679,
        "rate": 3.8
      },
      "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats"
    },
    {
      "category": "women's clothing",
      "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      "id": 18,
      "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
      "price": 9.85,
      "rating": {
        "count": 130,
        "rate": 4.7
      },
      "title": "MBJ Women's Solid Short Sleeve Boat Neck V "
    },
    {
      "category": "women's clothing",
      "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
      "id": 19,
      "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      "price": 7.95,
      "rating": {
        "count": 146,
        "rate": 4.5
      },
      "title": "Opna Women's Short Sleeve Moisture"
    },
    {
      "category": "women's clothing",
      "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
      "id": 20,
      "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      "price": 12.99,
      "rating": {
        "count": 145,
        "rate": 3.6
      },
      "title": "DANVOUY Womens T Shirt Casual Cotton Short"
    }
  ],
  ```

* You need to fullfil this `.env` file with your own keys from you firebase console.

* Then in CLI you should run in the root folder.

```cli
npm i
```

Then

```cli
npm run start
```

* Create your own account (any fake account will works well).

## Project folders tree

```cli
public
src
├── app-store
├── components
├── firebase
├── pages
│   ├── home
│   ├── login
│   ├── not-found
│   ├── product-info
│   ├── protected-route
│   └── shopping-cart
├── themes
├── utils
├── App.jsx
├── index.css
└── index.js
.env
package.json
```

### Description of important folders in src folder

* `app-store` is to manage the redux reducers.

* `components` is for component which will be used in more than one route in the application. For instance, `Navbar.jsx` and `Spinner.jsx`

* `pages` is to organize and simplify the access ability. So, every route has a folder. `Home` for `/` route and `login` for `/login` route etc.

* `utils` is to create helpers functions which it can be useful and reusable.

## How the app works?

### 1- How application starts?

In `index.js` I organized all my routes and which component should it renders to run the application correctly.

In the `App.jsx` from line 24 to 57 it's very important to establish the app without problems.

* It takes the products from the database and save it in the app store (frontend).

* Then in set a listener on the change of auth. So once the Auth is changed (by login in or out), there are several actions should be done likewise getting the cart information to render it to the user.

Also in App I used `<Outlet />` component which imported from `react-router-dom` to smartly render the targeted routes without the need to repeat the navbar, error messages and loading behavior in every single page.

I user `redux toolkit` to create an app store to manage different states. I found it more practical and clearer than using `redux` and `thunk`. For instance, function `addToCartAsync` in line 31 in `project > src > app-store > slices > shoppingCartSlice.js` I need to add a new item in the cart. but I need to render it on the screen after making sure that it has been saved successfully in the database, then I have to use async functions to await the success response from the database to render it to the user. And I found `redux toolkit` is mush practical in this matter.

In `firebase > firebase.js` it's the configuration file to deal with firebase authentication and database. And I just created some shortcuts to use it everywhere in the application:

* auth: it allows me to access the authentication of user to use the uid and know if someone is logged in or not.

* db: it allows me to access the realtime database smoothly from everywhere in the application.

### 2- Different routes

My application has different routes and every route does a specific task.

* `/`: This is the home page, where the application starts to get all products I have in my database and render it to the user like cards. In this page, the user can see different products and can add the products he wants to the cart as well from the cart button which located on every product card.

* `/product/:id`: `id` is a parameter variable refers to the product Id. When the user click on a product to read more about it I send him to this page. and This page use the `id` of the product to bring its information from db. Through this page, the user can add the product to his cart as well from the button.

* `/shopping-cart`: This is a protected route, so the user can't access this page without being authenticated (logged in). Once the user login, he/she can access the protected data to bring his cart content.

* `/login`: This is a form where the user can login or sign up. I made it possible for users to use fake emails just for practicing.

* `/*`: This is a none found pages so when the user types any route which doesn't mentioned above, user will access the none found page. For now I just put an `<h1>` element with a simple sentence just to show the principle.

### 3- App design

I have used `MUI` library to design the whole app. I also used a theme file which located in `src > themes > theme.js` to use my own values as `MUI theme`. On large scale, this will allow me to change colors and what every I want in whole application with one line of code from this file. And I will be able to do a dark theme.

The application is well designed as a UX/UI app as same as it's a responsive app.