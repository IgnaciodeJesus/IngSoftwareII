package org.acme.postgresql.models;

import javax.json.bind.annotation.JsonbTransient;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import io.quarkus.hibernate.reactive.panache.PanacheEntity;

@Entity
public class Class extends PanacheEntity{
    public int id;
    public String name;
    public String description;

    @ManyToOne
    @JoinColumn(name = "course_id")
    @JsonbTransient
    private Course course;


    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}
