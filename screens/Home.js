import React from 'react';
import { View,Text,TouchableOpacity, Image, SafeAreaView, TextInput, FlatList } from 'react-native';
import { FONTS, COLORS, SIZES, icons, dummyData } from '../constants';


const Home = ({ navigation }) => {
    return (
        <SafeAreaView
            style={{
                flex:1,
                backgroundColor: COLORS.white
            }}
        >
            <FlatList
                data={dummyData.categories}
                keyExtractor={item => `${item.id}`}
                keyboardDismissMode='on-drag'
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>

                    </View>
                }
                renderItem={({item}) => {
                    return(
                        <View>
                            <Text>{item.name}</Text>
                        </View>
                    )
                }}
                ListFooterComponent={
                    <View
                        style={{marginBottom: 100}}
                    />
                }
            />
        </SafeAreaView>
    )
}

export default Home;