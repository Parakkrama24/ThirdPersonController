import { useThree, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

export default function CameraRig() {
  const { camera, scene } = useThree()
  const target = useRef(new THREE.Vector3())
  const offset = new THREE.Vector3(0, 3, 6)

  useFrame(() => {
    const player = scene.getObjectByName("Player")
    if (!player) return

    target.current.copy(player.position)

    const desiredPos = target.current.clone().add(offset)

    camera.position.lerp(desiredPos, 0.1)
    camera.lookAt(target.current)
  })

  return null
}
