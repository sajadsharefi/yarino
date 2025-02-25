import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Octicons";

import { debounce } from 'lodash'; // 4.0.8

const withPreventDoubleClick = (WrappedComponent) => {

    class PreventDoubleClick extends React.PureComponent {

        debouncedOnPress = () => {
            this.props.onPress && this.props.onPress();
        }

        onPress = debounce(this.debouncedOnPress, 500, { leading: true, trailing: false });

        render() {
            return <WrappedComponent {...this.props} onPress={this.onPress} />;
        }
    }

    PreventDoubleClick.displayName = `withPreventDoubleClick(${WrappedComponent.displayName || WrappedComponent.name})`
    return PreventDoubleClick;
}

const CustomButton = ({ iconsize = 22, icon = false, onPress, onLongPress, style, fontFamily = "Shabnam-Medium", textColor = "#fff", fontSize = 14, backgroundColor = "#ff4700", disabled = false, activeOpacity = 0.7, children }) => {
    return (
        <TouchableOpacity
            style={[disabled ? {backgroundColor: '#cecece' } : { backgroundColor: backgroundColor }, styles.button, icon != false ? { flexDirection: 'row-reverse' } : {}, style]}
            onPress={onPress}
            onLongPress={onLongPress}
            disabled={disabled}
            activeOpacity={activeOpacity}
        >
            {icon != false &&
                <Icon name={icon} color={textColor} size={iconsize} style={{ marginLeft: 0 }} />
            }
            {icon == false &&
                <Text style={[styles.text, disabled ? { color: " rgba(0, 0, 0, 0.5)", fontFamily: fontFamily } : { color: textColor, fontFamily: fontFamily }, { fontSize: fontSize }]}>{children}</Text>
            }

        </TouchableOpacity>
    );
};

export default withPreventDoubleClick(CustomButton);

const styles = StyleSheet.create({
    button: {
        borderRadius: 12,

        justifyContent: "center",
        alignItems: "center",
        padding: 12,
        width: "100%",
        marginVertical: 5,
        display: "flex",
    },
    text: {
        marginRight: "auto",
        marginLeft: "auto",
        color: "#ffffff",

    },
});
