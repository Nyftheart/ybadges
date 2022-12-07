const renderer = new THREE.WebGLRenderer({ alpha: true })
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
const interaction = new THREE.Interaction(renderer, scene, camera)
const fontLoader = new THREE.FontLoader()

scene.background = new THREE.Color(0x000000)

const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444)
hemiLight.position.set(0, 20, 0)
scene.add(hemiLight)

scene.add(new THREE.AmbientLight(0x000000))

const dirLight1 = new THREE.DirectionalLight(0xffddcc, 5)
dirLight1.position.set(-1, 0.75, 0.5)
scene.add(dirLight1)

const dirLight2 = new THREE.DirectionalLight(0xccccff, 5)
dirLight2.position.set(1, 0.75, -0.5)
scene.add(dirLight2)

const dirLight = new THREE.DirectionalLight(0xffffff)
dirLight.position.set(-3, 10, -10)
dirLight.castShadow = true
dirLight.shadow.camera.top = 2
dirLight.shadow.camera.bottom = -2
dirLight.shadow.camera.left = -2
dirLight.shadow.camera.right = 2
dirLight.shadow.camera.near = 0.1
dirLight.shadow.camera.far = 40
scene.add(dirLight)

const loader = new THREE.OBJLoader()

let enableMouseTrack = false

let globalGroup, textMesh1, textMesh2, textGeo, materials, tween1, tween2

var target = new THREE.Vector3()
var mouseX = 0,
  mouseY = 0

var windowHalfX = window.innerWidth / 2
var windowHalfY = window.innerHeight / 2

const completeTurn = 6.28319
const semiTurn = 3.14159

globalGroup = new THREE.Group()
globalGroup.position.x = -12
globalGroup.position.y = -12
globalGroup.position.z = -20

scene.add(globalGroup)

let waitForDblClick = false
let flipping = false
let badgeOriginalRotation = 1.55
let currentRotation = 0
let isBadgeRecto = true

new THREE.MTLLoader()
  .setPath('assets/')
  .load('badge_base.mtl', function (materials) {
    materials.preload()

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        new THREE.OBJLoader()
          .setMaterials(materials)
          .setPath('assets/')
          .load(
            'badge_base.obj',
            (badge) => {
              createNewBadge(badge, i, j)
            },
            function (xhr) {
              console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
            },
            function (error) {
              console.log('An error happened', error)
            }
          )
      }
    }
  })

renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

camera.position.z = 0

target.z = 500

setAnimations()

const animate = (t) => {
  TWEEN.update(t)
  requestAnimationFrame(animate)

  target.x += (mouseX - target.x) * 0.1
  target.y += (-mouseY - target.y) * 0.1

  globalGroup.children.forEach((object) => {
    if (!flipping) {
      object.lookAt(target)
      object.rotation.y += currentRotation
    }
  })

  renderer.render(scene, camera)
}

animate()

// FUNCTIONS
function addTextToBadge(targetBadge, text = new Date()) {
  text = text.getDate() + '-' + (text.getMonth() + 1) + '-' + text.getFullYear()
  fontLoader.load('assets/montserrat.json', function (font) {
    textGeo = new THREE.TextGeometry(text, {
      font: font,
      size: 0.15,
      height: 0.001,
      bevelEnabled: true,
      bevelThickness: 0.001,
      bevelSize: 0.001,
      bevelOffset: 0,
      bevelSegments: 1
    })

    textGeo.computeBoundingBox()

    const centerOffset =
      0.5 * (textGeo.boundingBox.max.x - textGeo.boundingBox.min.x)
    materials = [
      new THREE.MeshPhongMaterial({ color: 0x000000 }), // front
      new THREE.MeshPhongMaterial({ color: 0x000000 }) // side
    ]
    textMesh1 = new THREE.Mesh(textGeo, materials)
    textMesh1.position.x = centerOffset
    textMesh1.position.y = -0.6
    textMesh1.position.z = -0.3

    textMesh1.rotation.x = semiTurn
    textMesh1.rotation.y = 0
    textMesh1.rotation.z = semiTurn

    targetBadge.add(textMesh1)
  })
}

function createNewBadge(newBadge, xAxis, yAxis) {
  const badgeGroup = new THREE.Group()
  globalGroup.add(badgeGroup)
  badgeGroup.add(newBadge)
  badgeGroup.cursor = 'pointer'
  newBadge.rotation.y = badgeOriginalRotation
  badgeGroup.on('click', (ev) => {
    if (waitForDblClick) {
      waitForDblClick = false
      isBadgeRecto ? tween1.start() : tween2.start()
    } else {
      if (!flipping) {
        waitForDblClick = true

        setTimeout(() => {
          if (!flipping) waitForDblClick = false
        }, 200)
      }
    }
  })
  badgeGroup.position.x = xAxis * 4
  badgeGroup.position.y = yAxis * 4
  addTextToBadge(badgeGroup)
}

function checkMousePosition(e) {
  mouseX = e.clientX - windowHalfX
  mouseY = e.clientY - windowHalfY
}

function setAnimations(badge) {
  tween1 = new TWEEN.Tween({ yRotation: 0 })
    .to({ yRotation: semiTurn }, 1000)
    .onUpdate((coords) => {
      globalGroup.rotation.y = coords.yRotation
    })
    .easing(TWEEN.Easing.Exponential.Out)

  tween2 = new TWEEN.Tween({ yRotation: semiTurn })
    .to({ yRotation: completeTurn }, 1000)
    .onUpdate((coords) => {
      globalGroup.rotation.y = coords.yRotation
    })
    .easing(TWEEN.Easing.Exponential.Out)

  tween1.onStart(() => {
    flipping = true
    isBadgeRecto = false
  })

  tween2.onStart(() => {
    flipping = true
    isBadgeRecto = true
  })

  tween1.onComplete(() => {
    flipping = false
    currentRotation = semiTurn
  })

  tween2.onComplete(() => {
    flipping = false
    currentRotation = 0
  })
}

window.addEventListener('mousedown', (e) => (enableMouseTrack = true))
window.addEventListener('mouseup', (e) => (enableMouseTrack = false))
window.onmousemove = (e) => {
  if (enableMouseTrack) {
    checkMousePosition(e)
  } else {
    mouseX = null
    mouseY = null
  }
}
