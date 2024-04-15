import React from 'react'
import { countStore } from '../store'

const Movies = () => {
	const movie ={id:1, title: 'Run away'}
	const movie2 ={id:2, title: 'Hunger game'}
	const {movieList, setMovieList, addMovie, deleteMovie} = countStore()
	let data;

	function add(){
		addMovie(movie)
	}
	function add2(){
		addMovie(movie2)
	}
	function deleteOne(id){
		deleteMovie(id)
	}

	async function setData(){
		try {
			const response = await fetch('http://localhost:5000/movie');
			const data = await response.json();
			setMovieList(data);
			console.log(data)
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

  return (	
	<div style={{border: '2px solid red', margin:'10px', width:'200px'}}>
		<ul>Movies: {movieList?.map(movie=>(
			<div key={movie.id}>
				<li >{movie.title}</li>
				<button onClick={()=>deleteOne(movie.id)} style={{background:'red'}}>삭제</button>
			</div>
			
		))}
		</ul>
		<button onClick={add}>영화1추가</button>	
		<button onClick={add2}>영화2추가</button>
		<button onClick={setData}>영화리스트 추가</button>	
	</div>
  )
}

export default Movies