# CSS 笔记
### 1. vertical-align 和 line-height
* 父元素（inline-block\block）含有line-height，子元素中的（inline-block/inline元素）vertical-align才能起作用。
    * vertical-align不可继承，必须对子元素单独设置。
    * line-heignt 是文本属性，通过文本可以继承。
```css
    .fu{
        ...
        line-height: 100px;
    }
    .zi{
        ...
        line-height: 50px;
        vertical-align: middle;
    }
```
![css1](https://s2.ax1x.com/2019/09/07/nlXuRA.png)

* 父元素没有设置line-height时，子元素**之间**相互对齐
    * 只对行内元素的兄弟元素对齐有用，无法子元素居中对齐父元素。
    * 设置了vertical-align: middle的子元素的中线与兄弟元素的基线对齐。
    * 若兄弟元素都设置该项，则子元素们居中对齐。
```css
    .fu{
        ...
        /* line-height: 100px; */
    }
    .zi{
        ...
        line-height: 50px;
        vertical-align: middle;
    }
    .xiong{
        ...
        line-height: 70px;
        vertical-align: middle;
    }
```

![css2](https://s2.ax1x.com/2019/09/07/nlXHFe.png)









## 动画
### 1. 变换 transform 
> 一般放在：hover中，若不放，则直接改变形状，而不是渐变
* 旋转 rotate()
* 缩放 scale(\<x\>,\<y\>)
* 移动 translate(\<x\>,\<y\>)
* 倾斜 skew(\<angleX\>,\<angleY\>)  
```css 
div:hover {
    transform: scale(1.5) rotate(15deg);
}
```
### 2. 变换过渡效果 transition 
* transition-propertyg: 要过渡的属性
* transition-duration： 过渡过程的时间
* transition-timing-function：ease,ease-in等等
* transition-delay: 延迟时间
```css
div {
    transition: all 1s ease 0.5s;
}
```
### 3. 关键帧动画 @keyframes 规则

```css
div {
    /* position 很关键，没有就不会动 */
    position: relative;
    /* 以 (50%,0) 为动画变换的中心 */
    transform-origin: 50% 0;
    /* 一个关键帧动画*/
    animation: myrotate 4s infinite;
    /* 同时绑定两个关键帧动画*/
    animation-name: myrotate,mymove; 
    animation-duration: 4s;
    animation-iteration-count: infinite;
    
}
@keyframes myrotate {
    0% {transform: rotate(-15deg)}
    50% {transform: rotate(15deg)}
    100% {transform: rotate(-15deg)}
}
@keyframes mymove {
   ···
}
```

