/* eslint-disable @typescript-eslint/no-require-imports */
import { Asset } from 'expo-asset';
import { copyAsync, documentDirectory, getInfoAsync, makeDirectoryAsync } from 'expo-file-system/legacy';
import { openDatabaseAsync, SQLiteDatabase } from 'expo-sqlite';
import { Book, Verse } from './types';

let dbInstance: SQLiteDatabase | null = null;
let currentDbName: string | null = null;

export async function openDatabase(version: string = 'arc') {
  const databaseName = `${version}.sqlite`;

  if (dbInstance && currentDbName === databaseName) {
    return dbInstance;
  }

  const databaseFolder = `${documentDirectory}SQLite`;
  const databasePath = `${databaseFolder}/${databaseName}`;

  const folderInfo = await getInfoAsync(databaseFolder);
  if (!folderInfo.exists) {
    await makeDirectoryAsync(databaseFolder, { intermediates: true });
  }

  const fileInfo = await getInfoAsync(databasePath);

  if (!fileInfo.exists || (fileInfo.exists && fileInfo.size === 0)) {
    const bibleAssets: Record<string, any> = {
      'acf': require('../../assets/database/ACF.sqlite'),
      'ara': require('../../assets/database/ARA.sqlite'),
      'arc': require('../../assets/database/ARC.sqlite'),
      'kja': require('../../assets/database/KJA.sqlite'),
      'kjf': require('../../assets/database/KJF.sqlite'),
      'naa': require('../../assets/database/NAA.sqlite'),
      'nvi': require('../../assets/database/NVI.sqlite'),
    };

    const asset = await Asset.fromModule(bibleAssets[version]).downloadAsync();

    await copyAsync({
      from: asset.localUri!,
      to: databasePath
    });
  }

  dbInstance = await openDatabaseAsync(databaseName);
  currentDbName = databaseName;

  return dbInstance;
}

export async function getAllBooks(version?: string): Promise<Book[]> {
  const db = await openDatabase(version);
  return await db.getAllAsync<Book>('SELECT id, name FROM book ORDER BY id ASC');
}

export async function getBookChapters(bookId: number, version?: string): Promise<number> {
  const db = await openDatabase(version);
  const result = await db.getFirstAsync<{ maxChapter: number }>(
    'SELECT MAX(chapter) as maxChapter FROM verse WHERE book_id = ?',
    [bookId]
  );
  return result?.maxChapter ?? 0;
}

export async function getChapterVerses(bookId: number, chapter: number, version?: string): Promise<Verse[]> {
  const db = await openDatabase(version);
  return await db.getAllAsync<Verse>(
    'SELECT verse, text FROM verse WHERE book_id = ? AND chapter = ? ORDER BY verse ASC',
    [bookId, chapter]
  );
}