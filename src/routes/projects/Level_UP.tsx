import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/Level_UP')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/projects/Level_UP"!</div>
}
