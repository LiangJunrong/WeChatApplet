//index.js

Page({
  data: {
    functionList: [
      {
        name: 'Flex 布局',
        url: '../flexLayout/flexLayout',
        iconUrl: '../../public/img/icon_layout.png',
        description: 'Flex 布局，又称弹性布局，在小程序开发中编写 CSS 的时候相对于 Float 布局比较适用……'
      },
      {
        name: '通讯录',
        url: '../addressList/addressList',
        iconUrl: '../../public/img/icon_address_list.png',
        description: '原生打造小程序通讯录，实现搜索、增加、修改、删除通讯录成员等功能……'
      },
      {
        name: '日志',
        url: '../logs/logs',
        iconUrl: '../../public/img/icon_logs.png',
        description: '小程序的启动日志……'
      }
    ]
  },
  onLoad: function () {
    console.log("\n首页");
  }
})
