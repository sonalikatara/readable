import React, { Component } from 'react'

class PostDetails extends Component{
    render(){
      const { post } = this.props
        return(
            <div>
                {post.title}
                <title>{post.author}</title>
                <p>
                  {post.body}
                </p>
             </div>
        )
    }
}

export default PostDetails
