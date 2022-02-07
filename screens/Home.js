import React from 'react';
import { View,Text,TouchableOpacity, Image, SafeAreaView, TextInput, FlatList } from 'react-native';
import { FONTS, COLORS, SIZES, icons, dummyData, images } from '../constants';
import { CategoryCard } from '../components';


const Home = ({ navigation }) => {
    function renderHeader(){
        return(
            <View
                style={{
                    flexDirection: 'row',
                    marginHorizontal: SIZES.padding,
                    alignItems: 'center',
                    height:80
                }}
            >
                <View
                    style={{
                        flex:1
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.darkGreen,
                            ...FONTS.h2
                        }}
                    >
                        Hello Programmers,
                    </Text>
                    <Text
                        style={{
                            marginTop:3,
                            color: COLORS.gray,
                            ...FONTS.body3
                        }}
                    >
                        What you to cook today?
                    </Text>
                </View>
                <TouchableOpacity
                        onPress={() => console.log("Profile")}
                    >
                        <Image
                            source={images.profile}
                            style={{
                                width:40,
                                height:40,
                                borderRadius: 20
                            }}
                        />
                    </TouchableOpacity>
            </View>
        )
    }
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
                        {renderHeader()}
                    </View>
                }
                renderItem={({item}) => {
                    return(
                        <CategoryCard
                            containerStyle={{
                                marginHorizontal: SIZES.padding
                            }}
                            categoryItem={item}
                            onPress={() => navigation.navigate("Recipe", {recipe: item})}
                        />
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