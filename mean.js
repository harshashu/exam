//mean
function mean(arr) {
    let sum = arr.reduce((a, b) => a + b, 0);
    return sum/arr.length;
  }
  //median
 function median(arr) 
  {
    const arrSorted = arr.sort((a, b) => a - b);
    return arrSorted.length % 2 === 0 ? (arrSorted[arrSorted.length/2 - 1] + arrSorted[arrSorted.length/2]) / 2 : arrSorted[Math.floor(arrSorted.length/2)];
  }
  //mode
  function mode(arr) 
  {
    const frequencyTable = {};
    arr.forEach(elem => frequencyTable[elem] = frequencyTable[elem] + 1 || 1);
   let modes = [];
    let maxFrequency = 0;
    for(const key in frequencyTable) 
    {
      if(frequencyTable[key] > maxFrequency) 
      {
            modes = [Number(key)];
            maxFrequency = frequencyTable[key];
        }
        else if(frequencyTable[key] === maxFrequency) 
        {
            modes.push(Number(key));
        }
    }
    
    if(modes.length === Object.keys(frequencyTable).length) modes = [];
  
    return modes;
  }
  const data = [2,3,4,7,8,9];
  console.log(`Data: ${data}`);
  console.log(`Mean: ${mean(data)}`);
  console.log(`Median: ${median(data)}`);
  console.log(`Mode: ${mode(data)}`);