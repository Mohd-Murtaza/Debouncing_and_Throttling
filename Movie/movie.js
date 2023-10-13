let time;
let apiKey = "5f9edd1";
let query = document.querySelector("#searchInput");
document.getElementById("searchInput").addEventListener("input", () => {
    clearTimeout(time)
    time = setTimeout(async () => {
        try {
            let apiCall = await fetch(`http://www.omdbapi.com/?s=${query.value}&apikey=${apiKey}`);
            let getData = await apiCall.json();
            console.log(getData);
            if (getData.Search) {
                displayNothing.innerHTML=``;
                let displayMovieCards = document.querySelector("#displayMovieCards")
                let output=``;
                getData.Search.forEach(movie => {
                    output+=`<div id="movieCard">
                               <img class="moviePoster" src="${movie.Poster}" alt="Movie-Poster">
                               <h2 class="movieName">${movie.Title}</h2>
                               <h2 class="movieYear">Year:- ${movie.Year}</h2>
                             </div>`
                });
                displayMovieCards.innerHTML=output;
            }
            else {
                let displayNothing=document.querySelector("#displayNothing");
                displayMovieCards.innerHTML=``
                displayNothing.innerHTML = `<h4 style="color:#FFC933; text-align:center; font-size:42px; max-width:100%">Oops! this movie not found.</h4>`
            }
        } catch (error) {
            console.log(error);
        }
    }, 300)
});