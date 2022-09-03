const cube = new THREE.Mesh(
    new THREE.BoxBufferGeometry(),
    new THREE.MeshLambertMaterial(
        {
            Color: '#faf5f5'
        }
    )
);

const cubeTwo = new THREE.Mesh(
    new THREE.BoxBufferGeometry(),
    new THREE.MeshLambertMaterial({
        Color: '#faf5f5'
    })
);

var quantity = 20;

for (i = 0; i < quantity; i++) {

        var cubeLoop = new THREE.Mesh(
        new THREE.BoxBufferGeometry(),
        new THREE.MeshLambertMaterial({
            Color: '#faf5f5'
        })
    );
    
    cubeLoop.position.x = i;
    cubeLoop.position.y = i;
    scene.add(cubeLoop);

  
}

cube.position.x = 1;
cube.position.y = 1;
cube.castShadow = true;
scene.add(cube);

cubeTwo.position.x = 1;
cubeTwo.position.y = 1;
cubeTwo.position.z = 2;

cubeTwo.castShadow = true;
scene.add(cubeTwo);

const floor = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(10, 10),
    new THREE.MeshPhongMaterial({
        color: '#272863', side: THREE.DoubleSide
    })
);

floor.position.y = 0.00;

floor.rotation.x = THREE.MathUtils.degToRad(-90);
floor.receiveShadow = true;
scene.add(floor);

const shadowLigth = new THREE.SpotLight(
    '#e9e9f5', 1, 10, 0.4
);

shadowLigth.position.y = 8;
shadowLigth.castShadow = true;
shadowLigth.target = cube;
scene.add(shadowLigth)

x3.add(shadowLigth, { helper: { visible: false } });
x3.add(cube, { label: 'cube' });

renderer.setAnimationLoop(() => {

    cubeLoop.rotation.x += 0.01;
    cubeLoop.rotation.y += 0.01;

    
    x3.tick();
    
    x3.fps(() => {


        renderer.render(scene, camera);
    });
});

