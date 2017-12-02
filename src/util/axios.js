import axios from 'axios';

const Ajax = {};
Ajax.request = (url) => {
    return new Promise((resolve, reject) => {
            axios({
                method: "GET",
                // url: '/blog/' + url,
                url: '/qaz-' + url,
                headers: { 'Access-Control-Allow-Origin': '*' }
            }).then(function(res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });

    })
}

export default Ajax