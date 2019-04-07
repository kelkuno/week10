/* ----------------------------------
Assignent 10

______________________________*/

var housePlants = [
    {
        name: "pothos",
        age: 7,
        care: "water when plant looks less perky"
    }, {
        name: "money tree",
        age: 2,
        care: "water when leaves begin to wilt"
    }, {
        name: "aloe",
        age: 6,
        care: "water when arms get squishy"
    }, {
        name: "christmas cactus",
        age: 3,
        care: "water when you feel like it. also use fertilizer"
    }, {
        name: "ZZ plant",
        age: 4,
        care: "water when you feel like it but don't feel like it too often."
    }
];

var myVue = new Vue({
    el: "#myApp",
    data: {
      plants: housePlants
    }
  });
  