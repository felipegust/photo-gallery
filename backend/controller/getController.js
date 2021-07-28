var mongoUtil = require('../services/db')

const photoList = async (req, res) => {
    const result = await mongoUtil.findDocuments('photos')
    res.send(result)
}

module.exports = {
    photoList
}