const { Configuration, OpenAIApi } = require('openai');

const promptElement = document.getElementById("promptElement");
const promptForm = document.getElementById("promptForm");
const promptInput = document.getElementById("prompt");

const config = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(config);

const runPrompt = async (event) => {
  event.preventDefault(); 

  const prompt = promptInput.value;

  promptElement.textContent = "Loading ...";

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 2048,
    temperature: 1,
  });

  const parsedResponse = response.data.choices[0].text;

  promptElement.textContent = parsedResponse;
};

promptForm.addEventListener("submit", runPrompt);
