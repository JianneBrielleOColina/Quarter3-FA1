var nickname = "Ji";
var height_in = 61.61;
var weight_kg = 49;

var convert_height1 = height_in%2;
var convert_height2 = (height_in-convert_height1)/12;
var convert_weight = weight_kg * 2.205;

alert("Name: " + nickname + "\nHeight: " + convert_height2 + "'" + convert_height1 + "\"" + "\nWeight: " + convert_weight + "lbs");

