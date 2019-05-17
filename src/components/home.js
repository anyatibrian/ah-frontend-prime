import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/app.scss";
import { getArticlesAction } from "../actions/getArticles";

export class Home extends Component {
  componentDidMount() {
    this.props.getArticlesAction();
  }

  render() {
    const articles = this.props.articles;
    const articleList = articles.length ? (
      articles.map(article => {
        return (
          <div className="article" key={article.id}>
            <div className="inner">
              <div className="article-card">
                <h3>{article.title.substring(0, 30)} ...</h3>
                <p>{article.body.substring(0, 60)} ...</p>
                <span>
                  <b>Author: Baba Polly</b>
                </span>
                <br />
                <span className="card-date">
                  Created on Tue Jan 19 at 19:44
                </span>
              </div>
              <div>
                <img src={article.image} className="img-tile" />
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div>No Articles in Authors Haven Yet</div>
    );
    return (
      <div className="big-container">
        <div className="articles-top">
          <div className="best-article">
            <div className="inner">
              <img
                src={
                  "http://allpicts.in/download/22916/2018/03/Natural_Images_HD_1" +
                  "080p_Download_with_Waterfall_in_Tollymore_Forest_Park-1440x900.jpg/"
                }
                className="img-top"
              />
              <div className="inner">
                <div className="inner">
                  <div className="best-article-card">
                    <h3>
                      Facebook's Plan to Fuse its Messaging Apps Is Not about
                      Your Privacy Just follow the Money
                    </h3>
                    <span>
                      <b>Author: Yasha Levin in OneZero</b>
                    </span>
                    <br />
                    <span className="card-date">Created a few hours ago</span>
                  </div>
                </div>
              </div>
            </div>
            <div />
          </div>
          <div className="top-articles">{articleList}</div>
          <div className="top-articles">{articleList}</div>
        </div>

        <div className="articles">
          <div className="heading">
            <h3>Featured Articles</h3>
          </div>
          <hr />
          {articleList}
        </div>
        <div className="articles1">
          <div className="heading">
            <h3>Popular Articles</h3>
          </div>
          <hr />
          {articleList}
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  articles: state.getArticlesReducer.articles
});

export default connect(
  mapStateToProps,
  { getArticlesAction }
)(Home);
