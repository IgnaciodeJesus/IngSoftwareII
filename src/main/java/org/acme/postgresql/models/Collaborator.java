package org.acme.postgresql.models;


public class Collaborator extends User{
    
    public Collaborator(int id, String username, String email) {
        super(id, username, email);
        this.id = id;
		this.username = username;
		this.email = email;
        this.strikes = 0;
    }
}
