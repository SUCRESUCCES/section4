/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a; // b는 넘버 리터럴이라 10만 받을 수 있음

// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d;
d = c;

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc;
// dogFunc에서 animalFunc로 업캐스팅 되는 상황
dogFunc = animalFunc;

let testFunc = (animal: Animal) => {
  console.log(animal.name);
  //   console.log(animal.color);
};

let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};
// 도그 타입은 애니멀 타입의 서브 타입이기 때문에

// 함수타입A와 함수타입B가 있을 때
// 매개변수를 기준으로 호환성을 판단한다면
// 서브에서 슈퍼로 업캐스팅 불가
// 슈퍼에서 서브로 다운캐스팅 가능

// 2-2 매개변수의 개수가 다를 때

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1;
// Func1(2개) <- Func2(1개) 가능
// Func2(1개) <- Func1(2개) 불가능
// 매개변수의 갯수가 다를 때에는 할당하려고 하는 쪽의
// 함수타입의 매개변수 갯수가 더 적을 때에만 호환이 된다
