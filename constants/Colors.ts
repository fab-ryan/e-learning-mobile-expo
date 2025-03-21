/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#38bec5';
const tintColorDark = '#fff';
interface Colors {
  light: {
    text: string,
    background: string,
    tint: string,
    icon: string,
    tabIconDefault: string,
    tabIconSelected: string,
  },
  dark: {
    text: string,
    background: string,
    tint: string,
    icon: string,
    tabIconDefault: string,
    tabIconSelected: string,
  }
}
export const Colors: Colors = {
  light: {
    text: '#111718',
    background: '#fbfdfd',
    tint: tintColorLight,
    icon: '#31beb7',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#111718',
    tint: tintColorDark,
    icon: '#31beb7',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
