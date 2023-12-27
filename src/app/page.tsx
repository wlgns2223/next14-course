import Image from "next/image";
import Link from "next/link";
import { ImageSlideShow } from "../components/home/image-slide-show";

export default function Home() {
    return (
        <>
            <header className="flex gap-[48px] mx-auto my-[48px] w-[90%] max-w-[75rem]">
                <div id="slide" className="w-[40rem] h-[25rem]">
                    <ImageSlideShow />
                </div>
                <div>
                    <div id="hero" className="text-[#ddd6cb] text-2xl">
                        <h1 className="text-4xl font-bold bg-gradient-to-r text-transparent from-[#f9572a] to-[#ffc905] bg-clip-text ">
                            {"NextLevel Food for NextLevel Foodies"}
                        </h1>
                        <p>{"Taste & share food from alil over the world"}</p>
                    </div>
                    <div id="CTA" className="flex gap-4 text-2xl">
                        <Link
                            className="mt-4 py-2 px-4 rounded-lg   font-bold bg-transparent text-[#ff9b05]"
                            href={"/community"}
                        >
                            {"Join The Community"}
                        </Link>
                        <Link
                            className="mt-4 py-2 px-4 rounded-lg bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold"
                            href={"/meals/share"}
                        >
                            {"Share A Meal"}
                        </Link>
                    </div>
                </div>
            </header>
            <main className="flex flex-col items-center justify-between p-24">
                <section
                    className={
                        "flex flex-col text-[#ddd6cb] text-2xl max-w-[50rem] w-[90%] my-8 mx-auto text-center"
                    }
                >
                    <h2>How it works</h2>
                    <p>
                        NextLevel Food is a platform for foodies to share their favorite recipes
                        with the world. It&apos;s a place to discover new dishes, and to connect
                        with other food lovers.
                    </p>
                    <p>
                        NextLevel Food is a place to discover new dishes, and to connect with other
                        food lovers.
                    </p>
                </section>

                <section
                    className={
                        "flex flex-col text-[#ddd6cb] text-2xl max-w-[50rem] w-[90%] my-8 mx-auto text-center"
                    }
                >
                    <h2>Why NextLevel Food?</h2>
                    <p>
                        NextLevel Food is a platform for foodies to share their favorite recipes
                        with the world. It&apos;s a place to discover new dishes, and to connect
                        with other food lovers.
                    </p>
                    <p>
                        NextLevel Food is a place to discover new dishes, and to connect with other
                        food lovers.
                    </p>
                </section>
            </main>
            ;
        </>
    );
}
