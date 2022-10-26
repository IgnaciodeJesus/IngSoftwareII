package org.acme.mongo;

import java.net.URI;
import java.net.URISyntaxException;

import javax.inject.Inject;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.bson.types.ObjectId;

@Path("/forums")
public class ForumResource {

    @Inject
    ForumRepository repository;

    @GET
    @Path("/{id}")
    public Response get(@PathParam("id") String id) {
        Forum forum = repository.findById(new ObjectId(id));
        return Response.ok(forum).build();
    }

    @GET
    public Response get() {
        return Response.ok(repository.listAll()).build();
    }

    @GET
    @Path("/search/{username}")
    public Response search(@PathParam("username") String username) {
        Forum forum = repository.findByName(username);
        return forum != null ? Response.ok(forum).build()
                : Response.status(Status.NOT_FOUND).build();
    }

    @POST
    public Response create(Forum forum) throws URISyntaxException {
        repository.persist(forum);
        return Response.created(new URI("/" + forum.id)).build();
    }

    @PUT
    @Path("/{id}")
    public Response update(@PathParam("id") String id, Forum forum) {
        forum.id = new ObjectId(id);
        repository.update(forum);
        return Response.ok(forum).build();

    }

    @DELETE
    @Path("/{id}")
    public Response delete(@PathParam("id") String id) {
        Forum forum = repository.findById(new ObjectId(id));
        repository.delete(forum);
        return Response.noContent().build();
    }
}