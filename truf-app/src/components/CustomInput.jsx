import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Check, Eye, EyeOff } from 'lucide-react-native';
import { COLORS, SPACING, SIZES } from '../constants/theme';

export const CustomInput = ({
    label,
    placeholder,
    value,
    onChangeText,
    secureTextEntry = false,
    isValid = false,
    style
}) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={[styles.container, style]}>
            {label && <Text style={styles.label}>{label}</Text>}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.secondary}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry && !showPassword}
                />
                {secureTextEntry && (
                    <TouchableOpacity
                        onPress={() => setShowPassword(!showPassword)}
                        style={styles.iconButton}
                    >
                        {showPassword ? (
                            <EyeOff size={20} color={COLORS.secondary} />
                        ) : (
                            <Eye size={20} color={COLORS.secondary} />
                        )}
                    </TouchableOpacity>
                )}
                {isValid && !secureTextEntry && (
                    <View style={styles.iconButton}>
                        <Check size={20} color={COLORS.success} />
                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: SPACING.lg,
    },
    label: {
        fontSize: SIZES.small,
        color: COLORS.secondary,
        marginBottom: SPACING.sm,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
        paddingVertical: SPACING.md,
    },
    input: {
        flex: 1,
        fontSize: SIZES.body,
        color: COLORS.text,
        padding: 0,
    },
    iconButton: {
        padding: SPACING.sm,
    },
});
