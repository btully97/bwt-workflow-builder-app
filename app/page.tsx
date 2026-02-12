"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { WorkflowNode } from "@/components/workflow-node"

const EXAMPLE_QUESTIONS = [
  "What is the insured's full legal name?",
  "What is the policy number?",
  "What is the date of loss?",
  "Can you confirm coverage type?",
  "What is the deductible amount?",
]

export default function Page() {
  const [nodes, setNodes] = useState([
    { id: 1, question: "What percentage does the plan cover for co-insurance on diagnostic lab services?" },
  ])

  const addNode = () => {
    const nextQuestion = EXAMPLE_QUESTIONS[(nodes.length - 1) % EXAMPLE_QUESTIONS.length]
    setNodes([...nodes, { id: nodes.length + 1, question: nextQuestion }])
  }

  const removeNode = (id: number) => {
    setNodes(nodes.filter(node => node.id !== id))
  }

  return (
    <div className="min-h-screen bg-[#e5e5e5]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold">Workflow Builder</h1>
        <button
          onClick={addNode}
          className="flex items-center gap-2 bg-[#a500dd] hover:bg-[#8c00bb] text-white px-4 py-2 rounded-md transition-colors duration-200 shadow-sm"
        >
          <Plus className="w-4 h-4" />
          Add Node
        </button>
      </header>

      {/* Workflow Canvas */}
      <main className="flex flex-col items-center py-12 px-4">
        <div className="w-full max-w-[700px] flex flex-col items-center gap-0">
          {nodes.map((node, index) => (
            <div key={node.id} className="flex flex-col items-center w-full">
              <WorkflowNode 
                index={index} 
                question={node.question}
                onRemove={() => removeNode(node.id)}
              />
              
              {/* Connecting line between nodes */}
              {index < nodes.length - 1 && (
                <div className="w-0.5 h-16 bg-[#a500dd]" />
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
