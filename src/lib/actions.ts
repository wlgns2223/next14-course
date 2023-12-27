"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

export const shareMeal = (prevState: any, formdata: FormData) => {
    const meal = {
        title: formdata.get("title") as string,
        summary: formdata.get("summary"),
        instructions: formdata.get("instructions"),
        image: formdata.get("image"),
        creator: formdata.get("name"),
        creator_email: formdata.get("email"),
    };

    if (!meal.title || meal.title.trim() === "") {
        // throw new Error("invalid input")
        return {
            message: "Invalid input",
        };
    }

    saveMeal(meal);
    revalidatePath("/meals");
    redirect("/meals");
};
