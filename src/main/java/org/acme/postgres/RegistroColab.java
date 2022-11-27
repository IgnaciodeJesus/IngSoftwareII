package org.acme.postgres;

import javax.persistence.Cacheable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.*;

import io.quarkus.hibernate.reactive.panache.PanacheEntityBase;  


// Se usa PanacheEntityBase porque el id es Serial y se ingresa automaticamente
@Entity
@Cacheable
public class RegistroColab extends PanacheEntityBase {
	
	 @Id
	 @GeneratedValue(strategy=GenerationType.IDENTITY)
	 public long id;
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