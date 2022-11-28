package org.acme.postgresql.classe;

public class ClassResource {
    @POST
    @Transactional
    @Produces(MediaType.APPLICATION_JSON)
    @RolesAllowed("collaborator")
    public Response create(Course course) {
        Course.persist(course);
        if(course.isPersistent()) {
            return Response.created(URI.create("/api/course/"+ movie.id)).build();
        }
        return Response.status(Response.Status.BAD_REQUEST).build();
    }
}
