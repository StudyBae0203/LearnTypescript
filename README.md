# 타입 스크립트 관련 공부하는 공간

타입스크립트에 대해 탐구하고 공부하는 공간입니다.
중요한 것 위주로 정리할 예정입니다.

## type과 interface

### 기본 문법

type

```javascript
type NomalType = number;
type ObjType = {
  a: number,
  b: string,
};
type UnionType = number | string;
```

interface

```javascript
interface IObejctinInterface {
  a: number;
  b: string;
}
```

### 확장하는 방법

type

```javascript
type ObjType = {
  a: number,
  b: string,
};

type ExtendsType = ObjType & {
  c: boolean,
};
```

interface

```javascript
interface IObejctinInterface {
  a: number;
  b: string;
}

interface IExtendsInterface extends IObejctinInterface {
  c: boolean;
}
```

이 둘의 가장 큰 차이점이 바로 **선언적 확장**입니다.

interface는 같은 이름으로 두가지의 interface를 선언하면 **자동으로 확장이 되어 작동**이되는 반면
type은 같은 이름으로 두가지의 type을 만들 수 없습니다.
-> `개인적인 생각이지만 type은 값들이 확실할 때(컴포넌트 props, 서버에서 불러오는 값)에 쓰는 것이 좋을거 같고, interface는 나중에 확장을 해야될지도 모를때(styled-components)에 쓰는 것이 좋을거 같습니다.`

## 타입 리터럴 추론 (as const, as ..)

### 기본 문법

```javascript
const Example1 = { url: "https://example.com", method: "GET" as "GET" };
```

이 문법은 **추론 범위를 줄이기 위해** 나온 문법입니다.
예를 들어 원래라면 let a = "hello"는 string으로 추론을 하지만 특정한 값으로 추론범위를 줄이고 싶다면 사용하는 것이 타입 리터럴 추론입니다.
사용방법은 간단합니다. 고정하고 싶은 변수의 뒤에 as 고정하고 싶은 값(추론하고 싶은 값)을 넣으면 됩니다.
위의 예제는 `나는 항상 Example1에서 method의 리터럴(값)을 GET으로 사용할려고 합니다`라고 해석하시면 됩니다.

만약 위의 모든 값을 고정해야된다 하면 밑의 방법처럼 쓰시면 됩니다.

```javascript
const Example1 = { url: "https://example.com", method: "GET" } as const;
```

## 제네릭 Generics

### 기본 문법 (예제)

```javascript
const ArrayLength = <T>(array: T[]): number => array.length;

ArrayLength < string > ["bae", "kim", "lee"];
```

형태 : `함수이름<타입>(매개변수)`
이 문법은 타입을 변수처럼 취급하기 위해 나온 문법입니다.
이 문법을 사용할때는 T라는 인자로 타입을 넘겨 매개변수처럼 사용하실 수 있습니다.
예를 들어 위의 문법에서는 T라는 타입을 매개변수로 넘겨받아 함수에 들어오는 배열의 타입을
직접 정의 할 수 있습니다.
