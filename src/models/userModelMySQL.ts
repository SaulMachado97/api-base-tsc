import sequelize from "../config/mysql";
import { DataTypes, TableHints } from "sequelize";

const userModelMySQL = sequelize.define('users', {
    user:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastname:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    year:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    profession:{
        type: DataTypes.STRING,
        defaultValue: 'N/A'
    }
},{
    tableName: "users",
    timestamps: false,
    version: false
});

export default userModelMySQL;

