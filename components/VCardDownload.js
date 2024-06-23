import React from "react";
import { Button, Linking, StyleSheet, View } from "react-native";
import RNFS from "react-native-fs";

const downloadVCard = () => {
  const vCard = `BEGIN:VCARD
VERSION:3.0
FN:Francesco Piscani
ORG:InSci Bioscience
TITLE:Co-Founder
TEL;TYPE=work,voice:123456789
EMAIL:fpiscani@gmail.com
END:VCARD`;

  const path = `${RNFS.DocumentDirectoryPath}/contact.vcf`;

  RNFS.writeFile(path, vCard, "utf8")
    .then(() => {
      Linking.openURL(`file://${path}`);
    })
    .catch((error) => console.error(error));
};

const VCardDownload = () => {
  return (
    <View style={styles.container}>
      <Button title="Download Contact" onPress={downloadVCard} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    alignItems: "center",
  },
});

export default VCardDownload;
