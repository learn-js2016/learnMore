# CSS 学习笔记

## position:sticky 
#### 当元素在屏幕(top/bottom,left/right以内)，表现为relative，就要滚出显示屏表现为fixed
1.父元素不能有任何`overflow:visible`以外的overflow设置；  
2.同一个父容器的sticky元素，如果定位值相等，则会重叠，属于不同父元素，则会鸠占鹊巢，挤开原来的元素, 形成依次占位效果  
3.可以设置 top， bottom， left， right