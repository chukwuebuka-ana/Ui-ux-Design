import * as React from "react";
import { Border, Color } from "../GlobalStyles";

const HomeIndicator = () => {
  return (
    <View style={styles.darkModefalse}>
      <View style={styles.homeIndicator} />
    </View>
  );
};

const styles = StyleSheet.create({
  homeIndicator: {
    position: "absolute",
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.neutralGray900,
    width: 134,
    height: 5,
  },
  darkModefalse: {
    width: 393,
    height: 34,
  },
});

export default HomeIndicator;
