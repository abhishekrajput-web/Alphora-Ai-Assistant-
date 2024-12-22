function searchWeb(query) {
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(url, "_blank");
  }

  export default searchWeb;