'use strict'

AFRAME.registerComponent('create-cow-component', {
    schema: {},
    init : function() {
        const Context_AF = this; //refers to "this" component

        //add event listener for "click" event on whatever entity has this component
        Context_AF.el.addEventListener('click', function(event){
            console.log("clicked!!!!");
        });

        //when "hovering" make larger
        Context_AF.el.addEventListener('click', function(event){
            //el = element or entity
            //object3D = three.js 3D geometry object
            //scale = three.js vector that represents scale
            Context_AF.el.object3D.scale.set(1.1, 1.1, 1.1);
        });
        //original unhovered size
        Context_AF.el.addEventListener('click', function(event){
            Context_AF.el.object3D.scale.set(1.0, 1.0, 1.0);
        });
    },
    //custom function for creating creating random cows
    createCow : function (){
        const Context_AF = this;

        //create an html element/entity that loads in cows model
    }
})