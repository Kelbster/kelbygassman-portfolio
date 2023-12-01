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
} from "../styles/index";

const CventWorkHistory = () => {
  const refCventParallax = useRef(null);

  const { scrollYProgress } = useScroll({
    target: refCventParallax,
    offset: ["start end", "start start"],
  });

  const animRange = [0, 1];
  const animEase = easeInOut;

  const imgY1 = useTransform(scrollYProgress, animRange, ["75%", "30%"], {
    ease: easeInOut,
  });
  const imgY2 = useTransform(scrollYProgress, animRange, ["20%", "60%"], {
    ease: easeInOut,
  });
  const imgY3 = useTransform(scrollYProgress, animRange, ["100%", "-10%"], {
    ease: easeInOut,
  });

  return (
    <section>
      <div
        className={workIntroContainer}
        style={{
          background: "linear-gradient(96deg, #006AE1 21.87%, #00BEA5 100%)",
        }}
      >
        <div
          className={`${containerDefault} flex flex-col items-start justify-center h-full`}
        >
          <p className={`${superHeading} text-gray-900`}>2020</p>
          <h1 className={`${heading} text-gray-900`}>
            <a
              className={headingLinkLight}
              href="https://www.cvent.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Cvent
            </a>
          </h1>
          <h3 className={`${subHeading} text-gray-900`}>
            A better way to manage your events
          </h3>
        </div>
      </div>

      <div className="bg-gray-900 text-gray-100">
        <div className={`${containerDefault} mx-auto pt-24 sm:pt-32 pb-32`}>
          <div
            ref={refCventParallax}
            className={`${parallaxContainer(
              "h-[340px]"
            )} sm:h-[500px] md:h-[570px] lg:h-[640px]`}
          >
            <motion.div
              className="absolute z-10"
              style={{ y: imgY1, left: "50%", x: "-50%" }}
            >
              <Image
                className="drop-shadow-lg rounded-lg max-w-[220px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[411px]"
                src="/images/cvent-1.jpg"
                alt="Work from Cvent"
                height={300}
                width={411}
              />
            </motion.div>
            <motion.div
              className="absolute"
              style={{ y: imgY2, left: "50%", x: "-50%" }}
            >
              <Image
                className="drop-shadow-md -translate-x-[20%] sm:-translate-x-[40%] max-w-[220px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[411px] rounded-lg z-0 lg:-translate-x-[200px] "
                src="/images/cvent-2.jpg"
                alt="Work from Cvent"
                height={300}
                width={411}
              />
            </motion.div>
            <motion.div
              className="absolute"
              style={{ y: imgY3, left: "50%", x: "-50%" }}
            >
              <Image
                className="drop-shadow-md translate-x-[20%] sm:translate-x-[40%] max-w-[220px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[411px] rounded-lg z-0 lg:translate-x-[200px]"
                src="/images/cvent-3.jpg"
                alt="Work from Cvent"
                height={300}
                width={411}
              />
            </motion.div>
          </div>
          <div
            className={`${containerDefault} md:grid grid-flow-col auto-cols lg:gap-2 md:gap-8 mb-16 md:mb-32`}
          >
            <div className={aboutContainerGrid}>
              <div className="mb-6">
                <h3 className={`text-gray-100 flex`}>
                  <a
                    className={infoHeadingLink}
                    href="https://www.cvent.com/"
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
                  className={`${infoHeading} text-gray-100 flex gap-2 items-center mb-2`}
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
                  className={`${infoHeading} text-gray-100 flex gap-2 items-center mb-2`}
                >
                  Projects
                </h3>
                <ul className="font-helvetica">
                  <li>Multi-tentant Design System</li>
                  <li>Prototyping Library</li>
                  <li>Cvent Supplier Network</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl text-gray-100 mb-3">About</h3>
              <p className="font-helvetica text-base md:text-lg">
                My main focus while at Cvent was building the next generation of
                components, resources, and designer &amp; developer tools for
                the Carina Design System. Redefining how Cvent builds software
                and products meant starting from the ground up.
              </p>
              <p className="font-helvetica text-base md:text-lg">
                <br />
                My two{" "}
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
                    className="absolute -inset-1 -skew-y-1 top-[90%] bg-system-warning"
                    aria-hidden="true"
                  ></motion.span>
                  <span className="relative">passion projects</span>
                </span>
                : created a design library for high fidelity prototyping using
                Framer X with real live components from our design system, and
                built a motion library for said design system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CventWorkHistory;
