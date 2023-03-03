export function secondSmallestQuestion(numbers): number {
  let smallest = Infinity;
  let secondSmallest = Infinity;
  // iterating over the input string from right to left using a for loop
  for (let n of numbers) { 
    if (n < smallest) {
      secondSmallest = smallest;
      smallest = n;
    } else if (n < secondSmallest) {
      secondSmallest = n;
    }
  }
  return secondSmallest;
}

export function reversalQuestion(str): string {
  // Convert the input string to an array of characters
  const arr = str.split("");

  // Reverse the array using the built-in reverse method
  arr.reverse();

  // Convert the reversed array back to a string
  const reversed = arr.join("");

  return reversed;
}

export function subarrayQuestion(list, target): any {
  let count = 0;
  // using nested loops to iterate over every pair of elements in the list
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] + list[j] === target) {   // checking if their sum equals the target.

        count++;
      }
    }
  }
  return count;
}

export function letterCountQuestion(str): {} {
  let charCount = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      // skip empty spaces
      charCount[str[i]] = (charCount[str[i]] || 0) + 1;
    }
  }
  return charCount;
}

export function nonAdjacentSumQuestion(nums): number {
  //checking if the list contains 0 or 1 elements, we return 0 since there are no non-adjacent elements to sum
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  // else  initialize two variables prevMax and currMax to 0 which represent the maximum sum of non-adjacent elements 
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  let maxSum = Math.max(nums[0], nums[1]);

  let prevPrev = nums[0];
  let prev = maxSum;

  // We then iterate over each element nums[i] 
  for (let i = 2; i < nums.length; i++) {
    let curr = Math.max(nums[i], prevPrev + nums[i]);
    // updating the values of prevMax and currMax
    maxSum = Math.max(maxSum, curr);
    prevPrev = prev;
    prev = curr;
  }

  return maxSum;
}

export function dedupeAndMaintainQuestion(arr): any {
  //Removing duplicates from list passed
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}
