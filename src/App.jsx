import React, { useContext, useState, useEffect } from "react";
import "./App.css";
import { CiMicrophoneOn } from "react-icons/ci";
import { DataContext } from "./context/UserContext";
import speakLoader from "./assets/speak.gif";
import responseLoader from "./assets/aiVoice.gif";
import virtualAssistantPhoto from "./assets/virtualAssistant.png";
import DocModal from "./components/DocModal";
import Loader from "./components/Loader";
const App = () => {
  const {
    recognition,
    speaking,
    setSpeaking,
    promptText,
    setPromptText,
    responseImg,
    setResponseImg,
    speak,
  } = useContext(DataContext);

  const [isModalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true); // State for loader

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  // Start speech recognition
  const startListening = () => {
    setPromptText("Listening...");
    setSpeaking(true);
    setResponseImg(false);
    recognition.start();
  };

  // Stop speech recognition and speech synthesis
  const stopSpeech = () => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel(); // Cancel ongoing speech synthesis
    }
    recognition.stop(); // Stop speech recognition
    setSpeaking(false); // Update state to stop the UI from showing "listening"
    setPromptText("Speech stopped.");
  };

  const openDocModal = () => {
    setModalOpen(true);
  };

  const closeDocModal = () => {
    setModalOpen(false);
  };

  if (loading) {
    return <Loader />;
  }


  return (
    <div id="main">
      <img
        src={virtualAssistantPhoto}
        alt="virtualAssistantPhoto"
        className="virtual-assistant-img"
      />
      <span>I'm Alphora, Your AI Virtual Assistant</span>
      {!speaking ? (
        <button onClick={startListening}>
          Click here <CiMicrophoneOn />
        </button>
      ) : (
        <div className="response">
          {!responseImg ? (
            <img src={speakLoader} alt="speak-loader" id="speak-img" />
          ) : (
            <img src={responseLoader} alt="response-loader" id="response-img" />
          )}

          <p>{promptText}</p>
        </div>
      )}
      {speaking && <button onClick={stopSpeech}>Stop</button>}

      <button onClick={openDocModal} className="doc-button">
        Read Doc
      </button>

      <DocModal isOpen={isModalOpen} onClose={closeDocModal} />
    </div>
  );
};

export default App;
