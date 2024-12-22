import run from "./gemini";

async function geminiResponse(prompt, setPromptText, speak, setResponseImg) {
    let response = await run(prompt);

    console.log("Raw response:", response);
    response = response.replace(/\*/g, ""); // Remove asterisks
    console.log("Cleaned response:", response);

    // Update text and speak
    setPromptText(response);
    speak(response);
    setResponseImg(true);
  }


  export default geminiResponse;