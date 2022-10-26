package org.acme.postgresql.models;

import javax.persistence.Entity;

import io.quarkus.hibernate.reactive.panache.PanacheEntity;

import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;

@Entity
public class Course extends PanacheEntity{
    public int course_id;
    public String course_name;
    public String course_description;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "course", fetch = FetchType.EAGER)
    private List<Class> classes;

    public String getCourse_Name() {
        return this.course_name;
    }

    public void setCourseName(String name) {
        this.course_name = name;
    }

    public String getCourse_Description() {
        return this.course_description;
    }

    public void setCourse_Description(String description) {
        this.course_description = description;
    }
}
