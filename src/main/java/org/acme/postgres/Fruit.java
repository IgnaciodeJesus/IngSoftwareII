package org.acme.postgres;

import javax.persistence.Cacheable;
import javax.persistence.Column;
import javax.persistence.Entity;

import io.quarkus.hibernate.reactive.panache.PanacheEntity;  

@Entity
@Cacheable
public class Fruit extends PanacheEntity {

	 @Column(length = 40, unique = true)
	 public String nombre;
	 @Column(length = 40, unique = true)
	 public String apellido;
	 @Column(length = 40, unique = true)
	 public String ocupacion;
	 @Column(length = 40, unique = true)
	 public String correo;
	 @Column(length = 40, unique = true)
	 public String password;
}