# caesar-mobile
Dawn of the Planet of the Apes.

第一步：

      先安装fis
      npm install fis -g
      fis -v

第二步

      npm install 
      安装依赖模块
    
第三步

      fis release -op -d E:\Project\newmall\statics\ (想要发布的路径)
    
特点：

      1、所有开发静态资源都放在src目录下,发布后生成压缩版的静态资源：js目录，css目录，images目录
      2、整合seajs进行模块化开发管理（seajs+fis+zepto）
      3、浏览器地址栏加上debug=true,则自动加载未压缩的js,方便调试。(需个性化配置sea-config.js)
      4、目录整洁，结构清爽。
