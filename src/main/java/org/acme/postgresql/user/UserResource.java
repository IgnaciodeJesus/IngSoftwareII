package org.acme.postgresql.user;

import java.net.URI;
import java.net.URISyntaxException;
import javax.annotation.security.PermitAll;
import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

@Path("/api/user")
public class UserResource {

    @Inject
    UserService service;

    @POST
    @Path("/register")
    public Response register(User user) {
        service.addUser(user);
        return Response.ok(null).build();
    }
 
    @POST
    @Path("/login")
    public String login(@Context SecurityContext securityContext){
        return service.generateJWT(securityContext.getUserPrincipal().getName());  
    }

}
