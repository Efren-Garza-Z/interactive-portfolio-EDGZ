import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Patricio(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/patricio.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Root">
            <group name="Armature" position={[0, 0.1, 0.63]}>
              <primitive object={nodes.Armature_rootJoint} />
            </group>
            <group name="Point" position={[3.24, 5.36, 6.64]} />
            <group name="Camera" position={[6.57, 8.26, 4.1]} rotation={[-1.47, 0.65, 3.08]} />
            <group name="Plane" position={[0, 0.11, 0.72]} scale={0.88}>
              <mesh name="Plane_0" geometry={nodes.Plane_0.geometry} material={materials.Mesin} />
            </group>
            <group name="Sphere" position={[0, 0.11, 0.72]}>
              <mesh name="Sphere_0" geometry={nodes.Sphere_0.geometry} material={materials.Mesin} />
            </group>
            <group name="Circle001" position={[2.47, -0.88, 0]} scale={0.53}>
              <mesh name="Circle001_0" geometry={nodes.Circle001_0.geometry} material={materials.Tiang} />
            </group>
            <group name="Circle002" position={[2.47, -0.88, -0.25]} scale={0.53}>
              <mesh name="Circle002_0" geometry={nodes.Circle002_0.geometry} material={materials.Tiang} />
            </group>
            <group name="Plane001" position={[2.47, -0.88, 2.91]} scale={0.35}>
              <mesh name="Plane001_0" geometry={nodes.Plane001_0.geometry} material={materials.Tiang} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/patricio.gltf')
