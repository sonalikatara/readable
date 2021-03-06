const api = "http://localhost:3001"

// Generate a unique token for storing your posts data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

//Get all Categories
export const fetchAllCategories = () =>
    fetch(`${api}/categories`, { headers })
      .then(res => res.json())
      .then(data => data.categories)
      .catch(error => {
        return error
      })


// Get all Posts
export const fetchAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .catch(error => {
      return error
    })

//Get a single post by id
export const getPost = (postId) =>
    fetch(`${api}/posts/${postId}`, { headers })
        .then(res => res.json())
        .catch(error => {
          return error
        })



//Get all comments of a post by id
export const getPostComments = (postId) =>
    fetch(`${api}/posts/${postId}/comments`, { headers })
        .then(res => res.json())
        .catch(error => {
          return error
        })

//Create a new post
export const createPost = (post) =>
    fetch(`${api}/posts`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    }).then(res => res.json())

//Edit a post
export const editPost = (postId, body) =>
    fetch(`${api}/posts/${postId}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => res.json())

//Delete a post
export const deletePost = (postId) =>
    fetch(`${api}/posts/${postId}`, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())

//create a comment for a post
export const createComment = (comment) =>
fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
        ...headers,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
}).then(res => res.json())


//edit a comment
export const editComment = (commentId, body) =>
fetch(`${api}/comments/${commentId}`, {
    method: 'PUT',
    headers: {
        ...headers,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
}).then(res => res.json())

//delete a comment
export const deleteComment = (commentId) =>
fetch(`${api}/comments/${commentId}`, {
    method: 'DELETE',
    headers: {
        ...headers,
        'Content-Type': 'application/json'
    }
}).then(res => res.json())


