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
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import Button from "@/components/ui/Button";
import tw from "twrnc";
export default function AccountScreen() {
  const [form, setForm] = useState({
    darkMode: false,
    emailNotifications: true,
    pushNotifications: false,
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      {/* <SafeAreaView> */}
      <ImageBackground
        source={require("@/assets/account-bg.png")}
        style={[
          styles.profile,
          {
            paddingTop:
              Platform.OS === "android" ? StatusBar.currentHeight + 20 : 0,
          },
        ]}
        imageStyle={{ resizeMode: "cover" }}
      >
        <TouchableOpacity
          onPress={() => {
            // handle onPress
          }}
        >
          <View style={styles.profileAvatarWrapper}>
            <Image
              alt=""
              source={{
                uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
              }}
              style={styles.profileAvatar}
            />

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
            >
              <View style={styles.profileAction}>
                <FeatherIcon color="#fff" name="edit-3" size={15} />
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <View>
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileAddress}>+ 034 8104 802</Text>

          <Text style={styles.profileAddress}>
            Đặt 1 câu miêu tả bản thân tại đây...
          </Text>
          <TouchableOpacity
            style={[tw`py-3 my-4 rounded-xl bg-[#4E96F1] `]}
            onPress={() => console.log("Hội viên")}
          >
            <Text style={[tw`text-center font-medium text-lg text-[#FFFFFF]`]}>
              Hội viên: Diamond
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      {/* </SafeAreaView> */}

      <ScrollView contentContainerStyle={[styles.content]}>
        <View style={styles.section}>
          {/* <Text style={styles.sectionTitle}>Preferences</Text> */}
          <View style={styles.sectionBody}>
            <View style={[styles.rowWrapper, styles.rowFirst]}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
                style={styles.row}
              >
                <View style={[styles.rowIcon]}>
                  <Image source={require("@/assets/icons/buddybike.png")} />
                </View>
                <Text style={styles.rowLabel}>Trở thành tài xế BuddyBike</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rowWrapper}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
                style={styles.row}
              >
                <View style={[styles.rowIcon]}>
                  <Image source={require("@/assets/icons/diamond.png")} />
                </View>
                <Text style={styles.rowLabel}>Thông tin hạng hội viên</Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.rowWrapper, styles.rowLast]}>
              <View style={styles.row}>
                <View style={[styles.rowIcon]}>
                  <Image source={require("@/assets/icons/diamond1.png")} />
                </View>
                <Text style={styles.rowLabel}>Gói hội viên</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          {/* <Text style={styles.sectionTitle}>Resources</Text> */}
          <View style={styles.sectionBody}>
            <View style={[styles.rowWrapper, styles.rowFirst]}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
                style={styles.row}
              >
                <View style={[styles.rowIcon]}>
                  <Image source={require("@/assets/icons/voucher.png")} />
                </View>
                <Text style={styles.rowLabel}>Voucher</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          {/* <Text style={styles.sectionTitle}>Preferences</Text> */}
          <View style={styles.sectionBody}>
            <View style={[styles.rowWrapper, styles.rowFirst]}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
                style={styles.row}
              >
                <View style={[styles.rowIcon]}>
                  <Image source={require("@/assets/icons/privacy.png")} />
                </View>
                <Text style={styles.rowLabel}>Điều khoản & Chính sách</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rowWrapper}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
                style={styles.row}
              >
                <View style={[styles.rowIcon]}>
                  <Image source={require("@/assets/icons/support.png")} />
                </View>
                <Text style={styles.rowLabel}>Trung tâm hỗ trợ</Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.rowWrapper, styles.rowLast]}>
              <View style={styles.row}>
                <View style={[styles.rowIcon]}>
                  <Image source={require("@/assets/icons/feedback.png")} />
                </View>
                <Text style={styles.rowLabel}>Phản hồi tài xế</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          {/* <Text style={styles.sectionTitle}>Preferences</Text> */}
          <View style={styles.sectionBody}>
            <View style={[styles.rowWrapper, styles.rowFirst]}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
                style={styles.row}
              >
                <View style={[styles.rowIcon]}>
                  <Image source={require("@/assets/icons/lock.png")} />
                </View>
                <Text style={styles.rowLabel}>Thay đổi mật khẩu</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rowWrapper}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
                style={styles.row}
              >
                <View style={[styles.rowIcon]}>
                  <Image source={require("@/assets/icons/language.png")} />
                </View>
                <Text style={styles.rowLabel}>Ngôn ngữ</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <View style={styles.sectionBody}>
            <View
              style={[
                styles.rowWrapper,
                styles.rowFirst,
                styles.rowLast,
                { alignItems: "center" },
              ]}
            >
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
                style={[styles.row, { justifyContent: "center" }]}
              >
                <View style={[styles.rowIcon]}>
                  <Image source={require("@/assets/icons/logout.png")} />
                </View>
                <Text style={[styles.rowLabel, styles.rowLabelLogout]}>
                  Đăng xuất
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    height: 44,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingRight: 12,
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
    width: 32,
    height: 32,
    borderRadius: 9999,
    marginRight: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rowLabelLogout: {
    // width: "100%",
    // textAlign: "center",
    fontWeight: "600",
    color: "#000000",
  },
});
