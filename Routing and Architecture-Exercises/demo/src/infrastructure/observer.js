let subscribtions = {
    'loginUser': []
}

export default {
    events: {
        loginUser: 'loginUser'
    },

    subscribe: (eventName, fn) => subscribtions[eventName].push(fn),
    trigger: (eventName, data) => subscribtions[eventName].forEach(fn => fn(data))
}