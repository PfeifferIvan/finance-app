import { Stack } from "expo-router";

function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "transparent" },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen
        name="TransactionFormScreen"
        options={{ presentation: "modal", headerShown: true }}
      />
    </Stack>
  );
}

export default HomeLayout;
