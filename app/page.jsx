import Main from "./components/Main";
import Lineup from "./components/Lineup";
import Essentials from "./components/Essentials";
import AppleWatch from "./components/AppleWatch";

export default function Home() {
  return (
    <>
      <div className="mx-auto ">
        <Main />
        <Lineup />
        <Essentials />
        <AppleWatch />
      </div>
    </>
  );
}
