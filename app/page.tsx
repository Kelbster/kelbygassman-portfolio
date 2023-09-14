import AmzWorkHistory from "./components/amz-work-history";
import MonsterWorkHistory from "./components/monster-work-history";
import CventWorkHistory from "./components/cvent-work-history";
import Praise from "./components/praise";

export default function Page() {
  return (
    <>
      <div className="container lg:max-w-5xl mx-auto flex min-h-screen flex-col items-center justify-center">
        <div className="-mt-24">
          <h1 className="super-heading">Kelby Gassman</h1>
          <h2 className="heading hero">Highly Technical UX Designer.</h2>
        </div>
      </div>
      <AmzWorkHistory />
      <MonsterWorkHistory />
      <CventWorkHistory />
    </>
  );
}
