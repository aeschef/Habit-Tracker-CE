const defaultColor = "#493548"; //, "#4B4E6D", "#6A8D92"];
const clickedColor = "#917c90"; //,"#8387b6","#a9c7cb"];


/**
 * @param id, the id for the button we are altering
 * @returns the hex value of the new color for the button
 */
function changeColor(id){
    var newColor = clickedColor;

    //retrieve opposite color of what is in localStorage 
    var oldColor = localStorage.getItem(id);
    if(clickedColor == oldColor){
        newColor = defaultColor;
    }
    //update local storage key
    localStorage.setItem(id, newColor);
    document.getElementById(id).style.backgroundColor= newColor;
}


//code begins **********************************************************************************************************************************************
if (typeof(Storage) != undefined){
    var el = document.getElementById("habit");
    var content = localStorage.getItem("habit");
    if(content != null){
        el.innerText = content;
    }

    document.addEventListener('DOMContentLoaded', function() {
        var el = document.getElementById("habit");
        el.addEventListener('input', function() {
            localStorage.setItem("habit", el.innerText);
        });
    });
    

    // for every button on page
    for(var r = 1;  r < 5; r++){
        for(var c = 1; c < 8; c++){

            //if color stored in storage set, otherwise set default
            var id = r + "" + c; // retrieve id
            var el = document.getElementById(id); // get element by id
            var color = localStorage.getItem(id); // check 
            if(color == null){
                color = defaultColor;
            } 
            el.style.backgroundColor = color;

        }
    }


    //add event listener to each button to change color when clicked
    document.addEventListener('DOMContentLoaded', function() {
        for(var a = 1; a < 5; a++){
            for(var b = 1; b < 8; b++){
                var id = a + "" + b;
                var el = document.getElementById(id);
                el.addEventListener('click', function() {
                    changeColor(this.id);
                });
            }
        }
    });

}
    

