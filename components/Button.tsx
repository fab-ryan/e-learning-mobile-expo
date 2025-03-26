import {
    StyleSheet,
} from 'react-native';

import { Icon, View, Text, Pressable, PressableProps } from './Themed';

import { IconProps, IconsEnum, } from '@/types';
// import { LinearGradient } from 'expo-linear-gradient';
import { Colors, lightSecondaryColor, primaryColor, redColor, secondaryColor, whiteColor } from '@/constants';
import { useColorScheme, } from '@/hooks';
import { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

type props = {
    title?: string;
    color?: 'primary' | 'secondary' | 'danger';
    loading?: boolean;
};

type ThemeProps = {
    lightColor?: string;
    darkColor?: string;
}

function Button(props: props & PressableProps & ThemeProps) {
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';
    const defaultLightColor = '#ffff'
    const {
        title,
        style,
        lightColor = isDark ? defaultLightColor : primaryColor,
        darkColor = isDark ? primaryColor : secondaryColor,
        color = 'primary',
        loading,
        children,
        ...otherProps
    } = props;
    const isPrimary = color === 'primary';
    const isDanger = color === 'danger';
    const Wrapper = isPrimary ? LinearGradient : View

    const backgroundColor = isDanger
        ? redColor
        : isPrimary
            ? isDark
                ? primaryColor
                : secondaryColor
            : '#ced0d0';

    return (
        <Pressable
            style={[styles.button, style]}
            {...otherProps}
        >
            <Wrapper
                style={[styles.innerWrapper, isPrimary && styles.gradient]}
                {...(isPrimary
                    ? {
                        colors: ['#39b8db', '#38c2ac'],
                        start: { x: 0, y: 0.5 },
                        end: { x: 0, y: 1 },

                    }
                    : {
                    })}
                colors={['#39b8db', '#38c2ac']}

            >

                <Text
                    lightColor={whiteColor}
                    darkColor={whiteColor}
                    style={[styles.buttonText]}
                >
                    {title}
                </Text>
                {loading && (
                    <Icon
                        type={IconsEnum.feather}
                        name={'loader'}
                        size={16}
                        color={whiteColor}
                        style={{ marginLeft: 10 }}
                    />
                )}
                {
                    children
                }
            </Wrapper>

        </Pressable>
    );
}
export { Button }


const styles = StyleSheet.create({
    button: {
        padding: 12,
        borderRadius: 10,
        minHeight: 48,
        justifyContent: 'center',
    },
    innerWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    gradient: {
        padding: 12,
        borderRadius: 8,
    },
    iconButton: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
        width: 48,
    },

    iconButtonGrayIsh: {
        borderWidth: 1,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'solid',
        borderColor: Colors['dark'].tint,
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 10,
    },
});