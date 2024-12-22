import { createContext, useState } from "react";
import customCommands from "../utils/customCommands";

export const DataContext = createContext();

const UserContext = ({ children }) => {
  const [speaking, setSpeaking] = useState(false);
  const [promptText, setPromptText] = useState("Listening...");
  const [responseImg, setResponseImg] = useState();


  // Text-to-Speech function
  function speak(text) {
    // Stop any ongoing speech
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel(); // Stops the current speech
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.volume = 1; // Adjust for clarity
    utterance.pitch = 1; // Neutral pitch
    utterance.rate = 1.1; // Slightly slower for better understanding

    // Select voice
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(
      (voice) =>
        voice.name.toLowerCase().includes("female") || voice.lang === "en-US"
    );
    utterance.voice = preferredVoice || voices[0];

    // Speak the text
    window.speechSynthesis.speak(utterance);

    // Ensure to handle edge cases when interrupted
    utterance.onend = () => {
      setSpeaking(false);
    };
  }

  // Speech recognition setup
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.continuous = false; 
  recognition.interimResults = false; 

  recognition.onresult = (event) => {
    const transcript = event.results[event.resultIndex][0].transcript
      .toLowerCase()
      .trim();
    console.log("Transcript:", transcript);

    setPromptText(transcript);
  

    
    customCommands(transcript, setPromptText, speak, setResponseImg);
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
    setSpeaking(false);
    setPromptText("Error listening. Try again.");
  };


  const value = {
    // recognition,
    speaking,
    setSpeaking,
    promptText,
    setPromptText,
    responseImg,
    setResponseImg,
    speak,
    recognition,  // Expose recognition object to the component for stop functionality
  };

  return (
    <DataContext.Provider value={value}>{children}</DataContext.Provider>
  );
};

export default UserContext;
