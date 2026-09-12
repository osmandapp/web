// Utilities for live track symmetric encryption (AES-256-GCM).
// Key is a 32-byte hex string; translationId is the first TRANSLATION_ID_LENGTH hex chars of SHA-256(key).

const GENERATE_ALGORITHM = { name: 'AES-GCM', length: 256 };
const IMPORT_ALGORITHM = { name: 'AES-GCM' };
const IV_BYTES = 12; // 96-bit IV recommended for AES-GCM

// Generates a random 256-bit key and returns it as a 64-char hex string.
export async function generateTranslationKey() {
    const key = await crypto.subtle.generateKey(GENERATE_ALGORITHM, true, ['encrypt', 'decrypt']);
    const raw = await crypto.subtle.exportKey('raw', key);
    return hexFromBuffer(raw);
}

// Number of hex characters to use as the public translation ID (first N chars of SHA-256).
// 16 chars = 64 bits — enough for uniqueness, keeps URLs short.
const TRANSLATION_ID_LENGTH = 16;

// Computes SHA-256 of the key bytes and returns the first TRANSLATION_ID_LENGTH hex chars.
// Used as the public translation ID — short enough for URLs, no security value (it's public).
export async function computeTranslationId(keyHex) {
    const keyBytes = bufferFromHex(keyHex);
    const hash = await crypto.subtle.digest('SHA-256', keyBytes);
    return hexFromBuffer(hash).slice(0, TRANSLATION_ID_LENGTH);
}

// Encrypts a plain JS object with the given hex key.
// Returns a Base64 string: <12-byte IV><ciphertext>, suitable for transport.
export async function encryptLocation(keyHex, locationObj) {
    const cryptoKey = await importKey(keyHex, 'encrypt');
    const iv = crypto.getRandomValues(new Uint8Array(IV_BYTES));
    const plaintext = new TextEncoder().encode(JSON.stringify(locationObj));
    const ciphertext = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, cryptoKey, plaintext);
    const combined = new Uint8Array(IV_BYTES + ciphertext.byteLength);
    combined.set(iv, 0);
    combined.set(new Uint8Array(ciphertext), IV_BYTES);
    return btoa(String.fromCharCode(...combined));
}

// Decrypts a Base64 blob produced by encryptLocation.
// Returns the original JS object, or null if decryption fails.
export async function decryptLocation(keyHex, base64Data) {
    try {
        const combined = Uint8Array.from(atob(base64Data), (c) => c.charCodeAt(0));
        const iv = combined.slice(0, IV_BYTES);
        const ciphertext = combined.slice(IV_BYTES);
        const cryptoKey = await importKey(keyHex, 'decrypt');
        const plaintext = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, cryptoKey, ciphertext);
        return JSON.parse(new TextDecoder().decode(plaintext));
    } catch {
        return null;
    }
}

// --- helpers ---

async function importKey(keyHex, usage) {
    return crypto.subtle.importKey('raw', bufferFromHex(keyHex), IMPORT_ALGORITHM, false, [usage]);
}

function bufferFromHex(hex) {
    return new Uint8Array(hex.match(/.{2}/g).map((b) => parseInt(b, 16)));
}

function hexFromBuffer(buffer) {
    return Array.from(new Uint8Array(buffer))
        .map((b) => b.toString(16).padStart(2, '0'))
        .join('');
}
