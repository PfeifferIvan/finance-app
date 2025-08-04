import { getIconName, getWeather, WeatherResponse } from "@/api/weather";
import Colors from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Weather() {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await getWeather("Sayavedra");
        // console.log(JSON.stringify(response, null, 2));
        setWeather(response);
      } catch (e) {
        console.error(e);
      }
    };
    fetchWeather();
  }, []);

  const temperature = !weather ? "---" : weather.current.temp_c;
  const weatherIcon = getIconName(
    weather?.current.condition.code
  ) as keyof typeof MaterialCommunityIcons.glyphMap;

  return (
    <View style={styles.weatherContainer}>
      <MaterialCommunityIcons
        name={weatherIcon}
        size={18}
        color={Colors.text}
      />
      <Text style={{ color: Colors.text, marginHorizontal: 12, fontSize: 16 }}>
        {temperature.toString().split(".")[0]}°C
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    flexDirection: "row",
  },
});
