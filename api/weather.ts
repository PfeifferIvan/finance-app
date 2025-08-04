import { WEATHER_CONDITIONS } from "@/constants/weather_conditions";
import axios from "axios";
import Constants from "expo-constants";

const WEATHER_KEY = Constants.expoConfig?.extra?.WEATHER_KEY;

export interface WeatherResponse {
  current: {
    temp_c: number;
    condition: {
      code: number;
    };
  };
}

export async function getWeather(city: string): Promise<WeatherResponse> {
  const { data } = await axios.get(
    `https://api.weatherapi.com/v1/current.json`,
    {
      params: { q: city, key: WEATHER_KEY },
    }
  );
  return data;
}

export function getIconName(code: number | undefined): string {
  const conditionResult = WEATHER_CONDITIONS.find(
    (condition) => condition.code === code
  );
  return conditionResult !== undefined
    ? conditionResult.icon.toString()
    : "weather-cloudy-clock";
}
