export const sendRequest = (url, method) => {
    return fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .catch(err=> console.log(err))
}