// create user
export const postUser = (user) => {
    return $.ajax({
        url: '/api/users',
        method: 'POST',
        data: { user }
    })
};

// log in user
export const postSession = (user) => {
    return $.ajax({
        url: '/api/session',
        method: 'POST',
        data: { user }
    })
};


// log out user
export const deleteSession = () => {
    return $.ajax({
        url: '/api/session',
        method: 'DELETE'
    })
};