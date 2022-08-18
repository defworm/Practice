function getBiggestNum(nums){
    console.log('starting array', nums);  //node crystal.js to see in terminal

var largest = 0;
var secondLargest = 0;

for (let i=0; i < nums.length; i++) {
    console.log ('looping', nums [i])
    if (nums[i] > largest) {
        secondLargest= largest
        largest = nums[i]
    }

    if(nums[i]<largest && nums[i] >= secondLargest) {
        secondLargest=nums[i]
    }
}

console.log ('largest!!', largest)
console.log ('second largest!!', secondLargest)
console.log('Answer = ', largest * secondLargest)


nums.forEach(eachNum=>{
    console.log('each number', eachNum)
})
}



getBiggestNum([3,9,2,8,10,4,77,44,1,0])