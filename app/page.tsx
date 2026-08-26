11:32:56.510	Starting dev server: pnpm run dev
11:32:56.932	> my-project@0.1.0 dev /vercel/share/v0-project
> next dev
11:32:57.935	▲ Next.js 16.3.3 (Turbopack)
- Local:         http://localhost:3000
- Network:       http://100.64.53.186:3000
- Environments: .env.development.local
✓ Ready in 715ms
✓ Running next.config.mjs took 27ms
11:32:59.038	- Experiments (use with caution):
  · serverActions
  ✓ transitionIndicator
11:38:40.560	⚠ Found a change in next.config.mjs. Restarting the server to apply the changes...
11:38:40.960	▲ Next.js 16.3.3 (Turbopack)
- Local:         http://localhost:3000
- Network:       http://100.64.53.186:3000
- Environments: .env.development.local
✓ Ready in 321ms
✓ Running next.config.mjs took 33ms
11:38:41.362	- Experiments (use with caution):
  · serverActions
  ✓ transitionIndicator
11:38:56.393	⨯ ./components/contact.tsx:4:1
Error: Export Instagram doesn't exist in target module
  [90m 2 |[0m
  [90m 3 |[0m [36mimport[0m { useState, [36mtype[0m [33mFormEvent[0m } [36mfrom[0m [32m'react'[0m
[31m[1m>[0m [90m 4 |[0m [36mimport[0m {
  [90m   |[0m [31m[1m^^^^^^^[0m
[31m[1m>[0m [90m 5 |[0m   [33mMail[0m,
  [90m   |[0m [31m[1m^^^^^^^[0m
[31m[1m>[0m [90m 6 |[0m   [33mInstagram[0m,
  [90m   |[0m [31m[1m^^^^^^^^^^^^[0m
[31m[1m>[0m [90m 7 |[0m   [33mYoutube[0m,
  [90m   |[0m [31m[1m^^^^^^^^^^[0m
[31m[1m>[0m [90m 8 |[0m   [33mLinkedin[0m,
  [90m   |[0m [31m[1m^^^^^^^^^^^[0m
[31m[1m>[0m [90m 9 |[0m   [33mArrowUpRight[0m,
  [90m   |[0m [31m[1m^^^^^^^^^^^^^^^[0m
[31m[1m>[0m [90m10 |[0m   [33mSend[0m,
  [90m   |[0m [31m[1m^^^^^^^[0m
[31m[1m>[0m [90m11 |[0m } [36mfrom[0m [32m'lucide-react'[0m
  [90m   |[0m [31m[1m^^^^^^^^^^^^^^^^^^^^^[0m
  [90m12 |[0m
  [90m13 |[0m [36mconst[0m socials = [
  [90m14 |[0m   { label: [32m'Instagram'[0m, href: [32m'#'[0m, icon: [33mInstagram[0m },

The export Instagram was not found in module [project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/lucide-react.mjs [app-client] (ecmascript).
Did you mean to import Star?
All exports of the module are statically known (It doesn't have dynamic exports). So it's known statically that the requested export doesn't exist.

Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx



./components/contact.tsx:4:1
Error: Export Instagram doesn't exist in target module
  [90m 2 |[0m
  [90m 3 |[0m [36mimport[0m { useState, [36mtype[0m [33mFormEvent[0m } [36mfrom[0m [32m'react'[0m
[31m[1m>[0m [90m 4 |[0m [36mimport[0m {
  [90m   |[0m [31m[1m^^^^^^^[0m
[31m[1m>[0m [90m 5 |[0m   [33mMail[0m,
  [90m   |[0m [31m[1m^^^^^^^[0m
[31m[1m>[0m [90m 6 |[0m   [33mInstagram[0m,
  [90m   |[0m [31m[1m^^^^^^^^^^^^[0m
[31m[1m>[0m [90m 7 |[0m   [33mYoutube[0m,
  [90m   |[0m [31m[1m^^^^^^^^^^[0m
[31m[1m>[0m [90m 8 |[0m   [33mLinkedin[0m,
  [90m   |[0m [31m[1m^^^^^^^^^^^[0m
[31m[1m>[0m [90m 9 |[0m   [33mArrowUpRight[0m,
  [90m   |[0m [31m[1m^^^^^^^^^^^^^^^[0m
[31m[1m>[0m [90m10 |[0m   [33mSend[0m,
  [90m   |[0m [31m[1m^^^^^^^[0m
[31m[1m>[0m [90m11 |[0m } [36mfrom[0m [32m'lucide-react'[0m
  [90m   |[0m [31m[1m^^^^^^^^^^^^^^^^^^^^^[0m
  [90m12 |[0m
  [90m13 |[0m [36mconst[0m socials = [
  [90m14 |[0m   { label: [32m'Instagram'[0m, href: [32m'#'[0m, icon: [33mInstagram[0m },

The export Instagram was not found in module [project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/lucide-react.mjs [app-ssr] (ecmascript).
Did you mean to import Star?
All exports of the module are statically known (It doesn't have dynamic exports). So it's known statically that the requested export doesn't exist.

Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx



./components/contact.tsx:4:1
Error: Export Linkedin doesn't exist in target module
  [90m 2 |[0m
  [90m 3 |[0m [36mimport[0m { useState, [36mtype[0m [33mFormEvent[0m } [36mfrom[0m [32m'react'[0m
[31m[1m>[0m [90m 4 |[0m [36mimport[0m {
  [90m   |[0m [31m[1m^^^^^^^[0m
[31m[1m>[0m [90m 5 |[0m   [33mMail[0m,
  [90m   |[0m [31m[1m^^^^^^^[0m
[31m[1m>[0m [90m 6 |[0m   [33mInstagram[0m,
  [90m   |[0m [31m[1m^^^^^^^^^^^^[0m
[31m[1m>[0m [90m 7 |[0m   [33mYoutube[0m,
  [90m   |[0m [31m[1m^^^^^^^^^^[0m
[31m[1m>[0m [90m 8 |[0m   [33mLinkedin[0m,
  [90m   |[0m [31m[1m^^^^^^^^^^^[0m
[31m[1m>[0m [90m 9 |[0m   [33mArrowUpRight[0m,
  [90m   |[0m [31m[1m^^^^^^^^^^^^^^^[0m
[31m[1m>[0m [90m10 |[0m   [33mSend[0m,
  [90m   |[0m [31m[1m^^^^^^^[0m
[31m[1m>[0m [90m11 |[0m } [36mfrom[0m [32m'lucide-react'[0m
  [90m   |[0m [31m[1m^^^^^^^^^^^^^^^^^^^^^[0m
  [90m12 |[0m
  [90m13 |[0m [36mconst[0m socials = [
  [90m14 |[0m   { label: [32m'Instagram'[0m, href: [32m'#'[0m, icon: [33mInstagram[0m },

The export Linkedin was not found in module [project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/lucide-react.mjs [app-client] (ecmascript).
Did you mean to import Link?
All exports of the module are statically known (It doesn't have dynamic exports). So it's known statically that the requested export doesn't exist.

Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx



./components/contact.tsx:4:1
Error: Export Linkedin doesn't exist in target module
  [90m 2 |[0m
  [90m 3 |[0m [36mimport[0m { useState, [36mtype[0m [33mFormEvent[0m } [36mfrom[0m [32m'react'[0m
[31m[1m>[0m [90m 4 |[0m [36mimport[0m {
  [90m   |[0m [31m[1m^^^^^^^[0m
[31m[1m>[0m [90m 5 |[0m   [33mMail[0m,
  [90m   |[0m [31m[1m^^^^^^^[0m
[31m[1m>[0m [90m 6 |[0m   [33mInstagram[0m,
  [90m   |[0m [31m[1m^^^^^^^^^^^^[0m
[31m[1m>[0m [90m 7 |[0m   [33mYoutube[0m,
  [90m   |[0m [31m[1m^^^^^^^^^^[0m
[31m[1m>[0m [90m 8 |[0m   [33mLinkedin[0m,
  [90m   |[0m [31m[1m^^^^^^^^^^^[0m
[31m[1m>[0m [90m 9 |[0m   [33mArrowUpRight[0m,
  [90m   |[0m [31m[1m^^^^^^^^^^^^^^^[0m
[31m[1m>[0m [90m10 |[0m   [33mSend[0m,
  [90m   |[0m [31m[1m^^^^^^^[0m
[31m[1m>[0m [90m11 |[0m } [36mfrom[0m [32m'lucide-react'[0m
  [90m   |[0m [31m[1m^^^^^^^^^^^^^^^^^^^^^[0m
  [90m12 |[0m
  [90m13 |[0m [36mconst[0m socials = [
  [90m14 |[0m   { label: [32m'Instagram'[0m, href: [32m'#'[0m, icon: [33mInstagram[0m },

The export Linkedin was not found in module [project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/lucide-react.mjs [app-ssr] (ecmascript).
Did you mean to import Link?
All exports of the module are statically known (It doesn't have dynamic exports). So it's known statically that the requested export doesn't exist.

Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx



./components/contact.tsx:4:1
Error: Export Youtube doesn't exist in target module
  [90m 2 |[0m
  [90m 3 |[0m [36mimport[0m { useState, [36mtype[0m [33mFormEvent[0m } [36mfrom[0m [32m'react'[0m
[31m[1m>[0m [90m 4 |[0m [36mimport[0m {
  [90m   |[0m [31m[1m^^^^^^^[0m
[31m[1m>[0m [90m 5 |[0m   [33mMail[0m,
  [90m   |[0m [31m[1m^^^^^^^[0m
[31m[1m>[0m [90m 6 |[0m   [33mInstagram[0m,
  [90m   |[0m [31m[1m^^^^^^^^^^^^[0m
[31m[1m>[0m [90m 7 |[0m   [33mYoutube[0m,
  [90m   |[0m [31m[1m^^^^^^^^^^[0m
[31m[1m>[0m [90m 8 |[0m   [33mLinkedin[0m,
  [90m   |[0m [31m[1m^^^^^^^^^^^[0m
[31m[1m>[0m [90m 9 |[0m   [33mArrowUpRight[0m,
  [90m   |[0m [31m[1m^^^^^^^^^^^^^^^[0m
[31m[1m>[0m [90m10 |[0m   [33mSend[0m,
  [90m   |[0m [31m[1m^^^^^^^[0m
[31m[1m>[0m [90m11 |[0m } [36mfrom[0m [32m'lucide-react'[0m
  [90m   |[0m [31m[1m^^^^^^^^^^^^^^^^^^^^^[0m
  [90m12 |[0m
  [90m13 |[0m [36mconst[0m socials = [
  [90m14 |[0m   { label: [32m'Instagram'[0m, href: [32m'#'[0m, icon: [33mInstagram[0m },

The export Youtube was not found in module [project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/lucide-react.mjs [app-client] (ecmascript).
Did you mean to import Route?
All exports of the module are statically known (It doesn't have dynamic exports). So it's known statically that the requested export doesn't exist.

Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx



./components/contact.tsx:4:1
Error: Export Youtube doesn't exist in target module
  [90m 2 |[0m
  [90m 3 |[0m [36mimport[0m { useState, [36mtype[0m [33mFormEvent[0m } [36mfrom[0m [32m'react'[0m
[31m[1m>[0m [90m 4 |[0m [36mimport[0m {
  [90m   |[0m [31m[1m^^^^^^^[0m
[31m[1m>[0m [90m 5 |[0m   [33mMail[0m,
  [90m   |[0m [31m[1m^^^^^^^[0m
[31m[1m>[0m [90m 6 |[0m   [33mInstagram[0m,
  [90m   |[0m [31m[1m^^^^^^^^^^^^[0m
[31m[1m>[0m [90m 7 |[0m   [33mYoutube[0m,
  [90m   |[0m [31m[1m^^^^^^^^^^[0m
[31m[1m>[0m [90m 8 |[0m   [33mLinkedin[0m,
  [90m   |[0m [31m[1m^^^^^^^^^^^[0m
[31m[1m>[0m [90m 9 |[0m   [33mArrowUpRight[0m,
  [90m   |[0m [31m[1m^^^^^^^^^^^^^^^[0m
[31m[1m>[0m [90m10 |[0m   [33mSend[0m,
  [90m   |[0m [31m[1m^^^^^^^[0m
[31m[1m>[0m [90m11 |[0m } [36mfrom[0m [32m'lucide-react'[0m
  [90m   |[0m [31m[1m^^^^^^^^^^^^^^^^^^^^^[0m
  [90m12 |[0m
  [90m13 |[0m [36mconst[0m socials = [
  [90m14 |[0m   { label: [32m'Instagram'[0m, href: [32m'#'[0m, icon: [33mInstagram[0m },

The export Youtube was not found in module [project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/lucide-react.mjs [app-ssr] (ecmascript).
Did you mean to import Route?
All exports of the module are statically known (It doesn't have dynamic exports). So it's known statically that the requested export doesn't exist.

Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx
11:38:57.398	GET / 500 in 1062ms (next.js: 943ms, application-code: 119ms)
11:38:57.799	Uncaught Error: ./components/contact.tsx:4:1
Error: Export Instagram doesn't exist in target module
   2 |
   3 | import { useState, type FormEvent } from 'react'
>  4 | import {
     | ^^^^^^^
>  5 |   Mail,
     | ^^^^^^^
>  6 |   Instagram,
     | ^^^^^^^^^^^^
>  7 |   Youtube,
     | ^^^^^^^^^^
>  8 |   Linkedin,
     | ^^^^^^^^^^^
>  9 |   ArrowUpRight,
     | ^^^^^^^^^^^^^^^
> 10 |   Send,
     | ^^^^^^^
> 11 | } from 'lucide-react'
     | ^^^^^^^^^^^^^^^^^^^^^
  12 |
  13 | const socials = [
  14 |   { label: 'Instagram', href: '#', icon: Instagram },

The export Instagram was not found in module [project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/lucide-react.mjs [app-client] (ecmascript).
Did you mean to import Star?
All exports of the module are statically known (It doesn't have dynamic exports). So it's known statically that the requested export doesn't exist.

Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx


    at <unknown> (Error: ./components/contact.tsx:4:1)
    at <unknown> (Error: (./components/contact.tsx:4:1)
[browser] ./components/contact.tsx:4:1
Error: Export Instagram doesn't exist in target module
   2 |
   3 | import { useState, type FormEvent } from 'react'
>  4 | import {
     | ^^^^^^^
>  5 |   Mail,
     | ^^^^^^^
>  6 |   Instagram,
     | ^^^^^^^^^^^^
>  7 |   Youtube,
     | ^^^^^^^^^^
>  8 |   Linkedin,
     | ^^^^^^^^^^^
>  9 |   ArrowUpRight,
     | ^^^^^^^^^^^^^^^
> 10 |   Send,
     | ^^^^^^^
> 11 | } from 'lucide-react'
     | ^^^^^^^^^^^^^^^^^^^^^
  12 |
  13 | const socials = [
  14 |   { label: 'Instagram', href: '#', icon: Instagram },

The export Instagram was not found in module [project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/lucide-react.mjs [app-client] (ecmascript).
Did you mean to import Star?
All exports of the module are statically known (It doesn't have dynamic exports). So it's known statically that the requested export doesn't exist.

Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx 
[browser] ./components/contact.tsx:4:1
Error: Export Instagram doesn't exist in target module
   2 |
   3 | import { useState, type FormEvent } from 'react'
>  4 | import {
     | ^^^^^^^
>  5 |   Mail,
     | ^^^^^^^
>  6 |   Instagram,
     | ^^^^^^^^^^^^
>  7 |   Youtube,
     | ^^^^^^^^^^
>  8 |   Linkedin,
     | ^^^^^^^^^^^
>  9 |   ArrowUpRight,
     | ^^^^^^^^^^^^^^^
> 10 |   Send,
     | ^^^^^^^
> 11 | } from 'lucide-react'
     | ^^^^^^^^^^^^^^^^^^^^^
  12 |
  13 | const socials = [
  14 |   { label: 'Instagram', href: '#', icon: Instagram },

The export Instagram was not found in module [project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/lucide-react.mjs [app-ssr] (ecmascript).
Did you mean to import Star?
All exports of the module are statically known (It doesn't have dynamic exports). So it's known statically that the requested export doesn't exist.

Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx 
[browser] ./components/contact.tsx:4:1
Error: Export Linkedin doesn't exist in target module
   2 |
   3 | import { useState, type FormEvent } from 'react'
>  4 | import {
     | ^^^^^^^
>  5 |   Mail,
     | ^^^^^^^
>  6 |   Instagram,
     | ^^^^^^^^^^^^
>  7 |   Youtube,
     | ^^^^^^^^^^
>  8 |   Linkedin,
     | ^^^^^^^^^^^
>  9 |   ArrowUpRight,
     | ^^^^^^^^^^^^^^^
> 10 |   Send,
     | ^^^^^^^
> 11 | } from 'lucide-react'
     | ^^^^^^^^^^^^^^^^^^^^^
  12 |
  13 | const socials = [
  14 |   { label: 'Instagram', href: '#', icon: Instagram },

The export Linkedin was not found in module [project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/lucide-react.mjs [app-client] (ecmascript).
Did you mean to import Link?
All exports of the module are statically known (It doesn't have dynamic exports). So it's known statically that the requested export doesn't exist.

Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx 
[browser] ./components/contact.tsx:4:1
Error: Export Linkedin doesn't exist in target module
   2 |
   3 | import { useState, type FormEvent } from 'react'
>  4 | import {
     | ^^^^^^^
>  5 |   Mail,
     | ^^^^^^^
>  6 |   Instagram,
     | ^^^^^^^^^^^^
>  7 |   Youtube,
     | ^^^^^^^^^^
>  8 |   Linkedin,
     | ^^^^^^^^^^^
>  9 |   ArrowUpRight,
     | ^^^^^^^^^^^^^^^
> 10 |   Send,
     | ^^^^^^^
> 11 | } from 'lucide-react'
     | ^^^^^^^^^^^^^^^^^^^^^
  12 |
  13 | const socials = [
  14 |   { label: 'Instagram', href: '#', icon: Instagram },

The export Linkedin was not found in module [project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/lucide-react.mjs [app-ssr] (ecmascript).
Did you mean to import Link?
All exports of the module are statically known (It doesn't have dynamic exports). So it's known statically that the requested export doesn't exist.

Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx 
[browser] ./components/contact.tsx:4:1
Error: Export Youtube doesn't exist in target module
   2 |
   3 | import { useState, type FormEvent } from 'react'
>  4 | import {
     | ^^^^^^^
>  5 |   Mail,
     | ^^^^^^^
>  6 |   Instagram,
     | ^^^^^^^^^^^^
>  7 |   Youtube,
     | ^^^^^^^^^^
>  8 |   Linkedin,
     | ^^^^^^^^^^^
>  9 |   ArrowUpRight,
     | ^^^^^^^^^^^^^^^
> 10 |   Send,
     | ^^^^^^^
> 11 | } from 'lucide-react'
     | ^^^^^^^^^^^^^^^^^^^^^
  12 |
  13 | const socials = [
  14 |   { label: 'Instagram', href: '#', icon: Instagram },

The export Youtube was not found in module [project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/lucide-react.mjs [app-client] (ecmascript).
Did you mean to import Route?
All exports of the module are statically known (It doesn't have dynamic exports). So it's known statically that the requested export doesn't exist.

Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx 
[browser] ./components/contact.tsx:4:1
Error: Export Youtube doesn't exist in target module
   2 |
   3 | import { useState, type FormEvent } from 'react'
>  4 | import {
     | ^^^^^^^
>  5 |   Mail,
     | ^^^^^^^
>  6 |   Instagram,
     | ^^^^^^^^^^^^
>  7 |   Youtube,
     | ^^^^^^^^^^
>  8 |   Linkedin,
     | ^^^^^^^^^^^
>  9 |   ArrowUpRight,
     | ^^^^^^^^^^^^^^^
> 10 |   Send,
     | ^^^^^^^
> 11 | } from 'lucide-react'
     | ^^^^^^^^^^^^^^^^^^^^^
  12 |
  13 | const socials = [
  14 |   { label: 'Instagram', href: '#', icon: Instagram },

The export Youtube was not found in module [project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/lucide-react.mjs [app-ssr] (ecmascript).
Did you mean to import Route?
All exports of the module are statically known (It doesn't have dynamic exports). So it's known statically that the requested export doesn't exist.

Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx
11:38:57.898	./components/contact.tsx:4:1
Error: Export Instagram doesn't exist in target module
   2 |
   3 | import { useState, type FormEvent } from 'react'
>  4 | import {
     | ^^^^^^^
>  5 |   Mail,
     | ^^^^^^^
>  6 |   Instagram,
     | ^^^^^^^^^^^^
>  7 |   Youtube,
     | ^^^^^^^^^^
>  8 |   Linkedin,
     | ^^^^^^^^^^^
>  9 |   ArrowUpRight,
     | ^^^^^^^^^^^^^^^
> 10 |   Send,
     | ^^^^^^^
> 11 | } from 'lucide-react'
     | ^^^^^^^^^^^^^^^^^^^^^
  12 |
  13 | const socials = [
  14 |   { label: 'Instagram', href: '#', icon: Instagram },

The export Instagram was not found in module [project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/lucide-react.mjs [app-client] (ecmascript).
Did you mean to import Star?
All exports of the module are statically known (It doesn't have dynamic exports). So it's known statically that the requested export doesn't exist.

Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx 
[browser] ./components/contact.tsx:4:1
Error: Export Instagram doesn't exist in target module
   2 |
   3 | import { useState, type FormEvent } from 'react'
>  4 | import {
     | ^^^^^^^
>  5 |   Mail,
     | ^^^^^^^
>  6 |   Instagram,
     | ^^^^^^^^^^^^
>  7 |   Youtube,
     | ^^^^^^^^^^
>  8 |   Linkedin,
     | ^^^^^^^^^^^
>  9 |   ArrowUpRight,
     | ^^^^^^^^^^^^^^^
> 10 |   Send,
     | ^^^^^^^
> 11 | } from 'lucide-react'
     | ^^^^^^^^^^^^^^^^^^^^^
  12 |
  13 | const socials = [
  14 |   { label: 'Instagram', href: '#', icon: Instagram },

The export Instagram was not found in module [project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/lucide-react.mjs [app-ssr] (ecmascript).
Did you mean to import Star?
All exports of the module are statically known (It doesn't have dynamic exports). So it's known statically that the requested export doesn't exist.

Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx 
[browser] ./components/contact.tsx:4:1
Error: Export Linkedin doesn't exist in target module
   2 |
   3 | import { useState, type FormEvent } from 'react'
>  4 | import {
     | ^^^^^^^
>  5 |   Mail,
     | ^^^^^^^
>  6 |   Instagram,
     | ^^^^^^^^^^^^
>  7 |   Youtube,
     | ^^^^^^^^^^
>  8 |   Linkedin,
     | ^^^^^^^^^^^
>  9 |   ArrowUpRight,
     | ^^^^^^^^^^^^^^^
> 10 |   Send,
     | ^^^^^^^
> 11 | } from 'lucide-react'
     | ^^^^^^^^^^^^^^^^^^^^^
  12 |
  13 | const socials = [
  14 |   { label: 'Instagram', href: '#', icon: Instagram },

The export Linkedin was not found in module [project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/lucide-react.mjs [app-client] (ecmascript).
Did you mean to import Link?
All exports of the module are statically known (It doesn't have dynamic exports). So it's known statically that the requested export doesn't exist.

Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx 
[browser] ./components/contact.tsx:4:1
Error: Export Linkedin doesn't exist in target module
   2 |
   3 | import { useState, type FormEvent } from 'react'
>  4 | import {
     | ^^^^^^^
>  5 |   Mail,
     | ^^^^^^^
>  6 |   Instagram,
     | ^^^^^^^^^^^^
>  7 |   Youtube,
     | ^^^^^^^^^^
>  8 |   Linkedin,
     | ^^^^^^^^^^^
>  9 |   ArrowUpRight,
     | ^^^^^^^^^^^^^^^
> 10 |   Send,
     | ^^^^^^^
> 11 | } from 'lucide-react'
     | ^^^^^^^^^^^^^^^^^^^^^
  12 |
  13 | const socials = [
  14 |   { label: 'Instagram', href: '#', icon: Instagram },

The export Linkedin was not found in module [project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/lucide-react.mjs [app-ssr] (ecmascript).
Did you mean to import Link?
All exports of the module are statically known (It doesn't have dynamic exports). So it's known statically that the requested export doesn't exist.

Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx 
[browser] ./components/contact.tsx:4:1
Error: Export Youtube doesn't exist in target module
   2 |
   3 | import { useState, type FormEvent } from 'react'
>  4 | import {
     | ^^^^^^^
>  5 |   Mail,
     | ^^^^^^^
>  6 |   Instagram,
     | ^^^^^^^^^^^^
>  7 |   Youtube,
     | ^^^^^^^^^^
>  8 |   Linkedin,
     | ^^^^^^^^^^^
>  9 |   ArrowUpRight,
     | ^^^^^^^^^^^^^^^
> 10 |   Send,
     | ^^^^^^^
> 11 | } from 'lucide-react'
     | ^^^^^^^^^^^^^^^^^^^^^
  12 |
  13 | const socials = [
  14 |   { label: 'Instagram', href: '#', icon: Instagram },

The export Youtube was not found in module [project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/lucide-react.mjs [app-client] (ecmascript).
Did you mean to import Route?
All exports of the module are statically known (It doesn't have dynamic exports). So it's known statically that the requested export doesn't exist.

Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx 
[browser] ./components/contact.tsx:4:1
Error: Export Youtube doesn't exist in target module
   2 |
   3 | import { useState, type FormEvent } from 'react'
>  4 | import {
     | ^^^^^^^
>  5 |   Mail,
     | ^^^^^^^
>  6 |   Instagram,
     | ^^^^^^^^^^^^
>  7 |   Youtube,
     | ^^^^^^^^^^
>  8 |   Linkedin,
     | ^^^^^^^^^^^
>  9 |   ArrowUpRight,
     | ^^^^^^^^^^^^^^^
> 10 |   Send,
     | ^^^^^^^
> 11 | } from 'lucide-react'
     | ^^^^^^^^^^^^^^^^^^^^^
  12 |
  13 | const socials = [
  14 |   { label: 'Instagram', href: '#', icon: Instagram },

The export Youtube was not found in module [project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/lucide-react.mjs [app-ssr] (ecmascript).
Did you mean to import Route?
All exports of the module are statically known (It doesn't have dynamic exports). So it's known statically that the requested export doesn't exist.

Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx 
[browser] ./components/contact.tsx:4:1
Error: Export Instagram doesn't exist in target module
   2 |
   3 | import { useState, type FormEvent } from 'react'
>  4 | import {
     | ^^^^^^^
>  5 |   Mail,
     | ^^^^^^^
>  6 |   Instagram,
     | ^^^^^^^^^^^^
>  7 |   Youtube,
     | ^^^^^^^^^^
>  8 |   Linkedin,
     | ^^^^^^^^^^^
>  9 |   ArrowUpRight,
     | ^^^^^^^^^^^^^^^
> 10 |   Send,
     | ^^^^^^^
> 11 | } from 'lucide-react'
     | ^^^^^^^^^^^^^^^^^^^^^
  12 |
  13 | const socials = [
  14 |   { label: 'Instagram', href: '#', icon: Instagram },

The export Instagram was not found in module [project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/lucide-react.mjs [app-client] (ecmascript).
Did you mean to import Star?
All exports of the module are statically known (It doesn't have dynamic exports). So it's known statically that the requested export doesn't exist.

Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx 
[browser] ./components/contact.tsx:4:1
Error: Export Instagram doesn't exist in target module
   2 |
   3 | import { useState, type FormEvent } from 'react'
>  4 | import {
     | ^^^^^^^
>  5 |   Mail,
     | ^^^^^^^
>  6 |   Instagram,
     | ^^^^^^^^^^^^
>  7 |   Youtube,
     | ^^^^^^^^^^
>  8 |   Linkedin,
     | ^^^^^^^^^^^
>  9 |   ArrowUpRight,
     | ^^^^^^^^^^^^^^^
> 10 |   Send,
     | ^^^^^^^
> 11 | } from 'lucide-react'
     | ^^^^^^^^^^^^^^^^^^^^^
  12 |
  13 | const socials = [
  14 |   { label: 'Instagram', href: '#', icon: Instagram },

The export Instagram was not found in module [project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/lucide-react.mjs [app-ssr] (ecmascript).
Did you mean to import Star?
All exports of the module are statically known (It doesn't have dynamic exports). So it's known statically that the requested export doesn't exist.

Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx 
[browser] ./components/contact.tsx:4:1
Error: Export Linkedin doesn't exist in target module
   2 |
   3 | import { useState, type FormEvent } from 'react'
>  4 | import {
     | ^^^^^^^
>  5 |   Mail,
     | ^^^^^^^
>  6 |   Instagram,
     | ^^^^^^^^^^^^
>  7 |   Youtube,
     | ^^^^^^^^^^
>  8 |   Linkedin,
     | ^^^^^^^^^^^
>  9 |   ArrowUpRight,
     | ^^^^^^^^^^^^^^^
> 10 |   Send,
     | ^^^^^^^
> 11 | } from 'lucide-react'
     | ^^^^^^^^^^^^^^^^^^^^^
  12 |
  13 | const socials = [
  14 |   { label: 'Instagram', href: '#', icon: Instagram },

The export Linkedin was not found in module [project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/lucide-react.mjs [app-client] (ecmascript).
Did you mean to import Link?
All exports of the module are statically known (It doesn't have dynamic exports). So it's known statically that the requested export doesn't exist.

Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx 
[browser] ./components/contact.tsx:4:1
Error: Export Linkedin doesn't exist in target module
   2 |
   3 | import { useState, type FormEvent } from 'react'
>  4 | import {
     | ^^^^^^^
>  5 |   Mail,
     | ^^^^^^^
>  6 |   Instagram,
     | ^^^^^^^^^^^^
>  7 |   Youtube,
     | ^^^^^^^^^^
>  8 |   Linkedin,
     | ^^^^^^^^^^^
>  9 |   ArrowUpRight,
     | ^^^^^^^^^^^^^^^
> 10 |   Send,
     | ^^^^^^^
> 11 | } from 'lucide-react'
     | ^^^^^^^^^^^^^^^^^^^^^
  12 |
  13 | const socials = [
  14 |   { label: 'Instagram', href: '#', icon: Instagram },

The export Linkedin was not found in module [project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/lucide-react.mjs [app-ssr] (ecmascript).
Did you mean to import Link?
All exports of the module are statically known (It doesn't have dynamic exports). So it's known statically that the requested export doesn't exist.

Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx 
[browser] ./components/contact.tsx:4:1
Error: Export Youtube doesn't exist in target module
   2 |
   3 | import { useState, type FormEvent } from 'react'
>  4 | import {
     | ^^^^^^^
>  5 |   Mail,
     | ^^^^^^^
>  6 |   Instagram,
     | ^^^^^^^^^^^^
>  7 |   Youtube,
     | ^^^^^^^^^^
>  8 |   Linkedin,
     | ^^^^^^^^^^^
>  9 |   ArrowUpRight,
     | ^^^^^^^^^^^^^^^
> 10 |   Send,
     | ^^^^^^^
> 11 | } from 'lucide-react'
     | ^^^^^^^^^^^^^^^^^^^^^
  12 |
  13 | const socials = [
  14 |   { label: 'Instagram', href: '#', icon: Instagram },

The export Youtube was not found in module [project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/lucide-react.mjs [app-client] (ecmascript).
Did you mean to import Route?
All exports of the module are statically known (It doesn't have dynamic exports). So it's known statically that the requested export doesn't exist.

Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx 
[browser] ./components/contact.tsx:4:1
Error: Export Youtube doesn't exist in target module
   2 |
   3 | import { useState, type FormEvent } from 'react'
>  4 | import {
     | ^^^^^^^
>  5 |   Mail,
     | ^^^^^^^
>  6 |   Instagram,
     | ^^^^^^^^^^^^
>  7 |   Youtube,
     | ^^^^^^^^^^
>  8 |   Linkedin,
     | ^^^^^^^^^^^
>  9 |   ArrowUpRight,
     | ^^^^^^^^^^^^^^^
> 10 |   Send,
     | ^^^^^^^
> 11 | } from 'lucide-react'
     | ^^^^^^^^^^^^^^^^^^^^^
  12 |
  13 | const socials = [
  14 |   { label: 'Instagram', href: '#', icon: Instagram },

The export Youtube was not found in module [project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/lucide-react.mjs [app-ssr] (ecmascript).
Did you mean to import Route?
All exports of the module are statically known (It doesn't have dynamic exports). So it's known statically that the requested export doesn't exist.

Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx
11:38:57.999	./components/contact.tsx:4:1
Error: Export Instagram doesn't exist in target module
   2 |
   3 | import { useState, type FormEvent } from 'react'
>  4 | import {
     | ^^^^^^^
>  5 |   Mail,
     | ^^^^^^^
>  6 |   Instagram,
     | ^^^^^^^^^^^^
>  7 |   Youtube,
     | ^^^^^^^^^^
>  8 |   Linkedin,
     | ^^^^^^^^^^^
>  9 |   ArrowUpRight,
     | ^^^^^^^^^^^^^^^
> 10 |   Send,
     | ^^^^^^^
> 11 | } from 'lucide-react'
     | ^^^^^^^^^^^^^^^^^^^^^
  12 |
  13 | const socials = [
  14 |   { label: 'Instagram', href: '#', icon: Instagram },

The export Instagram was not found in module [project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/lucide-react.mjs [app-client] (ecmascript).
Did you mean to import Star?
All exports of the module are statically known (It doesn't have dynamic exports). So it's known statically that the requested export doesn't exist.

Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx 
[browser] ./components/contact.tsx:4:1
Error: Export Instagram doesn't exist in target module
   2 |
   3 | import { useState, type FormEvent } from 'react'
>  4 | import {
     | ^^^^^^^
>  5 |   Mail,
     | ^^^^^^^
>  6 |   Instagram,
     | ^^^^^^^^^^^^
>  7 |   Youtube,
     | ^^^^^^^^^^
>  8 |   Linkedin,
     | ^^^^^^^^^^^
>  9 |   ArrowUpRight,
     | ^^^^^^^^^^^^^^^
> 10 |   Send,
     | ^^^^^^^
> 11 | } from 'lucide-react'
     | ^^^^^^^^^^^^^^^^^^^^^
  12 |
  13 | const socials = [
  14 |   { label: 'Instagram', href: '#', icon: Instagram },

The export Instagram was not found in module [project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/lucide-react.mjs [app-ssr] (ecmascript).
Did you mean to import Star?
All exports of the module are statically known (It doesn't have dynamic exports). So it's known statically that the requested export doesn't exist.

Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx 
[browser] ./components/contact.tsx:4:1
Error: Export Linkedin doesn't exist in target module
   2 |
   3 | import { useState, type FormEvent } from 'react'
>  4 | import {
     | ^^^^^^^
>  5 |   Mail,
     | ^^^^^^^
>  6 |   Instagram,
     | ^^^^^^^^^^^^
>  7 |   Youtube,
     | ^^^^^^^^^^
>  8 |   Linkedin,
     | ^^^^^^^^^^^
>  9 |   ArrowUpRight,
     | ^^^^^^^^^^^^^^^
> 10 |   Send,
     | ^^^^^^^
> 11 | } from 'lucide-react'
     | ^^^^^^^^^^^^^^^^^^^^^
  12 |
  13 | const socials = [
  14 |   { label: 'Instagram', href: '#', icon: Instagram },

The export Linkedin was not found in module [project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/lucide-react.mjs [app-client] (ecmascript).
Did you mean to import Link?
All exports of the module are statically known (It doesn't have dynamic exports). So it's known statically that the requested export doesn't exist.

Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx 
[browser] ./components/contact.tsx:4:1
Error: Export Linkedin doesn't exist in target module
   2 |
   3 | import { useState, type FormEvent } from 'react'
>  4 | import {
     | ^^^^^^^
>  5 |   Mail,
     | ^^^^^^^
>  6 |   Instagram,
     | ^^^^^^^^^^^^
>  7 |   Youtube,
     | ^^^^^^^^^^
>  8 |   Linkedin,
     | ^^^^^^^^^^^
>  9 |   ArrowUpRight,
     | ^^^^^^^^^^^^^^^
> 10 |   Send,
     | ^^^^^^^
> 11 | } from 'lucide-react'
     | ^^^^^^^^^^^^^^^^^^^^^
  12 |
  13 | const socials = [
  14 |   { label: 'Instagram', href: '#', icon: Instagram },

The export Linkedin was not found in module [project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/lucide-react.mjs [app-ssr] (ecmascript).
Did you mean to import Link?
All exports of the module are statically known (It doesn't have dynamic exports). So it's known statically that the requested export doesn't exist.

Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx 
[browser] ./components/contact.tsx:4:1
Error: Export Youtube doesn't exist in target module
   2 |
   3 | import { useState, type FormEvent } from 'react'
>  4 | import {
     | ^^^^^^^
>  5 |   Mail,
     | ^^^^^^^
>  6 |   Instagram,
     | ^^^^^^^^^^^^
>  7 |   Youtube,
     | ^^^^^^^^^^
>  8 |   Linkedin,
     | ^^^^^^^^^^^
>  9 |   ArrowUpRight,
     | ^^^^^^^^^^^^^^^
> 10 |   Send,
     | ^^^^^^^
> 11 | } from 'lucide-react'
     | ^^^^^^^^^^^^^^^^^^^^^
  12 |
  13 | const socials = [
  14 |   { label: 'Instagram', href: '#', icon: Instagram },

The export Youtube was not found in module [project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/lucide-react.mjs [app-client] (ecmascript).
Did you mean to import Route?
All exports of the module are statically known (It doesn't have dynamic exports). So it's known statically that the requested export doesn't exist.

Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx 
[browser] ./components/contact.tsx:4:1
Error: Export Youtube doesn't exist in target module
   2 |
   3 | import { useState, type FormEvent } from 'react'
>  4 | import {
     | ^^^^^^^
>  5 |   Mail,
     | ^^^^^^^
>  6 |   Instagram,
     | ^^^^^^^^^^^^
>  7 |   Youtube,
     | ^^^^^^^^^^
>  8 |   Linkedin,
     | ^^^^^^^^^^^
>  9 |   ArrowUpRight,
     | ^^^^^^^^^^^^^^^
> 10 |   Send,
     | ^^^^^^^
> 11 | } from 'lucide-react'
     | ^^^^^^^^^^^^^^^^^^^^^
  12 |
  13 | const socials = [
  14 |   { label: 'Instagram', href: '#', icon: Instagram },

The export Youtube was not found in module [project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/lucide-react.mjs [app-ssr] (ecmascript).
Did you mean to import Route?
All exports of the module are statically known (It doesn't have dynamic exports). So it's known statically that the requested export doesn't exist.

Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx
11:39:30.767	⨯ ./components/contact.tsx:4:1
Error: Module not found: Can't resolve '@/components/icons'
  [90m2 |[0m
  [90m3 |[0m [36mimport[0m { useState, [36mtype[0m [33mFormEvent[0m } [36mfrom[0m [32m'react'[0m
[31m[1m>[0m [90m4 |[0m [36mimport[0m { [33mMail[0m, [33mCamera[0m, [33mYoutube[0m, [33mLinkedin[0m, [33mArrowUpRight[0m, [33mSend[0m } [36mfrom[0m [32m'@/components/icons'[0m
  [90m  |[0m [31m[1m^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^[0m
  [90m5 |[0m
  [90m6 |[0m [36mconst[0m socials = [
  [90m7 |[0m   { label: [32m'Instagram'[0m, href: [32m'#'[0m, icon: [33mCamera[0m },

Import map: aliased to relative './components/icons' inside of [project]/


Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx

https://nextjs.org/docs/messages/module-not-found


⨯ ./components/contact.tsx:4:1
Error: Module not found: Can't resolve '@/components/icons'
  [90m2 |[0m
  [90m3 |[0m [36mimport[0m { useState, [36mtype[0m [33mFormEvent[0m } [36mfrom[0m [32m'react'[0m
[31m[1m>[0m [90m4 |[0m [36mimport[0m { [33mMail[0m, [33mCamera[0m, [33mYoutube[0m, [33mLinkedin[0m, [33mArrowUpRight[0m, [33mSend[0m } [36mfrom[0m [32m'@/components/icons'[0m
  [90m  |[0m [31m[1m^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^[0m
  [90m5 |[0m
  [90m6 |[0m [36mconst[0m socials = [
  [90m7 |[0m   { label: [32m'Instagram'[0m, href: [32m'#'[0m, icon: [33mCamera[0m },

Import map: aliased to relative './components/icons' inside of [project]/


Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx

https://nextjs.org/docs/messages/module-not-found


⨯ ./components/contact.tsx:4:1
Error: Module not found: Can't resolve '@/components/icons'
  [90m2 |[0m
  [90m3 |[0m [36mimport[0m { useState, [36mtype[0m [33mFormEvent[0m } [36mfrom[0m [32m'react'[0m
[31m[1m>[0m [90m4 |[0m [36mimport[0m { [33mMail[0m, [33mCamera[0m, [33mYoutube[0m, [33mLinkedin[0m, [33mArrowUpRight[0m, [33mSend[0m } [36mfrom[0m [32m'@/components/icons'[0m
  [90m  |[0m [31m[1m^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^[0m
  [90m5 |[0m
  [90m6 |[0m [36mconst[0m socials = [
  [90m7 |[0m   { label: [32m'Instagram'[0m, href: [32m'#'[0m, icon: [33mCamera[0m },

Import map: aliased to relative './components/icons' inside of [project]/


Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx

https://nextjs.org/docs/messages/module-not-found


⨯ ./components/contact.tsx:4:1
Error: Module not found: Can't resolve '@/components/icons'
  [90m2 |[0m
  [90m3 |[0m [36mimport[0m { useState, [36mtype[0m [33mFormEvent[0m } [36mfrom[0m [32m'react'[0m
[31m[1m>[0m [90m4 |[0m [36mimport[0m { [33mMail[0m, [33mCamera[0m, [33mYoutube[0m, [33mLinkedin[0m, [33mArrowUpRight[0m, [33mSend[0m } [36mfrom[0m [32m'@/components/icons'[0m
  [90m  |[0m [31m[1m^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^[0m
  [90m5 |[0m
  [90m6 |[0m [36mconst[0m socials = [
  [90m7 |[0m   { label: [32m'Instagram'[0m, href: [32m'#'[0m, icon: [33mCamera[0m },

Import map: aliased to relative './components/icons' inside of [project]/


Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx

https://nextjs.org/docs/messages/module-not-found


⨯ ./components/contact.tsx:4:1
Error: Module not found: Can't resolve '@/components/icons'
  [90m2 |[0m
  [90m3 |[0m [36mimport[0m { useState, [36mtype[0m [33mFormEvent[0m } [36mfrom[0m [32m'react'[0m
[31m[1m>[0m [90m4 |[0m [36mimport[0m { [33mMail[0m, [33mCamera[0m, [33mYoutube[0m, [33mLinkedin[0m, [33mArrowUpRight[0m, [33mSend[0m } [36mfrom[0m [32m'@/components/icons'[0m
  [90m  |[0m [31m[1m^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^[0m
  [90m5 |[0m
  [90m6 |[0m [36mconst[0m socials = [
  [90m7 |[0m   { label: [32m'Instagram'[0m, href: [32m'#'[0m, icon: [33mCamera[0m },

Import map: aliased to relative './components/icons' inside of [project]/


Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx

https://nextjs.org/docs/messages/module-not-found


⨯ ./components/contact.tsx:4:1
Error: Module not found: Can't resolve '@/components/icons'
  [90m2 |[0m
  [90m3 |[0m [36mimport[0m { useState, [36mtype[0m [33mFormEvent[0m } [36mfrom[0m [32m'react'[0m
[31m[1m>[0m [90m4 |[0m [36mimport[0m { [33mMail[0m, [33mCamera[0m, [33mYoutube[0m, [33mLinkedin[0m, [33mArrowUpRight[0m, [33mSend[0m } [36mfrom[0m [32m'@/components/icons'[0m
  [90m  |[0m [31m[1m^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^[0m
  [90m5 |[0m
  [90m6 |[0m [36mconst[0m socials = [
  [90m7 |[0m   { label: [32m'Instagram'[0m, href: [32m'#'[0m, icon: [33mCamera[0m },

Import map: aliased to relative './components/icons' inside of [project]/


Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx

https://nextjs.org/docs/messages/module-not-found


⨯ ./components/contact.tsx:4:1
Error: Module not found: Can't resolve '@/components/icons'
  [90m2 |[0m
  [90m3 |[0m [36mimport[0m { useState, [36mtype[0m [33mFormEvent[0m } [36mfrom[0m [32m'react'[0m
[31m[1m>[0m [90m4 |[0m [36mimport[0m { [33mMail[0m, [33mCamera[0m, [33mYoutube[0m, [33mLinkedin[0m, [33mArrowUpRight[0m, [33mSend[0m } [36mfrom[0m [32m'@/components/icons'[0m
  [90m  |[0m [31m[1m^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^[0m
  [90m5 |[0m
  [90m6 |[0m [36mconst[0m socials = [
  [90m7 |[0m   { label: [32m'Instagram'[0m, href: [32m'#'[0m, icon: [33mCamera[0m },

Import map: aliased to relative './components/icons' inside of [project]/


Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx

https://nextjs.org/docs/messages/module-not-found


⨯ ./components/contact.tsx:4:1
Error: Module not found: Can't resolve '@/components/icons'
  [90m2 |[0m
  [90m3 |[0m [36mimport[0m { useState, [36mtype[0m [33mFormEvent[0m } [36mfrom[0m [32m'react'[0m
[31m[1m>[0m [90m4 |[0m [36mimport[0m { [33mMail[0m, [33mCamera[0m, [33mYoutube[0m, [33mLinkedin[0m, [33mArrowUpRight[0m, [33mSend[0m } [36mfrom[0m [32m'@/components/icons'[0m
  [90m  |[0m [31m[1m^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^[0m
  [90m5 |[0m
  [90m6 |[0m [36mconst[0m socials = [
  [90m7 |[0m   { label: [32m'Instagram'[0m, href: [32m'#'[0m, icon: [33mCamera[0m },

Import map: aliased to relative './components/icons' inside of [project]/


Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx

https://nextjs.org/docs/messages/module-not-found


⨯ ./components/contact.tsx:4:1
Error: Module not found: Can't resolve '@/components/icons'
  [90m2 |[0m
  [90m3 |[0m [36mimport[0m { useState, [36mtype[0m [33mFormEvent[0m } [36mfrom[0m [32m'react'[0m
[31m[1m>[0m [90m4 |[0m [36mimport[0m { [33mMail[0m, [33mCamera[0m, [33mYoutube[0m, [33mLinkedin[0m, [33mArrowUpRight[0m, [33mSend[0m } [36mfrom[0m [32m'@/components/icons'[0m
  [90m  |[0m [31m[1m^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^[0m
  [90m5 |[0m
  [90m6 |[0m [36mconst[0m socials = [
  [90m7 |[0m   { label: [32m'Instagram'[0m, href: [32m'#'[0m, icon: [33mCamera[0m },

Import map: aliased to relative './components/icons' inside of [project]/


Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx

https://nextjs.org/docs/messages/module-not-found


⨯ ./components/contact.tsx:4:1
Error: Module not found: Can't resolve '@/components/icons'
  [90m2 |[0m
  [90m3 |[0m [36mimport[0m { useState, [36mtype[0m [33mFormEvent[0m } [36mfrom[0m [32m'react'[0m
[31m[1m>[0m [90m4 |[0m [36mimport[0m { [33mMail[0m, [33mCamera[0m, [33mYoutube[0m, [33mLinkedin[0m, [33mArrowUpRight[0m, [33mSend[0m } [36mfrom[0m [32m'@/components/icons'[0m
  [90m  |[0m [31m[1m^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^[0m
  [90m5 |[0m
  [90m6 |[0m [36mconst[0m socials = [
  [90m7 |[0m   { label: [32m'Instagram'[0m, href: [32m'#'[0m, icon: [33mCamera[0m },

Import map: aliased to relative './components/icons' inside of [project]/


Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx

https://nextjs.org/docs/messages/module-not-found


⨯ ./components/contact.tsx:4:1
Error: Module not found: Can't resolve '@/components/icons'
  [90m2 |[0m
  [90m3 |[0m [36mimport[0m { useState, [36mtype[0m [33mFormEvent[0m } [36mfrom[0m [32m'react'[0m
[31m[1m>[0m [90m4 |[0m [36mimport[0m { [33mMail[0m, [33mCamera[0m, [33mYoutube[0m, [33mLinkedin[0m, [33mArrowUpRight[0m, [33mSend[0m } [36mfrom[0m [32m'@/components/icons'[0m
  [90m  |[0m [31m[1m^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^[0m
  [90m5 |[0m
  [90m6 |[0m [36mconst[0m socials = [
  [90m7 |[0m   { label: [32m'Instagram'[0m, href: [32m'#'[0m, icon: [33mCamera[0m },

Import map: aliased to relative './components/icons' inside of [project]/


Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx

https://nextjs.org/docs/messages/module-not-found


⨯ ./components/contact.tsx:4:1
Error: Module not found: Can't resolve '@/components/icons'
  [90m2 |[0m
  [90m3 |[0m [36mimport[0m { useState, [36mtype[0m [33mFormEvent[0m } [36mfrom[0m [32m'react'[0m
[31m[1m>[0m [90m4 |[0m [36mimport[0m { [33mMail[0m, [33mCamera[0m, [33mYoutube[0m, [33mLinkedin[0m, [33mArrowUpRight[0m, [33mSend[0m } [36mfrom[0m [32m'@/components/icons'[0m
  [90m  |[0m [31m[1m^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^[0m
  [90m5 |[0m
  [90m6 |[0m [36mconst[0m socials = [
  [90m7 |[0m   { label: [32m'Instagram'[0m, href: [32m'#'[0m, icon: [33mCamera[0m },

Import map: aliased to relative './components/icons' inside of [project]/


Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx

https://nextjs.org/docs/messages/module-not-found


⨯ ./components/contact.tsx:4:1
Error: Module not found: Can't resolve '@/components/icons'
  [90m2 |[0m
  [90m3 |[0m [36mimport[0m { useState, [36mtype[0m [33mFormEvent[0m } [36mfrom[0m [32m'react'[0m
[31m[1m>[0m [90m4 |[0m [36mimport[0m { [33mMail[0m, [33mCamera[0m, [33mYoutube[0m, [33mLinkedin[0m, [33mArrowUpRight[0m, [33mSend[0m } [36mfrom[0m [32m'@/components/icons'[0m
  [90m  |[0m [31m[1m^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^[0m
  [90m5 |[0m
  [90m6 |[0m [36mconst[0m socials = [
  [90m7 |[0m   { label: [32m'Instagram'[0m, href: [32m'#'[0m, icon: [33mCamera[0m },

Import map: aliased to relative './components/icons' inside of [project]/


Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx

https://nextjs.org/docs/messages/module-not-found


⨯ ./components/contact.tsx:4:1
Error: Module not found: Can't resolve '@/components/icons'
  [90m2 |[0m
  [90m3 |[0m [36mimport[0m { useState, [36mtype[0m [33mFormEvent[0m } [36mfrom[0m [32m'react'[0m
[31m[1m>[0m [90m4 |[0m [36mimport[0m { [33mMail[0m, [33mCamera[0m, [33mYoutube[0m, [33mLinkedin[0m, [33mArrowUpRight[0m, [33mSend[0m } [36mfrom[0m [32m'@/components/icons'[0m
  [90m  |[0m [31m[1m^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^[0m
  [90m5 |[0m
  [90m6 |[0m [36mconst[0m socials = [
  [90m7 |[0m   { label: [32m'Instagram'[0m, href: [32m'#'[0m, icon: [33mCamera[0m },

Import map: aliased to relative './components/icons' inside of [project]/


Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx

https://nextjs.org/docs/messages/module-not-found
11:39:30.866	./components/contact.tsx:4:1
Error: Module not found: Can't resolve '@/components/icons'
  2 |
  3 | import { useState, type FormEvent } from 'react'
> 4 | import { Mail, Camera, Youtube, Linkedin, ArrowUpRight, Send } from '@/components/icons'
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  5 |
  6 | const socials = [
  7 |   { label: 'Instagram', href: '#', icon: Camera },

Import map: aliased to relative './components/icons' inside of [project]/

Import trace:
  Server Component:
    ./components/contact.tsx
    ./app/page.tsx

https://nextjs.org/docs/messages/module-not-found
11:39:45.892	✓ Compiled in 104ms
11:39:46.496	GET / 200 in 518ms (next.js: 237ms, application-code: 281ms)
11:39:46.997	Download the React DevTools for a better development experience: https://react.dev/link/react-devtools
11:40:00.543	GET / 200 in 124ms (next.js: 4ms, application-code: 121ms)
11:40:00.742	Download the React DevTools for a better development experience: https://react.dev/link/react-devtools
11:40:41.719	GET / 200 in 101ms (next.js: 3ms, application-code: 97ms)
11:40:42.919	Download the React DevTools for a better development experience: https://react.dev/link/react-devtools
11:40:45.224	Reload env: .env.development.local
11:40:45.525	GET / 200 in 247ms (next.js: 66ms, application-code: 182ms)
 GET / 200 in 51ms (next.js: 3ms, application-code: 47ms)
11:40:48.834	GET / 200 in 156ms (next.js: 3ms, application-code: 153ms)
11:40:56.048	A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch `if (typeof window !== 'undefined')`.
- Variable input such as `Date.now()` or `Math.random()` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch

  ...
    <LoadingBoundary name="/" loading={null}>
      <HTTPAccessFallbackBoundary notFound={{...}} forbidden={undefined} unauthorized={undefined}>
        <HTTPAccessFallbackErrorBoundary pathname="/" notFound={{...}} forbidden={undefined} unauthorized={undefined} ...>
          <RedirectBoundary>
            <RedirectErrorBoundary router={{...}}>
              <InnerLayoutRouter url="/" tree={[...]} params={{}} cacheNode={{rsc:{...}, ...}} segmentPath={[...]} ...>
                <SegmentViewNode type="page" pagePath="page.tsx">
                  <SegmentTrieNode>
                  <Page>
                    <Navbar>
                    <main>
                      <section>
                      <section>
                      <section>
                      <Portfolio>
                        <section id="portfolio" className="relative p...">
                          <div className="mx-auto ma...">
                            <div className="flex flex-...">
                              <div>
                              <div className="flex flex-...">
                                <button
                                  type="button"
                                  onClick={function onClick}
                                  className="rounded-full border px-4 py-2 text-sm font-medium transition-colors borde..."
-                                 fdprocessedid="zmj5v9"
                                >
+                                 All
                                <button
                                  type="button"
                                  onClick={function onClick}
                                  className="rounded-full border px-4 py-2 text-sm font-medium transition-colors borde..."
-                                 fdprocessedid="lj9z1f"
                                >
+                                 Video Editing
                                <button
                                  type="button"
                                  onClick={function onClick}
                                  className="rounded-full border px-4 py-2 text-sm font-medium transition-colors borde..."
-                                 fdprocessedid="7wrccs"
                                >
+                                 Motion Graphics
                                <button
                                  type="button"
                                  onClick={function onClick}
                                  className="rounded-full border px-4 py-2 text-sm font-medium transition-colors borde..."
-                                 fdprocessedid="512npj"
                                >
+                                 Graphic Design
                                <button
                                  type="button"
                                  onClick={function onClick}
                                  className="rounded-full border px-4 py-2 text-sm font-medium transition-colors borde..."
-                                 fdprocessedid="pooxbn"
                                >
+                                 Social Media
                            <div className="mt-12 grid...">
                              <button
                                type="button"
                                onClick={function onClick}
                                className="group relative aspect-video overflow-hidden rounded-2xl border border-borde..."
-                               fdprocessedid="io0v4"
                              >
                              <button
                                type="button"
                                onClick={function onClick}
                                className="group relative aspect-video overflow-hidden rounded-2xl border border-borde..."
-                               fdprocessedid="thgeui"
                              >
                              <button
                                type="button"
                                onClick={function onClick}
                                className="group relative aspect-video overflow-hidden rounded-2xl border border-borde..."
-                               fdprocessedid="fkwt6b"
                              >
                              <button
                                type="button"
                                onClick={function onClick}
                                className="group relative aspect-video overflow-hidden rounded-2xl border border-borde..."
-                               fdprocessedid="q586ld"
                              >
                              <button
                                type="button"
                                onClick={function onClick}
                                className="group relative aspect-video overflow-hidden rounded-2xl border border-borde..."
-                               fdprocessedid="fsg7bu"
                              >
                              <button
                                type="button"
                                onClick={function onClick}
                                className="group relative aspect-video overflow-hidden rounded-2xl border border-borde..."
-                               fdprocessedid="87t6j3k"
                              >
                      <section>
                      <section>
                      <section>
                      <Testimonials>
                        <section className="relative p...">
                          <div className="mx-auto ma...">
                            <p>
                            <h2>
                            <div className="relative m...">
                              <Quote>
                              <blockquote>
                              <div>
                              <div className="mt-10 flex...">
                                <button
                                  type="button"
                                  onClick={function onClick}
                                  className="inline-flex size-11 items-center justify-center rounded-full border borde..."
                                  aria-label="Previous testimonial"
-                                 fdprocessedid="brfpkj"
                                >
                                <div className="flex items...">
                                  <button
                                    type="button"
                                    onClick={function onClick}
                                    aria-label="Go to testimonial 1"
                                    className="h-2 rounded-full transition-all w-6 bg-primary"
-                                   fdprocessedid="8cu9fj"
                                  >
                                  <button
                                    type="button"
                                    onClick={function onClick}
                                    aria-label="Go to testimonial 2"
                                    className="h-2 rounded-full transition-all w-2 bg-border hover:bg-muted-foreground"
-                                   fdprocessedid="dv8f6k"
                                  >
                                  <button
                                    type="button"
                                    onClick={function onClick}
                                    aria-label="Go to testimonial 3"
                                    className="h-2 rounded-full transition-all w-2 bg-border hover:bg-muted-foreground"
-                                   fdprocessedid="azm3ef"
                                  >
                                <button
                                  type="button"
                                  onClick={function onClick}
                                  className="inline-flex size-11 items-center justify-center rounded-full border borde..."
                                  aria-label="Next testimonial"
-                                 fdprocessedid="h5yt9a"
                                >
                      ...
                        <div className="mx-auto ma...">
                          <div className="overflow-h...">
                            <div className="grid lg:gr...">
                              <div>
                              <div className="border-t b...">
                                <form onSubmit={function handleSubmit} className="flex flex-...">
                                  <Field label="Name" htmlFor="name">
                                    <div className="flex flex-...">
                                      <label>
                                      <input
                                        id="name"
                                        name="name"
                                        required={true}
                                        placeholder="Your name"
                                        className="w-full rounded-xl border border-border/60 bg-background/60 px-4 py-..."
-                                       fdprocessedid="np164b"
                                      >
                                  <Field label="Email" htmlFor="email">
                                    <div className="flex flex-...">
                                      <label>
                                      <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required={true}
                                        placeholder="you@email.com"
                                        className="w-full rounded-xl border border-border/60 bg-background/60 px-4 py-..."
-                                       fdprocessedid="4qbyrf"
                                      >
                                  <Field label="Project type" htmlFor="projectType">
                                    <div className="flex flex-...">
                                      <label>
                                      <select
                                        id="projectType"
                                        name="projectType"
                                        defaultValue="Video Editing"
                                        className="w-full rounded-xl border border-border/60 bg-background/60 px-4 py-..."
-                                       fdprocessedid="1b8zri"
                                      >
                                  <Field>
                                  <button
                                    type="submit"
                                    className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full b..."
-                                   fdprocessedid="hwy985"
                                  >
                    ...
                ...
              ...
11:41:01.862	GET / 200 in 98ms (next.js: 3ms, application-code: 95ms)
11:41:05.776	A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch `if (typeof window !== 'undefined')`.
- Variable input such as `Date.now()` or `Math.random()` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch

  ...
    <LoadingBoundary name="/" loading={null}>
      <HTTPAccessFallbackBoundary notFound={{...}} forbidden={undefined} unauthorized={undefined}>
        <HTTPAccessFallbackErrorBoundary pathname="/" notFound={{...}} forbidden={undefined} unauthorized={undefined} ...>
          <RedirectBoundary>
            <RedirectErrorBoundary router={{...}}>
              <InnerLayoutRouter url="/" tree={[...]} params={{}} cacheNode={{rsc:{...}, ...}} segmentPath={[...]} ...>
                <SegmentViewNode type="page" pagePath="page.tsx">
                  <SegmentTrieNode>
                  <Page>
                    <Navbar>
                    <main>
                      <section>
                      <section>
                      <section>
                      <Portfolio>
                        <section id="portfolio" className="relative p...">
                          <div className="mx-auto ma...">
                            <div className="flex flex-...">
                              <div>
                              <div className="flex flex-...">
                                <button
                                  type="button"
                                  onClick={function onClick}
                                  className="rounded-full border px-4 py-2 text-sm font-medium transition-colors borde..."
-                                 fdprocessedid="vvvibr"
                                >
+                                 All
                                <button
                                  type="button"
                                  onClick={function onClick}
                                  className="rounded-full border px-4 py-2 text-sm font-medium transition-colors borde..."
-                                 fdprocessedid="ohon2"
                                >
+                                 Video Editing
                                <button
                                  type="button"
                                  onClick={function onClick}
                                  className="rounded-full border px-4 py-2 text-sm font-medium transition-colors borde..."
-                                 fdprocessedid="a1k4h"
                                >
+                                 Motion Graphics
                                <button
                                  type="button"
                                  onClick={function onClick}
                                  className="rounded-full border px-4 py-2 text-sm font-medium transition-colors borde..."
-                                 fdprocessedid="n7i056"
                                >
+                                 Graphic Design
                                <button
                                  type="button"
                                  onClick={function onClick}
                                  className="rounded-full border px-4 py-2 text-sm font-medium transition-colors borde..."
-                                 fdprocessedid="w5udg"
                                >
+                                 Social Media
                            <div className="mt-12 grid...">
                              <button
                                type="button"
                                onClick={function onClick}
                                className="group relative aspect-video overflow-hidden rounded-2xl border border-borde..."
-                               fdprocessedid="fx18nm"
                              >
                              <button
                                type="button"
                                onClick={function onCli
