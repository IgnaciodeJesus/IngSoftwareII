package org.acme.postgresql.models;

import javax.persistence.Entity;

import io.quarkus.hibernate.reactive.panache.PanacheEntity;

import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;

@Entity
public class Course extends PanacheEntity{
    
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "course", fetch = FetchType.EAGER)
    private List<Class> classes;
}
