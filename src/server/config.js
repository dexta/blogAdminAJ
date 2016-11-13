var config = {};

config.server = {port:9005,ip:'0.0.0.0'};

config.database = {host:'localhost',db:'blogadmin',user:'blogadmin',pass:'blogadmin'};
config.nullSql = true;
config.nullSQLDB = {};
config.nullSQLDB.user = {
  "bob": {
    id: 1,
    provider: "local",
    provider_id: "noProvider",
    password: "$2a$10$A5FQiqGLANY8zf7MiiceteivbK5B2Uk0lRatifL4gSu9BE/dUykQ2",
    name: "bob",
    email: "bob@local",
    role: "ADMIN"
  },
  "alice": {
    id: 2,
    provider: "local",
    provider_id: "noProvider",
    password: "$2a$10$A5FQiqGLANY8zf7MiiceteivbK5B2Uk0lRatifL4gSu9BE/dUykQ2",
    name: "alice",
    email: "alice@local",
    role: "USER"
  }
};

config.passport = {};

config.bcrypt = {salt:'PZdbbU7895qUuoTU4riA8x34b4SWPl%kxcHcYp5IeHVSc3_dUtklh4G09ZvD85R5'};


module.exports = config;