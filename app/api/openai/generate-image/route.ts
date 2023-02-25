import { Configuration, OpenAIApi } from 'openai';

/* ---------------------- setting up configuration --------------------- */
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

/* ---------------------- creating openai instance --------------------- */
const openai = new OpenAIApi(configuration);

export async function GET() {
  try {
    const result = await openai.createImage({
      prompt: 'beautiful girl with face',
      n: 1,
      size: '1024x1024',
    });
    return new Response(result.data.data[0].url);
  } catch (error) {
    console.log('🛑 ~ GET ~ error:', error);
  }
}
