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
