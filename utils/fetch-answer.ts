import openai from '@/lib/open-ai';

export default async function fetchAnswer() {
  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: 'explain this step by step: what is javascript',
    temperature: 0.9,
    max_tokens: 1000,
    frequency_penalty: 0,
    presence_penalty: 0,
    top_p: 1,
  });

  return completion.data.choices[0].text;
}
