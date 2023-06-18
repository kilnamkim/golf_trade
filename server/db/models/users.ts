import { Model, DataTypes } from "sequelize";

export default (sequelize: any) => sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
  }
})