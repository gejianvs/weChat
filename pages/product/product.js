Page({
  data: {
    array: [{
      message: 'foo',
    }, {
      message: 'bar'
    }],
    length:5,
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    }
  },
  changeLength(obj){
    console.log(obj)
    this.setData({
      length: this.data.length+1
    },()=>{
      if (this.data.length>10){
        this.setData({
          length:1
        })
      }
    })
  },
  longpress(){
    console.log('longpress')
  },
  onMyEvent(e){
    console.log(e)
  }

})