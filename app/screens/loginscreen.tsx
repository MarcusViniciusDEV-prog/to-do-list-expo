import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, KeyboardAvoidingView, Platform } from "react-native"
import { SymbolView } from "expo-symbols"

export default function Login({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [verSenha, setVerSenha] = useState(false)

  return (
    <KeyboardAvoidingView style={s.tela} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Text style={s.titulo}>Entrar</Text>

      <View style={s.campo}>
        <TextInput
          style={s.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={s.campo}>
        <TextInput
          style={[s.input, { paddingRight: 48 }]}
          placeholder="Senha"
          placeholderTextColor="#aaa"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={!verSenha}
        />
        <TouchableOpacity style={s.olho} onPress={() => setVerSenha(!verSenha)}>
          <SymbolView
            name={verSenha
              ? { ios: "eye", android: "visibility", web: "visibility" }
              : { ios: "eye.slash", android: "visibility_off", web: "visibility_off" }}
            size={22}
            tintColor="#aaa"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={s.linkEsqueceu}>
        <Text style={{ fontSize: 12, color: "#888" }}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <Text style={s.ou}>ou</Text>

      <View style={s.socialRow}>
        <TouchableOpacity style={s.socialBtn}>
          <Image source={require("../assets/google.png")} style={s.socialIcon} resizeMode="contain" />
          <Text style={s.socialLabel}>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={s.socialBtn}>
          <Image source={require("../assets/facebook.png")} style={s.socialIcon} resizeMode="contain" />
          <Text style={s.socialLabel}>Facebook</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={s.btnEntrar} onPress={onLogin}>
        <Text style={{ color: "#fff", fontSize: 17, fontWeight: "600" }}>Log In</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", marginBottom: 30 }}>
        <Text style={{ fontSize: 13, color: "#888" }}>Não tem uma conta? </Text>
        <TouchableOpacity>
          <Text style={{ fontSize: 13, color: "#0079E3" }}>Crie uma</Text>
        </TouchableOpacity>
      </View>

      <View style={s.logo}>
        <Image source={require("../assets/logo.png")} style={{ width: 110, height: 110 }} resizeMode="contain" />
      </View>
    </KeyboardAvoidingView>
  )
}

const s = StyleSheet.create({
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
    color: "#0079E3",
    marginBottom: 36,
  },
  campo: {
    width: "100%",
    marginBottom: 16,
    position: "relative",
  },
  input: {
    width: "100%",
    borderWidth: 1.5,
    borderColor: "#0079E3",
    borderRadius: 10,
    padding: 14,
    fontSize: 15,
    color: "#333",
  },
  olho: {
    position: "absolute",
    right: 14,
    top: 13,
  },
  linkEsqueceu: {
    alignSelf: "flex-end",
    marginBottom: 22,
  },
  ou: {
    color: "#aaa",
    fontSize: 13,
    marginBottom: 16,
  },
  socialRow: {
    flexDirection: "row",
    gap: 14,
    marginBottom: 28,
    width: "100%",
  },
  socialBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 13,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#e0e0e0",
    backgroundColor: "#fff",
  },
  socialIcon: {
    width: 20,
    height: 20,
  },
  socialLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  btnEntrar: {
    width: "100%",
    backgroundColor: "#0079E3",
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 18,
  },
  logo: {
    marginTop: "auto",
    paddingBottom: 30,
  },
})
