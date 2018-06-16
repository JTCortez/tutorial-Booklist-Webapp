export function selectBook (book) {
  //select book is an action book, it needs to return an action,
  //an object with a type property
  //action creator
  return {
    //always in uppercase,
    type: 'BOOK_SELECTED',
    payload: book
  };
}
