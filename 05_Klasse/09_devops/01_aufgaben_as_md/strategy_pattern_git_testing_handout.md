
# 7 Git Workflow

We want to make sure:

> Code can only be committed if tests pass.

We can enforce this using a **Git pre-commit hook**.

------------------------------------------------------------------------

# 8 Installing Husky

Install Husky:

    npm install husky --save-dev

Initialize:

    npx husky init

This creates:

    .husky/pre-commit

------------------------------------------------------------------------

# 9 Pre-Commit Hook

Edit `.husky/pre-commit`:

    #!/usr/bin/env sh

    npm test

------------------------------------------------------------------------

# 10 What Happens Now

When you run:

    git commit -m "my change"

Git will automatically execute:

    npm test

### If tests pass

    commit succeeds

### If tests fail

    commit is blocked

This prevents broken code from entering the repository.

------------------------------------------------------------------------

# 11 Example Workflow

    git add .
    git commit -m "add encryption strategy"

Output:

    RUN encryption.test.ts
    ✓ CaesarStrategy
    ✓ ReverseStrategy
    ✓ XorStrategy

    Tests passed
    Commit created

------------------------------------------------------------------------

