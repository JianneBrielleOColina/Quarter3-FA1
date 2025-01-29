var confirmation = confirm("Do you wish to share your information with this site?");
if (confirmation) 
    console.log("Name: " + nickname + "\nHeight: " + convert_height2 + "'" + convert_height1 + "\"" + "\nWeight: " + convert_weight + " lbs");
else 
    console.log("User does not wish to share his/her information.");