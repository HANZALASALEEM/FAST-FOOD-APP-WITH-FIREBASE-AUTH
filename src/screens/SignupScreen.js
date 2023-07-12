import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity,
	Image,
} from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/Index";

const SignupScreen = ({ navigation }) => {
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);

	const signup = () => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				navigation.replace("Home");
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				alert(error.message);
			});
	};

	return (
		<SafeAreaView>
			{/* Image */}
			<View style={styles.imgContainer}>
				<Image source={require("../Img/welcome.png")} style={styles.img} />
				<Text style={styles.imgText}>SignUp Here</Text>
			</View>
			{/* Input */}
			<View style={styles.inputContainer}>
				<TextInput
					label="E-mail"
					mode="outlined"
					style={{ marginVertical: 5 }}
					onChangeText={(text) => {
						setEmail(text);
					}}
				/>
				<TextInput
					label="Password"
					mode="outlined"
					style={{ marginVertical: 5 }}
					onChangeText={(text) => {
						setPassword(text);
					}}
				/>
			</View>
			{/* Button */}
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-evenly",
					marginVertical: 10,
				}}
			>
				<TouchableOpacity style={styles.registerBtn} onPress={() => signup()}>
					<Text style={{ fontSize: 18, fontWeight: "500" }}>Sign Up</Text>
				</TouchableOpacity>
			</View>
			{/* <Button
				title="Go to Home"
				type="outline"
				onPress={() => navigation.navigate("Home")}
			/> */}
		</SafeAreaView>
	);
};

export default SignupScreen;

const styles = StyleSheet.create({
	img: {
		width: 300,
		height: 300,
	},
	imgContainer: {
		alignItems: "center",
		justifyContent: "center",
	},
	imgText: {
		fontSize: 22,
		fontWeight: "500",
		marginVertical: 10,
	},
	inputContainer: {
		margin: 10,
	},
	loginBtn: {
		backgroundColor: "#4361ee",
		width: 140,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 15,
	},
	registerBtn: {
		backgroundColor: "#38b000",
		width: 140,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 15,
	},
});
