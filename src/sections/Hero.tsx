import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";

import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";
import { calculateSizes } from "../constants";

function Hero() {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="relative flex min-h-screen w-full flex-col" id="home">
      <div className="c-space mt-20 flex w-full flex-col sm:mt-36">
        <p className="text-center font-generalsans text-3xl font-black sm:text-3xl">
          <span className="text-gray_gradient">Hi, I am Minja</span>{" "}
          <span className="waving-hand">👋</span>
        </p>
      </div>
      <div className="absolute inset-0 h-full w-full">
        <Canvas className="h-full w-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                position={sizes.deskPosition}
                rotation={[0, -Math.PI, 0]}
                scale={sizes.deskScale}
              />
            </HeroCamera>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
      <div className="c-space absolute bottom-7 left-0 right-0 z-10 w-full">
        <a href="#contact" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
}

export default Hero;
