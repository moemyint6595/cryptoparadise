import React from 'react'
import { MeshReflectorMaterial } from '@react-three/drei'

const Sphere = () => {
  return (
    <>
      <mesh position={[0, 1.2, 0]}>
         <sphereBufferGeometry attach='geometry' args={[0.8, 200]}/>
         <MeshReflectorMaterial
             envMapIntensity={0}
             dithering={true}
             color={[0.015, 0.015, 0.015]}
             roughness={0.7}
             blur={[1000, 400]}
             mixBlur={30}
             mixStrength={80}
             mixContrast={1}
             resolution={1024}
             mirror={0}
             depthScale={0.01}
             minDepthThreshold={0.9}
             maxDepthThreshold={1}
             depthToBlurRatioBias={0.25}
             debug={0}
             reflectorOffset={0.2}
           />
      </mesh>
    </>
  )
}

export default Sphere