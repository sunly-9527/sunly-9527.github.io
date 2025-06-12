var posts=["2025/05/26/Claude 4 重磅发布：揭秘 AI Agent 与智能编码的未来纪元/","2025/05/22/Gemini 全新功能发布，AI 助手迈向新高度/","2025/05/10/AI浪潮之巅：拥抱智能，重塑未来/","2025/05/20/从HTTP1-1到HTTP3-深入剖析Web协议的进化之路/","2025/05/19/前端包管理器npm、yarn、pnpm深度对决与选择之道/","2025/05/16/Docker 零基础入门到实战：一文带你玩转容器化部署！/","2025/05/12/告别卡顿、泄漏与闪烁：系统性前端性能问题排查（CPU、内存、渲染）/","2025/05/07/VS Code 高效开发实用指南/","2025/03/30/告别复制粘贴！Cursor编辑器：让你和代码“聊”起来，开发效率原地起飞！/","2025/03/15/低代码平台设计方案/","2025/03/05/SpringBoot集成Elasticsearch实战指南/","2025/02/22/深入解析Vue响应式系统的设计与实现/","2025/02/19/WebGL基础与Three-js入门超简指南/","2025/02/15/探索MCP服务：高效整合工作与学习的智能工具/","2025/02/10/解锁AI自动化：探索n8n工作流乐高/","2025/01/15/2025前端风向标：AI、边缘计算与下一代体验将如何重塑Web/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };