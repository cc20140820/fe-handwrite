function fib(n) {
    if (n === 0) return 0
    if (n === 1) return 1
    const dp = [] // dp[i] 代表第i个斐波拉契数 
    dp[0] = 0
    dp[1] = 1
    for (let i = 2; i < n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n - 1]
}

console.log(fib(7));