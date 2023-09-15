"use client";

import { useRef } from "react";
import Image from "next/image";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import {
  aboutContainerGrid,
  containerDefault,
  heading,
  headingLink,
  infoHeading,
  infoHeadingLink,
  linkInline,
  parallaxContainer,
  subHeading,
  superHeading,
  workIntroContainer,
} from "../styles/index";

export default function AmzWorkHistory() {
  const refAmzParallax = useRef(null);

  const { scrollYProgress } = useScroll({
    target: refAmzParallax,
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
        className={workIntroContainer}
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
          <div ref={refAmzParallax} className={parallaxContainer("h-[290px]")}>
            <motion.div
              className="absolute z-10"
              style={{ y: imgY1, x: "50%", right: "50%" }}
            >
              <Image
                className="drop-shadow-lg rounded-lg max-w-[200px] sm:max-w-[250px] md:max-w-[311px] lg:max-w-[411px]"
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
                className="drop-shadow-md rounded-lg max-w-[140px] sm:max-w-[200px] md:max-w-[256px] lg:max-w-[306px]"
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
                className="drop-shadow-md rounded-lg max-w-[140px] sm:max-w-[200px] md:max-w-[256px] lg:max-w-[306px]"
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
            <div className={aboutContainerGrid}>
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
                The{" "}
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
                    className="block absolute -inset-1 -skew-y-1 top-[90%] bg-system-warning"
                    aria-hidden="true"
                  ></motion.span>
                  <span className="relative">Gotham Design System</span>
                </span>{" "}
                is a multi-tenant system that focuses on creating fun, engaging
                experiences for Amazon partners and customers. This is not a
                &ldquo;one size fits all&rdquo; approach, but instead targets
                games, multimedia, and digital e-commerce. My work at Amazon is
                confidential, but if you&rsquo;re interested in finding out more
                about my experience,{" "}
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
