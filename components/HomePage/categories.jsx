import { CarouselPlugin } from "./Carousal";


export function Categories() {
  return (
    <section className="py-16 sm:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-4xl font-bold text-sky-700 text-center mb-8 sm:mb-12">
          Explore Our Goodies
        </h2>
        <div className="relative">
          <CarouselPlugin />
          {/* <div className="flex overflow-x-auto gap-4 sm:gap-8 py-4 no-scrollbar">
            {categories.map((category) => (
              <Card
                key={category.name}
                className="flex-shrink-0 custom-img rounded-full w-24 h-24 sm:w-32 sm:h-32"
              >
                <CardContent className="flex flex-col items-center p-4 sm:p-6">
                  <span className="text-2xl sm:text-4xl mb-1 sm:mb-2">
                    {category.icon}
                  </span>
                  <span className="text-xs sm:text-sm font-medium">
                    {category.name}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 hidden sm:flex"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 hidden sm:flex"
          >
            <ChevronRight className="h-6 w-6" />
          </Button> */}
        </div>
      </div>

    </section>
  );
}
