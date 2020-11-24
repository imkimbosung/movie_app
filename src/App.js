import React from 'react';
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

// react 는 자동으로 render 함수를 실행한다.
class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  }

  // axios 에서 데이터를 가져오는데 시간이 걸리기 때문에 async , await 를 써준다.
getMovies = async () => {
  const {
    data: {
      data: { movies }
    }
  } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
  this.setState({ movies , isLoading: false })
}

  componentDidMount(){
    this.getMovies();

  }
  // 상태를 변경하게되면 render함수를 다시 호출해야되는데, setState 를 사용하면 자동으로 변경해준다.

  render(){
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
         {isLoading ? (
           <div className="loader">
              <span className="loader__test">Loading..</span>
           </div>
         ) : (
            <div className="movies">
              {movies.map(movie => (
                <Movie 
                  key={movie.id} 
                  id={movie.id} 
                  year={movie.year} 
                  title={movie.title} 
                  summary={movie.summary} 
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              ))}
            </div>
            )
         } 
              
          
      </section>      
    );
  }

}

export default App;
