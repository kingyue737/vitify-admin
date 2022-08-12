## Plugins

A custom user plugin system. Place a `.ts` file with the following template, it will be installed automatically.

```ts
import type { InstallPlugin } from '@/utils/types'

export const install: InstallPlugin = (vue) => {
  // do something
}
```
