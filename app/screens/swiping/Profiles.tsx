import React, { useCallback, useRef, useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, } from "react-native";

import { RectButton } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";

import { ProfileModel } from "./Profile";
import Swipeable, { SwipeHandler } from "./Swipeable";


interface ProfilesProps {
  profiles: ProfileModel[];
}

const Profiles = ({ profiles: defaultProfiles }: ProfilesProps) => {

  const topCard = useRef<SwipeHandler>(null);
  const scale = useSharedValue(0);
  const [profiles, setProfiles] = useState(defaultProfiles);
  const onSwipe = useCallback(() => {
    setProfiles(profiles.slice(0, profiles.length - 1));
  }, [profiles]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cards}>
        { profiles.map((profile, index) => {

            const onTop = index === profiles.length - 1;
            const ref = onTop ? topCard : null;

            return (
              <Swipeable
                ref={ref}
                key={profile.id}
                profile={profile}
                scale={scale}
                onSwipe={onSwipe}
                onTop={onTop}
              />
            );

        })}
      </View>
      <View style={styles.footer}>
        <RectButton
          style={styles.circle}
          onPress={() => topCard.current?.swipeLeft() }
        >
          <Text style={{ fontSize: 32, color: "#ec5288", fontWeight: "bold", }}>Nope</Text>
        </RectButton>
        <RectButton
          style={styles.circle}
          onPress={() => topCard.current?.swipeRight() }
        >
          <Text style={{ fontSize: 32,  color: "#6ee3b4", fontWeight: "bold",}}>Like</Text>
        </RectButton>
      </View>
    </SafeAreaView>
  );
};

export default Profiles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: "space-evenly",
    paddingTop:20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  cards: {
    flex: 1,
    marginHorizontal: 16,
    zIndex: 100,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 16,
  },
  circle: {
    height: 64,
    borderRadius: 32,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "gray",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 2,
  },
});
