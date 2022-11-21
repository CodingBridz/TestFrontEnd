export type SpellState = {
  spellList: Array<SpellInfo>
  loading?: boolean
  message?: string
}

export type SpellInfo = {
  index: string
  name: string
  url: string
}
