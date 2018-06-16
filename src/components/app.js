import React from 'react';
import { Component } from 'react';
import BookList from '../containers/book_list';
import BookDetail from '../containers/book_detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}

//Overall: Redux generated a state object that contains our books
//and then mapped that state to our props in our Component
// state was updated through the reducer, object rerenders with the books.
