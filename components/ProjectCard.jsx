import { View, Text, Image } from "react-native";

export default function ProjectCard({ image, name }) {
    return (
      <View>
        <Image
          source={image}
          style={{ height: 100, aspectRatio: 16 / 9, borderRadius: 10 }}
        />
        <Text
          style={{
            fontWeight: "bold",
            alignItems: "center",
            fontSize: 16,
            marginVertical: 5,
            color: "dimgray",
          }}
        >
          {name}
        </Text>
      </View>
    );
  }



