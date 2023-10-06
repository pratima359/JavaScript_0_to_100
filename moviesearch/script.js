const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";



const moviebox = document.querySelector("#movie-box") 

//creating one function http using featch

const getMovies = async(apiEndpoint) =>{
     const response = await fetch(apiEndpoint)
     const data = await response.json()
     console.log(data)
     showMovies(data.results)
}
getMovies(APIURL)

//bydefault latest movie we are showing

const showMovies =(resultData) =>{
    moviebox.innerHTML ='';
    resultData.forEach((item)=>{
       const boxdivElement = document.createElement("div")
       boxdivElement.classList.add("box")
       boxdivElement.innerHTML = `
       <img src="${IMGPATH+item.poster_path}"  />
                <div class="overlay">
                    <div class="title">
                        <h2>${item.title}</h2>
                        <span>${item.vote_average}</span>
                    </div>
                    <h3>Overview</h3>
                    <p>${item.overview}</p>
                </div>
       `
       moviebox.appendChild(boxdivElement)
    })
}


// search the movie

document.querySelector("#search").addEventListener('keyup', function(event) {
    console.log(event)
        if (event.target.value != '') {
            getMovies(SEARCHAPI+event.target.value)
        } else {
             getMovies(APIURL)
        }
} )

