import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const articles = [
  {
    title: "The Art of Perfect Croissants",
    image: "/placeholder.svg?height=200&width=300",
    action: "Learn More"
  },
  {
    title: "Fruit-infused Delights",
    image: "/placeholder.svg?height=200&width=300",
    action: "Read Article"
  },
  {
    title: "The Power of Presentation",
    image: "/placeholder.svg?height=200&width=300",
    action: "Learn More"
  }
]

export function Articles() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-sky-700 text-center mb-12">
          Our New Articles
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.title}>
              <CardContent className="p-0">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={300}
                  height={200}
                  className="w-full"
                />
                <div className="p-6">
                  <h3 className="font-semibold mb-4">{article.title}</h3>
                  <Button variant="outline">{article.action}</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

