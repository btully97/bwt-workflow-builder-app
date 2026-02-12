# Workflow Builder App

A visual workflow builder application that allows you to create and manage question nodes with a clean, intuitive interface.

## Features

- Add workflow question nodes with a simple button click
- Remove nodes with hover-to-reveal delete button
- Visual connection lines with arrows between nodes
- Prevents duplicate questions from being added
- Auto-disables "Add Node" button when all questions are used
- Dot-grid background for professional canvas appearance

## Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm package manager (or npm/yarn)

### Installation

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

### Running the Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

```bash
pnpm build
pnpm start
```

## Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Main workflow builder page
│   └── globals.css     # Global styles
├── components/
│   └── workflow-node.tsx  # Workflow node component
└── README.md
```

## Usage

1. Click "Add Node" to add a new question node to the workflow
2. Hover over a node and click the X button to remove it
3. Questions are tracked to prevent duplicates
4. When all questions are used, the Add Node button will be disabled
5. Removed questions become available again for adding
