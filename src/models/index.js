const EmailCode = require("./EmailCode");
const User = require("./User");

//EmilCode => userId
EmailCode.belongsTo(User) //userId
User.hasMany(EmailCode)