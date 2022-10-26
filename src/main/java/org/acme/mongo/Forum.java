package org.acme.mongo;

import io.quarkus.mongodb.panache.PanacheMongoEntity;

public class Forum extends PanacheMongoEntity {

    public String username;
    public String forumcomment;

    public Forum() {

    }

    public Forum(String username, String forumcomment) {
        this.username = username;
        this.forumcomment = forumcomment;
    }
    
}