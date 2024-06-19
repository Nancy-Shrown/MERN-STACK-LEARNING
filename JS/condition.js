//if statement

if(4==4)
    {
       console.log("TRUE");
    }
    else
    {
        console.log("FALSE");

    }

    //== only check value not datatype ex- 4=="4"  ----- TRUE
    //=== checks both value and dataype ex-  4==="4"-----FALSE  {4=number,"4"=string}
    
//elseif
    if(4 === "4")
        {
           console.log("TRUE statement");
        }
        else if(5 == "5")
        {
            console.log("FALSE");
        }
        else
        {
            console.log("DEMO");
        }

//FUNCTION SWITCH STATEMENT
function getDayOfMonth(dayNum)
{
    let dayName;
    switch(dayNum)                           //switch(condition)
    {                                        //{ case 0: satement}
        case 0:
            dayName="SUNDAY";
        break;

        case 1:
            dayName="MONDAY";
        break;

        case 2:
            dayName="TUESDAY";
        break;

        case 3:
            dayName="WEDNESDAY";
        break;

        case 4:
            dayName="THURSDAY";
        break;

        case 5:
            dayName="FRIDAY";
        break;

        case 6:
            dayName="SATURDAY";
        break;

        default:
            dayName="INVALID DAY NUMBER"
    }
    return dayName
}
console.log(getDayOfMonth(0))
console.log(getDayOfMonth(4))
console.log(getDayOfMonth(6))
console.log(getDayOfMonth(8))

    