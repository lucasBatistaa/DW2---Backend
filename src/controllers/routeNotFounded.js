const routeNotFounded = (req, res) => { 
    res.status(404).json({
        message: "Route not found."
    })
}

export default routeNotFounded