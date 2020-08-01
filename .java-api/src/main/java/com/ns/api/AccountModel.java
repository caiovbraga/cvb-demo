package com.ns.api;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@Builder
public class AccountModel {

    @Id
    private String id;
    private String account;
    private String customer;
}
