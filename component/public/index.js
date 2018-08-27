Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'default value',
    }
  },
  data: {
    // 这里是一些组件内部数据
    a: '自定义组件'
  },
  methods: {
    // 这里是一个自定义方法
    publicMethod: function() {
      this.setData({
        a: '这是插入slot内的数据'
      }, () => {
        console.log("改变完成")
      })
    },
    onTap: function() {
      var myEventDetail = {} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('myevent', myEventDetail, myEventOption)
    }
  }
})