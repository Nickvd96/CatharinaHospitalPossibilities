function myFavorite() {
    const favouriteButton = document.getElementById("bookmark");
    if (favouriteButton.innerHTML === "bookmark_border") {
        favouriteButton.innerHTML = "bookmark";

    } else {
        favouriteButton.innerHTML = "bookmark_border";
    }
};