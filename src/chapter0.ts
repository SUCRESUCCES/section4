/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a: number, b: number): number {
  return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 */

function introduce(name = "쪼얌", age: number, weight?: number) {
  console.log(`name: ${name}`);
  if (typeof weight === "number") {
    // if문으로 타입 좁히기
    console.log(`weight : ${weight + 10}`);
    // 덧셈 연산은 숫자끼리만 할 수 있는데 매개변수에 undefined 있을 수 있어서
  }
}

// introduce(1); // 타입 오류
introduce("쪼얌", 4);

// introduce("쪼얌"); // 2개의 인수가 필요한데 1개를 가져왔습니다.

// 선택적 매개변수(?) 사용하면 그냥 쪼얌만 호출 가능
introduce("쪼얌", 1004);

// 필수 매개 변수는 선택적 매개 변수 뒤에 올 수 없다.
// function introduce(name = "쪼얌", weight?: number, age: number) {

// 나머지 매개변수(rest parameter)
function getSum(...rest: [number, number, number]) {
  // number[] : 배열의 갯수 정하고 싶지 않을 때
  // [number, number, number] : 튜플로 길이 지정할 때
  let sum = 0;
  rest.forEach((it) => (sum += it));
}

getSum(1, 2, 3); // 6
// getSum(1, 2, 3, 4, 5); // 15
