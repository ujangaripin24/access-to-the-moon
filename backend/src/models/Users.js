module.export = (sequelize, DataTypes) =>
    sequelize.default('User', {
        email:{
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    })