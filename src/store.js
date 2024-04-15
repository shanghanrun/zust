import {create} from 'zustand'

export const countStore = create((set)=>({
	count:0,
	movieList:[],
	increase:()=>set((state)=>({count: state.count+1})),
	decrease:()=>set((state)=>({count: state.count-1})),
	setMovieList:(list) => set((state)=>({movieList: list})),
	addMovie:(val) => set((state)=> ({movieList: [...state.movieList, val]})),
	deleteMovie:(id)=> set((state)=>({movieList: state.movieList.filter((item)=> item.id !==id)}))
}))