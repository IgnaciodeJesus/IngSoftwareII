package org.acme.user;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;

import io.quarkus.hibernate.orm.panache.PanacheRepository;

@ApplicationScoped
public class UserService implements PanacheRepository<User> {

    @Transactional
    public User getUser(String email, String password, String role) {
        User user = find("email", email).firstResult();
        if (user == null) {
            return null;
        }

        if (password != user.password) {
            return null;
        }

        return user;
    }

    @Transactional
    public User addUser(String username, String email, String password, String role) {
        if(!userExists(username)){
            User user = new User(username, email, password,role);
            return user;
        }
        else{
            return null;
        }
    }

    private static boolean userExists(String username){
        return (User.count("username", username) > 0);
    }
}
