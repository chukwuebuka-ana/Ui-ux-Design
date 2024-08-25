import * as React from "react";

const ArrowLeft = () => {
  return (
    <Image
      style={styles.arrowLeftIcon}
      contentFit="cover"
      source={require("../assets/arrow-left.png")}
    />
  );
};

const styles = StyleSheet.create({
  arrowLeftIcon: {
    width: 24,
    height: 24,
  },
});

export default ArrowLeft;
