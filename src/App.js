import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

class App extends Component {
    componentDidMount() {
        let camera, controls;
        let renderer;
        let scene;

        init();
        animate();

        function init() {

            const container = document.getElementById('container');

            renderer = new THREE.WebGLRenderer();
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(renderer.domElement);

            scene = new THREE.Scene();

            camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 100);
            camera.position.z = 0.01;

            controls = new OrbitControls(camera, renderer.domElement);
            controls.enableZoom = false;
            controls.enablePan = false;
            controls.enableDamping = true;
            controls.rotateSpeed = - 1.00;

            // const textures = getTexturesFromAtlasFile( "images/cubemap-miami.jpg", 6 );

            // const materials = [];

            // for ( let i = 0; i < 6; i ++ ) {

            // 	materials.push( new THREE.MeshBasicMaterial( { map: textures[ i ] } ) );

            // }
            let materialArray = [];
            let texture_ft = new THREE.TextureLoader().load('images/front.png');
            let texture_bk = new THREE.TextureLoader().load('images/back.png');
            let texture_up = new THREE.TextureLoader().load('images/up.png');
            let texture_dn = new THREE.TextureLoader().load('images/down.png');
            let texture_rt = new THREE.TextureLoader().load('images/left1.png');
            let texture_lf = new THREE.TextureLoader().load('images/right.png');

            materialArray.push(new THREE.MeshBasicMaterial({ map: texture_ft }));
            materialArray.push(new THREE.MeshBasicMaterial({ map: texture_bk }));
            materialArray.push(new THREE.MeshBasicMaterial({ map: texture_up }));
            materialArray.push(new THREE.MeshBasicMaterial({ map: texture_dn }));
            materialArray.push(new THREE.MeshBasicMaterial({ map: texture_rt }));
            materialArray.push(new THREE.MeshBasicMaterial({ map: texture_lf }));

            for (let i = 0; i < 6; i++)
                materialArray[i].side = THREE.BackSide;

            let skyboxGeo = new THREE.BoxGeometry(1, 1, 1);
            let skybox = new THREE.Mesh(skyboxGeo, materialArray);
            scene.add(skybox);

            // const skyBox = new THREE.Mesh( new THREE.BoxGeometry( 1, 1, 1 ), materials );
            // skyBox.geometry.scale( 1, 1, - 1 );
            // scene.add( skyBox );

            window.addEventListener('resize', onWindowResize);

        }

        // function getTexturesFromAtlasFile(atlasImgUrl, tilesNum) {

        //     const textures = [];

        //     for (let i = 0; i < tilesNum; i++) {

        //         textures[i] = new THREE.Texture();

        //     }

        //     new THREE.ImageLoader()
        //         .load(atlasImgUrl, (image) => {

        //             let canvas, context;
        //             const tileWidth = image.height;

        //             for (let i = 0; i < textures.length; i++) {

        //                 canvas = document.createElement('canvas');
        //                 context = canvas.getContext('2d');
        //                 canvas.height = tileWidth;
        //                 canvas.width = tileWidth;
        //                 context.drawImage(image, tileWidth * i, 0, tileWidth, tileWidth, 0, 0, tileWidth, tileWidth);
        //                 textures[i].image = canvas;
        //                 textures[i].needsUpdate = true;

        //             }

        //         });

        //     return textures;

        // }

        function onWindowResize() {

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(window.innerWidth, window.innerHeight);

        }

        function animate() {

            requestAnimationFrame(animate);

            controls.update(); // required when damping is enabled

            renderer.render(scene, camera);

        }
    }

    render() {
        return (
            <>
            </>
        )
    }

}
export default App;