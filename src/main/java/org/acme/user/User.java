package org.acme.user;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Table;
import io.quarkus.security.jpa.Roles;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
@Table(name = "user")
public class User extends PanacheEntity {

    @GeneratedValue
    public int id;

    @Column(unique = true, name = "username")
    public String username;

    @Column(name = "email")
    public String email;

    @Column(name = "password")
    public String password;
    
    @Column(name = "strikes")
    public int strikes;

    @Column(name = "roles")
    @Roles
    public String role;

    public User(String username, String email, String password, String role) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.strikes = 0;
        this.role = role;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    
    public int getStrikes() {
        return strikes;
    }

    public void setStrikes(int strikes) {
        this.strikes = strikes;
    }

}
