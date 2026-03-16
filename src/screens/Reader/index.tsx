import { Button } from "@/src/components/Button";
import { getChapterVerses } from "@/src/database/functions";
import { Verse } from "@/src/database/types";
import { useSettings } from "@/src/context/SettingsContext";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

export function Reader() {
  const { book_name, book_id, chapter } = useLocalSearchParams<{
    book_name: string,
    book_id: string,
    chapter: string
  }>();

  const { bibleVersion, fontSize } = useSettings();

  const [verses, setVerses] = useState<Verse[]>([]);

  useEffect
    (() => {
      async function fetchVerses() {
        const verses = await getChapterVerses(Number(book_id), Number(chapter), bibleVersion);
        setVerses(verses);
      }
      fetchVerses();
    }, [book_id, chapter, bibleVersion])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navigation}>
        <Button.Root onPress={() => router.replace({
          pathname: "/"
        })}>
          <Button.Text>{book_name}</Button.Text>
        </Button.Root>
        <Button.Root onPress={() => router.replace({
          pathname: "/chapters",
          params: {
            book_id,
            book_name
          }
        })}>
          <Button.Text>Capítulo {chapter}</Button.Text>
        </Button.Root>
      </View>
      <FlatList
        data={verses}
        keyExtractor={item => item.verse.toString()}
        renderItem={({ item }) => (
          <View style={styles.verseContainer}>
            <Text style={[styles.verse, { fontSize: fontSize * 0.6 }]}>
              {item.verse}
            </Text>
            <Text style={[styles.text, { fontSize }]}>
              {item.text}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  )
}