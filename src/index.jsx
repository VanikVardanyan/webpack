import * as $ from 'jquery';
import Post from '@models/Post';

import Logo from './assets/logo.jpg';
import React from 'react';
import { render } from 'react-dom';
import './babel';
import './styles/styles.css';
import './styles/less.less';
import './styles/scss.scss';

const post = new Post('Webpack Post title', Logo);

$('pre').addClass('code').html(post.toString());

const App = () => (
  <div className="container">
    <h1>Webpack example</h1>
    <hr />
    <div className="logo"></div>

    <hr />
    <pre />

    <hr />
    <div className="box">
      <h2>Less</h2>
    </div>

    <hr />
    <div className="card">
      <h2>Scss</h2>
    </div>
  </div>
);

render(<App />, document.getElementById('app'));
