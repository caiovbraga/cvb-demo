package com.ns.api;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BankService {

    private final AccountRepository accountRepository;

    public BankService(AccountRepository accountRepository) {this.accountRepository = accountRepository;}

    public AccountModel saveAccount(AccountModel accountModel) {
        return accountRepository.save(accountModel);
    }

    public List<AccountModel> findAll() {
        return accountRepository.findAll();
    }
}
