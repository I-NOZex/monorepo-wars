import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css'
import App from './App.tsx'
import singleSpaReact from 'single-spa-react';

const lc = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: App,
  errorBoundary(err: Error) {
      return <div>Error: {err.message}</div>
  }
});

export const { bootstrap, mount, unmount } = lc;
