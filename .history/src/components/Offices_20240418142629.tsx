import clsx from "clsx";

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Gauteng" invert={invert}>
          Station Place 
          <br />
          190 Scheiding street, Pretoria Central
        </Office>
      </li>
      <li>
        <Office name="Limpopo" invert={invert}>
          Office
          <br />
          7190, polo
        </Office>
      </li>
    </ul>
  )
}
