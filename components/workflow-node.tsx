import { MessageCircleQuestionMark, X, MoveDown } from "lucide-react"

interface WorkflowNodeProps {
  index: number
  question: string
  onRemove?: () => void
}

export function WorkflowNode({ index, question, onRemove }: WorkflowNodeProps) {
  return (
    <div className="relative w-full max-w-[400px]">
      {/* Top connection point */}
      <div className="w-3 h-3 rounded-full bg-white border-2 border-[#a500dd] shadow-sm absolute top-[-6px] left-1/2 -translate-x-1/2 z-10" />


      {/* Node card */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 relative group">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-1">
            <MessageCircleQuestionMark className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-base mb-2">Question</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{question}</p>
          </div>
        </div>

        {/* Remove button */}
        {onRemove && (
          <button
            onClick={onRemove}
            className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-all duration-200 opacity-0 group-hover:opacity-100"
            aria-label="Remove node"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Bottom connection point */}
      <div className="w-3 h-3 rounded-full bg-white border-2 border-[#a500dd] shadow-sm absolute bottom-[-5px] left-1/2 -translate-x-1/2 z-10" />
    </div>
  )
}
