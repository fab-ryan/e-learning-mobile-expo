import {
    View as DefaultView, type ViewProps, Animated, useAnimatedValue, Text as DefaultText, type ViewStyle,
    PressableProps as DefaultPressableProps,
    Pressable as DefaultPressable,
} from 'react-native';
import { useEffect } from 'react';
import { useThemeColor } from '@/hooks';
import { StyleSheet } from 'react-native';
import { Image as DefaultImages } from 'expo-image';
import { tint } from '@/constants/Colors';
import { SafeAreaView as SafeAreaViewDefault, SafeAreaViewProps as SafeAreaProps } from 'react-native-safe-area-context';
import { IconProps, IconsEnum } from '@/types';
import { AntDesign, Entypo, Feather, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export type ImageProps = DefaultImages['props'];
type ThemeProps = {
    lightColor?: string;
    darkColor?: string;
}

export type PressableProps = ThemeProps &
    DefaultPressableProps &
    DefaultView['props'];

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
    DefaultText['props'] & { fontFamily?: FontTypes } & {
        type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
    };
export type SafeAreaViewProps = ThemeProps & SafeAreaProps;
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
        type = 'default',
        darkColor,
        ...otherProps
    } = props;
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

    return (
        <DefaultText
            style={[{ color }, type === 'default' ? styles.default : undefined,
            type === 'title' ? styles.title : undefined,
            type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
            type === 'subtitle' ? styles.subtitle : undefined,
            type === 'link' ? styles.link : undefined, style, { fontFamily }]}
            {...otherProps}
        />
    );
}


export function Image({ style, ...props }: ImageProps) {
    const blurhash =
        '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
    return (
        <DefaultImages
            style={[styles.image, style]}
            placeholder={props.placeholder ?? blurhash}
            {...props}
        />
    );
}
export function SafeAreaView({ style, lightColor, darkColor, ...otherProps }: SafeAreaViewProps) {
    const backgroundColor = useThemeColor(
        { light: lightColor, dark: darkColor },
        'background',
    );
    return <SafeAreaViewDefault style={[{ backgroundColor }, style]} {...otherProps} />;
}
export function Pressable(props: PressableProps) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor(
        { light: lightColor, dark: darkColor },
        'background',
    );

    return (
        <DefaultPressable
            style={[{ backgroundColor }, style]}
            {...otherProps}
        />
    );
}
export function Icon<T extends IconsEnum>(props: IconProps<T>) {
    const { size = 16, lightColor, darkColor, style, ...otherProps } = props;
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
    const IconComponent = getIconComponent(props.type);

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <IconComponent
            size={size || 24}
            {...otherProps}
            color={props.color ?? color}
            style={[
                style,
                {
                    fontFamily: 'poppins',
                },
            ]}
        />
    );
}
function getIconComponent(type?: IconsEnum) {
    switch (type) {
        case IconsEnum.fa:
            return FontAwesome;
        case IconsEnum.feather:
            return Feather;
        case IconsEnum.material:
            return MaterialCommunityIcons;
        case IconsEnum.ionicon:
            return Ionicons;
        case IconsEnum.antdesign:
            return AntDesign;
        case IconsEnum.entypo:
            return Entypo;
        default:
            return FontAwesome;
    }
}


const styles = StyleSheet.create({
    image: {
        backgroundColor: tint,
    },
    default: {
        fontSize: 16,
        lineHeight: 24,
    },
    defaultSemiBold: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '600',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        lineHeight: 32,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    link: {
        lineHeight: 30,
        fontSize: 16,
        color: '#0a7ea4',
    },
});
