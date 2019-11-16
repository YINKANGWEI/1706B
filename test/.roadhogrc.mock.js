import GovList from './mock/gov'
export default {
    "Get /api/list/govList": (req, res) => {
        res.send(GovList)
    }
};
