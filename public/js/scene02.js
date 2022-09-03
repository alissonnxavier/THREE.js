const material = new THREE.MeshLambertMaterial(
    {
        color: '#1ee6df',
        side: THREE.DoubleSide
    }
);

const cube = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
        1, 1, 1
    ),
    material
);

const circle = new THREE.Mesh(
    new THREE.CircleBufferGeometry(
        0.5, 20
    ),
    material
);

const cone = new THREE.Mesh(
    new THREE.ConeBufferGeometry(
        0.3, 0.5
    ),
    material
);

const cylinder = new THREE.Mesh(
    new THREE.CylinderBufferGeometry(
        0.5, 0.5, 2, 20, 20
    ),
    material
);

const sphere = new THREE.Mesh(
    new THREE.SphereBufferGeometry(
        0.5, 20, 20
    ),
    material
);

const plane = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(
        1,1
    ),
    material
);

circle.position.x = -2;
circle.rotation.x = THREE.MathUtils.degToRad(-90);

cone.position.x = -2;
cone.position.y = 2;

cylinder.position.x = 2;
cylinder.position.y = 0;

sphere.position.x = 3;
sphere.position.y = 0;

plane.position.x = 2;
plane.position.y = 3;

scene.add(cube);
scene.add(circle);
scene.add(cone);
scene.add(cylinder);
scene.add(sphere);
scene.add(plane);

x3.add(circle, { label: 'circle' });
x3.add(cube, { label: 'cube' });
x3.add(cone , { label: 'cone' });
x3.add(cylinder, { label: 'cylinder' });
x3.add(sphere, { label: 'Sphere' });
x3.add(plane, { label: 'plane' });

renderer.setAnimationLoop(() => {

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    cone.rotation.x += 0.01;
    cone.rotation.y += 0.01;

    circle.rotation.x += 0.01;
    circle.rotation.y += 0.01;

    cylinder.rotation.x += 0.01;
    cylinder.rotation.y += 0.01

    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;

    plane.rotation.x += 0.01;
    plane.rotation.y += 0.01;

    x3.tick();

    x3.fps(() => {

        renderer.render(scene, camera);
    });
});