import { useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"


export default function Cylinder() {
    let tex = useTexture("./texture1.png")
    let cyl = useRef(null)

    useFrame((_, delta) => {
        cyl.current.rotation.y -= delta/1.5
    })
    return(
        <group rotation={[0, 0.7, -0.2]}>
            <mesh ref={cyl}>
                <cylinderGeometry args={[1.5, 1.5, 1.5, 100, 30, true]} />
                <meshBasicMaterial map={tex} transparent side={THREE.DoubleSide} />
            </mesh>
        </group>
    )
}