if(Storage != undefined){
    var habit1Name = localStorage.getItem("habit");
    if(habit1Name == null){
        habit1Name = "habit 1";
    } 
    document.getElementById("habit1menu").innerText = habit1Name;

    var habit2Name = localStorage.getItem("habit2");
    if(habit2Name == null){
        habit2Name = "habit 2";
    } 
    document.getElementById("habit2menu").innerText = habit2Name;

    var habit3Name = localStorage.getItem("habit3");
    if(habit3Name == null){
        habit3Name = "habit 3";
    } 
    document.getElementById("habit3menu").innerText = habit3Name;

    var habit4Name = localStorage.getItem("habit4");
    if(habit4Name == null){
        habit4Name = "habit 4";
    } 
    document.getElementById("habit4menu").innerText = habit4Name;
}