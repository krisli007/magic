# JS 学习笔记
## 概念厘清
   
#### 1.面向过程编程和面向对象编程的区别

**面向过程**：就是分析出解决问题所需要的步骤，然后用函数把这些步骤一步一步实现，使用的时候一个一个依次调用就可以了。
**面向对象**：是把构成问题事务分解成各个对象，建立对象的目的不是为了完成一个步骤，而是为了描叙某个事物在整个解决问题的步骤中的行为。

>例如**五子棋**，面向过程的设计思路就是首先分析问题的步骤：1、开始游戏，2、黑子先走，3、绘制画面，4、判断输赢，5、轮到白子，6、绘制画面，7、判断输赢，8、返回步骤2，9、输出最后结果。把上面每个步骤用不同的方法来实现。

>如果是面向对象的设计思想来解决问题。面向对象的设计则是从另外的思路来解决问题。整个五子棋可以分为1、**黑白双方**，这两方的行为是一模一样的，2、**棋盘系统**，负责绘制画面，3、**规则系统**，负责判定诸如犯规、输赢等。第一类对象（玩家对象）负责接受用户输入，并告知第二类对象（棋盘对象）棋子布局的变化，棋盘对象接收到了棋子的变化就要负责在屏幕上面显示出这种变化，同时利用第三类对象（规则系统）来对棋局进行判定。

可以明显地看出，面向对象是以**功能**来划分问题，而不是步骤。面向对象的设计中，绘图只可能在棋盘对象中出现，从而保证了绘图的统一。

**面向对象就是高度实物抽象化、面向过程就是自顶向下的编程！**


用面向过程的方法写出来的程序是一份蛋炒饭，而用面向对象写出来的程序是一份盖浇饭，就是在一碗白米饭上面浇上一份盖菜，你喜欢什么菜，你就浇上什么菜。

蛋炒饭制作的细节，我不太清楚，因为我没当过厨师，也不会做饭，但最后的一道工序肯定是把米饭和鸡蛋混在一起炒匀。盖浇饭呢，则是把米饭和盖菜分别做好，你如果要一份红烧肉盖饭呢，就给你浇一份红烧肉；如果要一份青椒土豆盖浇饭，就给浇一份青椒土豆丝。

蛋炒饭的好处就是入味均匀，吃起来香。如果恰巧你不爱吃鸡蛋，只爱吃青菜的话，那么唯一的办法就是全部倒掉，重新做一份青菜炒饭了。盖浇饭就没这么多麻烦，你只需要把上面的盖菜拨掉，更换一份盖菜就可以了。盖浇饭的缺点是入味不均，可能没有蛋炒饭那么香。

到底是蛋炒饭好还是盖浇饭好呢？饭馆角度来讲的话，做盖浇饭显然比蛋炒饭更有优势，他可以组合出来任意多的组合，而且不会浪费。

盖浇饭的好处就是”菜”“饭”分离，从而提高了制作盖浇饭的灵活性。饭不满意就换饭，菜不满意换菜。用软件工程的专业术语就是”可维护性“比较好，”饭” 和”菜”的耦合度比较低。蛋炒饭将”蛋”“饭”搅和在一起，想换”蛋”“饭”中任何一种都很困难，耦合度很高，以至于”可维护性”比较差。软件工程追求的目标之一就是可维护性，可维护性主要表现在3个方面：可理解性、可测试性和可修改性。面向对象的好处之一就是显著的改善了软件系统的可维护性。 

#### 2.面向过程与面向对象的优缺点

面向过程

> 优点：性能比面向对象高，因为类调用时需要实例化，开销比较大，比较消耗资源;比如单片机、嵌入式开发、 Linux/Unix等一般采用面向过程开发，性能是最重要的因素。 

> 缺点：没有面向对象易维护、易复用、易扩展

面向对象

> 优点：易维护、易复用、易扩展，由于面向对象有封装、继承、多态性的特性，可以设计出低耦合的系统，使系统 更加灵活、更加易于维护 。

> 缺点：性能比面向过程低


#### 3.面向对象的特点
    
**对象**：就是现实世界存在的任何事务都可以称之为对象，有着自己独特的个性，对象一般都由属性+方法组成！

**属性**：属于**对象静态**的一面，用来描述具体某个对象的特征。比如小明身高180M，体重70KG，这里身高、体重都是属性。

**方法**：属于**对象动态**的一面，比如小明会跑，会说话，跑、说话这些行为就是对象的方法！我们把属性和方法称为这个对象的成员！

**类**：具有同种属性的对象称为类，是个抽象的概念。比如“人”就是一类，其中有一些人名，比如小明、小红、小玲等等这些都是对象，类就相当于一个模具，他定义了它所包含的全体对象的公共特征和功能，对象就是类的一个实例化，小明就是人的一个实例化！我们在做程序的时候，经常要将一个变量实例化，就是这个原理！我们一般在做程序的时候一般都不用类名的，比如我们在叫小明的时候，不会喊“人，你干嘛呢！”而是说的是“小明，你在干嘛呢！”

**面向对象有三大特性：封装、继承和多态**
* 封装：js当中只能依靠变量的作用域来实现封装的特性,且只能模拟出public和private两种特性
  封装实现就是是对象内部的变化对外界是透明的,不可见。这种做法使对象之间低耦合,便于维护升级,团队协作开发。需要修改的时候只用修改内部代码，而不用去修改调用它的代码，提高了**可维护性**。
  $(selector).each(function(index,element))。就比如这个each函数,我们不用关心内部实现,只要提供的功能正确就行。
  
* 继承：

* 多态：




2.什么是跨域？跨域常见的解决方案

3.
4.
5.
6.

---
### 常见代码问题

#### 1. for循环中嵌套定时器setTimeout() 

```js
for (var i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
    // 3 3 3 
```

* JS的执行机制： js是单线程环境，从上到下、依次执行，即 同步执行；for循环是同步代码，setTimeout是异步代码，异步的还有Ajax请求等等。JS在执行代码的过程中，碰到同步代码会依次执行，碰到异步代码就会将其放入任务队列中进行等待，当同步代码执行完毕后再开始执行异步代码，即异步执行。
* JS的作用域：当同步代码执行完毕后，开始执行异步的setTimeout代码，执行setTimeout时需要从当前作用域内寻找一个变量 i ，此时for循环已执行完毕，当前 i=3，所以执行setTimeout时输出为3，任务队列中的剩余2个setTimeout也依次执行，输出为3。

**解决方法** 

##### 1.1 立即执行函数
```js
    for(var i=0;i<3;i++){
        (function (x) {
            setTimeout(() => {
                console.log(x)
            },1000)
        })(i);
    }
    // 0 1 2
```
>* 这里用到立刻执行函数。这样 console.log(x) 中的 x 就保存在每一次循环生成的立刻执行函数中的作用域里了,每次循环将 i 作为参数传进 x 中。

##### 1.2 将var改为let（ES6)
```js
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
    // 0 1 2 
```
>* var 存在变量提升，是全局变量，只能出现一次，不断的覆盖。
>* let 不存在变量提升，所以每次循环都会执行一次，声明一个新变量。
>* for 的每次循环都是不同的块级作用域，let 声明的变量是块级作用域的，且都是不同的let变量。


#### 2. for循环遍历
```const arr = ['a','b','c','d','e','f'];```  
```const str = abcdef;```

* 用于遍历数组元素使用：for( )，forEach( )，map( )，for ··· of（ES6）
* 用于遍历字符串使用：for( ), for ··· in, for ··· of
* 用于循环对象属性使用：for ··· in

##### 2.1 for()
```js
    //效率最高，最快
    for (let i = 0; i < arr.length,  ; i++) {
        console.log(i);          // 0 1 2 3 4 5
        console.log(arr[i]);     // a b c d e f
    }

    //使用临时变量，效率相对略低一点
    for (let i = 0,len = arr.length；i < len ; i++) {
        //code
    }
```
##### 2.2 forEach( (item,index) => { } )
```js
    //无返回值，不能终止循环
    arr.forEach((item, index) => {
        console.log(item);    // a b c d e f 
        console.log(index);   // 0 1 2 3 4 5
    })
```

##### 2.3 map( (item, index) => { } )
```js
    //返回一个新数组
    let arrData = arr.map((item, index) => {
        console.log(item);     // a b c d e f 
        console.log(index);    // 0 1 2 3 4 5
        return item;       
    })
    console.log(arrData);  // ["a","b","c","d","e","f"]
```

##### 2.4 for ··· in
```js
    //效率中等，方便，但会打印非数字属性
    arr.fav = 'ok';
    for(let index in arr) { 
        console.log(index);         // 0 1 2 3 4 5 fav
        console.log(arr[index]);    // a b c d e f ok
    };  
    //遍历对象能获得 key 和 value
    const obj = {a:1,b:2,c:3,d:4}   
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key);       // a b c d  属性
            console.log(obj[key]);  // 1 2 3 4  属性值
        }
    }
```

##### 2.4 for ··· of（ES6）
```js
    //支持终止循环，也不会遍历非数字属性
    for(let item of arr){
        if( item === 'd' ){
            break;
        }
        console.log(item);          // a b c 
    }  

    
    let person = [
        { name:'nick', age:18 },
        { name:'freddy', age:24 },
        { name:'mike', age:26 },
    ];
    for(let item of person){	
        console.log(item.name,item.age);
    }
```

#### 3. call（）方法和apply（）方法
call（）方法和apply（）方法的作用相同，他们的区别在于接收参数的方式不同。对于call（），第一个参数是this值没有变化，变化的是其余参数都直接传递给函数。（在使用call（）方法时，传递给函数的参数必须逐个列举出来。使用apply（）时，传递给函数的是参数数组）如下代码做出解释：
```js 
function add(c, d){ 
    return this.a + this.b + c + d; 
} 
var o = {a:1, b:3}; 
add.call(o, 5, 7); // 1+3+5+7 = 16 
add.apply(o, [10, 20]); // 1+3+10+20 = 34 
```

#### 4. 值传递 和 引用传递

```js
function change(c,d,e){
    c = 'cba';      //a为值传递，a赋值给参数c，c改变a不会改变
    d[0] = 3;       //数组和对象是引用传递，会改变原有数组和原有对象
    e.a = 3;
}
var a = 'abc';
var b = [1,2,3];
var o = {a:1,b:2,c:3}
change(a,b,o);
console.log(a,b,o); // abc [3,2,3] {a:3,b:2,c:3}
```