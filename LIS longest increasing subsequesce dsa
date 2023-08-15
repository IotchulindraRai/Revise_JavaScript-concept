class Solution {
    // Function to find length of longest increasing subsequence.
    longestSubsequence(n, a) {
        let dp = new Array(n).fill(0); // Initialize dp array
        let len = 0; // Length of LIS
        
        for (let i = 0; i < n; i++) {
            // Using binary search to find the correct position to update dp array
            let left = 0;
            let right = len;
            
            while (left < right) {
                let mid = Math.floor((left + right) / 2);
                if (dp[mid] < a[i]) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
            
            dp[left] = a[i]; // Update dp array with the correct value
            if (left === len) {
                len++;
            }
        }
        
        return len;
    }
}
