import { Configuration, OpenAIApi } from 'openai';

/* ---------------------- setting up configuration --------------------- */
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

/* ---------------------- creating openai instance --------------------- */
const openai = new OpenAIApi(configuration);

export async function GET() {
  return new Response(
    JSON.stringify({
      error: 'emon man',
    })
  );
}
