import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"
import { useKeyboard } from "../hooks/useKeyboard"

export default function Player() {
  const ref = useRef<THREE.Mesh>(null!)
  const keys = useKeyboard()

  const speed = 5
  const direction = new THREE.Vector3()

  useFrame((_, delta) => {
    direction.set(0, 0, 0)

    if (keys["KeyW"]) direction.z -= 1
    if (keys["KeyS"]) direction.z += 1
    if (keys["KeyA"]) direction.x -= 1
    if (keys["KeyD"]) direction.x += 1

    direction.normalize().multiplyScalar(speed * delta)

    ref.current.position.add(direction)

    // Rotate player toward movement
    if (direction.length() > 0) {
      const angle = Math.atan2(direction.x, direction.z)
      ref.current.rotation.y = angle
    }
  })

  return (
    <mesh ref={ref} position={[0, 0.5, 0]} castShadow name="Player">
      <capsuleGeometry args={[0.4, 1.2]} />
      <meshBasicMaterial color="orange" />
    </mesh>
  )
}
