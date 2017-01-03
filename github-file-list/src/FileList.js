import React from 'react';
import FileName from './FileName';
import FileIcon from './FileIcon';
import CommitMessage from './CommitMessage';
import Time from './time';

const FileList = React.createClass({
  propTypes: {
    files: React.PropTypes.array
  },

  render() {
    let files = this.props.files;
    return(
      <table className='file-list'>
        <tbody>
          {files.map(file =>
            <FileListItem key={file.id} file={file}/>
          )}
        </tbody>
      </table>
    );
  }
});

const FileListItem = React.createClass({
  propTypes: {
    file: React.PropTypes.object.isRequired
  },

  render() {
    let {file} = this.props;

    return (
      <tr className='file-list-item'>
        <td className='file-icon'>
          <FileIcon file={file} />
        </td>
        <td className='file-name'>
          <FileName file={file} />
        </td>
        <td className='commit-message'>
          <CommitMessage commit={file.latestCommit}/>
        </td>
        <td className='age'>
          <Time time={file.updated_at}/>
        </td>
      </tr>
    );
  }
});

export default FileList;
