let subscribtions = {
    'loginUser': [],
    'notification': []
}

export default {
    events: {
        loginUser: 'loginUser',
        notification: 'notification'
    },

    subscribe: (eventName, fn) => subscribtions[eventName].push(fn),
    trigger: (eventName, data) => subscribtions[eventName].forEach(fn => fn(data))
}