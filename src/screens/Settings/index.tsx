import { Button } from "@/src/components/Button";
import { useSettings } from "@/src/context/SettingsContext";
import { router } from "expo-router";
import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

export function Settings() {
  const {
    fontSize,
    setFontSize,
    bibleVersion,
    setBibleVersion,
    availableVersions,
  } = useSettings();

  const increaseFont = () => setFontSize(fontSize + 2);
  const decreaseFont = () => setFontSize(fontSize - 2);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.title, { fontSize: fontSize * 1.3 }]}>
          Configurações
        </Text>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { fontSize: fontSize * 0.9 }]}>
            Tamanho da fonte
          </Text>
          <View style={styles.buttonsRow}>
            <Button.Root onPress={decreaseFont}>
              <Button.Text>A-</Button.Text>
            </Button.Root>
            <Button.Root onPress={increaseFont}>
              <Button.Text>A+</Button.Text>
            </Button.Root>
          </View>
          <Text
            style={[
              styles.fontPreview,
              { fontSize },
            ]}
          >
            Exemplo de texto com o tamanho atual. Ajuste para o tamanho que ficar mais confortável para a leitura.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { fontSize: fontSize * 0.9 }]}>
            Versão da Bíblia
          </Text>
          <FlatList
            scrollEnabled={false}
            data={availableVersions}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              const isSelected = item.id === bibleVersion;
              return (
                <TouchableOpacity
                  style={styles.versionItem}
                  onPress={() => setBibleVersion(item.id)}
                >
                  <Text
                    style={[
                      styles.versionName,
                      { fontSize: fontSize * 0.9 },
                      isSelected && styles.versionSelected,
                    ]}
                  >
                    {item.label}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <View style={styles.section}>
          <Button.Root onPress={() => router.back()}>
            <Button.Text>Voltar</Button.Text>
          </Button.Root>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

