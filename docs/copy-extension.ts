console.log("Running pre-render script!")

import { copy } from "https://deno.land/std/fs/copy.ts"

await copy(
  "../_extensions/testproject",
  "./_extensions/testproject", {
    overwrite: true
  })

console.log("Pre-render script done!")