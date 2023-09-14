"use client";

import { useRef } from "react";
import Image from "next/image";
import { backInOut, motion, useScroll, useTransform } from "framer-motion";

const CventWorkHistory = () => {
  const refParallax = useRef(null);

  const { scrollYProgress } = useScroll({
    target: refParallax,
    offset: ["start end", "end end"],
  });

  const imgY1 = useTransform(scrollYProgress, [0, 1], ["75%", "40%"], {
    ease: backInOut,
  });
  const imgY2 = useTransform(scrollYProgress, [0, 1], ["20%", "35%"], {
    ease: backInOut,
  });
  const imgY3 = useTransform(scrollYProgress, [0, 1], ["150%", "40%"], {
    ease: backInOut,
  });

  return (
    <section>
      <div
        style={{
          background: "linear-gradient(96deg, #006AE1 21.87%, #00BEA5 100%)",
          height: 545,
        }}
      >
        <div className="container lg:max-w-5xl mx-auto flex flex-col items-start justify-center h-full">
          <p className="super-heading text-gray-900">2020</p>
          <h1 className="heading text-gray-900">
            <a
              href="https://www.cvent.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Cvent
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
          <div className="relative h-[540px] w-[820px] mx-auto">
            <motion.div
              className="absolute z-10"
              style={{ y: imgY1, x: "50%" }}
            >
              <Image
                className="drop-shadow-xl rounded-lg"
                src="/images/cvent-1.jpg"
                alt="Work from Cvent"
                height={300}
                width={411}
              />
            </motion.div>
            <motion.div className="absolute" style={{ y: imgY2, x: "50%" }}>
              <Image
                className="drop-shadow-md rounded-lg z-0 -translate-x-[200px] translate-y-[76px]"
                src="/images/cvent-2.jpg"
                alt="Work from Cvent"
                height={300}
                width={411}
              />
            </motion.div>
            <motion.div className="absolute" style={{ y: imgY3, x: "50%" }}>
              <Image
                className="drop-shadow-md rounded-lg z-0 translate-x-[200px] -translate-y-[112px]"
                src="/images/cvent-3.jpg"
                alt="Work from Cvent"
                height={300}
                width={411}
              />
            </motion.div>
          </div>
          <div className="md:grid grid-flow-col auto-cols lg:gap-2 md:gap-8 mt-32 mb-32">
            <div className="grid grid-flow-col w-auto mb-8 md:block md:mb-0 md:w-60 lg:w-80">
              <div className="mb-8">
                <h3 className="sub-heading text-gray-100 text-2xl flex">
                  <a
                    className="sub-heading flex gap-2 items-center border-b border-opacity-0 border-b-gray-100 hover:border-opacity-100 focus:outline-none focus:border-opacity-100 transition ease-in-out duration-300"
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
                  <li>Cvent Supplier Network</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-3xl text-gray-100 mb-3">About</h3>
              <p className="font-helvetica text-lg">
                Built the design and technical implementation of the Carina
                Design System for web and mobile products at Cvent. Established
                guidelines, documentation, and best practices so designers and
                developers could collaborate and co author the design system.
                Created a motion library and rapid prototyping tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CventWorkHistory;
