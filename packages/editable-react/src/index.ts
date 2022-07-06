// Components
// Environment-dependent Editable
import { RenderElementProps, RenderLeafProps, RenderPlaceholderProps } from './components/editable'

export type {
  RenderElementProps,
  RenderLeafProps,
  RenderPlaceholderProps,
}

export {
  Editable,
  DefaultPlaceholder,
} from './components/editable'
export { DefaultElement } from './components/element'
export { DefaultLeaf } from './components/leaf'
export { Slate } from './components/slate'

// Hooks
export { useEditor } from './hooks/use-editor'
export { useSlateStatic } from './hooks/use-slate-static'
export { useFocused } from './hooks/use-focused'
export { useReadOnly } from './hooks/use-read-only'
export { useSelected } from './hooks/use-selected'
export { useSlate } from './hooks/use-slate'
export { useSlateSelector } from './hooks/use-slate-selector'

// Plugin
export { ReactEditor } from './plugin/react-editor'
export { withReact } from './plugin/with-react'