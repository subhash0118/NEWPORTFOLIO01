"use client"

import { GooeyText } from "@/components/ui/gooey-text-morphing"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

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

// Duplicate projects for seamless loop
const duplicatedProjects = [...projects, ...projects, ...projects]

export default function ProjectsSection() {
  return (
    <section id="projects123" className="scroll-mt-20 py-10 overflow-hidden">
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        .infinite-scroll-track {
          animation: scroll-left 30s linear infinite;
        }

        .infinite-scroll-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container mx-auto px-4 mb-12">
        <GooeyText
          texts={["Projects", "My Work"]}
          textClassName="text-4xl font-bold text-center text-black dark:text-white"
          className="h-20"
        />
      </div>

      <div className="relative w-full">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />

        <div className="flex infinite-scroll-track w-max hover:[animation-play-state:paused]">
          {duplicatedProjects.map((project, index) => (
            <div
              key={index}
              className="group relative flex-shrink-0 w-[300px] md:w-[400px] mx-4 bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden bg-gray-200 dark:bg-gray-800 relative">
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
          ))}
        </div>
      </div>
    </section>
  )
}
