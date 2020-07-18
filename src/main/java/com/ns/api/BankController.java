package com.ns.api;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
public class BankController {

    private final BankService bankService;

    public BankController(BankService bankService) {this.bankService = bankService;}

    @PostMapping("/accounts")
    public ResponseEntity addAccount(@RequestBody AccountRequest accountRequest) {
        log.info("Request : {}", accountRequest);
        bankService.saveAccount(accountRequest.toAccountModel());
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("/accounts")
    public List<AccountModel> getAllAccount() {
        return bankService.findAll();
    }
}
