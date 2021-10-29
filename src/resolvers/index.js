const mutations = require("./mutations");
const quiries = require("./queries");

module.exports = {
    Mutation:{
        ...mutations
    },
    Query:{
        ...quiries
    }
}
