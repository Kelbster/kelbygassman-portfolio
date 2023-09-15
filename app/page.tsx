import AmzWorkHistory from "./components/amz-work-history";
import MonsterWorkHistory from "./components/monster-work-history";
import CventWorkHistory from "./components/cvent-work-history";
// import Praise from "./components/praise";
import { headingHero, superHeading } from "./styles/index";

export default function Page() {
  return (
    <>
      <div className="container max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto flex min-h-screen flex-col items-center justify-center">
        <div className="-mt-24">
          <h1 className={superHeading}>Kelby Gassman</h1>
          <h2 className={headingHero}>Highly Technical UX Designer.</h2>
        </div>
      </div>
      <AmzWorkHistory />
      <MonsterWorkHistory />
      <CventWorkHistory />
    </>
  );
}
