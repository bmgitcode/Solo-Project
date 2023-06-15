import React, { useEffect, useState }  from 'react';
import { createRoot } from 'react-dom/client';
// import Todo from './list';
import './stylesheets/styles.css';


// const url = 'https://api.yelp.com/v3/businesses/search?term=';
// const url = 'www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'

const url = 'https://api.spoonacular.com/recipes/random?apiKey=7c823f1edf7f4f01a4cb3aeb51538c23';
// const options = {
// 	method: 'GET'
// };

const FoodApp = () => {
  const [recipe, setRecipe] = useState(null)

  console.log('this is before', recipe)
  const fetcher = async () => {
    console.log("is this fetching?");
    try {
      const response = await fetch(`${url}`)
      .then(data => data.json()) // parse data
      // .then(data => console.log(data))
      .then( data => setRecipe(data.recipes))
      // console.log(data)
      // console.log(recipe)
    } catch (err){
      console.log('is this catching an Error');
    }
  }


  return (
    <><div className= 'firstdiv'>
      HELLO DOES THIS WORK???
    </div>
      {/* <div>
        <input></input>
        <button onClick={fetcher}>Submit</button>
      </div></>
      {/* {recipe && <Recipe recipe={recipe} />} */}
      {/* <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        <Todo />
        <Todo />
        <Todo />
      </ul></> */}

      <div>
        <h2> WHAT ARE YOU CRAVING? </h2>
        <form onSubmit={(e) => {
          fetcher();
          e.preventDefault();
          e.stopPropagation();
        } }>
          <input
          type="text"
          placeholder="ENTER A FOOD"
        />
         <button type="search" >LET'S SEARCH</button>
         </form>
         {recipe && (

          <div >
            {recipe.map((recipe) => (
              <><div key={recipe.id}>

                <span>
                  <img
                    src={recipe.image} />
                </span>
              </div><div>
                  <h3>
                  NAH MAKE THIS INSTEAD
                  </h3>
                  <a href={recipe.sourceUrl}>
                    <h2>
                    {recipe.title}
                    </h2>
                  </a>
                  <button type="next" > NEW RECIPE</button>



                </div></>
            ))}
          </div>
      )}

      </div></>
  )
}



// Render an <App> component to the #app div in the body
const root = createRoot(document.getElementById('root'));
root.render(<FoodApp />);
