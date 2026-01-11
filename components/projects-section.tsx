"use client"

import { GooeyText } from "@/components/ui/gooey-text-morphing"
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from "embla-carousel-auto-scroll"
import { useCallback } from "react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "SPEECH-TO-TEXT AND TEXT-TO-SPEECH",
    description: "CONVERTS SPEECH TO TEXT AND TEXT TO SPEECH",
    image: "/speech-to-text-logo.jpg",
    link: "https://github.com/subhash0118/Machine-Learning-6-/blob/main/t2ss2t.py",
  },
  {
    title: "FoundIT",
    description: "Lost and Found Website for Gitam students",
    image: "/lost-and-found-logo.jpg",
    link: "https://github.com/subhash0118/LOST-AND-FOUND",
  },
  {
    title: "CREDIT CARD FRAUD DETECTION",
    description: "Used Anomaly Detection for detecting scams in credit card transactions",
    image: "/credit-card-fraud-detection-logo.jpg",
    link: "https://github.com/subhash0118/Machine-Learning-6-/tree/Anomaly-Detection-for-credit-cards",
  },

  {
    title: "Handwritten Digit Recognition (MNIST)",
    description:
      "Developing a CNN to classify digits from MNIST dataset with target accuracy of 98%. Constructing layers (Convolution, Pooling, Dense, Softmax) in TensorFlow/Keras and optimizing hyperparameters.",
    image: "/mnist-digits.png",
    link: "#",
  },
]

// Duplicate projects to ensure smooth infinite loop
const allProjects = [...projects, ...projects]

export default function ProjectsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      dragFree: true
    },
    [
      AutoScroll({
        playOnInit: true,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        speed: 1,
      }),
    ]
  )

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section id="projects123" className="scroll-mt-20 py-10 overflow-hidden relative">
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1 w-full text-center md:text-left">
            <GooeyText
              texts={["Projects", "My Work"]}
              textClassName="text-4xl font-bold text-center md:text-left text-black dark:text-white"
              className="h-20"
            />
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full bg-white/50 dark:bg-black/50 backdrop-blur-sm border-gray-200 dark:border-gray-800 transition-all duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="rounded-full bg-white/50 dark:bg-black/50 backdrop-blur-sm border-gray-200 dark:border-gray-800 transition-all duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="relative w-full">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {allProjects.map((project, index) => (
              <div
                key={index}
                className="flex-[0_0_auto] min-w-0 pl-4 md:pl-8 first:pl-4 md:first:pl-8"
              >
                <div
                  className="group relative w-[300px] md:w-[400px] h-[400px] flex flex-col bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="h-48 shrink-0 overflow-hidden bg-gray-200 dark:bg-gray-800 relative">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        No Image
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full text-black hover:bg-gray-200 transition-colors"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </a>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-black dark:text-white line-clamp-1">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 text-sm">{project.description}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      View Project <ExternalLink className="ml-1 w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
