import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';
import { colorChanged } from '../actions/ColorActions.js';
import { COLORS } from '../state/Colors.js';

class ChooseColorPage extends Component {

    onSelectColor(colorKey) {
        this.props.colorChanged({ colorKey });
        const { navigation } = this.props;
        navigation.goBack();
        //navigation.dispatch({ type: 'ChooseColorDismiss' });        
    }

    render() {
        return (
            <View>
                {Object.keys(COLORS).map((key) => (
                    <Button 
                        key={key}
                        title={COLORS[key].name}
                        color={COLORS[key].hex}
                        onPress={() => this.onSelectColor(key)}
                    />
                ))}
            </View>
        )
    }
}

const mapStateToProps = state => ({ });

export default connect(mapStateToProps, {
    colorChanged,
})(ChooseColorPage);
