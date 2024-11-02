import classes from "./AvailableMeals.module.css"
import Card from "../UI/Card"
import MealItem from "./MealItem/MealItem";
// import MealItemForm from "./MealItemForm";
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

  const AvailableMeals = ()=>{

    const availableItems = DUMMY_MEALS.map((item,index)=>{
        return <MealItem key={index} name={item.name} description={item.description} price={item.price}/>});
    return(<section className={classes.meals}>
            <Card>
            <ul>
             {availableItems}   
            </ul>
            </Card>
          </section>
        
    )
  }

  export default AvailableMeals;