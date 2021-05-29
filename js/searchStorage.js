const searchBar = document.querySelector('.search-field');

searchBar.addEventListener('input', function (e) {
    currentSearch = e.target.value;
    sessionStorage.setItem("searchStorage", currentSearch);
    // let storedSearch = sessionStorage.getItem("searchStorage");
    // console.log(storedSearch);
    }
);

searchBar.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        window.location.href = "/zoeken.html";
    }
}
);

// SOURCES
// https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage?retiredLocale=nl