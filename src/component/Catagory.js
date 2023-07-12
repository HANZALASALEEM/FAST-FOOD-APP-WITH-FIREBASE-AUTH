import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Catagory = () => {
	const DATA = [
		{
			id: 1,
			title: "Burger",
			image: require("../Img/beefpeti.png"),
		},
		{
			id: 2,
			title: "Pizza",
			image: require("../Img/cheezpizza.png"),
		},
		{
			id: 3,
			title: "Fries",
			image: require("../Img/fries.png"),
		},
		{
			id: 4,
			title: "Hot Dogs",
			image: require("../Img/hotdogs.png"),
		},
		{
			id: 5,
			title: "Soup",
			image: require("../Img/soup.png"),
		},
	];

	const navigation = useNavigation();
	return (
		<View>
			<View style={{ alignItems: "center" }}>
				<Text style={{ fontSize: 20 }}>Catagories</Text>
				<TouchableOpacity
					style={{
						backgroundColor: "#008000",
						width: "80%",
						height: 40,
						alignItems: "center",
						justifyContent: "center",
					}}
					onPress={() => navigation.navigate("Add Catagory")}
				>
					<Text style={{ color: "white" }}>Add New Catagory</Text>
				</TouchableOpacity>
			</View>
			<ScrollView horizontal style={{ height: 200, marginVertical: 10 }}>
				{DATA.map((item, key) => (
					<TouchableOpacity
						key={item.id}
						style={styles.item}
						onPress={() => navigation.navigate("Detail")}
					>
						<Image source={item.image} style={styles.imgHorizontal} />
						<Text>{item.title}</Text>
					</TouchableOpacity>
				))}
				{/* <View style={styles.item}>
					<Image
						source={require("../Img/beefpeti.png")}
						style={styles.imgHorizontal}
					/>
					<Text>Beef Peti</Text>
				</View> */}
			</ScrollView>
		</View>
	);
};

export default Catagory;

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
	imgHorizontal: {
		width: 150,
		height: 110,
		margin: 10,
	},
});
