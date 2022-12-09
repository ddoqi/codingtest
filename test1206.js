// 날짜 : 22. 12.06
// 2차원으로 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/120842

// 해당값만큼 배열에 추가
// n만큼 돌면서 배열에 추가? //작은배열1, 큰배열 2?

function solution(num_list, n) {
  let answer = [];

  for (let i = 0; i < num_list.length; ) {
    const mini_list = [];

    for (let j = 0; j < n; j++) {
      console.log("i:", i);
      mini_list.push(num_list[i]);
      i++;
    }

    answer.push(mini_list);
  }
  console.log("answer:", answer);
  return answer;
}

solution([1, 2, 3, 4, 5, 6, 7, 8], 2);
