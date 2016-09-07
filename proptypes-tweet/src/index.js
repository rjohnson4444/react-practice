import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';

var Tweet = React.createClass({
    propTypes: {
        tweet: React.PropTypes.shape({
            message:  React.PropTypes.string.isRequired,
            gravatar: React.PropTypes.string.isRequired,
            author:   React.PropTypes.shape({
                handle: React.PropTypes.string.isRequired,
                name:   React.PropTypes.string.isRequired
            }).isRequired,
            likes:    React.PropTypes.number,
            retweets: React.PropTypes.number
        }).isRequired
    },

    render: function() {
        var { tweet } = this.props;

        return(
            <div className='tweet'>
                <Avatar hash={tweet.gravatar}/>
                <div className='content'>
                    <NameWithHandle author={tweet.author}/><Time time={this.props.tweet.timestamp}/>
                    <Message text={tweet.message}/>
                    <div className='buttons'>
                        <ReplyButton />
                        <RetweetButton count={tweet.retweets}/>
                        <LikeButton count={tweet.likes}/>
                        <MoreOptionsButton/>
                    </div>
                </div>
            </div>
        );
    }
});

var testTweet = {
    message: "Basketball is great!!!",
    gravatar: 'xyz',
    author: {
        handle: 'Ryguy',
        name: 'IAMA Basketball Person'
    },
    likes: 5,
    retweets: 2,
    timestamp: '2016-07-30 21:24:37'
};

var Avatar = React.createClass({
    propTypes: {
        hash: React.PropTypes.string.isRequired
    },

    render: function() {
        var hash = this.props.hash;
        var url  = `https://www.gravatar.com/avatar/${hash}`;

        return(
            <img src={url} className='avatar' alt='avatar' />
        );
    }
});

var Message = React.createClass({
    propTypes: {
        text: React.PropTypes.string
    },

    render: function() {
        return(
            <div className='message'>
                {this.props.text}
            </div>
        );
    }
});

var NameWithHandle = React.createClass({
    propTypes: {
        author: React.PropTypes.shape({
            name:   React.PropTypes.string.isRequired,
            handle: React.PropTypes.string.isRequired
        }).isRequired
    },

    render: function() {
        var { name, handle } = this.props.author;

        return(
            <span className='name-with-handle'>
                <span className='name'>{name}</span>
                <span className='handle'>@{handle}</span>
            </span>
        );
    }
});

var Time = React.createClass({
    proptypes: {
        time: React.PropTypes.string
    },

    computeTimeString: function() {
        return moment(this.props.time).fromNow();
    },

    render: function() {
        return(
            <span className='time'>{this.computeTimeString()}</span>
        );
    }
});

var ReplyButton = React.createClass({
    render: function() {
        return(
            <i className='fa fa-reply reply-button'/>
        );
    }
});

var RetweetButton = React.createClass({
    proptypes: {
        count: React.PropTypes.number
    },

    getCount: function() {
        if(this.props.count > 0) {
            return(
                <span className='retweet-count'>
                    {this.props.count}
                </span>
            );
        } else {
            return null;
        }
    },

    render: function() {
        return(
            <span className='retweet-button'>
                <i className='fa fa-retweet'/>
                {this.getCount()}
            </span>
        );
    }
});

var LikeButton = React.createClass({
    propTypes: {
        count: React.PropTypes.number
    },

    render: function() {
        var { count } = this.props;
        return(
            <span className='like-button'>
                <i className='fa fa-heart'/>
                {count > 0 ?
                <span className='like-count'>{count}</span>
                : null}
            </span>
        );
    }
});

var MoreOptionsButton = React.createClass({
    render: function() {
        return(
            <i className='fa fa-ellipsis-h more-options-button'/>
        );
    }
});

ReactDOM.render(
  <Tweet tweet={testTweet}/>,
  document.querySelector('#root')
);
