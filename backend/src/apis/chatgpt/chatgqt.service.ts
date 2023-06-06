import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';

@Injectable()
export class ChatGPTService {
  checkEssay = async ({ essay }: { essay: string }): Promise<string> => {
    // Load OpenAI API key from environment variable
    const configuration = new Configuration({
      apiKey: process.env.ChatGPT_SECRET_KEY,
    });
    const openai = new OpenAIApi(configuration);

    // Call OpenAI API to generate response
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            'You are english teacher. Check my essay and change it more natural and grammatically correct. Must give me feedback about it in detail and some suggestions.',
        },
        { role: 'user', content: essay },
      ],
    });

    // Display response message to user
    const responseMessage = completion.data.choices[0].message.content;

    // // 변환 결과랑 피드백 구분해서 전달해주기 -> frontend에서 구분해서 쓰기
    // const sug_index = responseMessage.indexOf('Suggestion');
    // const res_length = responseMessage.length;
    // const output_text = responseMessage.slice(0, sug_index);
    // const feedback = responseMessage.slice(sug_index, res_length);

    return responseMessage;
  };
}
