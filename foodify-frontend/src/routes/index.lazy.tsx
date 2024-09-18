import { createLazyFileRoute } from "@tanstack/react-router";
import CarouselImage from "../assets/carousel-1.svg";
import { Carousel } from "flowbite-react";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slide>
        <img src={CarouselImage} alt="..." />
        <img src={CarouselImage} alt="..." />
        <img src={CarouselImage} alt="..." />
        <img src={CarouselImage} alt="..." />
        <img src={CarouselImage} alt="..." />
      </Carousel>
    </div>
  );
}
