- Prisma supports the concept of seeding, which involves populating the database with initial data. The seed script typically contains code that creates and inserts data into the database tables. By running the seed srcipt, we can easily populate the database with predefined data, making it convenient for development and testing purposes.


- https://tutorend.com/tutorials/react-toastify-in-next-js-react-js

- https://react-icons.github.io/react-icons/

- https://supabase.com/docs/guides/auth/auth-helpers/auth-ui


- Prisma :-
    1. Once prisma schema is setup and the url is passed, run: `npx prisma migrate dev --name init`
    2. After the schema is reflected in supabase, run: `npx prisma generate`  . To access supabase via prisma 
    3. Seed the data. run: `npx prisma db seed`

    - You can use this `npx prisma migrate reset` to completely **reset** the schema
    - https://www.prisma.io/docs/orm/prisma-schema/data-model/relations

- Good commit practices :-
    ```
    feat -> feature
    fix -> bug fix
    docs -> documentation
    style -> formatting, lint stuff
    refactor -> code restructure without changing external behavior
    test -> adding missing tests
    chore -> maintenance
    init -> initial commit
    rearrange -> files moved, added, deleted etc
    update -> update code (versions, library compatibility)
    ```    