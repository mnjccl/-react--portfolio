import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useState } from "react";

function About() {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("cuculaminja@proton.me");
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid h-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-6">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="h-fit w-full object-contain sm:h-[276px]"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Minja</p>
              <p className="grid-subtext">
                I'm a graduated IT engineer with skills in frontend development
                and BaaS solutions, specializing in building dynamic and cool
                websites for seamless user experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container justify-between">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="mx-auto h-fit w-full object-contain sm:w-[276px]"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in JavaScript/TypeScript with a focus on React
                ecosystem, utilizing tools like Redux for effective state
                management in complex applications.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="flex h-fit w-full items-center justify-center rounded-3xl sm:h-[326px]">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 43,
                    lng: 19,
                    text: "I'm here!",
                    color: "white",
                    size: 20,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I work remotely across most timezones
              </p>
              <p className="grid-subtext">
                I'm based in Serbia, with remote work available. Zoom the Earth
                to find me.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="h-fit w-full object-contain sm:h-[266px]"
            />
            <div>
              <p className="grid-headtext">My Skills</p>
              <p className="grid-subtext">
                I use Vite for fast builds and smooth Hot Module Replacement. My
                expertise includes popular React libraries like React Router,
                React Query, React Error Boundary, React Hook Form, React Hot
                Toast, ReCharts, React Globe and many others. For styling, I
                primarily work with Tailwind CSS and styled-components, while I
                bring 3D effects to my projects with Three.js and GSAP.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="h-fit w-full object-cover sm:h-[276px] sm:object-top md:h-[126px]"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="text-gray_gradient font-medium text-white md:text-xl lg:text-2xl">
                  cuculaminja@proton.me
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
