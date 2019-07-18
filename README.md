# jigsaw


#### 本demo仅供学习参考
## 1.简介

> 微信小程序拼图验证

```$xslt
    本demo 提供两种滑块方式
    一. image方式
       基于canvas方式生成的image
       生成图片时候 需要记录x,y坐标，后面验证时候需要。
       这种方式是迫不得已才采用的方法。
       原因如下：
       1.由于微信小程序canvas属于原生组件层级问题（可优化）
       2. wx.canvasPutImageData方法，在refresh时候回出现30-70%失败的情况，暂时无解决方案。
        
    二. canvas方式
       这种是完美的方案。在pc和移动端的h5中，没有任何问题。
       但是在微信小程序上，由于wx.canvasPutImageData方法大概率失效，故只能放弃。
       
    三. 本demo推荐使用image 方式
        原因如下：
        1.image在微信小程序没有层级问题
        2.image 稳定，不用担心canvas 生成失败问题。
        3.imgage 更好操控，灵活度高。市面上的网易云盾等都是采用image方式。
          
```

## 2.项目结构
    ```
    |----dist  //编译后的文件
    |     
    |----src           
    |     |--assets               //静态资源
    |        |--font                 // 字体
    |        |--images               // 图片
    |        |--styles               // 样式
    |     |--components              // 组件
    |     |--pages                   // 页面
    |     |    |--index           // 首页
    |     |    |--canvas          // canvas
    |     |-utils                 // 扩展工具
    |     |-wxs                   // wxs文件
    |
    |-app.wpy            // 主配置
