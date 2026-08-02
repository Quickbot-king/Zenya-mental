let day=1;
switch(day){
case 1:
console.log("It is Monday");
break;

case 2:
    console.log("It is Tuesday");
    break;

case 3:
    console.log("It is Wednesday");
    break;
    
case 4:
    console.log("It is Thursday");
    break;    

case 5:
    console.log("It is Friday");
    break;
    
case 6:
    console.log("It is Saturday");
    break;

case 7:
    console.log("It is A Sunday");
    break;
default:
    console.log(`${day} isn't a day you nonce`);        

}
let testScore=89;
let letterGrade;
switch(
        testScore >=90 ? "A":
        testScore >= 80 ? "A-":
        testScore >= 70 ? "B+":
        testScore >= 60 ? "B-":
        testScore >= 50 ? "Pass":
        "Fail"

                                
){
    case "A":console.log("Excellent");
    break;

    case "A-": console.log("Good Job");
    break;

    case "B+":console.log("Well Done");
    break;

    case "B-" : console.log("hii ni ya wasichana");
    break;

    case "Pass": console.log("You passed.");
    break;

    default: console.log("We strive for better here so do better")
}