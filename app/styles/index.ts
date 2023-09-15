/**
 * Reusable styles as strings/templates
 */

// Breakpoint reference
// 'sm': '640px',
// 'md': '768px',
// 'lg': '1024px',
// 'xl': '1280px',
// '2xl': '1536px',

export const containerDefault =
  "container max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto";

const linkHover =
  "cursor-pointer border-b border-opacity-0 border-b-gray-100 hover:border-opacity-100 focus:outline-none focus:border-opacity-100 transition ease-in-out duration-300";

export const linkInline =
  "cursor-pointer pb-3 border-b border-opacity-25 border-b-gray-100 hover:border-opacity-100 focus:outline-none focus:border-opacity-100 transition ease-in-out duration-300";

const headingMd =
  "md:text-[3.875rem] md:leading-[4.5rem] md:tracking-[0.1625rem]";

const headingLg =
  "lg:text-[5.25rem] lg:leading-[6.25rem] lg:tracking-[0.1875rem]";

const headingXl = "xl:text-[5.875rem] xl:leading-[6.625rem]";

export const heading = `${headingMd} ${headingLg} ${headingXl} font-sansBold text-[2.5rem] font-bold leading-[2.75rem] tracking-[0.0375rem]`;

export const headingHero = `${heading} mb-8 uppercase`;

export const headingLink = linkHover;

export const subHeading =
  "text-base md:text-xl leading-[1.375rem] tracking-[0.05rem]";

export const infoHeading =
  "text-lg md:text-xl leading-[1.375rem] tracking-[0.05rem]";

export const infoHeadingLink = `${infoHeading} ${linkHover} flex gap-2 items-center pb-2 `;

export const superHeading = "text-sm md:text-xl tracking-[0.05rem]";
