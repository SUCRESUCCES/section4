/**
 * 함수 타입 표현식
 */

// 타입 별칭 만들기
type Operation = (a: number, b: number) => number;

// 타입 별칭으로 매개변수의 타입과 반환값 타입 정의하기
// const add = (a: number, b: number): number => a + b;
const add: (a: number, b: number) => number = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const devide: Operation = (a, b) => a / b;

// 타입별칭 이용하면 더 깔끔하게 사용 가능
// 매개변수의 갯수 타입 맞춰야함!

/**
 * 호출 시그니처
 * (콜 시그니처)
 */

type Operation2 = {
  (a: number, b: number): number;
  name: string;
};

function func(a: number): void {}

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const devide2: Operation2 = (a, b) => a / b;

// add2();
add2.name;

// 하이브리드 타입 : 객체로도 쓸 수 있고, 함수로도 쓸 수 있는 타입
