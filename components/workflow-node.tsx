import { MessageCircle } from "lucide-react"

interface WorkflowNodeProps {
  index: number
  question: string
}

export function WorkflowNode({ index, question }: WorkflowNodeProps) {
  return (
    <div className="relative w-full max-w-[400px]">
      {/* Top connection point */}
      <div className="flex justify-center mb-[-1px]">
        <div className="w-3 h-3 rounded-full bg-[#a500dd] border-2 border-white shadow-sm" />
      </div>
      
      {/* Node card */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-1">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-base mb-2">Question</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{question}</p>
          </div>
        </div>
      </div>
      
      {/* Bottom connection point */}
      <div className="flex justify-center mt-[-1px]">
        <div className="w-3 h-3 rounded-full bg-[#a500dd] border-2 border-white shadow-sm" />
      </div>
    </div>
  )
}
