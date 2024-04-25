import type { QuartzComponent, QuartzComponentConstructor } from "../types"

import locale from "../../locales/ar"

const NotFound: QuartzComponent = () => {
  return (
    <article class="popover-hint">
      <h1>404</h1>
      <p>{locale.pages.error.notFound}</p>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
