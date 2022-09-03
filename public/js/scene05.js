const loader = new THREE.TextureLoader();

const polyester = new THREE.MeshStandardMaterial({
    map: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/polyester/basecolor.jpg'),
    normalMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/polyester/normal.jpg')
}
);

const organic = new THREE.MeshStandardMaterial({
    side: THREE.DoubleSide,
    map: loader.load('images/organic/Abstract_Organic_002_COLOR.jpg'),
    normalMap: loader.load('images/organic/Abstract_Organic_002_NORM.jpg'),
    aoMap: loader.load('images/organic/Abstract_Organic_002_OCC.jpg'),
    roughnessMap: loader.load('images/organic/Abstract_Organic_002_ROUGH.jpg')
});

const ball = new THREE.Mesh(
    new THREE.SphereBufferGeometry(1, 60, 60),
    organic
);

const wood = new THREE.MeshStandardMaterial({
    map: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/wood/basecolor.jpg'),
    normalMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/wood/normal.jpg'),
    side: THREE.DoubleSide
});

const metal = new THREE.MeshStandardMaterial({
    side: THREE.DoubleSide,
    transparent: true,
    map: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/basecolor.jpg'),
    alphaMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/opacity.jpg'),
    metalnessMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/metallic.jpg'),
    normalMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/normal.jpg'),
    aoMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/occlusion.jpg'),
    roughnessMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/roughness.jpg')
});

const cube = new THREE.Mesh(
    new THREE.BoxBufferGeometry(2 ,2, 2),
    metal
);

cube.position.x = 3;
cube.position.y = 3;
scene.add(cube);
cube.castShadow = true;

ball.position.x = 1;
ball.position.y = 1;
ball.castShadow = true;
scene.add(ball);

const floor = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(200, 200),
    metal
);

floor.position.y = 0.00;

floor.rotation.x = THREE.MathUtils.degToRad(-90);
floor.receiveShadow = true;
scene.add(floor);

const shadowLigth = new THREE.PointLight(
    '#e9e9f5', 50
);

shadowLigth.position.y = 8;
shadowLigth.castShadow = true;
shadowLigth.target = ball;
scene.add(shadowLigth)

x3.add(shadowLigth, { helper: { visible: false } });
x3.add(ball, { label: 'Ball' });
x3.add(floor, { label: 'Floor' });

renderer.setAnimationLoop(() => {

    //ball.rotation.x += 0.005;
    ball.rotation.y += 0.005;

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01 


    x3.tick();

    x3.fps(() => {

        renderer.render(scene, camera);
    });
});

