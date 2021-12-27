const axios = require('axios');
const arg = process.argv.slice(2)


async function bypass(url) {
    return await axios.post(url).then(response => {
        return response
    })
}

bypass(arg[0]).then(response => {
    console.log(response.status)
})