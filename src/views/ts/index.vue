<template>ts 学习</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ts",
  setup() {
    // abstract:以abstract开头的类是抽象类，不能用来创建对象。（专门用来被继承的类）
    // 抽象类中可以创建抽象方法
    abstract class Animal {
      name: string;
      // constructor 被称为构造函数
      // 构造函数会在对象创建时调用
      constructor(name: string) {
        console.log("执行了constructor");
        this.name = name;
      }
      /**
       * 定义一个抽象方法
       * 抽象方法使用abstract开头，没有方法体
       * 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
       */
      abstract run(): void;
      sayHello() {
        console.log(this.name + ":汪汪汪~");
      }
    }
    class Dog extends Animal {
      /**
       * super :在类的方法中，表示当前方法的父类
       * 调用父类的构造函数的时候必须把父类的构造函数再调用一遍
       */
      age: number;
      constructor(name: string, age: number) {
        super(name);
        this.age = age;
      }
      run() {
        console.log(this.name + "在跑");
        // 调用父类方法
        super.sayHello();
      }
    }
    const dog = new Dog("旺财", 3);
    console.log(dog);
    dog.run();
    console.log("-------------------------");

    /**
     * interface
     */
    interface myInter {
      name: string;
      sayHello(): void;
    }
    class Myclass implements myInter {
      name: string;
      constructor(name: string) {
        this.name = name;
      }
      sayHello() {
        console.log(`我是${this.name}的同学`);
      }
    }
    const class1 = new Myclass("3年二班");
    class1.sayHello();
    console.log("-------------");

    /**
     * 属性存取器
     */
    class Person {
      _name: string;
      _age: number;
      constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
      }
      get name() {
        return this._name;
      }
      set name(value: string) {
        this._name = value;
      }
      get age() {
        return this._age;
      }
      set age(value: number) {
        if (value >= 0) {
          this._age = value;
        }
      }
    }
    const p1 = new Person("张三", 23);
    p1.name = "李四"; // 调用Person类中的 set name()方法
    p1.age = -12; // 调用Person类中的 set age()方法
    console.log(p1); // Person{_name: "李四", _age: 23}
    console.log("------------");

    /**
     * 简化Class
     * class A === class B
     */
    class A {
      name: string;
      age: number;
      constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
      }
    }
    class B {
      constructor(public name: string, public age: number) {}
    }
    const a = new A("xxx", 12);
    console.log(a);

    const b = new B("xxx", 12);
    console.log(b);
    return {};
  },
});
</script>
<style scoped></style>
