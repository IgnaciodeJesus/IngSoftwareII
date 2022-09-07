package org.acme;

import io.quarkus.hibernate.reactive.panache.PanacheEntity;

import javax.persistence.Column;

public class User extends PanacheEntity {
    @Column(length = 100)
    public String title;

    @Column(length = 200)
    public String description;

    public String director;

    public String country;
}
