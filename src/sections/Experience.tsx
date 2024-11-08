import { Canvas } from "@react-three/fiber";
import { workExperiences } from "../constants";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useState } from "react";
import CanvasLoader from "../components/CanvasLoader";
import Developer from "../components/Developer";

function Experience() {
  const [animationName, setAnimationName] = useState("idle");
  return (
    <section className="c-space my-20" id="career">
      <div className="w-full text-white-600">
        <h3 className="head-text">My Work Experience</h3>

        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Suspense fallback={<CanvasLoader />}>
                <Developer
                  position-y={-3}
                  scale={3}
                  animationName={animationName}
                />
              </Suspense>
            </Canvas>
          </div>

          <div className="work-content">
            <div className="px-2.5 py-5 sm:px-5 sm:py-10">
              {workExperiences.map(
                ({ id, name, pos, icon, duration, title, animation }) => (
                  <div
                    key={id}
                    className="work-content_container group"
                    onClick={() => setAnimationName(animation.toLowerCase())}
                    onPointerOver={() =>
                      setAnimationName(animation.toLowerCase())
                    }
                    onPointerOut={() => setAnimationName("idle")}
                  >
                    <div className="flex h-full flex-col items-center justify-start py-2">
                      <div className="work_content_logo">
                        <img src={icon} alt="logo" className="h-full w-full" />
                      </div>
                      <div className="work-content_bar" />
                    </div>
                    <div className="px-2.5 py-5 sm:p-5">
                      <p className="font-bold text-white-800">{name}</p>
                      <p className="mb-5 text-sm">
                        {pos} -- {duration}
                      </p>
                      <p className="transition duration-500 ease-in-out group-hover:text-white">
                        {title}
                      </p>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
