const options = {

    targetSelection: '#scene',
    width: 800, height: 600,
    backgroundColor: '#621e9e'
}

const renderer = new THREE.WebGLRenderer();

renderer.setSize(options.width, options.height);

document.querySelector(options.targetSelection).appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(
    options.backgroundColor
);

const camera = new THREE.PerspectiveCamera(
    50, options.width / options.height
);

camera.position.z = 2;