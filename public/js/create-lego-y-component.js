'use strict'

AFRAME.registerComponent('create-lego-y-component', {
    schema: {},
    init : function() {
        const Context_AF = this; //refers to "this" component

        //add event listener for "click" event on whatever entity has this component
        Context_AF.el.addEventListener('click', function(event){
            console.log("clicked!!!!");
            Context_AF.createLego1();
        });

        //when "hovering" make larger
        Context_AF.el.addEventListener('mouseenter', function(event){
            //el = element or entity
            //object3D = three.js 3D geometry object
            //scale = three.js vector that represents scale
            Context_AF.el.object3D.scale.set(1.1, 1.1, 1.1);
        });
        //original unhovered size
        Context_AF.el.addEventListener('mouseleave', function(event){
            Context_AF.el.object3D.scale.set(1.0, 1.0, 1.0);
        });
    },
    //custom function for creating creating random lego
    createLego1 : function (){
        const Context_AF = this;

        //create an html element/entity that loads in lego model
        let lego1Elem = document.createElement('a-entity');  //create element by code
        lego1Elem.setAttribute('class', 'clickable');
        lego1Elem.setAttribute('obj-model',{obj:'assets/models/lego1.obj'});   //set model
        lego1Elem.setAttribute('material', 'color', 'yellow');
        lego1Elem.setAttribute('delete-lego-y-component', {});

        //random tranform
        lego1Elem.setAttribute('position', {x:(Math.random() * 8.0) - 7.0, y:0.1, z:-1.0 - (Math.random() * 6.0)}); //random x around axis and random z behind button
        //const randScale = 0.2 + (Math.random() * 0.8)
        lego1Elem.setAttribute('scale', {x:0.5, y:0.5, z:0.5});  //scale
        lego1Elem.setAttribute('rotation', {x:0, y:Math.random() * 360.0, z:0});   //random y rotation

        //last step is to attach to scene
        let scene = document.querySelector('a-scene');
        scene.appendChild(lego1Elem);
    }
})