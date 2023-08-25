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

이 둘의 가장 큰 차이점이 바로 **선언적 확장**이다

interface는 같은 이름으로 두가지의 interface를 선언하면 **자동으로 확장이 되어 작동**이되는 반면
type은 같은 이름으로 두가지의 type을 만들 수 없다.
-> `개인적인 생각이지만 type은 값들이 확실할 때(컴포넌트 props, 서버에서 불러오는 값)에 쓰는 것이 좋을거 같고, interface는 나중에 확장을 해야될지도 모를때(styled-components)에 쓰는 것이 좋을거 같다`
