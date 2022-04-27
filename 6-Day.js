//! Bitwise Operators
const getMaxLessThanK = (n,k) => {

  let maxNum = 0;
  for(let i=1; i<=n; i += 1){
      for(let j=i+1;j<=n; j += 1){
          let result = i&j
          if(result>maxNum & result<k){
              maxNum=result
          }
      }
  }
 
 return maxNum
}

//!  JavaScript Dates
function getDayName(dateString) {
    const days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", ]
    let date = new Date(dateString)
    let day = date.getDay();
    return days[day]
}