import React from "react";
import Link from "next/link";
import classes from "./page.module.css";
import { MealsGrid } from "../../components/meals/meal-grid";

export const MealsPage: React.FC = () => {
    return (
        <>
            <header className={classes.header}>
                <div className={classes.slideshow}></div>
                <div>
                    <div className={classes.hero}>
                        <h1>NextLevel Food for NextLevel Foodies</h1>
                        <p>Taste & share food from all over the world.</p>
                    </div>
                    <div className={classes.cta}>
                        <Link href="/community">Join the Community</Link>
                        <Link href="/meals">Explore Meals</Link>
                    </div>
                </div>
            </header>
            <main>
                <MealsGrid meals={[]} />
            </main>
        </>
    );
};

export default MealsPage;
