import Taro, { Component } from '@tarojs/taro'
import { ScrollView, View, Textarea, Text, Input } from '@tarojs/components'
import './Card.less'

interface ICard{
    cardWord: string[];
}

export default class Card extends Component<ICard> {
    
    render () {
        const word = this.props.cardWord
        return <View className="card">{word.map(item => {
            return <View className="word-item">
                {item}
            </View>
        })}</View>
    }
}