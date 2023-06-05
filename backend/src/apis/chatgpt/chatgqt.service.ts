import { Injectable } from '@nestjs/common';
import { ChatGPTAPI } from 'chatgpt';

@Injectable()
export class ChatGPTService {}

const checkEssay = async (essay) => {
  const api = new ChatGPTAPI({
    apiKey: process.env.ChatGPT_SECRET_KEY,
    debug: true,
  });

  const res = await api.sendMessage(`${essay}`, {
    systemMessage:
      'You are english teacher. Check my essay and change it more natural and grammatically correct. Give me feedback about it. ',
  });

  return res;
};

console.log(
  checkEssay(
    'Today is quiet better than yesterday. Because I did somthing I don`t wanna do. I glad to finish that works.',
  ),
);
