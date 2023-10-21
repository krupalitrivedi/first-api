const getUser = (req, res) => {
    res.status(200).json({message: "Get User"})
}

const setUser = (req, res) => {
    res.status(200).json({message: "Set User"})
}

const updateUser = (req,res) => {
    res.status(200).json({message: `Update user ${req.params.id}`})
}

const deleteUser = (req, res) => {
    res.status(200).json({message: `Delete user ${req.params.id}`})
}

module.exports = {
    getUser,
    setUser,
    updateUser,
    deleteUser
}