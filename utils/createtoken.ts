import * as Jwt from 'jsonwebtoken'

export default function _createtoken(data: any) {
    if(!data){
        return false
    }

    console.log(process.env.JWT_SECRET);

    try {
        let token = Jwt.sign(data, process.env.JWT_SECRET as string, {expiresIn: '7d'})
        return token
    } catch (error) {
        console.log(error);
        return false
    }
}