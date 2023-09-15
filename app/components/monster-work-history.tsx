"use client";

import { useRef } from "react";
import Image from "next/image";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import {
  aboutContainerGrid,
  containerDefault,
  heading,
  headingLinkLight,
  infoHeading,
  infoHeadingLink,
  parallaxContainer,
  subHeading,
  superHeading,
  workIntroContainer,
} from "../styles";

export default function MonsterWorkHistory() {
  const refMonsterParallax = useRef(null);

  const { scrollYProgress } = useScroll({
    target: refMonsterParallax,
    offset: ["start end", "start start"],
  });

  const animRange = [0, 1];
  const animEase = easeInOut;

  const imgY1 = useTransform(scrollYProgress, animRange, ["10%", "40%"], {
    ease: animEase,
  });
  const imgY2 = useTransform(scrollYProgress, animRange, ["20%", "5%"], {
    ease: animEase,
  });
  const imgX2 = useTransform(scrollYProgress, animRange, ["50%", "90%"], {
    ease: animEase,
  });

  return (
    <section>
      <div
        className={workIntroContainer}
        style={{
          background: "linear-gradient(96deg, #6E46AE 32.81%, #B051AA 100%)",
        }}
      >
        <div
          className={`${containerDefault} flex flex-col items-start justify-center h-full`}
        >
          <p className={superHeading}>2020</p>
          <h1 className={heading}>
            <a
              className={headingLinkLight}
              href="https://www.monster.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Monster
            </a>
          </h1>
          <h3 className={subHeading}>
            Finding the right fit for job seekers and employers
          </h3>
        </div>
      </div>

      <div className="bg-gray-900 text-gray-100">
        <div className={`${containerDefault} mx-auto pt-24 sm:pt-32 pb-32`}>
          <div
            ref={refMonsterParallax}
            className={parallaxContainer("h-[300px]")}
          >
            <motion.div
              className="absolute z-10"
              style={{ y: imgY1, x: "15%" }}
            >
              <Image
                className="drop-shadow-lg rounded-lg -translate-x-[15%] sm:-translate-x-0 max-w-[240px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[527px]"
                src="/images/monster-1.jpg"
                alt="Work from Monster"
                height={319}
                width={527}
              />
            </motion.div>
            <motion.div
              className="absolute"
              style={{ y: imgY2, x: imgX2, width: 0, left: "50%" }}
            >
              <Image
                className="drop-shadow-md rounded-lg -translate-x-[20%] sm:-translate-x-0 max-w-[200px] sm:max-w-[250px] md:max-w-[320px] lg:max-w-[437px]"
                src="/images/monster-2.jpg"
                alt="Work from Monster"
                height={319}
                width={437}
              />
            </motion.div>
          </div>
          <div
            className={`${containerDefault} md:grid grid-flow-col auto-cols lg:gap-2 md:gap-8 mb-16 md:mb-32`}
          >
            <div className={aboutContainerGrid}>
              <div className="mb-8">
                <h3 className={`text-gray-100 flex`}>
                  <a
                    className={infoHeadingLink}
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
                <h3
                  className={`${infoHeading} text-gray-100 flex gap-2 items-center mb-1`}
                >
                  Design Technologist
                </h3>
                <h3
                  className={`${infoHeading} text-gray-100 flex gap-2 items-center mb-1`}
                >
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
                <h3
                  className={`${infoHeading} text-gray-100 flex gap-2 items-center mb-1`}
                >
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
              <h3 className="text-2xl sm:text-3xl text-gray-100 mb-3">About</h3>
              <p className="font-helvetica text-lg">
                I pushed the{" "}
                <span className="relative">
                  <motion.span
                    initial={{ scaleX: 0, opacity: 0, transformOrigin: "left" }}
                    whileInView={{
                      scaleX: 1,
                      opacity: 0.7,
                      rotate: "-.75deg",
                      skew: "-3deg",
                    }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="hidden sm:block absolute -inset-1 -skew-y-1 top-[90%] bg-system-warning"
                    aria-hidden="true"
                  ></motion.span>
                  <span className="relative">Multi-tenant Design System</span>
                </span>{" "}
                to new levels of efficiency and automation through research and
                development. Using the designer and developer tools I built
                (like the design token system, figma libraries &amp; components,
                and documentation resources), designers and developers alike
                could quickly and efficiently build products and features in a
                collaborative process.
              </p>
              <br />
              <p className="font-helvetica text-lg">
                I set out to cultivate a culture of open communication and
                knowledge sharing, resulting in a shift from{" "}
                <span className="relative">
                  <motion.span
                    initial={{ scaleX: 0, opacity: 0, transformOrigin: "left" }}
                    whileInView={{
                      scaleX: 1,
                      opacity: 0.7,
                      rotate: "-1.75deg",
                      skew: "-3deg",
                    }}
                    transition={{ delay: 0.75, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="block absolute -inset-1 top-[90%] bg-system-error"
                    aria-hidden="true"
                  ></motion.span>
                  <span className="relative">reactive</span>
                </span>{" "}
                development to{" "}
                <span className="relative">
                  <motion.span
                    initial={{ scaleX: 0, opacity: 0, transformOrigin: "left" }}
                    whileInView={{
                      scaleX: 1,
                      opacity: 0.7,
                      rotate: "-1.5deg",
                      skew: "-3deg",
                    }}
                    transition={{ delay: 1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="block absolute -inset-1 -skew-y-3 top-[90%] bg-system-success"
                    aria-hidden="true"
                  ></motion.span>
                  <span className="relative">proactive.</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
