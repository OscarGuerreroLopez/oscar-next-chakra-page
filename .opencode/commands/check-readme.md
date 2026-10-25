---
description: Check if README needs updating based on recent changes
agent: build
---

Commits on this branch not yet on `main`:

!`git log --oneline origin/main..HEAD`

Files those commits touched:

!`git diff --stat origin/main...HEAD`

Read `README.md` and work out whether it is still accurate.

Do this:

- Read `README.md` in full, then read the actual diff for every commit above
  (`git diff origin/main...HEAD -- <path>`). Trust the diff over the commit
  message, messages are often stale or optimistic.
- Flag only real drift: wrong facts, missing stack entries, scripts that no
  longer exist or behave differently, directories and routes that moved or were
  added or deleted, documented commands that no longer run, gotchas that have
  been fixed at the same time as the change you are looking at.
- Ignore refactors that do not change what the README describes. Renaming
  internals, deleting dead code, and removing unused tooling are not README
  material unless the README named them.

Then report:

1. Whether the README needs updating, yes or no.
2. If yes, a short list of concrete discrepancies, each naming the README
   section and what is wrong with it.
3. The edit you would make for each, as before and after text.

Stop there. Do not edit `README.md` until I confirm. If I do ask for the edit,
format the file afterwards:

```bash
npx prettier --config .prettierrc --write README.md
```

Do not run `npm run prettier-format` or `npm run prettier-watch`, their glob
also matches `.next/**`.
