package org.acme.postgresql.models;

import javax.persistence.MappedSuperclass;
import io.quarkus.hibernate.reactive.panache.PanacheEntity;

@MappedSuperclass
public class User extends PanacheEntity{

    public int id;
    public String username;
    public String email;
    public int strikes;
    
    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUserName() {
        return this.username;
    }

    public void setUserName(String username) {
        this.username = username;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getStrikes() {
        return this.strikes;
    }

    public void setStrikes(int strikes) {
        this.strikes = strikes;
    }

    public User(int id, String username, String email) {
		this.id = id;
		this.username = username;
		this.email = email;
        this.strikes = 0;
	}

}  