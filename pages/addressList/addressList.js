// pages/addressList/addressList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /**
     * 拼音导航功能
     * letters - 导航字母
     * equipmentOneRpx - 设备中 1rpx 为多少 px
     */
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    equipmentOneRpx: '',
    /**
     * 功能模式
     * normalModel - 正常模式
     * addModel - 新增模式
     * editModel - 修改模式
     * deleteModel - 删除模式
     * searchModel - 搜索模式
     * pinyinNavModel - 拼音导航模式
     */
    normalModel: true,
    addModel: false,
    editModel: false,
    deleteModel: false,
    searchModel: false,
    pinyinNavModel: false,

    /**
     * 搜索功能
     * inputFocus - 搜索框聚焦
     * searchVal - 搜索内容
     * searchData - 搜索结果
     */
    inputFocus: false,
    searchVal: '',
    searchData: [],

    // 引用底部导航
    homeActive: true,

    // 用户数据
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
    
    /**
     * 新增功能
     * addUserName - 新增的用户名
     * addUserPhone - 新增的电话号码
     */
    addUserName: '',
    addUserPhone: '',

    /**
     * 修改功能
     * editOldUserName - 在哪组改动
     * editOldUserName - 原名字
     * editNewUserName - 新名字
     * editUserPhone - 电话
     */
    editGroupName: '',
    editOldUserName: '',
    editNewUserName: '',
    editUserPhone: '',

    /**
     * 上拉触底
     * normalModelNoData - 正常模式没数据加载了
     */
    normalModelNoData: false,

    /**
     * 拼音导航功能
     * letters - 导航字母
     * equipmentOneRpx - 设备中 1rpx 为多少 px
     * firstEntryPinyinModel - 第一次进入拼音导航模式
     */
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    equipmentOneRpx: '',
    firstEntryPinyinModel: true,
  },

  /**
   * 搜索功能
   * showSearch - 显示搜索框
   * monitorInputVal - 监听搜索框的值
   * searchSubmit - 提交搜索
   * clearInput - 清除搜索
   */
  showSearch(e) {
    this.setData({
      normalModel: !this.data.normalModel,
      searchModel: !this.data.searchModel,
      searchData: [],
      inputFocus: true
    })
  },
  monitorInputVal(e) {
    this.setData({
      searchVal: e.detail.value
    })
  },
  searchSubmit(e) {
    console.log("\n【API - 确认搜索】");
    console.log("搜素字段：" + this.data.searchVal);

    // 原数据
    let searchData = this.data.searchData;

    // 搜索数据 - 假设搜索数据是这个，实际应该是接口返回数据
    let newSearchData = [
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
      {
        userName: '福狸',
        userPhone: '18866666666',
        pinyin: 'fuli'
      },
      {
        userName: '古狸',
        userPhone: '18877777777',
        pinyin: 'guli'
      },
      {
        userName: '哈狸',
        userPhone: '18888888888',
        pinyin: 'hali'
      },
      {
        userName: 'i狸',
        userPhone: '18899999999',
        pinyin: 'ili'
      },
      {
        userName: '激狸',
        userPhone: '18800000000',
        pinyin: 'jli'
      },
    ]

    // 拼接新旧数据
    searchData.push(...newSearchData);

    console.log("\搜索后数据：");
    console.log(searchData);

    this.setData({
      searchData: searchData
    })

  },
  clearInput(e) {
    console.log("\n清除搜索");
    this.setData({
      searchVal: ''
    })
  },

  /**
   * 添加功能
   * showAdd - 显示/隐藏 新增弹窗
   * getAddUserName - 双向绑定成员姓名
   * getAddUserPhone - 双向绑定成员电话
   * addConfirm - 确认添加
   */
  showAdd(e) {
    this.setData({
      addModel: !this.data.addModel
    })
  },
  getAddUserName(e) {
    this.setData({
      addUserName: e.detail.value
    })
  },
  getAddUserPhone(e) {
    this.setData({
      addUserPhone: e.detail.value
    })
  },
  addConfirm(e) {

    console.log("\n【API -添加成员】");

    let userName = this.data.addUserName;
    let userPhone = this.data.addUserPhone;

    if (userName == "") { // 不允许姓名为空
      wx.showModal({
        title: '添加失败',
        content: '姓名不能为空~',
        showCancel: false
      })
    } else if (!(/^[\u4e00-\u9fa5a-zA-Z]{1,11}$/.test(userName))) { // 不允许非中文或者大小写英文
      wx.showModal({
        title: '添加失败',
        content: '请用中文或者大小写英文命名~',
        showCancel: false
      })
    } else if (userPhone == "") { // 不允许电话号码为空
      wx.showModal({
        title: '添加失败',
        content: '电话号码不能为空~',
        showCancel: false
      })
    } else if (!(/^1[345789]\d{9}$/.test(userPhone))) { // 不允许电话号码不是 13/4/5/7/8/9 开头的 11 位数字
      wx.showModal({
        title: '添加失败',
        content: '请输入正确的 11 位电话号码~',
        showCancel: false
      })
    } else { // 添加成功
      
      // 新数据。假设后端接口返回的数据为 newData
      let newData = {
        userName: this.data.addUserName,
        userPhone: this.data.addUserPhone,
        pinyin: 'ali'
      }

      // 旧数据
      let oldData = this.data.contactsData;

      // 获取新数据的首字母并转换为大写
      let initials = newData.pinyin.substr(0, 1).toUpperCase();

      // 循环旧数据
      for (let oldDataItem in oldData) {
        // 获取旧数据字母
        let groupName = oldData[oldDataItem].groupName;
        // 判断这两者字母是否相同
        if (initials === groupName) {
          // 往该字母最后一位数据添加新数据
          oldData[oldDataItem].users[oldData[oldDataItem].users.length] = newData;
        }
      }

      console.log("新增后数据：");
      console.log(oldData);
      
      this.setData({
        contactsData: oldData,
        normalModel: true,
        addModel: false,
        addUserName: '',
        addUserPhone: ''
      })
    }
  },

  /**
   * 修改功能
   * showEdit - 显示修改框
   * getEditUserName - 双向绑定成员名
   * getEditUserPhone - 双向绑定成员电话
   * editConfirm - 确认修改
   */
  showEdit(e) {
    if (!this.data.editModel) { // 显示弹窗则传递数据
      this.setData({
        editModel: true,
        editGroupName: e.currentTarget.dataset.groupname,
        editOldUserName: e.currentTarget.dataset.username,
        editNewUserName: e.currentTarget.dataset.username,
        editUserPhone: e.currentTarget.dataset.userphone,
      })
    } else { // 否则只控制弹窗隐藏
      this.setData({
        editModel: false
      })
    }
  },
  getEditUserName(e) {
    this.setData({
      editNewUserName: e.detail.value
    })
  },
  editUserPhone(e) {
    this.setData({
      editUserPhone: e.detail.value
    })
  },
  editConfirm(e) {

    console.log("\n【API - 修改成员】");

    let userName = this.data.editNewUserName;
    let userPhone = this.data.editUserPhone;

    if (userName == "") { // 不允许姓名为空
      wx.showModal({
        title: '修改失败',
        content: '姓名不能为空~',
        showCancel: false
      })
    } else if (!(/^[\u4e00-\u9fa5a-zA-Z]{1,11}$/.test(userName))) { // 不允许非中文或者大小写英文
      wx.showModal({
        title: '修改失败',
        content: '请用中文或者大小写英文命名~',
        showCancel: false
      })
    } else {

      let contactsData = this.data.contactsData;

      // 循环遍历原数据
      for (let groupInfo in contactsData) {
        // 找到原数据中的该字母组
        if (this.data.editGroupName == contactsData[groupInfo].groupName) {
          // 遍历该组的用户名
          for (let userInfo in contactsData[groupInfo].users) {
            // 找到原数据中相同的姓名
            if (this.data.editOldUserName == contactsData[groupInfo].users[userInfo].userName) {
              // 修改它的姓名
              contactsData[groupInfo].users[userInfo].userName = this.data.editNewUserName;

              console.log("新增后数据：");
              console.log(contactsData);

              this.setData({
                contactsData: contactsData,
                editModel: false,
                normalModel: true
              })

              wx.showToast({
                title: '修改成功~',
              })

              break;

            }
          }
        }
      }
    }
  },

  /**
   * 删除功能
   * showDelete - 显示/隐藏 删除图标
   * showConfirm - 确认删除
   */
  showDelete(e) {
    this.setData({
      deleteModel: !this.data.deleteModel
    })
  },
  deleteConfirm(e) {

    console.log("\n【API - 删除用户");

    let userName = e.currentTarget.dataset.username;
    let groupName = e.currentTarget.dataset.groupname;
    let index = e.currentTarget.dataset.index;

    wx.showModal({
      title: '删除确认',
      content: '是否删除成员【' + e.currentTarget.dataset.username + "】?",
      success: (e) => {
        
        if (e.confirm) { // 如果确认删除

          console.log("删除成功!");

          // 原数据
          let contactsData = this.data.contactsData;

          // 遍历原数据
          for (let groupInfo in contactsData) {
            // 找到要删除成员所在的组
            if (groupName == contactsData[groupInfo].groupName) {
              // 根据索引删除该条记录
              contactsData[groupInfo].users.splice(index, 1);
            }
          }

          this.setData({
            contactsData: contactsData
          })

          wx.showToast({
            title: '删除成功~',
          })

        } else if (e.cancel) { // 如果取消
          console.log("取消删除!");
        }

      }
    })
  },

  /**
   * 拼音导航功能
   * pininNav - 点击字母
   */
  pinyinNav(e) {

    console.log("\n【API - 拼音导航】");

    let byte = e.currentTarget.dataset.byte;

    // 开启 Promise
    const promise = new Promise( (resolve, reject) => {

      console.log("\n第一步：清空原数据");

      let contactsData = [
        {
          groupName: 'A',
          users: []
        },
        {
          groupName: 'B',
          users: []
        },
        {
          groupName: 'C',
          users: []
        },
        {
          groupName: 'D',
          users: []
        },
        {
          groupName: 'E',
          users: []
        },
        {
          groupName: 'F',
          users: []
        },
        {
          groupName: 'G',
          users: []
        },
        {
          groupName: 'H',
          users: []
        },
        {
          groupName: 'I',
          users: []
        },
        {
          groupName: 'J',
          users: []
        },
        {
          groupName: 'K',
          users: []
        },
        {
          groupName: 'L',
          users: []
        },
        {
          groupName: 'M',
          users: []
        },
        {
          groupName: 'N',
          users: []
        },
        {
          groupName: 'O',
          users: []
        },
        {
          groupName: 'P',
          users: []
        },
        {
          groupName: 'Q',
          users: []
        },
        {
          groupName: 'R',
          users: []
        },
        {
          groupName: 'S',
          users: []
        },
        {
          groupName: 'T',
          users: []
        },
        {
          groupName: 'U',
          users: []
        },
        {
          groupName: 'V',
          users: []
        },
        {
          groupName: 'W',
          users: []
        },
        {
          groupName: 'X',
          users: []
        },
        {
          groupName: 'Y',
          users: []
        },
        {
          groupName: 'Z',
          users: []
        }
      ];

      if (this.data.firstEntryPinyinModel) { // 为防止无法下拉，第一次进入拼音导航模式，清空原数据
        this.setData({
          contactsData: contactsData
        })
      }

      // 告诉下一步可以执行了
      let success = true;
      resolve(success);

    }).then( () => {
      
      console.log("\n第二步：开启拼音导航模式");

      this.setData({
        normalModel: false,
        pinyinNavModel: true,
        firstEntryPinyinModel: false,
      })

    }).then( () => {
      
      console.log("\n第三步：判断并添加数据");

      let data = this.data.contactsData;
      console.log("\n现在的数据有：");
      console.log(data);

      let newData = [
        {
          userName: '克狸',
          userPhone: '18811121112',
          pinyin: 'keli'
        },
        {
          userName: '拉狸',
          userPhone: '18811131113',
          pinyin: 'lali'
        },
        {
          userName: '磨狸',
          userPhone: '18811141114',
          pinyin: 'moli'
        },
        {
          userName: '尼狸',
          userPhone: '18811151115',
          pinyin: 'nili'
        },
        {
          userName: '噢狸',
          userPhone: '18811161116',
          pinyin: 'oli'
        },
        {
          userName: '皮皮狸',
          userPhone: '18811171117',
          pinyin: 'pipili'
        },
        {
          userName: '曲狸',
          userPhone: '18811181118',
          pinyin: 'quli'
        },
        {
          userName: '任狸',
          userPhone: '18811191119',
          pinyin: 'renli'
        },
        {
          userName: '司马狸',
          userPhone: '18811211121',
          pinyin: 'simali'
        },
        {
          userName: '提狸',
          userPhone: '18811221122',
          pinyin: 'tili'
        }
      ]
      console.log("\n新数据有：");
      console.log(newData);

      console.log("\n组合数据：");
      for (let groupInfo in data) { // 循环原数据
        for (let item in newData) { // 循环新数据

          if (data[groupInfo].groupName == newData[item].pinyin.substr(0, 1).toUpperCase()) { // 如果新数据字母 与 原数据字母相同

            // 清君侧，删除重复数据
            // 循环用户数据，判断 新数据的用户名 是否存在于用户数据，如果存在则删除之
            for (let userInfo in data[groupInfo].users) { // 循环用户原数据
              console.log(newData);
              if (newData.length > 1) {
                if (data[groupInfo].users[userInfo].userName == newData[item].userName) { // 判断 新数据的用户名 是否存在于原用户数据
                  newData.splice(item, 1);
                }
              }
            }

            if (newData.length > 1) { // 判断是否还有数据
              if (data[groupInfo].groupName == newData[item].pinyin.substr(0, 1).toUpperCase()) { // 再判断一次新数据与旧数据字母是否相同
                console.log("添加到组：【" + data[groupInfo].groupName + "】");
                data[groupInfo].users.push(newData[item]);
                console.log(data);
              }
            }

          }
        }
      }

      this.setData({
        contactsData: data,
      })

    }).then( ()=> {

      console.log("\n第四步：滚动页面");

      let dataLength = 0;
      let byteLength = 0;

      let data = this.data.contactsData;
      console.log(data);

      for (let item in data) {
        // 如果该字母比点击的字母小，则添加数据长度
        if (data[item].groupName < byte) {
          dataLength = dataLength + data[item].users.length;
        }
        // 如果该字母有内容，则加上它的字母长度
        if (data[item].users.length >= 1 && data[item].groupName != byte) {
          byteLength = byteLength + 1;
        }
        // 如果该字母等于点击的字母，则中断循环
        if (data[item].groupName == byte) {
          break;
        }
      }

      console.log("title 长度为：" + byteLength);
      console.log("data 条数为：" + dataLength);

      console.log("\n现在数组为：");
      console.log(data);

      wx.pageScrollTo({
        // 滚动高度
        scrollTop: byteLength * (44 / this.data.equipmentOneRpx) + dataLength * (120 / this.data.equipmentOneRpx)
      })

    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    console.log("\n通讯录");

    // 设备信息
    wx.getSystemInfo({
      success: res => {
        console.log("\n设备信息为：");
        console.log(res);

        let equipmentOneRpx = 750 / res.windowWidth;
        console.log("换算信息：1rpx = " + equipmentOneRpx + "px");
        this.setData({
          equipmentOneRpx: equipmentOneRpx
        })
      },
    })

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
      {
        userName: '福狸',
        userPhone: '18866666666',
        pinyin: 'fuli'
      },
      {
        userName: '古狸',
        userPhone: '18877777777',
        pinyin: 'guli'
      },
      {
        userName: '哈狸',
        userPhone: '18888888888',
        pinyin: 'hali'
      },
      {
        userName: 'i狸',
        userPhone: '18899999999',
        pinyin: 'ili'
      },
      {
        userName: '激狸',
        userPhone: '18800000000',
        pinyin: 'jli'
      },
    ]

    // 循环新数据
    for (let newDataItem in newData) {
      // 转换新数据拼音首字母为大写
      let initials = newData[newDataItem].pinyin.substr(0, 1).toUpperCase();
      // 循环旧数据
      for (let oldDataItem in oldData) {
        // 获取旧数据字母分组
        let groupName = oldData[oldDataItem].groupName;

        // 判断两个字母是否相同
        if (initials == groupName) {
          // 使用 array[array.length] 将数据加入到该组中
          oldData[oldDataItem].users[oldData[oldDataItem].users.length] = newData[newDataItem];
        }
      }
    }

    console.log("\页面初始加载数据：");
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
    if (this.data.normalModel) { // 正常模式上拉
      
      console.log("\n正常模式上拉");

      if (!this.data.normalModelNoData) { // 如果还有数据
        
        // 新数据
        let newData = [
          {
            userName: '克狸',
            userPhone: '18811121112',
            pinyin: 'keli'
          },
          {
            userName: '拉狸',
            userPhone: '18811131113',
            pinyin: 'lali'
          },
          {
            userName: '磨狸',
            userPhone: '18811141114',
            pinyin: 'moli'
          },
          {
            userName: '尼狸',
            userPhone: '18811151115',
            pinyin: 'nili'
          },
          {
            userName: '噢狸',
            userPhone: '18811161116',
            pinyin: 'oli'
          },
          {
            userName: '皮皮狸',
            userPhone: '18811171117',
            pinyin: 'pipili'
          },
          {
            userName: '曲狸',
            userPhone: '18811181118',
            pinyin: 'quli'
          },
          {
            userName: '任狸',
            userPhone: '18811191119',
            pinyin: 'renli'
          },
          {
            userName: '司马狸',
            userPhone: '18811211121',
            pinyin: 'simali'
          },
          {
            userName: '提狸',
            userPhone: '18811221122',
            pinyin: 'tili'
          }
        ]

        // 原数据
        let oldData = this.data.contactsData;

        // 循环新数据
        for (let newDataItem in newData) {
          // 转换新数据拼音首字母为大写
          let initials = newData[newDataItem].pinyin.substr(0, 1).toUpperCase();
          // 循环旧数据
          for (let oldDataItem in oldData) {
            // 获取旧数据字母分组
            let groupName = oldData[oldDataItem].groupName;

            // 判断两个字母是否相同
            if (initials == groupName) {
              // 使用 array[array.length] 将数据加入到该组中
              oldData[oldDataItem].users[oldData[oldDataItem].users.length] = newData[newDataItem];
            }
          }
        }

        console.log("\上拉加载后数据：");
        console.log(oldData);

        this.setData({
          contactsData: oldData,
          normalModelNoData: true
        })
        
      } else { // 如果没数据了
        console.log("正常模式没数据");
      }

    } else if (this.data.searchModel) { // 搜索模式上拉

      console.log("\n搜索模式上拉：");

      // 新数据
      let newSearchData = [
        {
          userName: '克狸',
          userPhone: '18811121112',
          pinyin: 'keli'
        },
      ]

      // 原数据
      let searchData = this.data.searchData;

      // 拼接新旧数据
      searchData.push(...newSearchData);

      console.log("\上拉加载后数据：");
      console.log(searchData);

      this.setData({
        searchData: searchData
      })

    } else if (this.data.pinyinNavModel) { // 拼音模式上拉
      console.log("\n拼音模式上拉");
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})