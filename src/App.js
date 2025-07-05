// File: App.js
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function News() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=cb9ae37d2715440ba325dc3d05dc42ee`)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles))
      .catch((err) => console.error('Failed to fetch news:', err));
  }, []);

  return (
    <div className="container newspaper-bg py-5 px-4">
      <header className="mb-5 border-bottom pb-3 text-center">
        <h1 className="display-3 font-serif text-uppercase fw-bold">📰 The Daily Times</h1>
        <p className="text-muted fst-italic">Your trusted source for today's top headlines</p>
      </header>

      <div className="row gx-5 gy-4">{
        articles.map((article, index) => (
          <div className="col-md-6" key={index}>
            <div className="p-4 border border-dark-subtle bg-white shadow-sm h-100">
              <h6 className="text-uppercase text-decoration-underline fw-bold font-serif">{article.title}</h6>
              <h4 className="fw-bold font-serif mb-2">{article.description}</h4>
              <p className="text-muted small">Author Name | May 13, 2025</p>
              <p className="text-justify" style={{ textAlign: 'justify' }}>
              </p>
              <button className="btn btn-outline-dark btn-sm">Read Full Article</button>
            </div>
          </div>

        ))

      }
      </div>
    </div>
  );

}

export default News;
