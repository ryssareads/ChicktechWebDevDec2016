function createFavorite() {
    var listOfFavorites = document.getElementsByClassName("favorite");
    var theFirstFavorite = listOfFavorites.item(0);
    
    var theNewFavorite = theFirstFavorite.cloneNode(true);
    
    document.getElementById("content").appendChild(theNewFavorite);
    
    var theFavoriteTitle = document.getElementById("creator-title").value;
    var theFavoriteDescription = document.getElementById("creator-description").value;
    var theFavoriteMedia = document.getElementById("creator-media").value;
    
    theNewFavorite.getElementsByClassName("title")[0].innerHTML = theFavoriteTitle;
    theNewFavorite.getElementsByClassName("description")[0].innerHTML = theFavoriteDescription;
    theNewFavorite.getElementsByClassName("media")[0].innerHTML = theFavoriteMedia;

    
}