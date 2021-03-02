<body></body>
<script src="/three.js"></script>
<script>
  // The "scene" is where stuff in our game will happen:
  var scene = new THREE.Scene();
  var flat = {flatShading: true};
  var light = new THREE.AmbientLight('white', 0.8);
  scene.add(light);

  // The "camera" is what sees the stuff:
  var aspectRatio = window.innerWidth / window.innerHeight;
  var camera = new THREE.PerspectiveCamera(75, aspectRatio, 1, 10000);
  camera.position.z = 500;
  scene.add(camera);

  // The "renderer" draws what the camera sees onto the screen:
  var renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // ******** START CODING ON THE NEXT LINE ********
    
var cilindro = new THREE.CylinderGeometry(20,20,200,50);
var flat = new THREE.MeshNormalMaterial(flat);
var pesa = new THREE.CylinderGeometry(60,60,10,50);
var cilindro_flat = new THREE.Mesh(cilindro, flat);
var pesa1_flat = new THREE.Mesh(pesa, flat);
var pesa2_flat = new THREE.Mesh(pesa, flat);

scene.add(cilindro_flat);
scene.add(pesa1_flat);
scene.add(pesa2_flat);

pesa1_flat.rotation.set(0,0,90*Math.PI/180);
pesa1_flat.position.set(100,0,0);

pesa2_flat.rotation.set(0,0,90*Math.PI/180);
pesa2_flat.position.set(-100,0,0)

cilindro_flat.rotation.set(0,0,90*Math.PI/180);
camera.position.set(15,10,200);

camera.lookAt(cilindro_flat.position);

    
    
    
    
     // Now, show what the camera sees on the screen:
  renderer.render(scene, camera);
</script>