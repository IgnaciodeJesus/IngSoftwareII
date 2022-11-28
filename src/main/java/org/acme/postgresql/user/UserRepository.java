package org.acme.postgresql.user;

import javax.transaction.Transactional;
import io.quarkus.elytron.security.common.BcryptUtil;

@Transactional
public static void addUser(User user){
    if(!userExists(user.username)){
        user.password = BcryptUtil.bcryptHash(user.password);
        user.persist();
    } else {

    }
}

public static String generateJWT(String username){
    User foundUser = User.find("username", username).firstResult();
    return TokenGenerator.generate(username, foundUser.roles);
}

private static boolean userExists(String username){
    return (User.count("username", username) > 0);
}