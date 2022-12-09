// 날짜  : 22.12.09
// 제목 : n의 배수 고르기
// 정수 n과 정수 배열 numlist가 매개변수로 주어질 때, numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.
// https://school.programmers.co.kr/learn/courses/30/lessons/120905?language=javascript

function solution(n, numlist) {
  // 집어넣은 배열들이 n으로 나누었을때 0인 애들만 뽑아냄 (filter)
  const answer = numlist.filter((a) => a % n == 0);

  return answer;
}

solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12]);
