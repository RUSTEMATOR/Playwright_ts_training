import fs from 'fs';

class CustomMethods {

    generateRandomEmail(){
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        let email = 'big_zonda_'
        for (let i=0; i<10; i++){
            email += chars.charAt(Math.floor(Math.random() * chars.length))
        }
        email += '@roflan.com';
        return email;
    }

    writeToFile(fileName, content){
        fs.appendFileSync(fileName, '\n' + content);
    }
}

const customMethods = new CustomMethods();
export default customMethods;