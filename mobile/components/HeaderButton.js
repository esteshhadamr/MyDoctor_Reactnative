import React from 'react';
import { Ionicons } from "@expo/vector-icons";
import { TouchableHighlight, View } from "react-native";

const HeaderButton = ({ iconName, headerPressed, direction }) => {
  const margin = direction === 'left' ? { marginLeft: 20 } : { marginRight: 20 };
  return (
    <TouchableHighlight
      onPress={headerPressed}
    >
      <View style={margin}>
        <Ionicons name={iconName} size={35} color="white" />
      </View>
    </TouchableHighlight >

  );
}

export default HeaderButton;