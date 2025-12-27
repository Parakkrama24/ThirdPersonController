


const Plane = () => {
  return (
    <mesh position={[0,-2,0]} rotation={[-Math.PI/2,0,0]}>
        <planeGeometry args={[10,10]}/>
        <meshBasicMaterial color='blue'/>
    </mesh>
  )
}

export default Plane