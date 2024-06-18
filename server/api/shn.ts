import {GoogleGenerativeAI} from "@google/generative-ai";

export default defineEventHandler(async (event) => {
    let GEMINI_API = 'AIzaSyCORWk7gFe9EdttBMNCVaLcQRU0F5du3O8';
    const body =  getQuery(event);
    const command: any = body.command;

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(GEMINI_API);

// ...

// The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


 // const result = await model.generateContent(command);
 // const response = await result.response;
  //const text = response.text();

 const result = await model.generateContentStream(command);

  let text = "";
  for await (const chunk of result.stream) {
    const chunkText = chunk.text();
    console.log(chunkText);
    text += chunkText;
  }
  return {
    cmd: command,
    response: text
  }




});