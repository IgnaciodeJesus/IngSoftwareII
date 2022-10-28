package org.acme.postgresql.models;

import javax.json.bind.annotation.JsonbTransient;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import io.quarkus.hibernate.reactive.panache.PanacheEntity;

@Entity
public class Class extends PanacheEntity{
    public int class_id;
    public String class_name;
    public String class_description;

    @ManyToOne
    @JoinColumn(name = "course_id")
    @JsonbTransient
    private Course course;

    public String getClass_Name() {
        return this.class_name;
    }

    public void setClassName(String name) {
        this.class_name = name;
    }

    public String getClass_Description() {
        return this.class_description;
    }

    public void setClass_Description(String description) {
        this.class_description = description;
    }

}
