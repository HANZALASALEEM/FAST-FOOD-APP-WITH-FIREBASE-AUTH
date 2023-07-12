import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useState } from "react";

const DetailScreen = () => {
	const [amount, setAmount] = useState(0);
	return (
		<View style={styles.container}>
			<Image source={require("../Img/beefpeti.png")} style={styles.img} />
			<Text style={styles.title}>Beef Peti Burger</Text>
			<Text style={styles.description}>
				Hamburgers are served with cheese, lettuce, tomato, onion, pickles,
				bacon, or chilis; condiments such as ketchup, mustard, mayonnaise,
				relish, or a "special sauce"
			</Text>
			<View style={{ flexDirection: "row", marginLeft: 20 }}>
				<Text style={styles.price}>Price : </Text>
				<Text style={[styles.price, { color: "green" }]}>$2.5</Text>
			</View>
			<View
				style={{
					flexDirection: "row",
					marginLeft: 20,
					justifyContent: "space-between",
					width: "90%",
					marginVertical: 10,
				}}
			>
				<Text>Order Amount : </Text>
				<TouchableOpacity
					style={styles.amountBtn}
					onPress={() => {
						setAmount(amount - 1);
					}}
				>
					<Text>-</Text>
				</TouchableOpacity>
				<Text>{amount}</Text>
				<TouchableOpacity
					style={styles.amountBtn}
					onPress={() => {
						setAmount(amount + 1);
					}}
				>
					<Text>+</Text>
				</TouchableOpacity>
			</View>
			<TouchableOpacity style={styles.orderBtn}>
				<Text style={styles.orderBtnText}>Order</Text>
			</TouchableOpacity>
		</View>
	);
};

export default DetailScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	img: {
		width: "90%",
		height: 300,
		alignSelf: "center",
	},
	title: {
		fontSize: 22,
		paddingLeft: 20,
	},
	description: {
		width: "90%",
		textAlign: "center",
		alignSelf: "center",
		marginVertical: 10,
	},
	price: {
		fontSize: 18,
	},
	amountBtn: {
		borderWidth: 1,
		borderRadius: 5,
		width: 20,
		alignItems: "center",
		justifyContent: "center",
	},
	orderBtn: {
		width: "70%",
		alignSelf: "center",
		backgroundColor: "green",
		height: 50,
		marginVertical: 10,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 20,
	},
	orderBtnText: {
		fontSize: 18,
	},
});
