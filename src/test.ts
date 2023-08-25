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

type NormalType = number | string;
type ObjectType = {
  a: number;
  b: string;
};
type UnionType = "number" | "string";

interface IObjectType {
  a: number;
  b: string;
}

//interface extends

interface IObjectType2 extends IObjectType {
  c: number;
  d: string;
}
