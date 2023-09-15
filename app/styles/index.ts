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

export const aboutContainerGrid =
  "grid grid-flow-row sm:grid-flow-col w-auto mb-8 md:block md:mb-0 md:w-60 lg:w-80";

const linkHoverDark =
  "cursor-pointer border-b border-opacity-0 border-b-gray-100 hover:border-opacity-100 focus:outline-none focus:border-opacity-100 transition ease-in-out duration-300";

const linkHoverLight = `${linkHoverDark} border-b-gray-900`;

export const linkInline =
  "cursor-pointer pb-3 border-b border-opacity-25 border-b-gray-100 hover:border-opacity-100 focus:outline-none focus:border-opacity-100 transition ease-in-out duration-300";

const headingMd =
  "md:text-[3.875rem] md:leading-[4.5rem] md:tracking-[0.1625rem]";

const headingLg =
  "lg:text-[5.25rem] lg:leading-[6.25rem] lg:tracking-[0.1875rem]";

const headingXl = "xl:text-[5.875rem] xl:leading-[6.625rem]";

export const heading = `${headingMd} ${headingLg} ${headingXl} font-sansBold text-[2.625rem] font-bold leading-[2.85rem] tracking-[0.0375rem]`;

export const headingHero = `${heading} mb-8 uppercase`;

export const headingLink = linkHoverDark;

export const headingLinkLight = linkHoverLight;

export const subHeading =
  "text-base md:text-2xl leading-[1.375rem] tracking-[0.0325rem]";

export const infoHeading =
  "text-lg md:text-xl leading-[1.375rem] tracking-[0.05rem]";

export const infoHeadingLink = `${infoHeading} ${linkHoverDark} flex gap-2 items-center pb-2 `;

export const superHeading = "text-sm md:text-xl tracking-[0.05rem]";

export const workIntroContainer = "h-[400px] md:h-[545px]";

// requires minimum height (ie, 'h-[250px]')
export const parallaxContainer = (h: string) =>
  `relative ${h} sm:h-[400px] md:h-[500px] lg:h-[600px] w-[100%] lg:w-[820px] mx-auto`;
