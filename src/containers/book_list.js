import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

//was a component but needed to be aware of our state with redux's data so upgraded to a container
//upgrading involved importing {connect} from 'react-redux'
//Container: is a normal react component that gets bonded with the applications state
class BookList extends Component {
  renderList () {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item ">
          {book.title}
        </li>
      );
    });
  }

  render () {
    return (
      <ul className="list-group col-sm-4" >
        {this.renderList()}
      </ul>
    )
  }
}

//hooked out component together with the reducer data
function mapStateToProps(state) {
  //whatever is returned will show up as props
  // inside of booklist
  return {books: state.books};

}

//anything returned from this function will end up as props, on the booklist container
function mapDispatchToProps(dispatch) {
  //whenever select book is called, the result should be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook}, dispatch);
}

//only booklist cares about the list of book, app doesn't care
//-mDTP, promote booklist from a component to container, needs to know
// about dispatch metho select book, make available as props
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
