package org.acme.postgresql.rest;

import java.net.URI;
import java.net.URISyntaxException;


import javax.inject.Inject;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;
import javax.ws.rs.core.Response.Status;

import org.acme.postgresql.models.Course;
import org.acme.postgresql.service.CourseService;

import io.quarkus.hibernate.reactive.panache.PanacheEntityBase;
import io.smallrye.mutiny.Uni;

@Path("/api/course")
public class CourseResource {

    @Inject
    CourseService courseService;
    
    @POST
    public ResponseBuilder addCourse(Course post) {
      post.persist();
      return Response.status(Response.Status.CREATED).entity(post);
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Uni<PanacheEntityBase> getUser(@PathParam("id") String id) {
        return Course.findById(id);
    }

}
