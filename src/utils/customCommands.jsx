import getWeather from "./getWeather";
import searchWeb from "./searchweb";
import geminiResponse from "./geminiResponse";
import searchYoutube from "./searchYoutube";

function customCommands(command, setPromptText, speak, setResponseImg) {
    if (command.includes("open")) {
      const website = command.replace("open", "").trim().replace(/\.+$/, "");
      window.open(`https://www.${website}.com`, "_blank");    
      const response = `Opening ${website} for you.`;
      setPromptText(response);
      speak(response);
      setResponseImg(true);
    }


    else if (command.includes("search for")) {
      const query = command.replace("search for", "").trim();
      searchWeb(query);
      const response = `Searching for ${query}`;
      setPromptText(response);
      speak(response);
      setResponseImg(true);
    }
    

    else if(command.includes("search on youtube for")){
      const query = command.replace("search on youtube for", "").trim();
      console.log(query);
      searchYoutube(query)
      const response = `Searching for ${query}`;
      setPromptText(response);
      speak(response);
      setResponseImg(true);
    }

    
    else if(command.includes("weather")){
      const city = command.replace("weather in", "").trim();
     let correctCity = city.charAt(0).toUpperCase() + city.slice(1).replace(/[^\w\s]/g, '');
      console.log(city);
      console.log(correctCity);
      
      
      getWeather(correctCity).then((response) => {
        setPromptText(response);
        speak(response);
        setResponseImg(true);
      });
   
    }
    
    else if (command.includes("time")) {
      const time = new Date().toLocaleTimeString();
      setPromptText(time);
      speak(time);
      setResponseImg(true);
    } else if (command.includes("date")) {
      const date = new Date().toLocaleDateString();
      setPromptText(date);
      speak(date);
      setResponseImg(true);
    } else {
      geminiResponse(command, setPromptText, speak, setResponseImg);
    }
  }


  export default customCommands;