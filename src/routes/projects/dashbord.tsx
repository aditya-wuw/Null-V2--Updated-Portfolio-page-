import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/dashbord')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/projects/dashbord"!</div>
}
