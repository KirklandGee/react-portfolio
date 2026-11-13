'use client'

import { Agentation } from 'agentation'

/** Click-to-comment toolbar for design review. Only mounted in development. */
export default function DevAnnotate() {
  return <Agentation endpoint="http://localhost:4747" />
}
