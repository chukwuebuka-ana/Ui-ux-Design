import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Color, Padding, Gap } from "../GlobalStyles";

const SplashScreens1 = () => {
  return (
    <View style={styles.splashScreens}>
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
              source={require("../assets/battery1.png")}
            />
            <Image
              style={styles.wifiIcon}
              contentFit="cover"
              source={require("../assets/wifi1.png")}
            />
            <Image
              style={styles.mobileSignalIcon}
              contentFit="cover"
              source={require("../assets/mobile-signal1.png")}
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
            source={require("../assets/left-side1.png")}
          />
        </View>
        <View style={[styles.leftTitleRight, styles.titleFlexBox]}>
          <View style={[styles.leftAccessory, styles.accessoryFlexBox]}>
            <Image
              style={styles.angleLeftIcon}
              contentFit="cover"
              source={require("../assets/angleleft.png")}
            />
            <Text style={[styles.leftTitle, styles.titleTypo]}>Left Title</Text>
          </View>
          <View style={[styles.title, styles.titleFlexBox]}>
            <Text style={styles.title1}>Title</Text>
          </View>
          <View style={[styles.rightAccessory, styles.accessoryFlexBox]}>
            <Text style={[styles.rightTitle, styles.titleTypo]}>Skip</Text>
          </View>
        </View>
      </View>
      <Image
        style={[styles.splashScreensChild, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group-2.png")}
      />
      <View style={[styles.logo, styles.logoPosition]}>
        <Text style={[styles.aber, styles.logoPosition]}>Easy Rider</Text>
        <Image
          style={[styles.ovalIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/oval.png")}
        />
        <View style={styles.logoChild} />
        <Image
          style={[styles.fill1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/fill-1.png")}
        />
        <Image
          style={[styles.fill1Copy, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/fill-1-copy.png")}
        />
        <Image
          style={[styles.fill1Copy2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/fill-1-copy-2.png")}
        />
        <Image
          style={[styles.groupIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
      </View>
      <Image
        style={[styles.infinity1s200px21, styles.leftTitleRightPosition]}
        contentFit="cover"
        source={require("../assets/infinity1s200px-2-1.png")}
      />
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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    display: "none",
  },
  accessoryFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  titleTypo: {
    fontFamily: FontFamily.subheadLgSHLgRegular,
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgRegular_size,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  logoPosition: {
    top: "50%",
    position: "absolute",
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
    gap: Gap.gap_,
    flex: 1,
  },
  title1: {
    fontSize: FontSize.headlineSmHSmMedium_size,
    lineHeight: 25,
    fontWeight: "500",
    fontFamily: FontFamily.subheadSmSHSmMedium,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    flex: 1,
  },
  title: {
    width: 191,
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
  },
  leftTitleRight: {
    marginLeft: -196.5,
    top: 52,
    height: 42,
    left: "50%",
    position: "absolute",
    width: 393,
  },
  statusBar: {
    height: 94,
    width: 393,
    left: 0,
  },
  splashScreensChild: {
    height: "27.82%",
    width: "114.12%",
    top: "72.18%",
    right: "0.13%",
    bottom: "0%",
    left: "-14.25%",
    display: "none",
  },
  aber: {
    marginTop: 26,
    left: "0%",
    fontSize: 50,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtraBold,
    color: Color.shadesWhite,
    textAlign: "center",
    width: "100%",
  },
  ovalIcon: {
    height: "5.94%",
    width: "38.06%",
    top: "56.93%",
    right: "30.97%",
    bottom: "37.13%",
    left: "30.97%",
  },
  logoChild: {
    height: "59.41%",
    width: "44.78%",
    top: "0%",
    right: "27.59%",
    bottom: "40.59%",
    left: "27.63%",
    borderRadius: 34,
    backgroundColor: Color.shadesWhite,
    position: "absolute",
  },
  fill1Icon: {
    height: "79.7%",
    width: "120.51%",
    top: "-5.94%",
    right: "-10.82%",
    bottom: "26.24%",
    left: "-9.68%",
  },
  fill1Copy: {
    height: "59.9%",
    width: "90.67%",
    top: "23.27%",
    right: "-21.25%",
    bottom: "16.83%",
    left: "30.58%",
  },
  fill1Copy2: {
    height: "45.54%",
    width: "69.03%",
    top: "37.13%",
    right: "51.12%",
    bottom: "17.33%",
    left: "-20.15%",
  },
  groupIcon: {
    height: "33.66%",
    width: "25.38%",
    top: "12.87%",
    right: "37.31%",
    bottom: "53.47%",
    left: "37.31%",
  },
  logo: {
    marginTop: -172,
    width: "71.48%",
    right: "14.27%",
    left: "14.25%",
    height: 202,
  },
  infinity1s200px21: {
    marginLeft: -46.5,
    top: 519,
    width: 100,
    height: 100,
  },
  splashScreens: {
    backgroundColor: "#fec400",
    height: 852,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default SplashScreens1;
