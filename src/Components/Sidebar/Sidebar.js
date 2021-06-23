import plane from "../../images.png";
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
          <a href="#" class="text-white hover:underline">
            Home
          </a>
          <a href="Weater" class="text-white hover:underline">
            Weater
          </a>
          <a href="#" class="text-white hover:underline">
            About us
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Sidebar;
