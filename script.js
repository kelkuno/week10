/* ----------------------------------
Assignent 10

______________________________*/

var housePlants = [
    {
        name: "pothos",
        age: 7,
        care: "water when plant looks less perky",
        id: 11
    }, {
        name: "money tree",
        age: 2,
        care: "water when leaves begin to wilt",
        id: 22
    }, {
        name: "aloe",
        age: 6,
        care: "water when arms get squishy",
        id: 33
    }, {
        name: "christmas cactus",
        age: 3,
        care: "water when you feel like it. also use fertilizer",
        id: 44
    }, {
        name: "ZZ plant",
        age: 4,
        care: "water when you feel like it but don't feel like it too often.",
        id: 55
    }
];

var myVue = new Vue({
    el: "#myApp",
    data: {
      plants: housePlants,
      nameInput: "",
      ageInput: "",
      careInput: "",
      idInput: ""
    },
    methods: {
        deletePlant: function (plantObject){
            this.plants = this.plants.filter(function 
                (plant){
                if (plant.id !== plantObject.id) {
                    return true;
                } else {
                return false;
                }
            });
        },
        addPlant: function (){
            let newPlant = {
                name: this.nameInput,
                age: this.ageInput, 
                care: this.careInput,
                id: this.idInput
            };
            this.plants.push(newPlant);
            this.nameInput = this.ageInput = this.careInput = this.idInput = "";
        }
    }
    });
  