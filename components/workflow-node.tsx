import { MessageCircle, X, MoveDown } from "lucide-react"

interface WorkflowNodeProps {
  index: number
  question: string
  onRemove?: () => void
}

export function WorkflowNode({ index, question, onRemove }: WorkflowNodeProps) {
  return (
    <div className="relative w-full max-w-[295px]">
      {/* Top connection point */}
      <div className="w-[12px] h-[12px] rounded-full bg-white border-[3px] border-[#a500dd] shadow-sm absolute top-[-8px] left-1/2 -translate-x-1/2 z-10" />


      {/* Node card */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-200 relative group overflow-hidden">
        {/* Header Section */}
        <div className="flex items-center gap-3 p-4">
          <div className="flex-shrink-0">
            <MessageCircle className="w-6 h-6" strokeWidth={2.5} />
          </div>
          <h3 className="font-semibold text-md">Question</h3>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200" />

        {/* Content Section */}
        <div className="p-4">
          <p className="text-sm text-gray-900 leading-relaxed">{question}</p>
        </div>

        {/* Remove button */}
        {onRemove && (
          <button
            onClick={onRemove}
            className="absolute top-4 right-4 w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-all duration-200 opacity-0 group-hover:opacity-100"
            aria-label="Remove node"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Bottom connection point */}
      <div className="w-[12px] h-[12px] rounded-full bg-white border-[3px] border-[#a500dd] shadow-sm absolute bottom-[-8px] left-1/2 -translate-x-1/2 z-10" />
    </div>
  )
}
