package org.acme.mongo;
import java.util.List;

import javax.enterprise.context.ApplicationScoped;

import io.quarkus.mongodb.panache.PanacheMongoRepository;
import io.quarkus.panache.common.Sort;

@ApplicationScoped
public class ForumRepository implements PanacheMongoRepository<Forum> {

    public Forum findByName(String username) {
        return find("username", username).firstResult();
    }

    public List<Forum> findOrderedName() {
        return listAll(Sort.by("username"));
    }

}