package org.acme.postgres;

import java.net.URI;
import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.ws.rs.*;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

import io.quarkus.hibernate.reactive.panache.Panache;
import io.quarkus.panache.common.Sort;
import io.smallrye.mutiny.*;

@Path("/registrocolaboradorback")
@ApplicationScoped
public class FruitResource {
    @GET
    public Uni<List<Fruit>> get() {
        return Fruit.listAll(Sort.by("nombre","apellido","ocupacion","correo","password"));
    }






    @POST
public Uni<Response> create(Fruit fruit) {
    return Panache.<Fruit>withTransaction(fruit::persist)
            .onItem().transform(inserted -> Response.created(URI.create("/registrocolaboradorback/" + inserted.id)).build());
}
}