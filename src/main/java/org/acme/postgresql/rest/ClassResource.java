package org.acme.postgresql.rest;

import java.net.URI;
import java.net.URISyntaxException;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

@Path("/api/class")
@ApplicationScoped
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ClassResource {

    @Inject
    Class clase;
  
    @GET
    @Path("/{course_id}")
    public Response list() {
      return Response.ok(clase.listAll()).build();
    }
  
    @POST
    public Response add(Post post) {
      post.persist();
      return Response.ok(Post.listAll()).build();
    }
  
    @DELETE
    public Response delete(Post post) {
      post.delete();;
      return Response.ok().build();
    }
