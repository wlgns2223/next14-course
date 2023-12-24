import burgerImg from "@assets/images/burger.jpg";
import curryImg from "@assets/images/curry.jpg";
import dumplingsImg from "@assets/images/dumplings.jpg";
import macncheeseImg from "@assets/images/macncheese.jpg";
import pizzaImg from "@assets/images/pizza.jpg";
import schnitzelImg from "@assets/images/schnitzel.jpg";
import tomatoSaladImg from "@assets/images/tomato-salad.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
    { image: burgerImg, alt: "A delicious, juicy burger" },
    { image: curryImg, alt: "A delicious, spicy curry" },
    { image: dumplingsImg, alt: "Steamed dumplings" },
    { image: macncheeseImg, alt: "Mac and cheese" },
    { image: pizzaImg, alt: "A delicious pizza" },
    { image: schnitzelImg, alt: "A delicious schnitzel" },
    { image: tomatoSaladImg, alt: "A delicious tomato salad" },
];

export const ImageSlideShow: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((currentImageIndex) => (currentImageIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    });
    return (
        <div id="SLIDE_SHOW" className={"relative w-full h-full rounded-lg overflow-hidden"}>
            {images.map((image, index) => (
                <Image
                    key={index}
                    src={image.image}
                    className={"w-full h-full object-cover object-center absolute top-0 left-0"}
                    alt={image.alt}
                />
            ))}
        </div>
    );
};
