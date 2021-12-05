import { useIsFocused } from '@react-navigation/native';
import React, { Fragment } from 'react';
import { ImageBackground, SafeAreaView, StatusBar, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AppColors from '../../utills/AppColors';
import styles from './styles';
import { height } from '../../utills/Dimensions'
export type Props = {
  statusBarColor?: string,
  transclucent?: boolean,
  scrollEnabled?: boolean,
  backgroundImage?: any,
  containerViewStyle?: object,
  contentContainerStyle?: object,
  HeaderUnScrollable?: () => React.ReactNode,
  FooterUnScrollable?: () => React.ReactNode,
  backgroundColor?: string,
  barStyle?: 'light-content' | 'dark-content'
};

const ScreenWrapper: React.FC<Props> = ({
  children,
  statusBarColor = AppColors.white,
  transclucent = false,
  scrollEnabled = false,
  backgroundImage,
  containerViewStyle = {},
  contentContainerStyle = {},
  HeaderUnScrollable = () => null,
  FooterUnScrollable = () => null,
  backgroundColor = AppColors.white,
  barStyle = 'dark-content'
}) => {
  if (backgroundImage)
    backgroundColor = AppColors.transparent
  type StatusbarProps = {
    barStyle?: 'light-content' | 'dark-content',
    backgroundColor?: string
    translucent?: boolean
  }
  const FocusAwareStatusBar: React.FC<StatusbarProps> = (props) => {
    const isFocused = useIsFocused();
    return isFocused ? <StatusBar {...props} /> : null;
  }
  const content = () => {
    return (<>
      {HeaderUnScrollable()}
      <View style={[styles.mainViewContainer, containerViewStyle, { backgroundColor: transclucent ? AppColors.transparent : backgroundColor }]}>
        {scrollEnabled ? (
          <KeyboardAwareScrollView
            contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
            keyboardShouldPersistTaps="handled"
            extraScrollHeight={height(8)}
            showsVerticalScrollIndicator={false}>
            {children}
          </KeyboardAwareScrollView>
        ) : (
          children
        )}
        {FooterUnScrollable()}
      </View>
    </>
    )
  }
  return (
    <Fragment>
      <FocusAwareStatusBar
        barStyle={barStyle}
        backgroundColor={statusBarColor}
        translucent={transclucent}
      />
      {!transclucent && (
        <SafeAreaView style={{ backgroundColor: statusBarColor }} />
      )}
      {backgroundImage ? <ImageBackground source={backgroundImage} style={styles.container} resizeMode={'cover'}>
        {content()}
      </ImageBackground>
        :
        content()}
    </Fragment>
  );
};
export { ScreenWrapper };

