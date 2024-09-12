const logger = (req, res, next) => {

    const now = new Date().toLocaleString()
    console.log(`
    A route did accessed:
    Date and Time: ${now} 
    Method type: ${req.method} 
    Original URL: ${req.url}`)
    next()
}

export default logger