import React from 'react';

function CommitMessage({ commit }) {
  return (
    <div>
      { commit.message }
    </div>
  )
};

CommitMessage.propTypes = {
  commit: React.PropTypes.object.isRequired
};

export default CommitMessage;
