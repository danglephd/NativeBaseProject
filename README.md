#Project about Native Base

##Install

	npm install native-base --save
	
##Error	Font

	Dùng AppFontLoader 
	
		async componentWillMount() {
			  await Expo.Font.loadAsync({
				'Roboto': require('native-base/Fonts/Roboto.ttf'),
				'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
				'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
			  });
			  
	