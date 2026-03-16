import { getBookChapters } from "@/src/database/functions";
import { useSettings } from "@/src/context/SettingsContext";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

export function Chapters() {
  const { book_id, book_name } = useLocalSearchParams<{
    book_id: string,
    book_name: string
  }>();

  const { bibleVersion, fontSize } = useSettings();
  const { width } = useWindowDimensions();

  const [chapters, setChapters] = useState<number>(0);

  useEffect
    (() => {
      async function fetchChapters() {
        const chapters = await getBookChapters(Number(book_id), bibleVersion);
        setChapters(chapters);
      }

      fetchChapters();
    }, [book_id, bibleVersion])

  const chaptersArray = Array.from({ length: chapters }, (_, i) => i + 1);

  const horizontalPadding = 40;
  const itemWidth = 80;
  const itemSpacing = 12;
  const availableWidth = width - horizontalPadding;
  const numColumns = Math.max(
    1,
    Math.floor((availableWidth + itemSpacing) / (itemWidth + itemSpacing))
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={[styles.screenTitle, { fontSize: fontSize * 1.2 }]}>
          {book_name}
        </Text>
      </View>
      <FlatList
        key={`chapters-grid-${numColumns}`}
        data={chaptersArray}
        numColumns={numColumns}
        contentContainerStyle={styles.chaptersScroll}
        columnWrapperStyle={styles.chaptersRow}
        keyExtractor={item => item.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity>
            <View style={[
              styles.chapterContainer,
              (index + 1) % numColumns === 0 && { marginRight: 0 }
            ]}>
              <Text
                style={[styles.bookTitle, { fontSize }]}
                onPress={() => router.replace({
                  pathname: "/reader",
                  params: {
                    book_id,
                    book_name,
                    chapter: item
                  }
                })}
              >
                {item}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  )
}