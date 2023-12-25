import { MealItem } from "./meal-item";
import classes from "./meal-grid.module.css";
export type Props = {
    meals: any[];
};

export const MealsGrid: React.FC<Props> = ({ meals }) => {
    return (
        <ul className={classes.meals}>
            {meals.map((meal) => (
                <li key={meal.id}>
                    <MealItem {...meal} />
                </li>
            ))}
        </ul>
    );
};
