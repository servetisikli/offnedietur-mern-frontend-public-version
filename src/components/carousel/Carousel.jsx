import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import nodejs from "../../assets/images/nodejs.svg";
import react from "../../assets/images/react.svg";
import nextjs from "../../assets/images/nextjs.svg";
import mongodb from "../../assets/images/mongodb.svg";
import angular from "../../assets/images/angular.svg";
import django from "../../assets/images/django.svg";
import python from "../../assets/images/python.svg";
import mysql from "../../assets/images/mysql.svg";

const items = [
  {
    id: 1,
    // title: "Item 1",
    // content: "Content for item 1",
    imageUrl: nodejs,
  },
  {
    id: 2,
    // title: "Item 2",
    // content: "Content for item 2",
    imageUrl: react,
  },
  {
    id: 3,
    // title: "Item 3",
    // content: "Content for item 3",
    imageUrl: nextjs,
  },
  {
    id: 4,
    // title: "Item 4",
    // content: "Content for item 4",
    imageUrl: mongodb,
  },
  {
    id: 5,
    // title: "Item 5",
    // content: "Content for item 5",
    imageUrl: angular,
  },
  {
    id: 6,
    // title: "Item 6",
    // content: "Content for item 6",
    imageUrl: django,
  },
  {
    id: 7,
    // title: "Item 7",
    // content: "Content for item 7",
    imageUrl: python,
  },
  {
    id: 8,
    // title: "Item 8",
    // content: "Content for item 8",
    imageUrl: mysql,
  },
];

const Carousel = () => {
  const carouselRef = React.useRef(null);
  const isDown = React.useRef(false);
  const startX = React.useRef(0);
  const scrollLeft = React.useRef(0);

  const scrollLeftHandler = () => {
    carouselRef.current.scrollBy({
      left: -carouselRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const scrollRightHandler = () => {
    carouselRef.current.scrollBy({
      left: carouselRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const mouseDownHandler = (e) => {
    isDown.current = true;
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
    carouselRef.current.classList.add("active");
  };

  const mouseLeaveHandler = () => {
    isDown.current = false;
    carouselRef.current.classList.remove("active");
  };

  const mouseUpHandler = () => {
    isDown.current = false;
    carouselRef.current.classList.remove("active");
  };

  const mouseMoveHandler = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; //scroll-fast
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const touchStartHandler = (e) => {
    isDown.current = true;
    startX.current = e.touches[0].pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
    carouselRef.current.classList.add("active");
  };

  const touchEndHandler = () => {
    isDown.current = false;
    carouselRef.current.classList.remove("active");
  };

  const touchMoveHandler = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; //scroll-fast
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="container relative w-full mx-auto">
      <button
        onClick={scrollLeftHandler}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition duration-300 z-10"
      >
        <FaArrowLeft size={24} />
      </button>
      <button
        onClick={scrollRightHandler}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition duration-300 z-10"
      >
        <FaArrowRight size={24} />
      </button>
      <div
        ref={carouselRef}
        className="flex overflow-x-auto scrollbar-hide select-none cursor-grab active:cursor-grabbing"
        onMouseDown={mouseDownHandler}
        onMouseLeave={mouseLeaveHandler}
        onMouseUp={mouseUpHandler}
        onMouseMove={mouseMoveHandler}
        onTouchStart={touchStartHandler}
        onTouchEnd={touchEndHandler}
        onTouchMove={touchMoveHandler}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
          >
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-64 object-cover pointer-events-none"
              />
              <div className="absolute inset-0 bg-opacity-10 flex items-end p-4">
                <div className="text-white">
                  <h2 className="text-2xl font-bold">{item.title}</h2>
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
