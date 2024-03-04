import { OpenAIApi,Configuration } from "openai";//玩过下openai接口

const configuration = new Configuration({
    apiKey: "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"
});

const openai = new OpenAIApi(configuration);

async function chat(input){
    //chatgpt的业务代码 adimin system(gpt) user(用户)
    //为什么是数组?方便记录对话
    const message= [{role:'user',content:input}];
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: message,
        temperature:0,
    },
    {
        proxy:{
            host:"127.0.0.1",
            port:7890
    }
})//调用openai的接口
   
    return response.data.choices[0].message.content;
}

const question = "What is the capital of the United States?";

chat(question)
    .then((response) => {console.log(response.data);})
    .catch((error) => {console.error(error);});
