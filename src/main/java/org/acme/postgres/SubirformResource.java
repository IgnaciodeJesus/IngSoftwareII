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

@Path("/formulariocolaborador")
@ApplicationScoped
public class SubirformResource {
    @GET
    public Uni<List<Subirform>> get() {
        return Subirform.listAll(Sort.by("nombre","duracion","tipo","requisitos","contenido"));
    }






    @POST
public Uni<Response> create(Subirform subirform) {
    return Panache.<Subirform>withTransaction(subirform::persist)
            .onItem().transform(inserted -> Response.created(URI.create("/formulariocolaborador/" + inserted.id)).build());
}
}