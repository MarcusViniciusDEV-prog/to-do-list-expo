import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

type Props = {
  onLogin: () => void;
};

export default function LoginScreen({ onLogin }: Props) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <KeyboardAvoidingView
      style={styles.tela}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={styles.titulo}>Entrar</Text>

      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputBox}>
        <TextInput
          style={[styles.input, { paddingRight: 48 }]}
          placeholder="Senha"
          placeholderTextColor="#aaa"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={!mostrarSenha}
        />
        <TouchableOpacity
          style={styles.olho}
          onPress={() => setMostrarSenha(!mostrarSenha)}
        >
          <Text style={styles.olhoTexto}>{mostrarSenha ? "👁" : "🙈"}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.linkEsqueceu}>
        <Text style={styles.linkTexto}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <Text style={styles.ou}>ou</Text>

      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.socialBtn}>
          <Text style={styles.socialTexto}>🔵 Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn}>
          <Text style={styles.socialTexto}>🔴 Google</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btnLogin} onPress={onLogin}>
        <Text style={styles.btnLoginTexto}>Log In</Text>
      </TouchableOpacity>

      <View style={styles.cadastroRow}>
        <Text style={styles.cadastroTexto}>Não tem uma conta? </Text>
        <TouchableOpacity>
          <Text style={styles.cadastroLink}>Crie uma</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.logoArea}>
        <Image
          source={require("../assets/logo.png")}
          style={styles.logoImg}
          resizeMode="contain"
        />
        <Text style={styles.logoNome}>2do-List</Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingTop: 80,
    alignItems: "center",
  },
  titulo: {
    fontSize: 30,
    fontWeight: "700",
    color: "#4a90d9",
    marginBottom: 36,
  },
  inputBox: {
    width: "100%",
    marginBottom: 16,
    position: "relative",
  },
  input: {
    width: "100%",
    borderWidth: 1.5,
    borderColor: "#4a90d9",
    borderRadius: 10,
    padding: 14,
    fontSize: 15,
    color: "#333",
  },
  olho: {
    position: "absolute",
    right: 14,
    top: 14,
  },
  olhoTexto: {
    fontSize: 18,
  },
  linkEsqueceu: {
    alignSelf: "flex-end",
    marginBottom: 18,
  },
  linkTexto: {
    fontSize: 12,
    color: "#888",
  },
  ou: {
    color: "#aaa",
    fontSize: 13,
    marginBottom: 16,
  },
  socialRow: {
    flexDirection: "row",
    gap: 40,
    marginBottom: 28,
  },
  socialBtn: {
    padding: 6,
  },
  socialTexto: {
    fontSize: 15,
    color: "#555",
  },
  btnLogin: {
    width: "100%",
    backgroundColor: "#4a90d9",
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 18,
  },
  btnLoginTexto: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
  cadastroRow: {
    flexDirection: "row",
    marginBottom: 30,
  },
  cadastroTexto: {
    fontSize: 13,
    color: "#888",
  },
  cadastroLink: {
    fontSize: 13,
    color: "#4a90d9",
  },
  logoArea: {
    marginTop: "auto",
    alignItems: "center",
    paddingBottom: 30,
    gap: 6,
  },
  logoImg: {
    width: 72,
    height: 72,
  },
  logoNome: {
    fontSize: 14,
    color: "#444",
    fontWeight: "500",
  },
});