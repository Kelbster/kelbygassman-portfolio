"use client";

import { useRef } from "react";
import Image from "next/image";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import {
  containerDefault,
  heading,
  headingLink,
  infoHeading,
  infoHeadingLink,
  linkInline,
  subHeading,
  superHeading,
} from "../styles/index";

export default function AmzWorkHistory() {
  const refParallax = useRef(null);

  const { scrollYProgress } = useScroll({
    target: refParallax,
    offset: ["start end", "start start"],
  });

  const animRange = [0, 1];
  const animEase = easeInOut;

  const imgY1 = useTransform(scrollYProgress, animRange, ["75%", "33%"], {
    ease: animEase,
  });
  const imgY2 = useTransform(scrollYProgress, animRange, ["70%", "20%"], {
    ease: animEase,
  });
  const imgY3 = useTransform(scrollYProgress, animRange, ["70%", "10%"], {
    ease: animEase,
  });
  const imgX2 = useTransform(scrollYProgress, animRange, ["50%", "-20%"], {
    ease: animEase,
  });
  const imgX3 = useTransform(scrollYProgress, animRange, ["50%", "120%"], {
    ease: animEase,
  });

  return (
    <section>
      <div
        className="h-[400px] md:h-[545px]"
        style={{
          background: "linear-gradient(135deg, #FFC400 0%, #F90 100%)",
        }}
      >
        <div
          className={`${containerDefault} flex flex-col items-start justify-center h-full`}
        >
          <p className={`${superHeading} text-gray-100`}>2022</p>
          <h1 className={`${heading} text-gray-100`}>
            <a
              className={headingLink}
              href="https://www.amazongames.com/en-us"
              rel="noopener noreferrer"
              target="_blank"
            >
              Amazon
            </a>
          </h1>
          <h3 className={`${subHeading} text-gray-100`}>
            Crafting a player-obsessed, media-rich design system
          </h3>
        </div>
      </div>

      <div className="bg-gray-900 text-gray-100">
        <div className={`${containerDefault} mx-auto pt-24 sm:pt-32 pb-32`}>
          <div
            ref={refParallax}
            className="relative h-[320px] md:h-[500px] lg:h-[600px] w-[100%] lg:w-[820px] mx-auto"
          >
            <motion.div
              className="absolute z-10"
              style={{ y: imgY1, x: "50%", right: "50%" }}
            >
              <Image
                className="drop-shadow-lg rounded-lg max-w-[200px] md:max-w-[311px] lg:max-w-[411px]"
                src="/images/amz-1.jpg"
                alt="Blurred work from Amazon Games"
                height={300}
                width={411}
              />
            </motion.div>
            <motion.div
              className="absolute"
              style={{ y: imgY2, x: imgX2, right: "50%" }}
            >
              <Image
                className="drop-shadow-lg rounded-lg max-w-[140px] md:max-w-[256px] lg:max-w-[306px]"
                src="/images/amz-2.jpg"
                alt="Blurred work from Amazon Games"
                height={275}
                width={306}
              />
            </motion.div>
            <motion.div
              className="absolute"
              style={{ y: imgY3, x: imgX3, right: "50%" }}
            >
              <Image
                className="drop-shadow-lg rounded-lg max-w-[140px] md:max-w-[256px] lg:max-w-[306px]"
                src="/images/amz-3.jpg"
                alt="Blurred work from Amazon Games"
                height={275}
                width={306}
              />
            </motion.div>
          </div>
          <div
            className={`${containerDefault} md:grid grid-flow-col auto-cols lg:gap-2 md:gap-8 mb-16 md:mb-32`}
          >
            <div className="grid grid-flow-row sm:grid-flow-col w-auto mb-8 md:block md:mb-0 md:w-60 lg:w-80">
              <div className="mb-6">
                <h3 className={`text-gray-100 flex`}>
                  <a
                    className={infoHeadingLink}
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
                <h3
                  className={`${infoHeading} text-gray-100 flex gap-2 items-center mb-1`}
                >
                  Design Technologist
                </h3>
                <h3
                  className={`${infoHeading} text-gray-100 flex gap-2 items-center mb-2`}
                >
                  Co-Lead
                </h3>
                <ul className="font-helvetica">
                  <li>UX/UI Design</li>
                  <li>Designer &amp; Developer Tools</li>
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
                  <li>Gotham Design System</li>
                  <li>Digital E-commerce</li>
                  <li>Amazon Games ID</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl text-gray-100 mb-3">About</h3>
              <p className="font-helvetica text-base md:text-lg">
                The Gotham Design System is a multi-tenant system that focuses
                on creating fun, engaging experiences for Amazon partners and
                customers. This is not a &ldquo;one size fits all&rdquo;
                approach, but instead targets games, multimedia, and digital
                e-commerce. My work at Amazon is confidential, but if
                you&rsquo;re interested in finding out more about my experience,{" "}
                <a className={linkInline} href="mailto:kelby.gassman@gmail.com">
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
