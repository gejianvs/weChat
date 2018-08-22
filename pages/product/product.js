Page({
  data: {
    array: [{
      message: 'foo',
    }, {
      message: 'bar'
    }],
    length:5
  },
  changeLength(){
    this.setData({
      length: this.data.length+1
    },()=>{
      if (this.data.length>10){
        this.setData({
          length:1
        })
      }
      console.log(this.data.length)
    })
  }

})