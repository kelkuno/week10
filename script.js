/* ----------------------------------
Assignent 12

______________________________*/
Vue.component('plants-component', {
    props: ['name', 'age', 'care', 'id', 'pic'],
    template: `
        <tr>
            <td><img v-bind:src="pic" v-bind:alt="name"></td>
            <td>{{name}}</td>
            <td>{{age}}</td>
            <td>{{care}}</td>
        </tr>
    `

});


var housePlants = [
    {
        name: "pothos",
        age: 7,
        care: "water when plant looks less perky",
        id: 11,
        pic: "pics/pothos_250.jpeg"
    }, {
        name: "money tree",
        age: 2,
        care: "water when leaves begin to wilt",
        id: 22,
        pic: "pics/money-tree_250.jpeg"
    }, {
        name: "aloe",
        age: 6,
        care: "water when arms get squishy",
        id: 33,
        pic: "pics/aloe_250.jpeg"
    }, {
        name: "christmas cactus",
        age: 3,
        care: "water when you feel like it. also use fertilizer",
        id: 44,
        pic: "pics/christmas-cactus_250.jpeg"
    }, {
        name: "ZZ plant",
        age: 4,
        care: "water when you feel like it but don't feel like it too often.",
        id: 55,
        pic: "pics/zz_250.jpeg"
    }
];

var myVue = new Vue({
    el: "#myApp",
    data: {
      plants: housePlants,
      nameInput: "",
      ageInput: "",
      careInput: "",
      idInput: "",
      picInput: ""
    },
    methods: {
        /* delete plant function for this week
        deletePlant: function (plantObject){
            this.plants = this.plants.filter(function 
                (plant){
                if (plant.id !== plantObject.id) {
                    return true;
                } else {
                return false;
                }
            });
        },*/
        addPlant: function (){
            let newPlant = {
                pic: this.picInput,
                name: this.nameInput,
                age: this.ageInput, 
                care: this.careInput,
                id: this.idInput
            };
            this.plants.push(newPlant);
            this.picInput=this.nameInput = this.ageInput = this.careInput = this.idInput = "";
        }
    }
    });
  