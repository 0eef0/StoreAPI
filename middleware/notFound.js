const notFound = (req, res) => {
    res.status(404).json({msg: 'Non-existing Route'});
};

module.exports = notFound;