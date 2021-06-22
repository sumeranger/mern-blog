const configs = {
    development:{
        SERVER_URI:"localhost:5000/api",
    },
    production:{
        SERVER_URI:"https://mernblogsumeranger.herokuapp.com/api"
    },
};

module.exports.config = configs[process.env.NODE_ENV];