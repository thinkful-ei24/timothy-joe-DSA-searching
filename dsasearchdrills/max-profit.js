const prices = [128, 97, 121, 123, 98, 97, 105];

function maxProfit(prices){

  let maxSum = 0;
  let currentSum = 0;
  for(let i = 1; i < prices.length; i++){
    const priceChange = prices[i] - prices[i -1];
    currentSum += priceChange;
    if(currentSum < 0) currentSum = 0;
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

if(require.main === module){
  console.log('Max profit is:', maxProfit(prices));
}