import { useRouter } from "expo-router";
import LoginScreen from "../screens/loginscreen";

export default function Index() {
  const router = useRouter();
  return <LoginScreen onLogin={() => router.replace("/screens/homescreen")} />;
}
