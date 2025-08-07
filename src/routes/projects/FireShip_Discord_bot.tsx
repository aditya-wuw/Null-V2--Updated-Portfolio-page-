import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/FireShip_Discord_bot')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/projects/FireShip_Discord_bot"!</div>
}
