import { configureStore } from '@reduxjs/toolkit'

// export const counterReducer = (state = 1, action) => {
//     switch (action.type) {
//       case "INCREMENT":
//         return state + 1;
//       case "DECREMENT":
//         return state - 1;   
//       default:
//         return state;
//     }
//   };


const newReducer=(state=1,action)=>{
	if(action.type=='increment'){
		return state+1
	}else if(action.type=='decrement'){
		return state-1
	}else{
		return state;
	}
}
  
export const storeVal = configureStore({
  reducer: newReducer
})