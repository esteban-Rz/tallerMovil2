import React from 'react'
import { View, StyleSheet, Dimensions } from "react-native";
import { VideoView, useVideoPlayer } from "expo-video";

const { width, height } = Dimensions.get("window");

const BackWalcraft = ({ children }) => {
  const player = useVideoPlayer(require("../assets/back.mp4"), (player) => {
    player.loop = true;
    player.muted = true;
    player.play();
  });

  return (
    <View style={styles.container}>
      <VideoView
        player={player}
        style={styles.backgroundVideo}
        contentFit="cover"
        nativeControls={false}
      />
      <View style={styles.overlay}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundVideo: {
    position: "absolute",
    top:0,
    left: 0,
    width,
    height,
  },
  overlay: {
    flex: 1,
  },
});

export default BackWalcraft;