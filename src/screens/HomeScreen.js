import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Image,
	TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import Catagory from "../component/Catagory";
import { AntDesign } from "@expo/vector-icons";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/Index";
import { FontAwesome } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
	useEffect(() => {
		// Use `setOptions` to update the button that we previously specified
		// Now the button includes an `onPress` handler to update the count
		navigation.setOptions({
			headerRight: () => (
				<TouchableOpacity style={{ marginRight: 10 }} onPress={() => logOut()}>
					<AntDesign name="logout" size={24} color="black" />
				</TouchableOpacity>
			),
			headerLeft: () => (
				<TouchableOpacity
					style={{ marginLeft: 10 }}
					onPress={() => navigation.navigate("Profile")}
				>
					<FontAwesome name="user" size={28} color="black" />
				</TouchableOpacity>
			),
		});

		const logOut = () => {
			signOut(auth)
				.then(() => {
					// Sign-out successful.
					navigation.replace("Login");
				})
				.catch((error) => {
					// An error happened.
					alert(error);
				});
		};
	}, []);
	return (
		<View>
			<Catagory />
			<ScrollView style={{ marginVertical: 5 }}>
				<View style={styles.item}>
					<Image
						source={require("../Img/zingerburger.png")}
						style={styles.imgVertical}
					/>
					<Text>Chicken Zinger Burger</Text>
				</View>
				<View style={styles.item}>
					<Image
						source={require("../Img/fries.png")}
						style={styles.imgVertical}
					/>
					<Text>Fries</Text>
				</View>
				<View style={styles.item}>
					<Image
						source={require("../Img/hotdogs.png")}
						style={styles.imgVertical}
					/>
					<Text>Hot Dogs</Text>
				</View>
				<View style={styles.item}>
					<Image
						source={require("../Img/beefhotdogs.png")}
						style={styles.imgVertical}
					/>
					<Text>Beef Hot Dogs</Text>
				</View>
				<View style={styles.item}>
					<Image
						source={require("../Img/soup.png")}
						style={styles.imgVertical}
					/>
					<Text>Soup</Text>
				</View>
			</ScrollView>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	item: {
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 20,
		borderColor: "black",
		borderWidth: 1,
		margin: 5,
		padding: 10,
	},
	imgVertical: {
		width: 200,
		height: 200,
		margin: 10,
	},
});
