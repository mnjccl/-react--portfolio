import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { Group, SkinnedMesh } from "three";

function Developer({ animationName = "idle", ...props }) {
  const groupRef = useRef<Group | null>(null);
  const { nodes, materials } = useGLTF("models/animations/developer.glb");

  const { animations: idleAnimation } = useFBX("models/animations/idle.fbx");
  const { animations: saluteAnimation } = useFBX(
    "models/animations/salute.fbx",
  );
  const { animations: clappingAnimation } = useFBX(
    "models/animations/clapping.fbx",
  );
  const { animations: victoryAnimation } = useFBX(
    "models/animations/victory.fbx",
  );

  idleAnimation[0].name = "idle";
  saluteAnimation[0].name = "salute";
  clappingAnimation[0].name = "clapping";
  victoryAnimation[0].name = "victory";

  const { actions } = useAnimations(
    [
      idleAnimation[0],
      saluteAnimation[0],
      clappingAnimation[0],
      victoryAnimation[0],
    ],
    groupRef,
  );

  useEffect(() => {
    const action = actions[animationName];
    action?.reset().fadeIn(0.5).play();
    return () => {
      action?.fadeOut(0.5);
    };
  }, [actions, animationName]);

  return (
    <group {...props} dispose={null} ref={groupRef}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={(nodes.EyeLeft as SkinnedMesh).geometry}
        material={materials.Wolf3D_Eye}
        skeleton={(nodes.EyeLeft as SkinnedMesh).skeleton}
        morphTargetDictionary={
          (nodes.EyeLeft as SkinnedMesh).morphTargetDictionary
        }
        morphTargetInfluences={
          (nodes.EyeLeft as SkinnedMesh).morphTargetInfluences
        }
      />
      <skinnedMesh
        name="EyeRight"
        geometry={(nodes.EyeRight as SkinnedMesh).geometry}
        material={materials.Wolf3D_Eye}
        skeleton={(nodes.EyeRight as SkinnedMesh).skeleton}
        morphTargetDictionary={
          (nodes.EyeRight as SkinnedMesh).morphTargetDictionary
        }
        morphTargetInfluences={
          (nodes.EyeRight as SkinnedMesh).morphTargetInfluences
        }
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={(nodes.Wolf3D_Head as SkinnedMesh).geometry}
        material={materials.Wolf3D_Skin}
        skeleton={(nodes.Wolf3D_Head as SkinnedMesh).skeleton}
        morphTargetDictionary={
          (nodes.Wolf3D_Head as SkinnedMesh).morphTargetDictionary
        }
        morphTargetInfluences={
          (nodes.Wolf3D_Head as SkinnedMesh).morphTargetInfluences
        }
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={(nodes.Wolf3D_Teeth as SkinnedMesh).geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={(nodes.Wolf3D_Teeth as SkinnedMesh).skeleton}
        morphTargetDictionary={
          (nodes.Wolf3D_Teeth as SkinnedMesh).morphTargetDictionary
        }
        morphTargetInfluences={
          (nodes.Wolf3D_Teeth as SkinnedMesh).morphTargetInfluences
        }
      />
      <skinnedMesh
        geometry={(nodes.Wolf3D_Glasses as SkinnedMesh).geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={(nodes.Wolf3D_Glasses as SkinnedMesh).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Wolf3D_Outfit_Top as SkinnedMesh).geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={(nodes.Wolf3D_Outfit_Top as SkinnedMesh).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Wolf3D_Outfit_Bottom as SkinnedMesh).geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={(nodes.Wolf3D_Outfit_Bottom as SkinnedMesh).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Wolf3D_Outfit_Footwear as SkinnedMesh).geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={(nodes.Wolf3D_Outfit_Footwear as SkinnedMesh).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Wolf3D_Body as SkinnedMesh).geometry}
        material={materials.Wolf3D_Body}
        skeleton={(nodes.Wolf3D_Body as SkinnedMesh).skeleton}
      />
    </group>
  );
}

useGLTF.preload("models/animations/developer.glb");

export default Developer;
