package com.ns.api;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
public class AccountRequest {
    private String account;
    private String customer;
    public AccountModel toAccountModel(){
       return AccountModel.builder().customer(this.customer).account(this.account).build();
    }
}
