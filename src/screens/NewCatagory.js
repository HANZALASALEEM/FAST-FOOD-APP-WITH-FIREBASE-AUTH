import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native";
import * as ImagePicker from "expo-image-picker";
const NewCatagory = () => {
	const [name, setName] = useState(null);
	const [price, setPrice] = useState(null);

	const [picture, setPicture] = useState(null);
	const [image, setImage] = useState(null);

	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		console.log(result);

		if (!result.canceled) {
			setImage(result.assets[0].uri);
		}
	};

	useEffect(() => {
		const uploadImage = async () => {};

		if (image !== null) {
			uploadImage();
			setImage(null);
		}
	});
	return (
		<SafeAreaView>
			<TextInput
				value={name}
				label="Enter Catagory Name"
				mode="outlined"
				onChangeText={(text) => setName(text)}
			/>
			<TextInput
				value={price}
				label="Enter Price"
				mode="outlined"
				onChangeText={(text) => setPrice(text)}
			/>
			<View style={{ alignItems: "center", marginTop: 20 }}>
				<TouchableOpacity
					style={{
						backgroundColor: "green",
						width: 140,
						height: 50,
						justifyContent: "center",
						alignItems: "center",
						borderRadius: 15,
					}}
					onPress={() => pickImage()}
				>
					<Text>Choose Image</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default NewCatagory;

const styles = StyleSheet.create({});
