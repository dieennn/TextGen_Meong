// config.ts
const dotenv = require('dotenv');

// Load environment variables from .env
dotenv.config();

export const environment = {
  apiKey: process.env.API_KEY || '',
  authDomain: process.env.AUTH_DOMAIN || '',
  databaseURL: process.env.DATABASE_URL || '',
  projectId: process.env.PROJECT_ID || '',
  storageBucket: process.env.STORAGE_BUCKET || '',
  messagingSenderId: process.env.MESSAGING_SENDER_ID || '',
  appId: process.env.APP_ID || '',

  passphrase: process.env.PASSPHRASE || '',
  keyLocalStorage: process.env.KEYLOCALSTORAGE || '',

  supabaseUrl: process.env.SUPABASE_URL || '',
  supabaseKey: process.env.SUPABASE_KEY || '',
};
