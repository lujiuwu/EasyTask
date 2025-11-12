import Fuse from 'fuse.js'
import _ from 'lodash'

export function useSearch (list: any[], query: string, keys: string[], isHighlight = true) {
  const fuseConfigOptions = {
    includeMatches: isHighlight,
    keys,
  }
  const fuse = new Fuse(list, fuseConfigOptions)
  return fuse.search(query)
}
