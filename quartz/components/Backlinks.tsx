import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/backlinks.scss"
import { resolveRelative, simplifySlug } from "../util/path"
import { classNames } from "../util/lang"
import locale from "../locales/ar"

const Backlinks: QuartzComponent = ({ fileData, allFiles, displayClass }: QuartzComponentProps) => {
  const slug = simplifySlug(fileData.slug!)
  const backlinkFiles = allFiles.filter((file) => file.links?.includes(slug))
  return (
    <div class={classNames(displayClass, "backlinks")}>
      <h3>{locale.components.backlinks.title}</h3>
      <ul class="overflow">
        {backlinkFiles.length > 0 ? (
          backlinkFiles.map((f) => (
            <li>
              <a href={resolveRelative(fileData.slug!, f.slug!)} class="internal">
                {f.frontmatter?.title}
              </a>
            </li>
          ))
        ) : (
          <li>{locale.components.backlinks.noBacklinksFound}</li>
        )}
      </ul>
    </div>
  )
}

Backlinks.css = style
export default (() => Backlinks) satisfies QuartzComponentConstructor
