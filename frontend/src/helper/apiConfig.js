let apiUrl

if (process.env.NODE_ENV === 'development') {
    apiUrl = `http://localhost:8070`
}
else {
    // Please add the production URL here, where the website has been deployed.
    apiUrl = `http://localhost:3000`
}

export default apiUrl