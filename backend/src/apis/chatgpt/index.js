import { ChatGPTAPI } from 'chatgpt';

const checkEssay = async (essay) => {
  const api = new ChatGPTAPI({
    apiKey: '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',
    // debug: true,
  });

  const res = await api.sendMessage(`${essay}`, {
    systemMessage:
      'You are english teacher. Check my essay and change it more natural and grammatically correct. Must give me feedback about it in detail and some suggestions.',
  });

  return res.text;
};

console.log(
  await checkEssay(
    'Today is quiet better than yesterday. Because I did somthing I don`t wanna do. I glad to finish that works.',
  ),
);
