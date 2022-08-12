//radianToDegree
function radianToDegree(radians)
{
  var pi = Math.PI;
  return radians * (180/pi).toFixed(3);
}
          
console.log(radianToDegree(10));