import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import Card from '../../component/Card'
import './index.less'
// import { ITouchEvent } from '@tarojs/components/types/common'
import Scan from '../../image/scan.png'

interface IboxData{
  text: number;
  id: number;
}
interface Istate {
  text: number;
  textarea: string;
  boxPosition: number[];
  fishingIndex: number;
}
interface IresultData {
  position: number;
  words: string[]
}
export interface Iresult { 
  id: number; 
  data: IresultData[]; 
}
export default class Index extends Component<{}, Istate> {

  componentWillMount () { }

  componentDidMount () {
    
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '首页'
  }
  content = ["饢", "襻", "靐", "飝", "躞", "鼺", "鼗", "鼯", "蘡", "髁", "籱", "醯", "燹", "窳", "髑", "黻", "糌", "齼", "氍", "躐", "癯", "龘", "瘗", "蠲", "羴", "艚", "馫", "颥", "饕", "纛", "餮", "鬣", "谶", "觳", "飍", "臢", "麷", "瀵", "齾", "爩", "麣", "灪", "麤", "靁", "虋", "钃", "蠼", "豳", "纞", "䨻", "鄹", "鼙", "鬏", "龞", "爨", "躔", "鸘", "麢", "鼍", "謦", "馘", "鬻", "矗", "璺"]
  // content = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64"]
  boxData:IboxData[] = [{text: 0, id: 0},{text: 1, id: 1},{text: 2, id: 2},{text: 3, id: 3}]
  step = 0
  result?:Iresult = undefined

  onScrollToUpper = () => {
    console.log('到顶');
    console.log(this);

    this.setState({
      text: this.state.text + 1
    })
  }

  onInput = (e) => {
    this.setState({
      textarea: e.detail.value
    })
  }
  pushData(count = 1){
    for (let index = 0; index < count; index++) {
      const { boxPosition } = this.state

      const removedPosition = boxPosition.shift()
      if (removedPosition !== undefined) {
        boxPosition.push(removedPosition)
        this.setState({
          boxPosition: boxPosition
        })
      }
    }
  }
  changeBox = (positionIndex: number, id: number) => {
    switch (positionIndex) {
      case 0: 
        // 选中当前页的八个组合
        if (this.step < 3) {
          const start = 16 * id
          const selectWords = this.content.slice(start, start + 16)

          // const delWords = selectWords.splice(0,4)
          // selectWords.push(...delWords)

          const newWords = [...selectWords.slice(4,selectWords.length), ...selectWords.slice(0,4)];
          this.result = {
            id,
            data:[...new Array(newWords.length/2)].map((_, index)=>{
              console.log('ok');
              const word1 = newWords[index*2];
              return {
                position:selectWords.findIndex(word => word === word1),
                words:[
                  word1,
                  newWords[index*2+1]
              ]}
            })
          }
          this.step = 1
          console.log(this.result);
        }
        
        break;
      case 1:
        if (this.step === 2 || this.step === 3) {
          this.step = 3
          if (this.result) {
            this.fishing(-1, this.result)
          }
        }
        this.pushData(3)
        break;
      case 2:// 当step=1时，点击中间卡片准备fishing
        this.pushData(2)
        if (this.step===1) {
          this.step = 2
          this.fillWords()
          this.setResult()
        }
        break; 
      case 3:// 当step=2时，点击右边卡片开始fishing
        if (this.step === 2 || this.step === 3) {
          this.step = 3
          if (this.result) {
            this.fishing(1, this.result)
          }
        }
        this.pushData()
        break;
      default:
        break;
    }
    // this.setState({
    //   clickIndex: id
    // })
  }
  // 填充要fishing的数组
  fillWords = () => {
    if (this.result !== undefined) {
      const {id} = this.result;
      const start = id*16
      let i = 7;


      this.result.data = this.result.data.map(
        ({ position, words:[word1, word2] }) => {
          const newContent = this.content.filter((_, index) => !(index>=start && index<start+16));
          const latestWords:string[] = [];

          [...new Array(14)].forEach(() => {
            latestWords.push(newContent[i]);
            i+=1;
            if (i >= newContent.length) {
              i = 0;
            }
          })

          latestWords.splice(position, 0, word1, word2)
          return {
            position,
            words: latestWords
          }
      })
      
    }
  }
  setResult = () => {
    Taro.setStorage({
      key: "result",
      data: this.result
    })
  }
  fishing = (type : number, result: Iresult) => {

    this.setState((preState) => 
        {
          let nowIndex = preState.fishingIndex + type
          if (nowIndex >= result.data.length) {
            nowIndex = 0
          } else if (nowIndex < 0) {
            nowIndex = result.data.length - 1
          }
          return {
            fishingIndex: nowIndex
          }
        }
    )
  }
  toScanPage = () => {
    Taro.navigateTo({
      url: `/pages/scan/scan?index=${this.state.fishingIndex}`
    })

  }
  state = {
    text: 0,
    textarea: 'abcd',
    boxPosition: [0, 1, 2, 3],
    //[1,2,3,0]
    //[3,0,1,2]
    //[2,3,0,1]
    fishingIndex: -1
  }
  render () {
    const {boxPosition, fishingIndex} = this.state 

    return (
      <View className="box">
        <View className="scan" onClick={this.toScanPage.bind(this)}><Image src={Scan} className="scan-img"/></View>
        {
          this.boxData.map(item => {
            const position = boxPosition[item.id]
            const margin = 25 / 4
            const left =  position === 0 ? 20 : (position - 1) * (25 + margin) + margin
            const start = 16 * item.id
            const cardWord = this.content.slice(start, start + 16) 
            return <View key={item.id} className={`common ${position === 0 ? 'special' : ''}`} style={{left: `${left}vw`}} onClick={this.changeBox.bind(this, position, item.id)}>
                <Card cardWord={this.step === 3 && position === 0 && this.result !== undefined ? this.result.data[fishingIndex].words : cardWord}></Card>
              </View>;
          })
        }
      </View>
    )
  }
}
