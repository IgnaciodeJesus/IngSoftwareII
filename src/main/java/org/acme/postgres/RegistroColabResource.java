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

import org.jboss.logging.Logger;

@Path("/registrocolaboradorback")
@ApplicationScoped
public class RegistroColabResource {
    private static final Logger LOG = Logger.getLogger(RegistroColabResource.class);
    @GET
    public Uni<List<RegistroColab>> get() {
        LOG.info("get");
        return RegistroColab.listAll(Sort.by("id","nombre","apellido","ocupacion","correo","password"));
    }

// registrocolab en minuscula es la tabla de la db

    @POST
    public Uni<Response> create(RegistroColab registrocolab) {
        LOG.info("post");
        return Panache.<RegistroColab>withTransaction(registrocolab::persist)
            .onItem().transform(inserted -> Response.created(URI.create("/registrocolaboradorback/" + inserted.id)).build());
}
}