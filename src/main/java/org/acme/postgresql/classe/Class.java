package org.acme.postgresql.classe;

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

     

}
