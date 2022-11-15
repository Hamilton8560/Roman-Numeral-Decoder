/*Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:

solution('XXI'); // should return 21
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
*/

function solution (roman) {
var num;
var answer=0;
var array=[]
var subtract=false
    for(var i = 0; i < roman.length; i++){
        num = roman.charAt(i);
        switch(num){
            case "M":
            array.push(1000);
            break
            case 'D':
            array.push(500)
            break
            case 'C':
            array.push(100)
            break;
            case 'L':
            array.push(50)
            break
            case 'X':
            array.push(10)
            break
            case 'V':
            array.push(5)
            break
            case 'I':
            array.push(1)
            break
        }
}
  
for(var i =0; i< array.length; i++){
    
   
if(array[i]<array[i+1]){
    console.log(array[i+1])
    array[i+1]=array[i+1]-array[i]
    console.log(array[i+1])
    
}
    else{
         answer+=array[i]
    }
    
}

   




return answer;
}



console.log(solution('XXI'))


