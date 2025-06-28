import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import lines from "../assets/homepage-lines.svg";
import "swiper/css";
import "swiper/css/pagination";
import sampleplot from "../assets/plot.svg";

interface PlotDetailsProp {
  openModal: () => void;
}

const plotData = [
  {
    config: "1200 sq.ft",
    price: "₹ 69 lakhs onwards*",
  },
  {
    config: "1500 sq.ft",
    price: "₹ 86 sq.ft onwards*",
  },
  {
    config: "2040 sq.ft",
    price: "₹ 1.2 Cr onwards*",
  },
];

export default function PlotDetailsPage({ openModal }: PlotDetailsProp) {
  return (
    <div id="floorplan" className="bg-[#f2fbe7] w-full py-5 flex flex-col md:pb-10 overflow-hidden md:relative md:z-1 scroll-mt-[100px]">
      {/* Section Heading */}
      <h2 className="text-[#26650B] font-semibold text-base md:text-xl border-3 border-[#26650B] px-8 py-1 rounded-full mb-2 self-start mx-6 md:mx-30 md:my-8 md:mb-0">
        PLOT DETAILS
      </h2>

      <img
        src={lines}
        alt="decoline"
        className="lg:w-165 lg:absolute lg:-top-165 lg:-right-100 lg:-z-3 hidden lg:block lg:rotate-180 "
      />

      {/* Mobile Swiper */}
      <div className="w-full relative z-10 md:hidden">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView="auto"
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          className="pb-6 pr-6 z-7"
        >
          {plotData.map((plot, index) => (
            <SwiperSlide
              key={index}
              className={`!w-[270px] flex-shrink-0 rounded-2xl py-6 ${
                index === 0 ? "ml-6" : ""
              }`}
            >
              <PlotCard plot={plot} openModal={openModal} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-pagination mt-4 flex justify-center space-x-2"></div>
      </div>

      {/* Desktop Static Layout */}
      <div className="hidden md:flex justify-center gap-6 px-6 md:ml-24">
        {plotData.map((plot, index) => (
          <div key={index} className="w-[300px] py-6 md:w-full">
            <PlotCard plot={plot} openModal={openModal} />
          </div>
        ))}
      </div>

      {/* Pagination dot styling */}
      <style>{`
        .custom-pagination .swiper-pagination-bullet {
          background-color: rgb(123, 123, 121);
          opacity: 0.5;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background-color: rgb(56, 57, 56);
          opacity: 1;
        }
      `}</style>
    </div>
  );
}

// Card component
const PlotCard = ({
  plot,
  openModal,
}: {
  plot: { config: string; price: string };
  openModal: () => void;
}) => (
  <div className="max-w-full">
    <div className="mb-4">
      <p className="text-[#26650B] text-sm md:text-base font-base mb-1">
        Configuration type:{" "}
        <span className="font-bold">{plot.config}</span>
      </p>
      <p className="text-[#26650B] text-sm md:text-base font-base">
        Price: <span className="font-bold">{plot.price}</span>
      </p>
    </div>
    <div className="relative w-full md:w-95 aspect-square mb-5 rounded-[50px] overflow-hidden border-2 border-[#26650B]">
      <img
        src={sampleplot}
        alt="plot"
        className="w-full h-full object-cover blur-sm"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={openModal}
          className="bg-[#26650B] text-white text-sm px-5 py-2 rounded-lg font-medium cursor-pointer"
        >
          Get Plot Plan
        </button>
      </div>
    </div>
  </div>
);
