
(function() {
var app=angular.module('store',[]);

//New controller that is attached to the store module.
app.controller('StoreController',function(){
        //add inside the function.
        this.products = gems;
    });

//New panel controller
    app.controller("PanelController",function(){
        this.tab=1;

        this.selectTab = function(setTab){
            this.tab=setTab;
        };

        this.isSelected = function(checkTab){
            return this.tab===checkTab;
        };

    });


    //what's a GEM(s)? list them here.
    var gems = [{
        name: 'Dodecahedron',
        price: 2.95,
        description:'A rare jewel that is worth far more than this initial asking price.',
        review:'I love this item',
        images:[
            {
                full: '../images/dodecahedron-01-full.jpg',
                thumb:'../images/dodecahedron-01-thumb.jpg'
            }
        ],

        canPurchase:true,
        soldOut:true
        },
        {
            name:'Pentagonal  Gem',
            price: 5.95,
            description: "...",
            canPurchase: false

        }
        ]/*Close gems array*/
})();


