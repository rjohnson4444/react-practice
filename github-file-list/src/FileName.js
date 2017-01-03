import React from 'react';

function FileName({ file }) {
  return (
    <div>
      {file.name}
    </div>
  )
};

FileName.propTypes = {
  file: React.PropTypes.object.isRequired
};

export default FileName;
