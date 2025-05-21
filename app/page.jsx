import Main from "./components/Main";
import Lineup from "./components/Lineup";
import Essentials from "./components/Essentials";
import AppleWatch from "./components/AppleWatch";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <div className="mx-auto ">
        <Header />
        <Main />
        <Lineup />
        <Essentials />
        <AppleWatch />
      </div>
    </>
  );
}
