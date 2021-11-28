app.component('content', {
    template:
    /*html*/
    `<div id='content'>
        <div id='generator-box'>
          <div id='generator-title'>
            <h2>What to drink...?</h2>
          </div>
          <div id='generator-content'>
            <img src='https://github.com/FrankZiWANG-dev/AfterWork/blob/main/assets/images/drink-placeholder.jpg?raw=true' alt='drink-image' id='drink'>
            
            <div id='intro' v-if="noDrink">
                <p>Long day at work?<br/>
                Don't know what to get?</p>
                <p>Click the button to get an idea!</p>
            </div>
            <div id='drinkInfo' v-else :key='componentkey'>
                <p id='drinkName'>{{drinkName}}</p>
                <p class='ingredient' v-for='(ingredient,index) in ingredients' :key='index'>{{ingredient}}</p>
            </div>
          </div>
          <div id='button' @click='getDrink'>Inspire me!</div>
        </div>
      </div>`,
    data(){
        return {
            noDrink: true,
            componentkey: 1
        }
    },
    methods:{
        async getDrink(){
            let response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
            let data = await response.json();
            let drink = data.drinks[0];
            let drinkName = drink.strDrink;
            let ingredients = [];
            for (let x=1;x<16;x++){
                let ingredientName = "strIngredient"+x;
                let measure = "strMeasure"+x;
                if (drink[measure] !== null){
                    let ingredient = String(drink[measure] + " " + drink[ingredientName]);
                    ingredients.push(ingredient);
                }
            }
            this.noDrink = false;
            this.drinkName = drinkName;
            this.ingredients = ingredients;
            this.componentkey +=1;
        }
    }
})