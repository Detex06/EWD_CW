const createComment = async (comment) => {
    try {
        let response = await fetch('/api/comments/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

const listComments = async (signal) => {
    try {
        let response = await fetch('/api/comments/', {
            method: 'GET',
            signal: signal,
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

const listCommentsAdmin = async (params, credentials, signal) => {
    console.log("listing the comments for admin")
    console.log(""+JSON.stringify(params.userId)+" "+JSON.stringify(credentials.t)+" "+signal)
    try {
        let response = await fetch('/api/comments/admin/' + params.userId, {
            method: 'GET',
            signal: signal,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            }
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}


const updateComment = async (params, credentials, comment) => {
    try {
        let response = await fetch('/api/comments/admin/' + params.userId, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            },
            body: JSON.stringify(comment)
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}


const removeComment = async (params, credentials, comments,comment) => {
    try {
        let response = await fetch('/api/comments/admin/' + params.userId, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            },
            body: JSON.stringify(comments),
            comment: JSON.stringify(comment)
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

export {
    createComment,
    listComments,
    listCommentsAdmin,
    updateComment,
    removeComment
}