const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Adiciona a extensões aos assets aceitos
config.resolver.assetExts.push('sqlite');

module.exports = config;