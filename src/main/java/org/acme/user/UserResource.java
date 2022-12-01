package org.acme.user;

import javax.annotation.security.PermitAll;
import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/api/user")
public class UserResource {

    @Inject
    UserService userService;

    @POST
    @PermitAll
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("login")
    public Response login(String email, String password, String role) {
        User user = userService.getUser(email, password, role);
        if (user == null) {
            return Response.ok(null).build();
        }
        return Response.ok(user).build();
    }

    @POST
    @PermitAll
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/register")
    public Response register(String username, String email, String password, String role) {
        User newUser = userService.addUser(username, email, password, role);
        if (newUser == null) {
            return Response.ok(null).build();
        }
        return Response.ok(newUser).build();

    }

}