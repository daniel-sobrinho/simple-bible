import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type BibleVersionId = "acf" | "ara" | "arc" | "kja" | "kjf" | "naa" | "nvi";

type SettingsContextValue = {
  fontSize: number;
  setFontSize: (size: number) => void;
  bibleVersion: BibleVersionId;
  setBibleVersion: (version: BibleVersionId) => void;
  availableVersions: { id: BibleVersionId; label: string }[];
  loading: boolean;
};

const SettingsContext = createContext<SettingsContextValue | undefined>(undefined);

const FONT_SIZE_KEY = "settings:fontSize";
const VERSION_KEY = "settings:bibleVersion";

const DEFAULT_FONT_SIZE = 18;
const DEFAULT_VERSION: BibleVersionId = "arc";

const VERSIONS: { id: BibleVersionId; label: string }[] = [
  { id: "acf", label: "Almeida Corrigida Fiel (ACF)" },
  { id: "ara", label: "Almeida Revista e Atualizada (ARA)" },
  { id: "arc", label: "Almeida Revista e Corrigida (ARC)" },
  { id: "kja", label: "King James Atualizada (KJA)" },
  { id: "kjf", label: "King James Fiel (KJF)" },
  { id: "naa", label: "Nova Almeida Atualizada (NAA)" },
  { id: "nvi", label: "Nova Versão Internacional (NVI)" },
];

type SettingsProviderProps = {
  children: ReactNode;
};

export function SettingsProvider({ children }: SettingsProviderProps) {
  const [fontSize, setFontSizeState] = useState<number>(DEFAULT_FONT_SIZE);
  const [bibleVersion, setBibleVersionState] = useState<BibleVersionId>(DEFAULT_VERSION);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSettings() {
      try {
        const [storedFontSize, storedVersion] = await Promise.all([
          AsyncStorage.getItem(FONT_SIZE_KEY),
          AsyncStorage.getItem(VERSION_KEY),
        ]);

        if (storedFontSize) {
          const parsed = Number(storedFontSize);
          if (!Number.isNaN(parsed) && parsed > 10 && parsed < 40) {
            setFontSizeState(parsed);
          }
        }

        if (storedVersion && (VERSIONS as { id: string }[]).some(v => v.id === storedVersion)) {
          setBibleVersionState(storedVersion as BibleVersionId);
        }
      } finally {
        setLoading(false);
      }
    }

    loadSettings();
  }, []);

  const setFontSize = (size: number) => {
    const clamped = Math.min(32, Math.max(12, size));
    setFontSizeState(clamped);
    AsyncStorage.setItem(FONT_SIZE_KEY, String(clamped)).catch(() => { });
  };

  const setBibleVersion = (version: BibleVersionId) => {
    setBibleVersionState(version);
    AsyncStorage.setItem(VERSION_KEY, version).catch(() => { });
  };

  return (
    <SettingsContext.Provider
      value={{
        fontSize,
        setFontSize,
        bibleVersion,
        setBibleVersion,
        availableVersions: VERSIONS,
        loading,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return ctx;
}

