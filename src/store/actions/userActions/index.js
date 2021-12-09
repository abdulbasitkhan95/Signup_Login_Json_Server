function storeUser(user) {
    return {
        type: 'ADD_USER',
        data: user,
    }
}

function removeUser(user) {
    return {
        type: 'REMOVE_USER'
    }
}

export {
    storeUser,
    removeUser
}