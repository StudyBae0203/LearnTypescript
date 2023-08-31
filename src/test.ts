//normal Type
const numberType: number = 0;
const stringType: string = "Hello World";
const booleanType: boolean = false;

let arrayType: string[] = ["first", "second"];

//function Parameter Type
function func1(name: string) {
  console.log(name);
}

//Argument of type 'number' is not assignable to parameter of type 'string'.
//func1(51);

//function Return Type
function func2(): string {
  return "";
}

//Object Type
function func3(pt: { a: number; b: string }) {
  console.log(pt.a);
  console.log(pt.b);
}

func3({ a: 1, b: "a" });

//Optional
function func4(pt: { a: number; b?: string }) {
  console.log(pt.a);
  if (pt.b) console.log(pt.b);
}

func4({ a: 1, b: "a" });
func4({ a: 1 });

//Union Type
function func5(a: string | number) {
  console.log(a);
  if (typeof a === "string") {
    console.log("a is String");
  }
  if (typeof a === "number") {
    console.log("a is Number");
  }
}

func5(5);
func5("w");

//Union Example Array
function func6(a: string | string[]) {
  console.log(a);
  if (Array.isArray(a)) {
    a.map((value) => console.log(value));
  } else {
    console.log(a);
  }
}

type NormalType = number;
type ObjectType = {
  a: number;
  b: string;
};
type UnionType = number | string;

//type extends

type ExtendsType = ObjectType & {
  c: boolean;
};

interface IObjectType {
  a: number;
  b: string;
}

//interface extends

interface IObjectType2 extends IObjectType {
  c: number;
  d: string;
}

//Type Assertions (타입 주장)
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
//const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");

//const x = "hello" as number;
//Error
//Conversion of type 'string' to type 'number' may be a mistake
//because neither type sufficiently overlaps with the other.
//If this was intentional, convert the expression to 'unknown' first

//Literal Type
let Literal: "hello" = "hello";

Literal = "hello";
// Literal = "hi";
//Error
//Type '"hi"' is not assignable to type '"hello"'

function func7(props: { a: string; b: "left" | "right" | "center" }) {
  console.log(props.a);
  console.log(props.b);
}

// func7({ a: "hi", b: "centre" });
//Error
//he expected type comes from property 'b'
//which is declared here on type
//'{ a: string; b: "left" | "right" | "center"; }'

//Number Literal Type Example
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

//Literal Type Example
interface IExample {
  num: number;
}

function func8(a: IExample | "none") {
  console.log(a);
}

func8({ num: 10 });
func8("none");
// func8("hi");

//Literal Inference
const a = {
  key1: "value",
  key2: "value",
} as const;

const req = { url: "https://example.com", method: "GET" as "GET" };

type Person = {
  name: string;
  age: number;
};

const func9 = (name: string, age: number = 10): Person => {
  // const person: Person = { name : name,age :  age };
  const person: Person = { name, age };
  return person;
};

console.log(func9("jack")); // 'jack', 10

//Create Object
//제네릭을 사용하여 만든 오브젝트 만들어주는 함수
type MakeObj<T> = {
  key: string;
  value: T;
};

const makeObj1 = <T>({ key, value }: MakeObj<T>) => ({ [key]: value });
const makeObj2 = <T>(key: string, value: T) => ({ [key]: value });

console.log(makeObj1<string>({ key: "name", value: "Bae" }));
console.log(makeObj2<string>("name", "Bae"));

const NewName: object = makeObj1<string>({ key: "name", value: "Bae" });

let names: string[] = ["Jack", "Jane", " John"];
//for(~ in ~) 문은 인덱스 값을 순회함
for (const NameIndex in names) {
  const NameValue = names[NameIndex];
  console.log(NameValue);
}

//Generics
const ArrayLength = <T>(array: T[]): number => array.length;

ArrayLength<string>(["bae", "kim", "lee"]);
