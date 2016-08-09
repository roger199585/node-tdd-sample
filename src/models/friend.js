'use strict'

module.exports = (sequelize, DataTypes) => {
	var Friend = sequelize.define('Friend', {
		name: DataTypes.STRING,
		email: DataTypes.STRING,
		fbid: DataTypes.STRING,
	}, {
		classMethod: {
			associate: (models) => {

			}
		}
	})
	return Friend
}