import sys
input = sys.stdin.readline

n = int(input())
max_dp = list(map(int, input().split()))
min_dp = max_dp[:]

for _ in range(n - 1):
    a, b, c = map(int, input().split())

    prev_max0, prev_max1, prev_max2 = max_dp
    prev_min0, prev_min1, prev_min2 = min_dp

    # max
    max_dp[0] = max(prev_max0, prev_max1) + a
    max_dp[1] = max(prev_max0, prev_max1, prev_max2) + b
    max_dp[2] = max(prev_max1, prev_max2) + c

    # min
    min_dp[0] = min(prev_min0, prev_min1) + a
    min_dp[1] = min(prev_min0, prev_min1, prev_min2) + b
    min_dp[2] = min(prev_min1, prev_min2) + c

print(max(max_dp), min(min_dp))
