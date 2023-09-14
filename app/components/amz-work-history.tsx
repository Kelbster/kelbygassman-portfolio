"use client";

import { useRef } from "react";
import Image from "next/image";
import { backInOut, motion, useScroll, useTransform } from "framer-motion";

export default function AmzWorkHistory() {
  const refParallax = useRef(null);

  const { scrollYProgress } = useScroll({
    target: refParallax,
    offset: ["start end", "end end"],
  });

  const imgY1 = useTransform(scrollYProgress, [0, 1.5], ["75%", "33%"], {
    ease: backInOut,
  });
  const imgY2 = useTransform(scrollYProgress, [0, 1.5], ["85%", "20%"], {
    ease: backInOut,
  });
  const imgY3 = useTransform(scrollYProgress, [0, 1.5], ["85%", "10%"], {
    ease: backInOut,
  });
  const imgX2 = useTransform(scrollYProgress, [0, 1.5], ["75%", "10%"], {
    ease: backInOut,
  });
  const imgX3 = useTransform(scrollYProgress, [0, 1.5], ["85%", "160%"], {
    ease: backInOut,
  });

  return (
    <section>
      <div
        style={{
          background: "linear-gradient(135deg, #FFC400 0%, #F90 100%)",
          height: 545,
        }}
      >
        <div className="container lg:max-w-5xl mx-auto flex flex-col items-start justify-center h-full">
          <p className="super-heading text-gray-100">2022</p>
          <h1 className="heading text-gray-100">
            <a
              href="https://www.amazongames.com/en-us"
              rel="noopener noreferrer"
              target="_blank"
            >
              Amazon
            </a>
          </h1>
          <h3 className="sub-heading text-gray-100">
            Crafting a player-obsessed, media-rich design system
          </h3>
        </div>
      </div>

      <div className="bg-gray-900 text-gray-100">
        <div
          ref={refParallax}
          className="container lg:max-w-5xl mx-auto pt-32 pb-32"
        >
          <div className="relative h-[500px] w-[820px] mx-auto">
            <motion.div
              className="absolute z-10"
              style={{ y: imgY1, x: "50%" }}
            >
              <Image
                className="drop-shadow-lg rounded-lg"
                src="/images/amz-1.jpg"
                alt="Blurred work from Amazon Games"
                height={300}
                width={411}
              />
            </motion.div>
            <motion.div className="absolute" style={{ y: imgY2, x: imgX2 }}>
              <Image
                className="drop-shadow-lg rounded-lg"
                src="/images/amz-2.jpg"
                alt="Blurred work from Amazon Games"
                height={275}
                width={306}
              />
            </motion.div>
            <motion.div className="absolute" style={{ y: imgY3, x: imgX3 }}>
              <Image
                className="drop-shadow-lg rounded-lg"
                src="/images/amz-3.jpg"
                alt="Blurred work from Amazon Games"
                height={275}
                width={306}
              />
            </motion.div>
          </div>
          <div className="md:grid grid-flow-col auto-cols lg:gap-2 md:gap-8 mt-32 mb-32">
            <div className="grid grid-flow-col w-auto mb-8 md:block md:mb-0 md:w-60 lg:w-80">
              <div className="mb-8">
                <h3 className="sub-heading text-gray-100 text-2xl flex">
                  <a
                    className="flex gap-2 items-center border-b border-opacity-0 border-b-gray-100 hover:border-opacity-100 focus:outline-none focus:border-opacity-100 transition ease-in-out duration-300"
                    href="https://www.amazongames.com/en-us"
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
                    {/* <Image
                      className="-translate-y-[2px]"
                      src="/images/lock.svg"
                      width={13}
                      height={18}
                      alt="lock icon"
                    /> */}
                  </a>
                </h3>
              </div>
              <div className="mb-8">
                <h3 className="sub-heading text-gray-100 text-2xl flex gap-2 items-center mb-1">
                  Design Technologist
                </h3>
                <h3 className="sub-heading text-gray-100 text-2xl flex gap-2 items-center mb-2">
                  Co-Lead
                </h3>
                <ul className="font-helvetica">
                  <li>UX/UI Design</li>
                  <li>Designer &amp; Developer Tools</li>
                  <li>Prototypes</li>
                </ul>
              </div>
              <div>
                <h3 className="sub-heading text-gray-100 text-2xl flex gap-2 items-center mb-2">
                  Projects
                </h3>
                <ul className="font-helvetica">
                  <li>Gotham Design System</li>
                  <li>Digital E-commerce</li>
                  <li>Amazon Games ID</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-3xl text-gray-100 mb-3">About</h3>
              <p className="font-helvetica text-lg">
                The Gotham Design System is a multi-tenant system that focuses
                on creating fun, engaging experiences for Amazon partners and
                customers. This is not a &ldquo;one size fits all&rdquo;
                approach, but instead targets games, multimedia, and digital
                e-commerce. My work at Amazon is confidential, but if
                you&rsquo;re interested in finding out more about my experience,{" "}
                <a
                  className="pb-3 border-b border-opacity-25 border-b-gray-100 hover:border-opacity-100 focus:outline-none focus:border-opacity-100 transition ease-in-out duration-300"
                  href="mailto:kelby.gassman@gmail.com"
                >
                  please reach out
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
