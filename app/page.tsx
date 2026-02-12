"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { WorkflowNode } from "@/components/workflow-node"

const EXAMPLE_QUESTIONS = [
  "What percentage does the plan cover for co-insurance on diagnostic lab services?",
  "What is the insured's full legal name?",
  "What is the policy number?",
  "What is the date of loss?",
  "Can you confirm coverage type?",
  "What is the deductible amount?",
]

export default function Page() {
  const [nodes, setNodes] = useState([
    { id: 1, question: EXAMPLE_QUESTIONS[0] },
  ])
  const [nextId, setNextId] = useState(2)

  // Get list of questions that haven't been used yet
  const usedQuestions = new Set(nodes.map(node => node.question))
  const availableQuestions = EXAMPLE_QUESTIONS.filter(q => !usedQuestions.has(q))
  const canAddMore = availableQuestions.length > 0

  const addNode = () => {
    if (availableQuestions.length === 0) return

    const nextQuestion = availableQuestions[0]
    setNodes([...nodes, { id: nextId, question: nextQuestion }])
    setNextId(nextId + 1)
  }

  const removeNode = (id: number) => {
    setNodes(nodes.filter(node => node.id !== id))
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold">Workflow Builder</h1>
        <button
          onClick={addNode}
          disabled={!canAddMore}
          className="flex items-center gap-2 bg-[#a500dd] hover:bg-[#8c00bb] text-white px-4 py-2 rounded-lg transition-colors duration-200 shadow-sm disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:bg-gray-300"
        >
          <Plus className="w-4 h-4" />
          Add Node
        </button>
      </header>

      {/* Workflow Canvas */}
      <main
        className="flex flex-col min-h-[calc(100vh-73px)] items-center py-12 px-4"
        style={{
          backgroundImage: 'radial-gradient(circle, #ebebeb 2px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      >
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
                <div className="flex flex-col items-center -mt-1">
                  <div className="w-[2px] h-20 bg-[#a500dd]" />
                  <div
                    className="w-0 h-0 border-l-[7px] border-r-[7px] border-t-[10px] border-l-transparent border-r-transparent border-t-[#a500dd] -mt-[1px] -translate-y-2 "
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
