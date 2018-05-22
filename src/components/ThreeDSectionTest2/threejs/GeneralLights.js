import * as THREE from 'three'

export default scene => {


    var lights = [];
    lights[0] = new THREE.DirectionalLight(0x9A9AC3, 1);
    lights[0].position.set(1, 0, 0);
    lights[1] = new THREE.DirectionalLight(0xFF0080, 1);
    lights[1].position.set(0.75, 1, 0.5);
    lights[2] = new THREE.DirectionalLight(0x343784, 1);
    lights[2].position.set(-0.75, -1, 0.5);
    scene.add(lights[0]);
    scene.add(lights[1]);
    scene.add(lights[2]);

    function update(time) {

    }

    return {
        update
    }
}