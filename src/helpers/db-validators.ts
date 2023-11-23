import { RoleModel, UserModel } from '../models'

export const isRoleValid = async(role = '') => {
    const existRole = await RoleModel.findOne({ role});
    if (!existRole) {
        throw new Error(`The role ${ role } doesn't exist in DB`);
    }
}

export const isEmailValid = async (email = '') => {
    const existEmail = await UserModel.findOne({ email }); 
    if ( existEmail ) {
        throw new Error(`The email ${ email } is already registered`);
    }
}

export const isIdValid = async (id: string) => {
    const existId = await UserModel.findById(id); 
    if ( !existId ) {
        throw new Error(`The id ${ id } is not registered`);
    }
}