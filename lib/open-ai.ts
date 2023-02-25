import { OpenAIApi, Configuration } from 'openai';
/* ---------------------- setting up configuration --------------------- */
const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

/* ---------------------- creating openai instance --------------------- */
const openai = new OpenAIApi(configuration);

export default openai;
