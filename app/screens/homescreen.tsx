import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

type Item = {
  id: string
  texto: string
  feita: boolean
}

const dataHoje = new Date().toLocaleDateString("pt-BR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
})

export default function Home() {
  const [lista, setLista] = useState<Item[]>([])
  const [texto, setTexto] = useState("")

  function adicionar() {
    if (!texto.trim()) return
    setLista([...lista, { id: Date.now().toString(), texto: texto.trim(), feita: false }])
    setTexto("")
  }

  function toggle(id: string) {
    setLista(lista.map(i => i.id === id ? { ...i, feita: !i.feita } : i))
  }

  function deletar(id: string) {
    setLista(lista.filter(i => i.id !== id))
  }

  return (
    <SafeAreaView style={s.tela}>
      <View style={s.header}>
        <Text style={{ fontSize: 22, color: "#333" }}>☰</Text>
        <Text style={{ fontSize: 14, color: "#333" }}>
          <Text style={{ color: "#aaa", fontSize: 13 }}>Hoje </Text>
          {dataHoje}
        </Text>
      </View>

      <Text style={s.titulo}>Lista de compras</Text>

      <View style={s.banner}>
        <Text style={s.bannerTxt}>
          Bem-vindo, aqui está sua{"\n"}lista de compras de hoje
        </Text>
      </View>

      <View style={s.inputRow}>
        <TextInput
          style={s.input}
          placeholder="Adicione aqui suas tarefas..."
          placeholderTextColor="#66b2f0"
          value={texto}
          onChangeText={setTexto}
          onSubmitEditing={adicionar}
        />
        <TouchableOpacity style={s.btnAdd} onPress={adicionar}>
          <Text style={{ color: "#333", fontSize: 26, lineHeight: 30 }}>+</Text>
        </TouchableOpacity>
      </View>

      {lista.length > 0 && (
        <Text style={s.totalTxt}>Total de itens - {lista.length}</Text>
      )}

      {lista.length === 0 ? (
        <View style={s.vazio}>
          <Text style={s.vazioTxt}>Sua lista de compras{"\n"}está vazia...</Text>
          <Image source={require("../assets/empty-box.png")} style={s.vazioImg} resizeMode="contain" />
        </View>
      ) : (
        <FlatList
          data={lista}
          keyExtractor={i => i.id}
          style={{ flex: 1, paddingHorizontal: 20 }}
          renderItem={({ item }) => (
            <View style={s.itemRow}>
              <TouchableOpacity style={{ marginRight: 14 }} onPress={() => toggle(item.id)}>
                {item.feita ? (
                  <View style={s.check}>
                    <Text style={{ color: "#fff", fontSize: 14, fontWeight: "bold" }}>✓</Text>
                  </View>
                ) : (
                  <View style={s.circulo} />
                )}
              </TouchableOpacity>

              <Text style={[s.itemTxt, item.feita && s.itemFeito]}>{item.texto}</Text>

              <TouchableOpacity onPress={() => deletar(item.id)}>
                <Text style={{ fontSize: 20, color: "#e07030" }}>🗑</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      <View style={s.navbar}>
        <TouchableOpacity style={{ padding: 4 }}>
          <Text style={{ fontSize: 26 }}>📋</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 4 }}>
          <Text style={{ fontSize: 26 }}>👤</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const s = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 16,
    gap: 12,
    marginBottom: 8,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "700",
    color: "#0079E3",
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  banner: {
    marginHorizontal: 20,
    backgroundColor: "#0079E3",
    borderRadius: 14,
    padding: 20,
    marginBottom: 20,
  },
  bannerTxt: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
  },
  inputRow: {
    flexDirection: "row",
    marginHorizontal: 20,
    gap: 10,
    marginBottom: 14,
  },
  input: {
    flex: 1,
    backgroundColor: "#e0f0fc",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: "#333",
  },
  btnAdd: {
    backgroundColor: "#fff",
    width: 46,
    height: 46,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  totalTxt: {
    paddingHorizontal: 20,
    fontSize: 14,
    fontWeight: "600",
    color: "#0079E3",
    marginBottom: 10,
  },
  vazio: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 40,
  },
  vazioTxt: {
    fontSize: 20,
    fontWeight: "700",
    color: "#555",
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 28,
  },
  vazioImg: {
    width: 120,
    height: 120,
    opacity: 0.5,
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  check: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#4cd964",
    alignItems: "center",
    justifyContent: "center",
  },
  circulo: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 2,
    borderColor: "#f0c040",
  },
  itemTxt: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  itemFeito: {
    textDecorationLine: "line-through",
    color: "#aaa",
  },
  navbar: {
    flexDirection: "row",
    backgroundColor: "#3461FD",
    paddingVertical: 14,
    justifyContent: "space-around",
  },
})
