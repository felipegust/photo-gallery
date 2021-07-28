var mongoUtil = require('../services/db')

const handleQuery = async (req,res) => {
    const result = await mongoUtil.queryDocuments("photo-gallery")
    res.send(result)
}

module.exports = {
    handleQuery
}