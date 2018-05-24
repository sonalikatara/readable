import React, { Component } from 'react'

class PostSort extends Component {
    render() {
        return (
            <div >
                <span>Sort by&nbsp;</span><select onChange={(event) => {
                    this.props.updatePosts(event.target.value);
                }
                } >
                    <option value="timestampDesc">Newest</option>
                    <option value="timestampAsc">Oldest</option>
                    <option value="voteDesc">Highest Rating</option>
                    <option value="voteAsc">Lowest Rating</option>
                </select>
            </div>
        )
    }
}

export default PostSort
