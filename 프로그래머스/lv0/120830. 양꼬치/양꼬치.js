function solution(n, k) {
    let answer = 
        (12000 * n) + (2000 * k) - (2000 * Math.floor(n * 1/10))
    return answer;
}