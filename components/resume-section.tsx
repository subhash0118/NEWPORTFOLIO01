import { GooeyText } from "@/components/ui/gooey-text-morphing"

export default function ResumeSection() {
  return (
    <section id="resume12" className="scroll-mt-20 py-10">
      <div className="container mx-auto px-4 text-center">
        <GooeyText
          texts={["My Resume", "My CV"]}
          textClassName="text-4xl font-bold text-center text-black dark:text-white"
          className="h-20 mb-8"
        />
        <p className="text-lg text-gray-400 mb-8">
          Download my resume & CV to learn more about my skills and experience.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="/K_SAI_SURYA_SUBHASH_0118_%20(29)%20(1).pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-block bg-white text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition"
          >
            📄 My Resume
          </a>
          <a
            href="/30%20RESUME%20MAIN.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-block bg-white text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition"
          >
            📄 My CV
          </a>
        </div>
      </div>
    </section>
  )
}
