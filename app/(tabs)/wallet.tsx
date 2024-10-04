import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Switch,
  Image,
  Platform,
  StatusBar,
  ImageBackground,
  TextInput,
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import Button from "@/components/ui/Button";
import tw from "twrnc";
export default function WalletScreen() {
  const [headerContentHeight, setHeaderContentHeight] = useState(0);

  const handleHeaderLayout = (event: any) => {
    const { height } = event.nativeEvent.layout;
    setHeaderContentHeight(height);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <SafeAreaView>
        <ImageBackground
          source={require("@/assets/header-bg.png")} // Replace with your image path
          style={[
            styles.headerContainer,
            {
              paddingTop:
                Platform.OS === "android"
                  ? StatusBar.currentHeight + 105 - headerContentHeight
                  : 0,
            },
          ]}
          imageStyle={styles.imageBackground} // Custom style for the image
        >
          <View style={styles.headerContent} onLayout={handleHeaderLayout}>
            <Text style={styles.greetingText}>500 điểm</Text>
          </View>
          <View style={styles.iconContainer}>
            <View style={styles.feature}>
              <Image
                source={require("@/assets/icons/naptien.png")}
                style={[styles.icon32]}
              />
              <Text style={[styles.featureName]}>Nạp tiền</Text>
            </View>
            <View style={styles.feature}>
              <Image
                source={require("@/assets/icons/ruttien.png")}
                style={[styles.icon32]}
              />
              <Text style={[styles.featureName]}>Rút tiền</Text>
            </View>
            <View style={styles.feature}>
              <Image
                source={require("@/assets/icons/chuyendoi.png")}
                style={[styles.icon32]}
              />
              <Text style={[styles.featureName]}>Chuyển đổi</Text>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>

      <ScrollView contentContainerStyle={[styles.content]}>
        <Text style={styles.title}>Lịch sử giao dịch</Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tháng 9</Text>
          <View style={styles.sectionBody}>
            <View style={[styles.rowWrapper, styles.rowFirst]}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
                style={styles.row}
              >
                <View style={[styles.rowIcon]}>
                  <Image source={require("@/assets/icons/bank.png")} />
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <Text
                      style={[
                        styles.rowLabel,
                        { fontWeight: "bold", fontSize: 16 },
                      ]}
                    >
                      Thanh toán
                    </Text>
                    <Text
                      style={[
                        styles.rowLabel,
                        { fontWeight: "regular", fontSize: 14 },
                      ]}
                    >
                      Ngân hàng
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={[
                        styles.rowLabel,
                        { color: "#515151", fontSize: 12 },
                      ]}
                    >
                      12 Tháng 9, 2024
                    </Text>
                  </View>
                </View>

                <View style={styles.rowSpacer} />
                <View style={{ gap: 25, alignItems: "flex-end" }}>
                  <Text
                    style={[
                      styles.rowLabel,
                      { fontWeight: "bold", fontSize: 16 },
                    ]}
                  >
                    -35.000đ
                  </Text>
                  <Text
                    style={[
                      styles.rowLabel,
                      { fontWeight: "bold", fontSize: 16, color: "#FFAB38" },
                    ]}
                  >
                    Đang xử lý
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={[styles.rowWrapper, styles.rowFirst]}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
                style={styles.row}
              >
                <View style={[styles.rowIcon]}>
                  <Image source={require("@/assets/icons/bank.png")} />
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <Text
                      style={[
                        styles.rowLabel,
                        { fontWeight: "bold", fontSize: 16 },
                      ]}
                    >
                      Thanh toán
                    </Text>
                    <Text
                      style={[
                        styles.rowLabel,
                        { fontWeight: "regular", fontSize: 14 },
                      ]}
                    >
                      Ngân hàng
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={[
                        styles.rowLabel,
                        { color: "#515151", fontSize: 12 },
                      ]}
                    >
                      12 Tháng 9, 2024
                    </Text>
                  </View>
                </View>

                <View style={styles.rowSpacer} />
                <View style={{ gap: 25, alignItems: "flex-end" }}>
                  <Text
                    style={[
                      styles.rowLabel,
                      { fontWeight: "bold", fontSize: 16 },
                    ]}
                  >
                    -35.000đ
                  </Text>
                  <Text
                    style={[
                      styles.rowLabel,
                      { fontWeight: "bold", fontSize: 16, color: "#06D6A0" },
                    ]}
                  >
                    Hoàn thành
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={[styles.rowWrapper, styles.rowFirst]}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
                style={styles.row}
              >
                <View style={[styles.rowIcon]}>
                  <Image source={require("@/assets/icons/cacncel.png")} />
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <Text
                      style={[
                        styles.rowLabel,
                        { fontWeight: "bold", fontSize: 16 },
                      ]}
                    >
                      Thanh toán
                    </Text>
                    <Text
                      style={[
                        styles.rowLabel,
                        { fontWeight: "regular", fontSize: 14 },
                      ]}
                    >
                      Ngân hàng
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={[
                        styles.rowLabel,
                        { color: "#515151", fontSize: 12 },
                      ]}
                    >
                      12 Tháng 9, 2024
                    </Text>
                  </View>
                </View>

                <View style={styles.rowSpacer} />
                <View style={{ gap: 25, alignItems: "flex-end" }}>
                  <Text
                    style={[
                      styles.rowLabel,
                      { fontWeight: "bold", fontSize: 16 },
                    ]}
                  >
                    -35.000đ
                  </Text>
                  <Text
                    style={[
                      styles.rowLabel,
                      { fontWeight: "bold", fontSize: 16, color: "#F25843" },
                    ]}
                  >
                    Thất bại
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tháng 8</Text>
          <View style={styles.sectionBody}>
            <View style={[styles.rowWrapper, styles.rowFirst]}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
                style={styles.row}
              >
                <View style={[styles.rowIcon]}>
                  <Image source={require("@/assets/icons/bank.png")} />
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <Text
                      style={[
                        styles.rowLabel,
                        { fontWeight: "bold", fontSize: 16 },
                      ]}
                    >
                      Thanh toán
                    </Text>
                    <Text
                      style={[
                        styles.rowLabel,
                        { fontWeight: "regular", fontSize: 14 },
                      ]}
                    >
                      Ngân hàng
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={[
                        styles.rowLabel,
                        { color: "#515151", fontSize: 12 },
                      ]}
                    >
                      12 Tháng 9, 2024
                    </Text>
                  </View>
                </View>

                <View style={styles.rowSpacer} />
                <View style={{ gap: 25, alignItems: "flex-end" }}>
                  <Text
                    style={[
                      styles.rowLabel,
                      { fontWeight: "bold", fontSize: 16 },
                    ]}
                  >
                    -35.000đ
                  </Text>
                  <Text
                    style={[
                      styles.rowLabel,
                      { fontWeight: "bold", fontSize: 16, color: "#FFAB38" },
                    ]}
                  >
                    Đang xử lý
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={[styles.rowWrapper, styles.rowFirst]}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
                style={styles.row}
              >
                <View style={[styles.rowIcon]}>
                  <Image source={require("@/assets/icons/bank.png")} />
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <Text
                      style={[
                        styles.rowLabel,
                        { fontWeight: "bold", fontSize: 16 },
                      ]}
                    >
                      Thanh toán
                    </Text>
                    <Text
                      style={[
                        styles.rowLabel,
                        { fontWeight: "regular", fontSize: 14 },
                      ]}
                    >
                      Ngân hàng
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={[
                        styles.rowLabel,
                        { color: "#515151", fontSize: 12 },
                      ]}
                    >
                      12 Tháng 9, 2024
                    </Text>
                  </View>
                </View>

                <View style={styles.rowSpacer} />
                <View style={{ gap: 25, alignItems: "flex-end" }}>
                  <Text
                    style={[
                      styles.rowLabel,
                      { fontWeight: "bold", fontSize: 16 },
                    ]}
                  >
                    -35.000đ
                  </Text>
                  <Text
                    style={[
                      styles.rowLabel,
                      { fontWeight: "bold", fontSize: 16, color: "#06D6A0" },
                    ]}
                  >
                    Hoàn thành
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={[styles.rowWrapper, styles.rowFirst]}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
                style={styles.row}
              >
                <View style={[styles.rowIcon]}>
                  <Image source={require("@/assets/icons/cacncel.png")} />
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <Text
                      style={[
                        styles.rowLabel,
                        { fontWeight: "bold", fontSize: 16 },
                      ]}
                    >
                      Thanh toán
                    </Text>
                    <Text
                      style={[
                        styles.rowLabel,
                        { fontWeight: "regular", fontSize: 14 },
                      ]}
                    >
                      Ngân hàng
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={[
                        styles.rowLabel,
                        { color: "#515151", fontSize: 12 },
                      ]}
                    >
                      12 Tháng 9, 2024
                    </Text>
                  </View>
                </View>

                <View style={styles.rowSpacer} />
                <View style={{ gap: 25, alignItems: "flex-end" }}>
                  <Text
                    style={[
                      styles.rowLabel,
                      { fontWeight: "bold", fontSize: 16 },
                    ]}
                  >
                    -35.000đ
                  </Text>
                  <Text
                    style={[
                      styles.rowLabel,
                      { fontWeight: "bold", fontSize: 16, color: "#F25843" },
                    ]}
                  >
                    Thất bại
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: 20,
    height: 240,
    overflow: "hidden",
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    margin: 8,
    marginLeft: 12,
    fontWeight: "bold",
    fontSize: 24,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
  },
  imageBackground: {
    resizeMode: "cover",
  },

  iconContainer: {
    marginTop: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    gap: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 12,
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    // Shadow for Android
    elevation: 5,
  },

  icon32: {
    width: 32,
    height: 32,
  },
  featureName: {
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 14,
    color: "#000000",
    marginTop: 12,
  },
  feature: {
    alignItems: "center",
  },
  /** Profile */
  profile: {
    padding: 8,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  profileAvatarWrapper: {
    position: "relative",
  },
  profileAvatar: {
    width: 72,
    height: 72,
    borderRadius: 9999,
  },
  profileAction: {
    position: "absolute",
    right: -4,
    bottom: -10,
    alignItems: "center",
    justifyContent: "center",
    width: 28,
    height: 28,
    borderRadius: 9999,
    backgroundColor: "#007bff",
  },
  profileName: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: "600",
    color: "#030303",
    textAlign: "center",
  },
  profileAddress: {
    marginTop: 5,
    fontSize: 16,
    color: "#000000",
    textAlign: "center",
  },
  /** Content */
  content: {
    // paddingHorizontal: 16,
  },
  contentFooter: {
    marginTop: 24,
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    color: "#a69f9f",
  },
  /** Section */
  section: {
    paddingVertical: 12,
  },
  sectionTitle: {
    margin: 8,
    marginLeft: 12,
    fontSize: 13,
    letterSpacing: 0.33,
    fontWeight: "500",
    color: "#a69f9f",
    textTransform: "uppercase",
  },
  sectionBody: {
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },

  /** Row */
  row: {
    height: 120,
    width: "100%",
    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "flex-start",
    paddingRight: 12,
    paddingTop: 16,
    paddingBottom: 16,
  },
  rowWrapper: {
    paddingLeft: 16,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#f0f0f0",
  },
  rowFirst: {
    // borderTopLeftRadius: 12,
    // borderTopRightRadius: 12,
  },
  rowLabel: {
    fontSize: 16,
    letterSpacing: 0.24,
    color: "#000000",
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  rowValue: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ababab",
    marginRight: 4,
  },
  rowLast: {
    // borderBottomLeftRadius: 12,
    // borderBottomRightRadius: 12,
  },
  rowIcon: {
    // width: 32,
    // height: 32,
    borderRadius: 9999,
    marginRight: 12,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  rowLabelLogout: {
    // width: "100%",
    // textAlign: "center",
    fontWeight: "600",
    color: "#000000",
  },
});
