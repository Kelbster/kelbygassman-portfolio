"use client";

import { useRef } from "react";
import Image from "next/image";
import { backInOut, motion, useScroll, useTransform } from "framer-motion";

export default function MonsterWorkHistory() {
  const refParallax = useRef(null);

  const { scrollYProgress } = useScroll({
    target: refParallax,
    offset: ["start end", "end end"],
  });

  const imgY1 = useTransform(scrollYProgress, [0, 1.5], ["10%", "40%"], {
    ease: backInOut,
  });
  const imgY2 = useTransform(scrollYProgress, [0, 1.5], ["20%", "5%"], {
    ease: backInOut,
  });
  const imgX2 = useTransform(scrollYProgress, [0, 1.5], ["50%", "90%"], {
    ease: backInOut,
  });

  return (
    <section>
      <div
        style={{
          background: "linear-gradient(96deg, #6E46AE 32.81%, #B051AA 100%)",
          height: 545,
        }}
      >
        <div className="container lg:max-w-5xl mx-auto flex flex-col items-start justify-center h-full">
          <p className="super-heading text-gray-900">2020</p>
          <h1 className="heading text-gray-900">
            <a
              href="https://www.monster.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Monster
            </a>
          </h1>
          <h3 className="sub-heading text-gray-900">
            Finding the right fit for job seekers and employers
          </h3>
        </div>
      </div>

      <div className="bg-gray-900 text-gray-100">
        <div
          ref={refParallax}
          className="container lg:max-w-5xl mx-auto pt-32 pb-32"
        >
          <div className="flex flex-col items-center justify-center">
            <div className="relative h-[500px] w-[820px] mx-auto">
              <motion.div
                className="absolute z-10"
                style={{ y: imgY1, x: "15%" }}
              >
                <Image
                  className="drop-shadow-lg rounded-lg"
                  src="/images/monster-1.jpg"
                  alt="Work from Monster"
                  height={319}
                  width={527}
                />
              </motion.div>
              <motion.div className="absolute" style={{ y: imgY2, x: imgX2 }}>
                <Image
                  className="drop-shadow-md rounded-lg"
                  src="/images/monster-2.jpg"
                  alt="Work from Monster"
                  height={319}
                  width={437}
                />
              </motion.div>
            </div>
          </div>
          <div className="md:grid grid-flow-col auto-cols lg:gap-2 md:gap-8 mt-32 mb-32">
            <div className="grid grid-flow-col w-auto mb-8 md:block md:mb-0 md:w-60 lg:w-80">
              <div className="mb-8">
                <h3 className="sub-heading text-gray-100 text-2xl flex">
                  <a
                    className="flex gap-2 items-center border-b border-opacity-0 border-b-gray-100 hover:border-opacity-100 focus:outline-none focus:border-opacity-100 transition ease-in-out duration-300"
                    href="https://www.monster.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Link{" "}
                    <Image
                      src="/images/link.svg"
                      width={20}
                      height={9}
                      alt="link icon"
                    />
                  </a>
                </h3>
              </div>
              <div className="mb-8">
                <h3 className="sub-heading text-gray-100 text-2xl flex gap-2 items-center mb-1">
                  Design Technologist
                </h3>
                <h3 className="sub-heading text-gray-100 text-2xl flex gap-2 items-center mb-2">
                  UX Engineer
                </h3>
                <ul className="font-helvetica">
                  <li>UX/UI Design</li>
                  <li>Designer &amp; Developer Tools</li>
                  <li>Front-end Engineering</li>
                  <li>Prototypes</li>
                </ul>
              </div>
              <div>
                <h3 className="sub-heading text-gray-100 text-2xl flex gap-2 items-center mb-2">
                  Projects
                </h3>
                <ul className="font-helvetica">
                  <li>Multi-tentant Design System</li>
                  <li>Monster Home Page</li>
                  <li>Monster Search Pages</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-3xl text-gray-100 mb-3">About</h3>
              <p className="font-helvetica text-lg">
                I pushed the multi-tenant Design System to new levels of
                efficiency and automation through research and development.
                Using the designer and developer tools I built (like the design
                token system, figma libraries &amp; components, and
                documentation resources), designers and developers alike could
                quickly and efficiently build products and features in a
                collaborative process. Cultivated a culture of open
                communication and knowledge sharing.
              </p>
              <p className="font-helvetica text-lg">
                Modernized and transformed the Monster search platform and
                discovery services to simplify and enhance the process of job
                searching with a direct impact on job seekers, recruiters, and
                employers to match the right candidates to the right jobs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
