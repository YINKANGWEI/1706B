
import Mock, { Random } from 'mockjs'

let govList = Mock.mock({
    "list|450": [{
        "id|+1": 1,
        "name": "@url",
        "area": "@city(true)",
        "master": "@cname",
        "phone|10000000000-19999999999":1,
        "enable|1-2": true
    }]
})

export default govList