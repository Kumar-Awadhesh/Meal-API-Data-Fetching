document.getElementById("get-category-data").addEventListener("click", getCategoryData);
document.getElementById("get-ingredient-data").addEventListener("click", getIngredientData);

function getCategoryData(){
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then(res=>{
        if(!res.ok){
            throw new error("network response not valid");
        }
        return res.json();
        }).then(data =>{
            return data
        }).catch(error =>{
            console.log("somthing went wrong");
    });
};

function getIngredientData(){
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast").then(res =>{
        if(!res.ok){
            throw new error("network response not valid");
        }
        return res.json();
    }).then(data =>{
        return data
    }).catch(error =>{
        console.log("somthing went wrong", error);
    });
};
