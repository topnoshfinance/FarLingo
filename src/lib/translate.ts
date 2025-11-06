import axios from 'axios';

const LANGUAGE_MAP = {
    'en': 'en-US',
    'es': 'es-ES',
    'fr': 'fr-FR',
    // Add more language mappings as needed
};

async function translate(text, targetLang) {
    const langCode = LANGUAGE_MAP[targetLang] || targetLang;
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${langCode}`;

    try {
        const response = await axios.get(url);
        if (response.data && response.data.responseData) {
            return response.data.responseData.translatedText;
        } else {
            throw new Error('Translation response is not valid.');
        }
    } catch (error) {
        console.error('Error during translation:', error);
        throw new Error('Translation failed. Please try again later.');
    }
}

async function detectLanguage(text) {
    const url = `https://api.mymemory.translated.net/detect?q=${encodeURIComponent(text)}`;

    try {
        const response = await axios.get(url);
        return response.data && response.data.result && response.data.result.language;
    } catch (error) {
        console.error('Error during language detection:', error);
        throw new Error('Language detection failed. Please try again later.');
    }
}

export { translate, detectLanguage };