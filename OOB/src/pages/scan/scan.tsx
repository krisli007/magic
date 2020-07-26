import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './scan.less'
import { Iresult } from '../index'
import Search from '../../image/search.png'
import Bujian from '../../image/bujian.png'
import Brain from '../../image/brain2.png'

interface Istate {
  result?: Iresult;
  confirmWord: boolean;
  statusBarHeight: number;
  scanStatus: boolean,
  braintop: string
}

export default class Scan extends Component<{}, Istate> {

  componentWillMount () { }

  async componentDidMount () {
    this.index = Number(this.$router.params.index)
    const result = (await Taro.getStorage({
      key: "result"
    })).data
    this.setState({
      result
    })
    Taro.getSystemInfo().catch(e => {
      console.log({e});
      
    })
    const systemInfo = (await Taro.getSystemInfo())
    this.setState({
      statusBarHeight: systemInfo.statusBarHeight
    })
    console.log(systemInfo);
    
    
   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  index: number = 0
  

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  /**
   * 指定state的类型声明为： Istate接口里的类型声明
   *
   * 一般储存 直接更改UI的变量
   */
  state: Readonly<Istate> = {
    confirmWord: true,
    statusBarHeight: 0,
    scanStatus: false,
    braintop: '100vh'
  }

  // 确定是二选一环节是第一个（true）还是第二个（false）
  confirmMode = () => {
    this.setState(preState => ({confirmWord: !preState.confirmWord}) )
  }

  toScan = (e) => {
    e.stopPropagation()
    this.setState(preState => ({scanStatus: !preState.scanStatus}) )
    setTimeout(() => {
      this.setState({
        braintop: '0'
      })
    }, 3000);    
    console.log('开始播放1')
    const innerAudioContext = Taro.createInnerAudioContext()
    innerAudioContext.autoplay = true
    innerAudioContext.src = 'https://baikecount.com/oob/scan.wav'
    innerAudioContext.onPlay(() => {
      console.log('开始播放2')
    })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
  }

  back = () => {
    Taro.navigateBack({
      delta: 1
    })
  }

  stopPropagation = (e) => {
    e.stopPropagation()
  }
  render () {
    const {result, confirmWord, statusBarHeight, scanStatus, braintop} = this.state    
    const position = result && result.data[this.index].position || 0;
    const word1 = result && result.data[this.index].words[position];
    const word2 = result && result.data[this.index].words[position+1];
    
    return (
      <View className="card" onClick={this.confirmMode}>
        {
          confirmWord && <View className="tips" style={{
            top:  statusBarHeight + 'px'
          }}>.</View>
        }

        <View className="scan">
          <Image src={Search} onClick={this.toScan.bind(this)} className="scan-img"></Image>
        </View>

        {result && result.data[this.index].words.map((item, index) => {
          if (index === position + 1) {
            return <View className="word-item">
              <Image src={Bujian} className="bujian"></Image>
            </View>
          }
          return <View className="word-item">
              {item}
            </View>
          })
        }

        {
          !scanStatus && <View onClick={this.back} className="back-logo" style={{
            top:  statusBarHeight + 'px'
          }}> {'<'} </View>
        }

        {
          scanStatus && <View className="scan-box" onClick={this.stopPropagation}>
            <View className="brain" style={{top: braintop}}>
              <Image src={Brain} className="brain-img"></Image>
              <View className="confirm-word">
                {confirmWord ? word1 : word2}
              </View>
            </View>
            
            <View className="col-line line"></View>
            <View className="row-line line"></View>
          </View>
        }
      </View>
    )
  }
}
