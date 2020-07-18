db.createUser(
  {
      user: "mongoadmin",
      pwd: "secret",
      roles: [
          {
              role: "readWrite",
              db: "Bank"
          }
      ]
  }
);

db.Bank.insert( {account:"ABC123", customer:"John Doe"} );
