// pages/addressList/addressList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /**
     * 拼音导航
     * letters - 导航字母
     * contactsData - 用户数据
     */
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    contactsData: [
      { groupName: 'A', users: [] },
      { groupName: 'B', users: [] },
      { groupName: 'C', users: [] },
      { groupName: 'D', users: [] },
      { groupName: 'E', users: [] },
      { groupName: 'F', users: [] },
      { groupName: 'G', users: [] },
      { groupName: 'H', users: [] },
      { groupName: 'I', users: [] },
      { groupName: 'J', users: [] },
      { groupName: 'K', users: [] },
      { groupName: 'L', users: [] },
      { groupName: 'M', users: [] },
      { groupName: 'N', users: [] },
      { groupName: 'O', users: [] },
      { groupName: 'P', users: [] },
      { groupName: 'Q', users: [] },
      { groupName: 'R', users: [] },
      { groupName: 'S', users: [] },
      { groupName: 'T', users: [] },
      { groupName: 'U', users: [] },
      { groupName: 'V', users: [] },
      { groupName: 'W', users: [] },
      { groupName: 'X', users: [] },
      { groupName: 'Y', users: [] },
      { groupName: 'Z', users: [] }
    ],

    // 引用底部导航
    homeActive: true
  },

  /**
   * 拼音导航
   * pininNav - 点击字母
   */
  pingyinNav(e) {
    console.log(e.currentTarget.dataset.byte);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("\n通讯录");

    let that = this;

    // 原数据
    let oldData = that.data.contactsData;
    
    // 第一页数据
    let newData = [
      {
        userName: '阿狸',
        userPhone: '18811111111',
        pinyin: 'ali'
      },
      {
        userName: '贝吉塔',
        userPhone: '18822222222',
        pinyin: 'beijita'
      },
      {
        userName: '楚怡',
        userPhone: '18833333333',
        pinyin: 'chuyi'
      },
      {
        userName: '邓婕',
        userPhone: '18844444444',
        pinyin: 'dengjie'
      },
      {
        userName: '尔康',
        userPhone: '18855555555',
        pinyin: 'erkang'
      },
    ]
    
    // 循环新数据
    for(let newDataItem in newData) {
      // 转换新数据拼音首字母为大写
      let initials = newData[newDataItem].pinyin.substr(0, 1).toUpperCase();
      // 循环旧数据
      for(let oldDataItem in oldData) {
        // 获取旧数据字母分组
        let groupName = oldData[oldDataItem].groupName;
        
        // 判断两个字母是否相同
        if(initials == groupName) {
          // 使用 array[array.length] 将数据加入到该组中
          oldData[oldDataItem].users[oldData[oldDataItem].users.length] = newData[newDataItem];
        }
      }
    }

    console.log("\n初始加载数据为：");
    console.log(oldData);

    that.setData({
      contactsData: oldData
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})


