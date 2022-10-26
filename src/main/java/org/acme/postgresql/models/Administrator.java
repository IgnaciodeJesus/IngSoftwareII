package org.acme.postgresql.models;

import javax.persistence.Entity;

@Entity
public class Administrator extends User{
    
    public Administrator(int id, String username, String email) {
        super(id, username, email);
        this.id = id;
		this.username = username;
		this.email = email;
        this.strikes = 0;
    }
}
