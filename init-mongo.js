db.createUser(
    {
        user    : "contactFormApp",
        pwd     : "GT5tgfde",
        roles   : [
            {
                role    : "readWrite",
                db      : "contactFormDB"
            }
        ]
    }
)