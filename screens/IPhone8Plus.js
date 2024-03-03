import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const IPhone8Plus = () => {
  return (
    <View style={styles.iphone8Plus1}>
      <View style={styles.iphone8Plus1Child} />
      <View style={[styles.iphone8Plus1Item, styles.rectangleViewBg]} />
      <Text style={styles.login}>{`Login
`}</Text>
      <View style={[styles.iphone8Plus1Inner, styles.lineViewLayout]} />
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <Text style={[styles.username, styles.usernameTypo]}>Username</Text>
      <Text style={[styles.password, styles.usernameTypo]}>Password</Text>
      <View style={[styles.rectangleView, styles.rectangleViewBg]} />
      <Text style={styles.login1}>{`Login
`}</Text>
      <Text
        style={[styles.forgotPassoword, styles.newHereSignupTypo]}
      >{`Forgot Passoword?
`}</Text>
      <Image
        style={[styles.userSignWhiteIconVector15, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/usersignwhiteiconvector15479703removebgpreview-1.png")}
      />
      <Image
        style={[styles.imagesRemovebgPreview1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/imagesremovebgpreview-1.png")}
      />
      <Text style={[styles.newHereSignup, styles.newHereSignupTypo]}>
        New Here? Signup
      </Text>
      <View style={styles.frameView} />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleViewBg: {
    backgroundColor: Color.colorDeeppink_100,
    position: "absolute",
  },
  lineViewLayout: {
    height: 1,
    width: 257,
    borderTopWidth: 1,
    borderColor: Color.colorWhite,
    left: 79,
    borderStyle: "solid",
    position: "absolute",
  },
  usernameTypo: {
    height: 28,
    width: 194,
    color: Color.colorGray_100,
    fontSize: FontSize.size_xl,
    left: 79,
    textAlign: "left",
    fontFamily: FontFamily.robotoBlack,
    fontWeight: "800",
    position: "absolute",
  },
  newHereSignupTypo: {
    fontSize: FontSize.size_sm,
    left: 79,
    textAlign: "left",
    position: "absolute",
  },
  iconPosition: {
    width: 44,
    left: 291,
    position: "absolute",
  },
  iphone8Plus1Child: {
    top: 267,
    left: -447,
    backgroundColor: "#ff35aa",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderColor: "#000",
    borderWidth: 1,
    width: 561,
    height: 261,
    transform: [
      {
        rotate: "-44deg",
      },
    ],
    borderStyle: "solid",
    position: "absolute",
  },
  iphone8Plus1Item: {
    top: 439,
    left: 414,
    width: 404,
    height: 237,
    transform: [
      {
        rotate: "-44deg",
      },
    ],
  },
  login: {
    top: 77,
    left: 152,
    fontSize: 48,
    width: 161,
    height: 64,
    textAlign: "left",
    fontFamily: FontFamily.robotoBlack,
    fontWeight: "800",
    color: Color.colorWhite,
    position: "absolute",
  },
  iphone8Plus1Inner: {
    top: 289,
  },
  lineView: {
    top: 424,
  },
  username: {
    top: 243,
  },
  password: {
    top: 377,
  },
  rectangleView: {
    top: 492,
    left: 130,
    borderRadius: 29,
    width: 155,
    height: 47,
  },
  login1: {
    top: 502,
    left: 183,
    width: 90,
    height: 19,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoBlack,
    fontWeight: "800",
    position: "absolute",
  },
  forgotPassoword: {
    top: 442,
    fontFamily: FontFamily.robotoRegular,
    width: 127,
    height: 18,
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
  },
  userSignWhiteIconVector15: {
    top: 248,
    height: 42,
  },
  imagesRemovebgPreview1Icon: {
    height: 41,
    top: 377,
  },
  newHereSignup: {
    top: 563,
    width: 131,
    height: 27,
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoBlack,
    fontWeight: "800",
  },
  frameView: {
    top: 230,
    left: 139,
    width: 100,
    height: 100,
    position: "absolute",
    overflow: "hidden",
  },
  iphone8Plus1: {
    backgroundColor: "#010203",
    flex: 1,
    width: "100%",
    height: 736,
    overflow: "hidden",
  },
});

export default IPhone8Plus;
