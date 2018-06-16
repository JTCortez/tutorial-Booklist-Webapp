import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import poop from './reducer_active_book';

const rootReducer = combineReducers({
  //add a key to our global application state
  books: BooksReducer,
  activeBook: poop
});

export default rootReducer;
