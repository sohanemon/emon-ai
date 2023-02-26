import openai from '@/lib/open-ai';

export default async function fetchAnswer() {
  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: 'what is javascript',
    temperature: 0.6,
  });
  return completion.data.choices[0].text;
}
