import { Model, DataTypes } from 'sequelize';
import { compareSync, hash } from 'bcrypt';
import sequelize from '../config/connection';


class User extends Model {
  checkPassword(loginPw) {
    return compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
        type: DataTypes.INTEGER, 
        allowNull:false,
        autoIncrement: true,
        primaryKey: true 
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await hash(newUserData.password, 10);
        return newUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

export default User;