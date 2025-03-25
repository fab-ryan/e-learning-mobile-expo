import {
    FontAwesome,
    Feather,
    MaterialCommunityIcons,
    Ionicons,
    AntDesign,
    Entypo,
} from '@expo/vector-icons';
import * as React from 'react';
import { StyleProp, TextStyle } from 'react-native';

export enum IconsEnum {
    fa = 'fa',
    feather = 'feather',
    material = 'material',
    ionicon = 'ionicon',
    antdesign = 'antdesign',
    entypo = 'entypo',
}

export type IconProps<T extends IconsEnum> = {
    name: ComponentProps[T]['name'];
    color?: string;
    size?: number;
    type?: T;
    style?: StyleProp<TextStyle>;
} & ThemeProps;
type ThemeProps = {
    lightColor?: string;
    darkColor?: string;
};

interface ComponentProps {
    fa: React.ComponentProps<typeof FontAwesome>,
    feather: React.ComponentProps<typeof Feather>,
    material: React.ComponentProps<typeof MaterialCommunityIcons>,
    ionicon: React.ComponentProps<typeof Ionicons>,
    antdesign: React.ComponentProps<typeof AntDesign>,
    entypo: React.ComponentProps<typeof Entypo>,
}
