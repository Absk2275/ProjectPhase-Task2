let input = document.getElementById("searchMovie");
        let btn = document.getElementById("btn");
        let movies = document.getElementById("result");

        btn.addEventListener("click", function() {
            let inputvalue = input.value;
            let apikey="5e30c289";
            let url= `http://www.omdbapi.com/?apikey=${apikey}&t=${inputvalue}`;
            let image = `http://img.omdbapi.com/?apikey=${apikey}&`;

            fetch(url)
            .then((response)=>response.json())
            .then((res)=> {
                const movie=res;
                const poster =`${image}&i=${movie.imdbID}`;

                const html=`
                <div>
                    <img src="${poster}" alt="${movie.Title}">
                    <p>Released in: ${movie.Year}</p>
                    <p>IMDB Rating ${movie.imdbRating}</p>
                    <p>Cast: ${movie.Actors}</p>
                    <p>Director: ${movie.Director}</p>
                </div>`;
                movies.innerHTML=html;
            })

        })