import { getAllBooks } from "@/src/database/functions";
import { Book } from "@/src/database/types";
import { useSettings } from "@/src/context/SettingsContext";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "./styles";

export function Books() {
  const [books, setBooks] = useState<Book[]>([]);
  const { bibleVersion, fontSize } = useSettings();

  useEffect(() => {
    async function fetchBooks() {
      const books = await getAllBooks(bibleVersion);
      setBooks(books);
    }

    fetchBooks();
  }, [bibleVersion])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerSpacer} />
        <Text
          style={[styles.screenTitle, { fontSize: fontSize * 1.4 }]}
          numberOfLines={1}
        >
          Selecione o Livro
        </Text>
        <TouchableOpacity
          style={styles.settingsButton}
          onPress={() => router.push("/settings")}
          activeOpacity={0.7}
        >
          <Ionicons name="settings" size={28} color="#F8F8F2" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={books}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View>
              <Text
                style={[styles.bookTitle, { fontSize }]}
                onPress={() => router.push({
                  pathname: "/chapters",
                  params: {
                    book_id: item.id,
                    book_name: item.name
                  }
                })}
              >
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  )
}