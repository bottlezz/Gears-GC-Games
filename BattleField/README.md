collision detection打算用两种同时进行。

用矩阵的方法 检测是否在内部。


用线段 交点的方法 左边缘检测。

workflow:
1. Calculate Move object new location.
2. dtec Move Object vs. Move Object. if yes, reverse. 此处使用圆相交公式
3. dtec Move Object vs. Static Object. 
  a. mini fast object 小物体可以当做点来处理，例如bullets. 用矩阵处理 比方说 pixel[x][y]==1?reverse:proceed;
  b. large fast object 两种检测. 内部检测， 用矩阵处理，外部检测，边缘检测，看静物的边是否相交。
  c. larg slow object 边缘检测。线段和圆相交。
