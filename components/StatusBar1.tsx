import * as React from "react";
import { Color, FontFamily, FontSize, Padding, Gap } from "../GlobalStyles";

export type StatusBar1Type = {
  showIcon?: boolean;
  showTitle?: boolean;
  showRightTitle?: boolean;
  showLeftTitle?: boolean;
  rightTitle?: string;
  mainTitle?: string;
  leftTitle?: string;
  showLeftTitleRight?: boolean;
};

const StatusBar1 = ({
  showIcon = true,
  showTitle = true,
  showRightTitle = true,
  showLeftTitle = true,
  rightTitle = "Right Title",
  mainTitle = "Title",
  leftTitle = "Left Title",
  showLeftTitleRight = true,
}: StatusBar1Type) => {
  return (
    <View style={styles.themelight}>
      <View style={[styles.topStatusBar, styles.notchIconPosition]}>
        <Image
          style={[styles.notchIcon, styles.notchIconPosition]}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
        <View style={styles.rightSide}>
          <Image
            style={styles.batteryIcon}
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
            source={require("../assets/recording-indicator1.png")}
          />
        </View>
        <Image
          style={styles.leftSideIcon}
          contentFit="cover"
          source={require("../assets/left-side.png")}
        />
      </View>
      {showLeftTitleRight && (
        <View style={[styles.leftTitleRight, styles.titleFlexBox]}>
          <View style={[styles.leftAccessory, styles.accessoryFlexBox]}>
            {showIcon && (
              <Image
                style={styles.angleLeftIcon}
                contentFit="cover"
                source={require("../assets/angleleft.png")}
              />
            )}
            {showLeftTitle && (
              <Text style={[styles.leftTitle, styles.titleTypo]}>
                {leftTitle}
              </Text>
            )}
          </View>
          {showTitle && (
            <View style={[styles.title, styles.titleFlexBox]}>
              <Text style={styles.title1}>{mainTitle}</Text>
            </View>
          )}
          <View style={[styles.rightAccessory, styles.accessoryFlexBox]}>
            {showRightTitle && (
              <Text style={[styles.rightTitle, styles.titleTypo]}>
                {rightTitle}
              </Text>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  notchIconPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  titleFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  accessoryFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  titleTypo: {
    color: Color.defaultSystemBlueLight,
    fontFamily: FontFamily.subheadLgSHLgRegular,
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgRegular_size,
  },
  notchIcon: {
    width: 0,
    height: 0,
  },
  batteryIcon: {
    width: 24,
    height: 11,
    right: 0,
    top: 0,
    position: "absolute",
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
    overflow: "hidden",
    right: 0,
  },
  angleLeftIcon: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  leftTitle: {
    textAlign: "left",
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
    textAlign: "right",
  },
  rightAccessory: {
    flex: 0.9059,
    justifyContent: "flex-end",
    paddingLeft: Padding.p_5xs,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_5xs,
  },
  leftTitleRight: {
    marginLeft: -196.5,
    top: 52,
    left: "50%",
    height: 42,
    position: "absolute",
    width: 393,
  },
  themelight: {
    height: 94,
    width: 393,
  },
});

export default StatusBar1;
