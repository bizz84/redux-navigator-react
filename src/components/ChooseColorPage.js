import React, { Component } from 'react';
import { View, Button } from 'react-native';

const COLORS = {
    RED: { name: 'red', hex: '#F00' },
    GREEN: { name: 'green', hex: '#0F0' },
    BLUE: { name: 'blue', hex: '#00F' },
}

class ChooseColorPage extends Component {

    onSelectColor(colorKey) {
        const { navigation } = this.props;
        navigation.dispatch({ type: 'ChooseColorDismiss', colorKey: colorKey });        
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                {Object.keys(COLORS).map((key) => (
                    <Button key={key} onPress={() => this.onSelectColor(key)} title={COLORS[key].name} />
                ))}
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'stretch',
        backgroundColor: '#eee'
    }
}

export default ChooseColorPage;