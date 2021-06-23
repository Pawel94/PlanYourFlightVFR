import plane from "../../plane.png";
import { WiDayCloudy } from "react-icons/wi";
import { BsFillPersonFill } from "react-icons/bs";
import { VscHome } from "react-icons/vsc";

const Sidebar = () => {
  return (
    <div class="sticky top-0 z-50 text-white">
      <header class="flex flex-row justify-between items-center space-x-4 bg-yellow-700 py-6 px-6 sticky top-0 z-50 ">
        <nav class="flex flex-row space-x-6 font-semibold text-white">
          <img
            class=" object-scale-down overflow-auto h-9 "
            src={plane}
            alt=""
          />
          <a href="/" class="text-white hover:text-black">
            <VscHome class="align-middle inline-block" />
            <span>Home</span>
          </a>

          <a href="Weater" class="text-white hover:text-black">
            <WiDayCloudy class="align-middle inline-block" />
            <span>Weater</span>
          </a>
          <a href="/AboutMe" class="text-white hover:text-black">
            <BsFillPersonFill class="align-middle inline-block" />
            <span>About Me</span>
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Sidebar;
