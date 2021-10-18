/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const tempHash = {}
    for (let [index, num] of nums.entries()) {
        const targetNum = String(target - num)
        if (Object.keys(tempHash).includes(targetNum)) {
            return [tempHash[targetNum], index]
        } else {
            tempHash[num] = index
        }
    }
}
// @lc code=end

// @after-stub-for-debug-begin
module.exports = twoSum;
// @after-stub-for-debug-end