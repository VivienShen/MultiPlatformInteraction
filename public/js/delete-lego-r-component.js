'use strict'

AFRAME.registerComponent('delete-lego-r-component', {
    schema: {},
    init : function() {
        const Context_AF = this; //refers to "this" component

        //add event listener for "click" event on whatever entity has this component
        Context_AF.el.addEventListener('click', function(event){
            console.log("clicked!!!!");
            Context_AF.deleteMyself();
            
        });

        //when "hovering" make larger
        Context_AF.el.addEventListener('mouseenter', function(event){
            //el = element or entity
            //object3D = three.js 3D geometry object
            //scale = three.js vector that represents scale
            Context_AF.el.object3D.scale.set(0.6, 0.6, 0.6);
        });
        //original unhovered size
        Context_AF.el.addEventListener('mouseleave', function(event){
            Context_AF.el.object3D.scale.set(0.5, 0.5, 0.5);
        });
    },
    deleteMyself : function(){
        const Context_AF = this;
        Context_AF.el.parentNode.removeChild(Context_AF.el); //only a parent can remove their childNodes
    }
    
})