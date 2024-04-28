import { configureStore } from '@reduxjs/toolkit'


const newReducer=(state=0,action)=>{
	console.log(action);
	switch (action.type) {
		case 'INCREMENT':
			state= state+1
		break;
		case 'DECREMENT':
			state= state-1
		break;		
		default:
			break;
	}
	return state;
}

const newReducerCountryName=(state="india",action)=>{
	switch(action.type){
		case 'india':
			return "IN";
		case 'america':
			return 'usa';
		case 'england':
			return 'uk';
		default:
			return "IN";
	}
	// return state;
}

export const myStore = configureStore({
	reducer:{
		"counter": newReducer,
		"country":newReducerCountryName
	}
})


  
