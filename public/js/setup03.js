const options = {

    targetSelection: '#scene',
    width: 1920, height: 1080,
    backgroundColor: '#121111'
}

const renderer = new THREE.WebGLRenderer(
    {
        antialias: true
    }
);

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(options.width, options.height);

document.querySelector(options.targetSelection).appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(
    options.backgroundColor
);

const camera = new THREE.PerspectiveCamera(
    50, options.width / options.height
);

camera.position.x = 2.5;
camera.position.y = 18;
camera.position.z = 20;

const ligth = new THREE.HemisphereLight(
    0xFFFFBB, 0x080820, 1
);

scene.add(ligth)

const x3 = new THREEx3(
    {
        THREE,
        OrbitControls: THREE.OrbitControls,
        camera,
        renderer,
        scene
    },
    {
        grid: {visible: false},
        axes: {visible: false}
    }
);

x3.add(camera, {open: false});
x3.add(ligth, { helper: { visible: false}});

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

renderer.physicallyCorrectLights = true;
renderer.toneMapping = THREE.ACESFilmicToneMapping;

