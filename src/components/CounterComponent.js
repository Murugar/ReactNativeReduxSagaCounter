import React, { Component } from 'react';
import Button from 'react-native-button';

import { Text, View, } from 'react-native';

export default class CounterComponent extends Component {
    render() {
        return (
            <View style={{ flex: 1, marginTop: 30 }}>
                <Text style={{ margin: 20, fontWeight: 'bold', color: 'red', fontSize: 20 }}>
                    Redux Saga React Native Sample Counter
                </Text>
                <View style={{ height: 50, margin: 10, flexDirection: 'row' }}>
                    <Button
                        containerStyle={{ padding: 10, height: 45, borderRadius: 10, backgroundColor: 'blue' }}
                        style={{ fontSize: 18, color: 'yellow' }}
                        onPress={() => {
                            this.props.onDecrement(2);
                        }}>
                        Decrease By Two
                    </Button>
                    <Button
                        containerStyle={{ padding: 10, height: 45, borderRadius: 10, backgroundColor: 'darkviolet',  marginLeft: 30 }}
                        style={{ fontSize: 18, color: 'white'}}
                        onPress={() => {
                            this.props.onIncrement(2)
                        }}>
                        Increase By Two
                    </Button>
                </View>
                <Text style={{ margin: 10, fontWeight: 'bold', color: 'darkblue', fontSize: 17}}>
                    Counts: {this.props.times}
                </Text>
            </View>
        );
    }
}
