

export async function getIamToken(token){
    const iamToken = await fetch('https://iam.api.cloud.yandex.net/iam/v1/tokens', {
      body: JSON.stringify({
        yandexPassportOauthToken: token
      }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
   });
   const data = await iamToken.json();
   return data;
  }
  
export const iamRepository = {
    value: null,
    timer: null,
    async init(token){
      const ONE_HOUR = 3600 * 1000;
      const setIamToken = async ()=>{
        const {iamToken}  = await getIamToken(token);
        iamRepository.value = iamToken;
      }
       await setIamToken(token);
      this.timer = setInterval(async () => {
        this.value = await setIamToken(token);
      }, ONE_HOUR);
      
    },
    destroy(){
      this.timer && clearInterval(this.timer);
    }
  }

export const getTextCompletion = async (token, posts, text) => {
    const json_posts = JSON.stringify(posts);
    const response = await fetch('https://llm.api.cloud.yandex.net/foundationModels/v1/completion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'x-folder-id': process.env.FOLDER_ID
      },
      body: JSON.stringify({
        "modelUri": `gpt://${process.env.FOLDER_ID}/yandexgpt/latest`,
        "completionOptions": {
          "stream": false,
          "temperature": 0.3,
          "maxTokens": "8000"
        },
        "messages": [
          {
            "role": "system",
            "text": `Ты - умный помощник, который помогает в анализе резюме для рекруитеров. Проанализируй данные статьи (в формате json) ${json_posts} в данном контексте: ${text}. Укажи несколько необходимых навыков, а также количество подходящих под запрос статей.`
          },
          {
            "role": "user",
            "text": text,
          }
        ]
      }),
    });
    const result = await response.json();
    return result
  }

  export const getTextPDF = async (token, pdf, text) => {
    const response = await fetch('https://llm.api.cloud.yandex.net/foundationModels/v1/completion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'x-folder-id': process.env.FOLDER_ID
      },
      body: JSON.stringify({
        "modelUri": `gpt://${process.env.FOLDER_ID}/yandexgpt/latest`,
        "completionOptions": {
          "stream": false,
          "temperature": 0.5,
          "maxTokens": "8000"
        },
        "messages": [
          {
            "role": "system",
            "text": `Ты - умный помощник, который помогает в анализе резюме для рекруитеров. Ты будешь принимать на вход ${pdf} проанализируй его и выведи на основе запроса пользователя. ${text}`
          },
          {
            "role": "user",
            "text": text,
          }
        ]
      }),
    });
    const result = await response.json();
    return result
  }