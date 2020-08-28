import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface OnboardingProps {
  children: React.ReactNode;
}

const Onboarding = (props: OnboardingProps) => {
  return (
    <View style={styles.test} {...props}>
      <Text />
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  test: { flex: 1, backgroundColor: "cyan" },
});
