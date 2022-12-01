package org.acme.postgres;

import javax.persistence.Cacheable;
import javax.persistence.Column;
import javax.persistence.Entity;

import io.quarkus.hibernate.reactive.panache.PanacheEntity;  

@Entity
@Cacheable
public class Subirform extends PanacheEntity {

	 @Column(length = 40, unique = true)
	 public String nombre;
	 @Column(length = 40, unique = true)
	 public String duracion;
	 @Column(length = 40, unique = true)
	 public String tipo;
	 @Column(length = 40, unique = true)
	 public String requisitos;
     @Column(length = 40, unique = true)
	 public String contenido;
}