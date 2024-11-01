
import React from "react";
import classes from "./MealsSummary.module.css"
const MealsSummary = () => {
    return (
        <section className={classes.summary}>
            <h1>Delicious Food , Delivered to You</h1>
            <p>Choose Your favourite meal from our broad selection of available meals and enjoy a 
                lunch and dinner at home
            </p>
            <p>
                All our meals are cooked with high quality ingredients just in times and of course
                by experienced chefs!
            </p>
        </section>
    )
}

export default MealsSummary;