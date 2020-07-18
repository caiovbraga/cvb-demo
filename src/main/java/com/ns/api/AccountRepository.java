package com.ns.api;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Component;

@Component
public interface AccountRepository extends MongoRepository<AccountModel ,String> {
}
