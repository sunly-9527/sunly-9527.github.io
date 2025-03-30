var posts=["2025/03/30/告别复制粘贴！Cursor编辑器：让你和代码“聊”起来，开发效率原地起飞！/","2025/02/22/深入解析Vue响应式系统的设计与实现/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };