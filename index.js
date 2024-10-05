// catch the buttons by their Id and addEventListener
document.getElementById("get-category-data").addEventListener("click", getCategoryData);
document.getElementById("get-ingredient-data").addEventListener("click", getIngredientData);

// create function to fetch Seafood API by getCategoryData function.
function getCategoryData(){
    // fetching the data from API.
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then(res=>{
        // check if there any error.
        if(!res.ok){
            throw new error("network response not valid");
        }
        //return response in json formate.
        return res.json();
        // get the data from API.
        }).then(data =>{
            //return the Data.
            return data
        // check if there any error.
        }).catch(error =>{
            console.log("somthing went wrong");
    });
};

// create function to fetch chicken_breast API by getIngredientData function.
function getIngredientData(){
    // fetching the data from API.
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast").then(res =>{
        // check if there any error.
        if(!res.ok){
            throw new error("network response not valid");
        }
        //return response in json formate.
        return res.json();
    // get the data from API.
    }).then(data =>{
        //return the Data.
        return data
    // check if there any error.
    }).catch(error =>{
        console.log("somthing went wrong", error);
    });
};
