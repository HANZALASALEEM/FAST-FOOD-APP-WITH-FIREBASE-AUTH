import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity,
	Image,
} from "react-native";
import React, { useEffect } from "react";
import { TextInput } from "react-native-paper";
import { useState } from "react";
import {
	signInWithEmailAndPassword,
	onAuthStateChanged,
	sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase/Index";

const LoginScreen = ({ navigation }) => {
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				navigation.replace("Home");
				// ...
			}
		});
	}, []);

	const login = () => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				navigation.replace("Home");
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				alert("error");
			});
	};

	const resetPassword = () => {
		if (email != null) {
			sendPasswordResetEmail(auth, email)
				.then(() => {
					// Password reset email sent!
					// ..
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					// ..
				});
		} else {
			alert("Enter a valid email");
		}
	};

	return (
		<SafeAreaView>
			{/* Image */}
			<View style={styles.imgContainer}>
				<Image source={require("../Img/welcome.png")} style={styles.img} />
				<Text style={styles.imgText}>Login Here</Text>
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
				<TouchableOpacity style={styles.loginBtn} onPress={() => login()}>
					<Text style={{ fontSize: 18, fontWeight: "500" }}>Log in</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.registerBtn}
					onPress={() => navigation.replace("Sign up")}
				>
					<Text style={{ fontSize: 18, fontWeight: "500" }}>Sign Up</Text>
				</TouchableOpacity>
			</View>
			<TouchableOpacity style={{ margin: 10 }} onPress={() => resetPassword()}>
				<Text style={{ color: "blue" }}>Forget Password?</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

export default LoginScreen;

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
