import React from "react";
import { projectsData } from "../assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1.9 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden"
      id="Project"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Crafting spaces, Building Legacies - Explore Our Portfolio
      </p>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1} // Default to 1 slide per view
        pagination={{
          clickable: true,
          type: "bullets",
          el: ".swiper-pagination",
        }}
        breakpoints={{
          // Responsive settings
          1024: {
            slidesPerView: 3, // Show 3 slides at once on larger screens
          },
          768: {
            slidesPerView: 2, // Show 2 slides at once on medium screens
          },
          320: {
            slidesPerView: 1, // Show 1 slide at once on smaller screens
          },
        }}
        className=""
      >
        {projectsData.map((project, index) => (
          <SwiperSlide key={index} className="relative z-1">
            <div className=" w-full h-96 ">
              <img src={project.image} alt={project.title} />
              <div className="absolute right-0 bottom-10 flex justify-center">
                <div className="flex flex-col bg-white px-4 py-2 shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {project.price} <span className="px-1">|</span>{" "}
                    {project.location}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Project;
