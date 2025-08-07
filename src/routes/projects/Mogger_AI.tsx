import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/Mogger_AI')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/projects/Mogger_AI"!</div>
}
