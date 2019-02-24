const Sequelize = require('sequelize');
// const Seed = require('../seed.js');
const { username, password } = require('../config.js');


const sequal = new Sequelize('', username, password, {
  host: '172.17.0.2',
  port: '3306',
  dialect: 'mysql',
});

sequal.query('CREATE DATABASE player;');

const sequelize = new Sequelize('player', username, password, {
  host: '172.17.0.2',
  port: '3306',
  dialect: 'mysql',
});

const Song = sequelize.define('songplayer', {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  songname: {
    type: Sequelize.STRING(200),
    allowNull: false,
  },
  artistname: {
    type: Sequelize.STRING(32),
    allowNull: false,
  },
  imgurl: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  hashtag: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  timeelapsed: {
    type: Sequelize.DATE(),
    allowNull: false,
  },
  starttime: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
  },
  songlength: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
  },
  decibel: {
    type: Sequelize.INTEGER(3),
    allowNull: false,
  },
  comment: {
    type: Sequelize.STRING(200),
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING(32),
    allowNull: false,
  },
  songurl: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  commentimage: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
});

const getAllSongs = (songid) => {
  return Song.findAll({
    where: {
      id: songid,
    },
  });
};

const getSongImg = (songid) => {
  return Song.findAll({
    attributes: ['imgurl'],
    where: {
      id: songid,
    },
  });
};

const getSongUrl = (songid) => {
  return Song.findAll({
    attributes: ['songurl'],
    where: {
      id: songid,
    },
  });
};

const getAllComments = () => {
  return Song.findAll({
  });
};

const getSongCommentImgs = () => {
  return Song.findAll({
    attributes: ['commentimage'],
  });
};

module.exports = {
  getAllSongs, getSongImg, getAllComments, getSongCommentImgs, getSongUrl,
};
