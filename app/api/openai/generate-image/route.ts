import { Configuration, OpenAIApi } from 'openai';
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
export async function GET() {
  return new Response(
    JSON.stringify({
      error: 'emon man',
    })
  );
}
