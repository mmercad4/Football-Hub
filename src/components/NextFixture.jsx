import "../index.css";
import RealMadridLogo from "../assets/Real-Madrid-logo.png";
import BarcelonaLogo from "../assets/Barcelona-logo.png";

export default function NextFixture() {
  return (
    <div className="w-full lg:w-[60vw] mx-auto">
      <div
        href="#"
        class="text-white flex flex-col p-6 mx-6 mt-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <div className="mb-6 mx-auto">
          <p>Copa del Rey · Tomorrow, 3:30pm</p>
        </div>
        <div className="flex justify-around md:justify-center md:gap-36">
          <div className="flex flex-col items-center">
            <img
              className="h-10 sm:h-20 md:h-26 lg:h-36 mb-4"
              src={RealMadridLogo}
              alt="image description"
            />
            <div>REAL MADRID</div>
          </div>
          <div className="flex justify-center items-center">VS</div>
          <div className="flex flex-col items-center">
            <img
              className="h-10 sm:h-20 md:h-26 lg:h-36 mb-4"
              src={BarcelonaLogo}
              alt="image description"
            />
            <div>BARCELONA</div>
          </div>
        </div>
      </div>
    </div>
  );
}
