import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-cloudy",
        gradient: ["#bdc3c7", "#2c3e50"]
    }, 
    Drizzle: {
        iconName: "weather-cloudy",
        gradient: ["#bdc3c7", "#2c3e50"]
    }, 
    Rain: {
        iconName: "weather-cloudy",
        gradient: ["#bdc3c7", "#2c3e50"]
    }, 
    Snow: {
        iconName: "weather-cloudy",
        gradient: ["#bdc3c7", "#2c3e50"]
    }, 
    Atmosphere: {
        iconName: "weather-cloudy",
        gradient: ["#bdc3c7", "#2c3e50"]
    }, 
    Clear: {
        iconName: "weather-cloudy",
        gradient: ["#bdc3c7", "#2c3e50"]
    }, 
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "Cloudy",
        subtitle: "It's cloudy!!!"
    }, 
    Mist: {
        iconName: "weather-cloudy",
        gradient: ["#bdc3c7", "#2c3e50"]
    }, 
    Smoke: {
        iconName: "weather-cloudy",
        gradient: ["#bdc3c7", "#2c3e50"]
    }, 
    Haze: {
        iconName: "weather-cloudy",
        gradient: ["#bdc3c7", "#2c3e50"]
    }, 
    Dust: {
        iconName: "weather-cloudy",
        gradient: ["#bdc3c7", "#2c3e50"]
    }, 
    Fog: {
        iconName: "weather-cloudy",
        gradient: ["#bdc3c7", "#2c3e50"]
    }, 
    Sand: {
        iconName: "weather-cloudy",
        gradient: ["#bdc3c7", "#2c3e50"]
    }, 
    Dust: {
        iconName: "weather-cloudy",
        gradient: ["#bdc3c7", "#2c3e50"]
    }, 
    Ash: {
        iconName: "weather-cloudy",
        gradient: ["#bdc3c7", "#2c3e50"]
    }, 
    Squall: {
        iconName: "weather-cloudy",
        gradient: ["#bdc3c7", "#2c3e50"]
    }, 
    Tornado: {
        iconName: "weather-cloudy",
        gradient: ["#bdc3c7", "#2c3e50"]
    }
}

export default function Weather({temp, condition}) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >   
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    name= {weatherOptions[condition].iconName}
                    size={96} 
                    color="white" />
                <Text style={styles.temp}>{temp}o</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
        );
}

Weather.PropTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds", "Mist", "Smoke", "Haze", "Dust", "Fog", "Sand", "Dust", "Ash", "Squall", "Tornado" ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 54,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        fontSize: 24,
        fontWeight: "600",
        color: "white"
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
})
