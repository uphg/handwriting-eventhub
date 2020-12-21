# 手写 EventHub

## 命令

### 查看已安装文件位置

```sh
which xxx
```

### TypeScript

安装

```sh
yarn global add typescript
yarn global add ts-node
# Or
npm install -g typescript
npm install -g ts-node
```

运行

````sh
ts-node test/index.ts
````

## TS笔记

### 关键字

- `private`：表示该属性只在 class 内部访问（私有的）。
- `?`：表示参数为可选。
- `unknown`：表示该属性类型不限制，但是只要使用过一种类型后，就不可以再次更改了。
- `void`：表示返回值为空。

### 语法示例

**设置参数类型**

```ts
clickFn(param: string)
```

该语法表示，param 的类型是 string（param 名称可以随意定义，只要符合参数语法就行）

**设置参数可选**

```ts
clickFn(param?)
```

? 表示 param 参数为可选。

**设置函数类型**

```ts
clickFn(fn: (data: unknown) => void) { }
```

该语法表示 fn 参数类型是函数，函数接受一个 unknown 类型的参数，函数没有返回值

**设置对象中的属性的类型**

```ts
cache: { [key: string]: Array<(data: unknown) => void> } = {}
```

该语法表示 cache 是一个对象，对象中的属性 key 类型是 string，value 是一个数组，数组接收一个函数，函数接收一个 unknown 类型的参数，函数没有返回值。

**声明一个公共类型**

```ts
// 声明
type TestCase = (data: string) => void
// 调用
let test: TestCase = data => { ... }
```

该语法表示声明一个公共的类型，可以在任意地方调用。

***

原案例地址：https://github.com/FrankFang/source-eventhub
