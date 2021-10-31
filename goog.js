const search = document.querySelector("#search-bar");

const google = () => {
  window.open(`https://www.google.com/search?q=${search.value}`, "_self");
};

const lucky = () => {};
