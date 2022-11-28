package org.acme.postgresql.user;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import io.quarkus.security.jpa.Username;
import io.quarkus.hibernate.reactive.panache.PanacheEntity;

@MappedSuperclass
public class User extends PanacheEntity{

    @GeneratedValue
    public int id;

    @Column(unique = true)
    @Username 
    public String username;

    @Column(name = 'email')
    public String email;

    @Column(name = 'password')
    @Password
    public String password;
    
    @Column(name = 'strikes')
    public int strikes;

    get
}  