import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';
import { COLORS, SPACING, SIZES } from '../constants/theme';

export const CustomButton = ({
    title,
    onPress,
    variant = 'primary',
    icon,
    style,
    textStyle
}) => {
    const getButtonStyle = () => {
        switch (variant) {
            case 'primary':
                return styles.primaryButton;
            case 'google':
                return styles.googleButton;
            case 'accent':
                return styles.accentButton;
            default:
                return styles.primaryButton;
        }
    };

    const getTextStyle = () => {
        switch (variant) {
            case 'primary':
                return styles.primaryText;
            case 'google':
                return styles.googleText;
            case 'accent':
                return styles.accentText;
            default:
                return styles.primaryText;
        }
    };

    return (
        <TouchableOpacity
            style={[getButtonStyle(), style]}
            onPress={onPress}
            activeOpacity={0.8}
        >
            {icon && <Image source={icon} style={styles.icon} />}
            <Text style={[getTextStyle(), textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    primaryButton: {
        backgroundColor: COLORS.primary,
        height: SIZES.buttonHeight,
        borderRadius: SIZES.radiusLarge,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: SPACING.xxxl,
    },
    googleButton: {
        backgroundColor: COLORS.white,
        height: SIZES.buttonHeight,
        borderRadius: SIZES.radiusLarge,
        borderWidth: 1,
        borderColor: COLORS.googleBorder,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: SPACING.xxxl,
    },
    accentButton: {
        backgroundColor: COLORS.accent,
        height: SIZES.buttonHeight,
        borderRadius: SIZES.radiusLarge,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: SPACING.xxxl,
    },
    primaryText: {
        color: COLORS.white,
        fontSize: SIZES.body,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
    googleText: {
        color: COLORS.text,
        fontSize: SIZES.body,
        fontWeight: '500',
    },
    accentText: {
        color: COLORS.text,
        fontSize: SIZES.body,
        fontWeight: '600',
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: SPACING.md,
    },
});
