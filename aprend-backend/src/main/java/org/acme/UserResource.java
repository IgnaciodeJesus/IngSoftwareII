package org.acme;

import java.net.URI;

import javax.transaction.Transactional;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/signin")
public class UserResource {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String hello() {
        return "Hello from RESTEasy Reactive";
    }

    @POST
    @Transactional
    @Path("/login/{user}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response login(Student user) {
        User.persist(user);
        if(user.isPersistent()) {
            return Response.created(URI.create("/movies/"+ user.id)).build();
        }
        return Response.status(Response.Status.BAD_REQUEST).build();
    }


    @POST
    @Transactional
    @Path("/create/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response create(Student user) {
        User.persist(user);
        if(user.isPersistent()) {
            return Response.created(URI.create("/movies/"+ user.id)).build();
        }
        return Response.status(Response.Status.BAD_REQUEST).build();
    }
}