import Image from "next/image";
import Link from "next/link";
import classes from "./meal-item.module.css";
import { PropsWithChildren } from "react";

export type Props = {
    title: string;
    summary: string;
    image: string;
    creator: string;
    slug: string;
};

export const MealItem: React.FC<PropsWithChildren<Props>> = ({
    creator,
    image,
    slug,
    summary,
    title,
}) => {
    return (
        <article className={classes.meal}>
            <header>
                <div className={classes.image}>
                    <Image src={image} alt={title} fill />
                </div>
                <div className={classes.headerText}>
                    <h2>{title}</h2>
                    <p>by {creator}</p>
                </div>
            </header>
            <div className={classes.content}>
                <p className={classes.summary}>{summary}</p>
                <div className={classes.actions}>
                    <Link href={`/meals/${slug}`}>View Details</Link>
                </div>
            </div>
        </article>
    );
};
