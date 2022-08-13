import * as THREE from "three";

function run_projects() {
    const projects = document.getElementById('projects')
    const canvas = document.getElementById('projects-canvas')

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, projects.clientWidth / projects.clientHeight, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer({
        canvas: canvas
    });

    renderer.setSize( projects.clientWidth, projects.clientHeight );

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame( animate );
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render( scene, camera );
    }

    (new ResizeObserver(entries => {
        renderer.setSize( projects.clientWidth, projects.clientHeight );
    })).observe(projects);

    animate()
}

export { run_projects };