import { View as DefaultView, type ViewProps, Animated, useAnimatedValue, Text as DefaultText, type ViewStyle } from 'react-native';
import { useEffect } from 'react';
import { useThemeColor } from '@/hooks';
type ThemeProps = {
    lightColor?: string;
    darkColor?: string;
}
export type ThemedViewProps = ViewProps & ThemeProps;
type FontTypes =
    | 'poppins'
    | 'poppins-bold'
    | 'poppins-light'
    | 'poppins-medium'
    | 'poppins-thin'
    | 'poppins-extra-bold'
    | 'poppins-semi-bold';

export type TextProps = ThemeProps &
    DefaultText['props'] & { fontFamily?: FontTypes };

export const View = ({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) => {
    const backgroundColor = useThemeColor(
        { light: lightColor, dark: darkColor },
        'background',
    );

    return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export type ThemedAnimatedViewProps = ViewProps & {
    lightColor?: string;
    darkColor?: string;
};

export const AnimatedView = ({ style, lightColor, darkColor, ...otherProps }: ThemedAnimatedViewProps) => {
    const backgroundColor = useThemeColor(
        { light: lightColor, dark: darkColor },
        'background',
    );
    const animatedValue = useAnimatedValue(0);

    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 10000,
            useNativeDriver: true,
        }).start();
    }, [animatedValue]);
    const animatedStyle = {
        opacity: animatedValue,
    };
    return <Animated.View style={[{ backgroundColor }, style, animatedStyle]} {...otherProps} />;
}

export function Text(props: TextProps) {
    const {
        style,
        lightColor,
        fontFamily = 'poppins',
        darkColor,
        ...otherProps
    } = props;
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

    return (
        <DefaultText
            style={[{ color }, style, { fontFamily }]}
            {...otherProps}
        />
    );
}
