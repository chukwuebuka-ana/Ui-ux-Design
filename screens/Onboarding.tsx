import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import {
  Gap,
  FontFamily,
  FontSize,
  Color,
  Padding,
  Border,
} from "../GlobalStyles";

const Onboarding = () => {
  return (
    <View style={styles.onboarding}>
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <View style={[styles.topStatusBar, styles.batteryIconPosition]}>
          <Image
            style={[styles.notchIcon, styles.statusBarPosition]}
            contentFit="cover"
            source={require("../assets/notch.png")}
          />
          <View style={styles.rightSide}>
            <Image
              style={[styles.batteryIcon, styles.batteryIconPosition]}
              contentFit="cover"
              source={require("../assets/battery.png")}
            />
            <Image
              style={styles.wifiIcon}
              contentFit="cover"
              source={require("../assets/wifi.png")}
            />
            <Image
              style={styles.mobileSignalIcon}
              contentFit="cover"
              source={require("../assets/mobile-signal.png")}
            />
            <Image
              style={styles.recordingIndicatorIcon}
              contentFit="cover"
              source={require("../assets/recording-indicator.png")}
            />
          </View>
          <Image
            style={styles.leftSideIcon}
            contentFit="cover"
            source={require("../assets/left-side.png")}
          />
        </View>
        <View style={[styles.leftTitleRight, styles.titleFlexBox]}>
          <View style={[styles.leftAccessory, styles.textFlexBox]}>
            <Image
              style={styles.angleLeftIcon}
              contentFit="cover"
              source={require("../assets/angleleft.png")}
            />
            <Text style={[styles.leftTitle, styles.titleTypo]}>Left Title</Text>
          </View>
          <View style={[styles.title, styles.titleFlexBox]}>
            <Text style={[styles.title1, styles.title1Typo]}>Title</Text>
          </View>
          <View style={[styles.rightAccessory, styles.accessoryFlexBox]}>
            <Text style={[styles.rightTitle, styles.titleTypo]}>Skip</Text>
          </View>
        </View>
      </View>
      <View style={[styles.text, styles.textFlexBox]}>
        <Text style={[styles.atAnytime, styles.title1Typo]}>At anytime</Text>
        <Text style={[styles.sellHousesEasily, styles.title1Typo]}>
          Sell houses easily with the help of Listenoryx and to make this line
          big I am writing more.
        </Text>
      </View>
      <Image
        style={styles.atAnytimeIcon}
        contentFit="cover"
        source={require("../assets/at-anytime.png")}
      />
      <Image
        style={styles.onboardingChild}
        contentFit="cover"
        source={require("../assets/group-297.png")}
      />
      <View style={styles.homeIndicator}>
        <View style={[styles.homeIndicator1, styles.leftTitleRightPosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  batteryIconPosition: {
    right: 0,
    top: 0,
    position: "absolute",
  },
  titleFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textFlexBox: {
    gap: Gap.gap_,
    alignItems: "center",
  },
  titleTypo: {
    fontFamily: FontFamily.subheadLgSHLgRegular,
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgRegular_size,
  },
  title1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.subheadSmSHSmMedium,
    fontWeight: "500",
  },
  accessoryFlexBox: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  leftTitleRightPosition: {
    left: "50%",
    position: "absolute",
  },
  notchIcon: {
    width: 0,
    height: 0,
    left: 0,
  },
  batteryIcon: {
    width: 24,
    height: 11,
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  recordingIndicatorIcon: {
    top: -9,
    right: 56,
    width: 6,
    height: 6,
    display: "none",
    position: "absolute",
  },
  rightSide: {
    top: 20,
    right: 14,
    width: 67,
    height: 11,
    position: "absolute",
  },
  leftSideIcon: {
    top: 16,
    left: 3,
    width: 54,
    height: 21,
    position: "absolute",
  },
  topStatusBar: {
    height: 52,
    left: 0,
    overflow: "hidden",
  },
  angleLeftIcon: {
    height: 24,
    display: "none",
    width: 24,
    overflow: "hidden",
  },
  leftTitle: {
    color: Color.defaultSystemBlueLight,
    textAlign: "left",
    display: "none",
  },
  leftAccessory: {
    padding: Padding.p_5xs,
    alignSelf: "stretch",
    flexDirection: "row",
    flex: 1,
  },
  title1: {
    fontSize: FontSize.headlineSmHSmMedium_size,
    lineHeight: 25,
    color: Color.labelColorLightPrimary,
    flex: 1,
  },
  title: {
    width: 191,
    justifyContent: "center",
    alignItems: "center",
    display: "none",
  },
  rightTitle: {
    color: Color.textColorContentSecondary,
    textAlign: "right",
  },
  rightAccessory: {
    flex: 0.9557,
    justifyContent: "flex-end",
    paddingLeft: Padding.p_5xs,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_5xs,
    alignItems: "center",
  },
  leftTitleRight: {
    marginLeft: -196.5,
    top: 52,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    position: "absolute",
    width: 393,
  },
  statusBar: {
    height: 94,
    width: 393,
    left: 0,
  },
  atAnytime: {
    fontSize: FontSize.titleMdTMdMedium_size,
    lineHeight: 30,
    color: Color.textColorContentPrimary,
  },
  sellHousesEasily: {
    fontSize: FontSize.subheadSmSHSmMedium_size,
    lineHeight: 19,
    color: Color.neutralGray400,
    width: 280,
  },
  text: {
    top: 407,
    left: 56,
    justifyContent: "center",
    position: "absolute",
  },
  atAnytimeIcon: {
    top: 367,
    left: 14,
    width: 365,
    height: 225,
    position: "absolute",
  },
  onboardingChild: {
    top: 674,
    left: 153,
    width: 86,
    height: 86,
    position: "absolute",
  },
  homeIndicator1: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.neutralGray900,
    width: 134,
    height: 5,
  },
  homeIndicator: {
    top: 818,
    height: 34,
    width: 393,
    left: 0,
    position: "absolute",
  },
  onboarding: {
    backgroundColor: Color.shadesWhite,
    width: "100%",
    height: 852,
    overflow: "hidden",
    flex: 1,
  },
});

export default Onboarding;
