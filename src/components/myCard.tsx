import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {ReactNode} from "react"

type CardProps = {
  title?: ReactNode
  description?: ReactNode
  children: ReactNode
  footer?: ReactNode
}
export default function MyCard({title, description, children, footer}: CardProps) {
  return (
    <Card>
      <CardHeader>
        {title && <CardTitle>{title}</CardTitle>}
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter>
        {footer}
      </CardFooter>
    </Card>
  );
}