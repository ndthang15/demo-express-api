module.exports = (app) => {
    return {
      users: require('./users')(app)
    }
  };