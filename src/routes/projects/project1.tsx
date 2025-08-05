import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/project1')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/projects/project1"!</div>
}