import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import {
	collection,
	addDoc,
	setDoc,
	doc,
	getDoc,
	updateDoc,
	deleteDoc,
} from "firebase/firestore";
import { auth, db } from "../firebase/Index";

const ProfileScreen = () => {
	const [name, setName] = useState(null);
	const [phone, setPhone] = useState(null);
	const [address, setAddress] = useState(null);

	useEffect(() => {
		const readData = async () => {
			const docRef = doc(db, "User", auth.currentUser.uid);
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				setName(docSnap.data().Name);
				setPhone(docSnap.data().Phone);
				setAddress(docSnap.data().Address);
			}
		};
		readData();
	}, []);

	const save = async () => {
		await setDoc(doc(db, "User", auth.currentUser.uid), {
			Name: name,
			Phone: phone,
			Address: address,
		});
	};

	const update = async () => {
		const washingtonRef = doc(db, "User", auth.currentUser.uid);

		// Set the "capital" field of the city 'DC'
		await updateDoc(washingtonRef, {
			Name: name,
			Phone: phone,
			Address: address,
		});
	};

	const deleteInfo = async () => {
		await deleteDoc(doc(db, "User", auth.currentUser.uid));
		setName(null);
		setPhone(null);
		setAddress(null);
	};

	return (
		<View>
			<TextInput
				style={{ margin: 10 }}
				label="Name"
				onChangeText={(text) => setName(text)}
				mode="outlined"
				value={name}
			/>
			<TextInput
				style={{ margin: 10 }}
				label="Phone"
				onChangeText={(text) => setPhone(text)}
				mode="outlined"
				value={phone}
			/>
			<TextInput
				style={{ margin: 10 }}
				label="Address"
				onChangeText={(text) => setAddress(text)}
				mode="outlined"
				value={address}
			/>
			<View style={{ alignItems: "center", marginTop: 20 }}>
				{address === null && (
					<TouchableOpacity
						style={{
							backgroundColor: "#38b000",
							width: 140,
							height: 50,
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 15,
						}}
						onPress={() => save()}
					>
						<Text>Save</Text>
					</TouchableOpacity>
				)}
				{address !== null && (
					<TouchableOpacity
						style={{
							backgroundColor: "#38b000",
							width: 140,
							height: 50,
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 15,
						}}
						onPress={() => save()}
					>
						<Text>Update</Text>
					</TouchableOpacity>
				)}
				<TouchableOpacity
					style={{
						backgroundColor: "#d90429",
						width: 140,
						height: 50,
						justifyContent: "center",
						alignItems: "center",
						borderRadius: 15,

						marginTop: 20,
					}}
					onPress={() => deleteInfo()}
				>
					<Text>Delete</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default ProfileScreen;

const styles = StyleSheet.create({});
