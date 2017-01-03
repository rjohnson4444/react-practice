import React from 'react';
import ReactDOM from 'react-dom';
import FileList from './FileList';
import './index.css';

const testFiles = [
  {
    id: 1,
    name: 'src',
    type: 'folder',
    updated_at: '2016-07-11 21:24:00',
    latestCommit: {
      message: 'Initial Commit'
    }
  },
  {
    id: 2,
    name: 'tests',
    type: 'folder',
    updated_at: '2016-07-11 21:24:00',
    latestCommit: {
      message: 'Initial Commit'
    }
  },
  {
    id: 3,
    name: 'README',
    type: 'file',
    updated_at: '2016-07-11 21:24:00',
    latestCommit: {
      message: 'Added a readme'
    }
  },
  {
    id: 4,
    name: 'Final Commit',
    type: 'file',
    updated_at: '2016-12-12 21:24:00',
    latestCommit: {
      message: 'Get final commit'
    }
  }
];

ReactDOM.render(
  <FileList files={testFiles} />,
  document.getElementById('root')
);
