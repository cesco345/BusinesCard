import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    // Handle form submission, e.g., send an email or store in a database
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Your Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Your Message"
        value={message}
        onChangeText={setMessage}
        style={styles.input}
        multiline
      />
      <Button title="Send Message" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    margin: 20,
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    margin: 5,
    borderRadius: 5,
    width: "100%",
  },
});

export default ContactForm;
