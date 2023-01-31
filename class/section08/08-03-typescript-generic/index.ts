// 1. 문자/숫자/불린 기본타입
const getPrimitive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
  return [arg3, arg2, arg1];
};

const result1 = getPrimitive("철수", 123, true);

//
//
// 2. any 타입(그냥 자바스크립트랑 같음)
const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  console.log(arg1 + 100); // any는 아무거나 다됨
  return [arg3, arg2, arg1];
};

const result2 = getAny("철수", 123, true);

//
//
// 3. unknown 타입 (any보다는 좀더 안정적으로 코딩이 가능하다)
const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
  if (typeof arg1 === "number") console.log(arg1 + 100);
  return [arg3, arg2, arg1];
};

const result3 = getUnknown("철수", 123, true);

//
//
// 4. generic 타입 (타입을 만든다 <>안에 선언한것들을 사용한다고 적어여된다, 원하는 타입을 할려면 <>안에 원하는타입 순서대로 적으면된다)
function getGeneric<MyType1, MyType2, MyType3>(arg1: MyType1, arg2: MyType2, arg3: MyType3): [MyType3, MyType2, MyType1] {
  return [arg3, arg2, arg1];
}

const result4 = getGeneric<string, number, boolean>("철수", 123, true);

//
//
// 5. generic 타입2 (간략하게줄이기 1)
function getGeneric2<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
  return [arg3, arg2, arg1];
}

const result5 = getGeneric2("철수", 123, true);

//
//
// 6. generic 타입2 (간략하게줄이기 2)
function getGeneric3<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}

const result6 = getGeneric3("철수", 123, true);

//
//
// 7. generic 타입2 (화살표함수로 표현하기))
const getGeneric4 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
  return [arg3, arg2, arg1];
};

const result7 = getGeneric4("철수", 123, true);
