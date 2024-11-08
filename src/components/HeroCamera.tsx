import { ReactNode, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { Group } from "three";

function HeroCamera({
  children,
  isMobile,
}: {
  children: ReactNode;
  isMobile: boolean;
}) {
  const groupRef = useRef<Group | null>(null);

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);

    if (!isMobile && groupRef.current) {
      easing.dampE(
        groupRef.current.rotation,
        [-state.pointer.y / 3, -state.pointer.x / 5, 0],
        0.25,
        delta,
      );
    }
  });

  return (
    <group ref={groupRef} scale={isMobile ? 1 : 1.3}>
      {children}
    </group>
  );
}

export default HeroCamera;