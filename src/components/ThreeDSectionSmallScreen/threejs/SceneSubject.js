import * as THREE from 'three';

export default scene => {
  const group = new THREE.Group();

  // const particle1 = new THREE.Object3D();
  // const particle2 = new THREE.Object3D();
  // const particleGeometry = new THREE.TetrahedronGeometry(2, 0);
  // const particleMaterial = new THREE.MeshPhongMaterial({
  //   color: 0xffffff,
  //   shading: THREE.FlatShading,
  // });
  // for (let i = 0; i < 700; i++) {
  //   const mesh = new THREE.Mesh(particleGeometry, particleMaterial);
  //   mesh.position
  //     .set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
  //     .normalize();
  //   mesh.position.multiplyScalar(90 + Math.random() * 700);
  //   mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
  //   if(i%2 != 0){
  //     particle1.add(mesh);
  //   } else {
  //     particle2.add(mesh);
  //   }
  // }

  const planet = new THREE.Object3D();
  const planetGeometry = new THREE.IcosahedronGeometry(7, 1);
  const planetMaterial = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    shading: THREE.FlatShading,
  });
  const planetMesh = new THREE.Mesh(planetGeometry, planetMaterial);
  planetMesh.scale.x = planetMesh.scale.y = planetMesh.scale.z = 22;
  planet.add(planetMesh);

  const wireframe = new THREE.Object3D();
  const wireframeGeometry = new THREE.IcosahedronGeometry(15, 1);
  const wireframeMaterial = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    wireframe: true,
    side: THREE.DoubleSide,
  });
  var wireframeMesh = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
  wireframeMesh.scale.x = wireframeMesh.scale.y = wireframeMesh.scale.z = 14;
  wireframe.add(wireframeMesh);

  // group.add(particle1);
  // group.add(particle2);
  group.add(planet);
  group.add(wireframe);
  scene.add(group);

  function update(time) {
    // particle1.rotation.x += 0.0000;
    // particle1.rotation.y -= 0.0010;
    // particle2.rotation.x += 0.0010;
    // particle2.rotation.y += 0.0000;
    planet.rotation.x -= 0.0030;
    planet.rotation.y -= 0.0040;
    planetMesh.scale.x = planetMesh.scale.y = planetMesh.scale.z = (Math.abs(Math.sin(1.5*time))) + 25;
    wireframe.rotation.x -= 0.0010;
    wireframe.rotation.y += 0.0020;
  }

  return {
    update,
  };
};
