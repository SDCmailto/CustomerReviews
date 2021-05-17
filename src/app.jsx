import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './components/Reviews.jsx';
import Rating from './components/Rating.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor() {
    super();
    this.state = {reviews: [], score: 0};
    this.setReviewsFeed = this.setReviewsFeed.bind(this);
  }

  setReviewsFeed (data) {
    console.log(data);
    this.setState({
      reviews: data
    })
    console.log(this.state);

  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      //currently usint a static url here, need to refactor to pull based on the url inputed...
      url: 'http://localhost:9001/reviews/45',
      success: (data, res) => {
        this.setReviewsFeed(data);
      }
    })
  }

  render() {
    return (
      <div className = "Customer-Reviews">
        <Rating className = "rating-container"/> <Reviews className = "reviews-container" reviews={this.state.reviews}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))