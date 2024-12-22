function searchYoutube(query) {
    const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
    window.open(url, "_blank");
  }

  export default searchYoutube;