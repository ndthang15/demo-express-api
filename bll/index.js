module.exports = (app, dal) => {
  return {
    users: require('./users')(app, dal)
  }
};
