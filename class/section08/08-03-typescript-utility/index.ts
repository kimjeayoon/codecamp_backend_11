interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

// 1. Partial 타입(부분을 의미하는말)
type aaa = Partial<IProfile>; //

// 2. Required 타입()
type bbb = Required<IProfile>; // 모두 필수로 만드는 방법

// 3. Pick 타입
type ccc = Pick<IProfile, "name" | "age">; //일부만 선택하는방법

// 4. Omit 타입
type ddd = Omit<IProfile, "school">; // 특정한것을 제외하고 나머지 선택하는 방법

// 5. Record 타입
type eee = "철수" | "영희" | "훈이"; //Union 타입(string 타입보다 안전하다, 특정한것만 가능?하다)
let child1: eee = "철수"; // 철수,영희,훈이만 됨
let child2: string = "사과"; // 모든게 다 됨

type fff = Record<eee, IProfile>; // Record 타입

// 6. 객체의  key들로 Union 타입 만들기
type ggg = keyof IProfile; // "name" | "age" | "school" | "hobby" 중 하나만 선택가능

let myprofile: ggg = "hobby";

// 7. type vs interface 차이 => interface는 선언병합이 가능하다 type는 불가능
interface IProfile {
  candy: number; // 선언병합으로 추가됨
}

// 8. 응용하기
let profile: Partial<IProfile> = {
  candy: 10,
};
