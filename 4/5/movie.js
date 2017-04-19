let movie = [{
        title: "In Brugs",
        hasWatched: true,
        rating: 5
    },
    {
        title:"Samurai Jack",
        hasWatched:false,
        rating:5
    }
]

movie.forEach(function(movie){
    console.log(buildString(movie));

  })

function buildString(movie){
  let result = "You have ";
  if (movie.hasWatched == true){
      result += "watched ";
    }else{
      result += "not seen ";
    }
    result += ` "${movie.title}" - ${movie.rating} stars`
    return result;
}
