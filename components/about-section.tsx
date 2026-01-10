import { Timeline } from "@/components/ui/timeline"
import { GooeyText } from "@/components/ui/gooey-text-morphing"

export default function AboutSection() {
  const internshipData = [
    {
      title: "Oct 2024",
      content: (
        <div key="oct-2024-content">
          <h4 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">Web Development Intern</h4>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm font-medium mb-2">
            Infosys Springboard (Oct 2024 - Dec 2024)
          </p>
          <ul className="text-neutral-700 dark:text-neutral-300 text-sm space-y-2">
            <li>
              • Launched a health-tracking app (React.js, Express.js, MongoDB), increasing student engagement by 30%
            </li>
            <li>• Accelerated page performance by 45% using optimized queries and API tuning</li>
            <li>• Enhanced UI/UX with responsive design, boosting client satisfaction by 40%</li>
            <li>• Worked in an agile team, adhering to version control best practices</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Apr 2025",
      content: (
        <div key="apr-2025-content">
          <h4 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">AI/ML Intern</h4>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm font-medium mb-2">
            EduNet by AICTE (Apr 2025 - May 2025)
          </p>
          <ul className="text-neutral-700 dark:text-neutral-300 text-sm space-y-2">
            <li>• Engineered fraud detection models for credit card transactions, improving accuracy by 92%</li>
            <li>• Reduced false positives by 18% through advanced feature engineering and model validation</li>
            <li>• Applied data preprocessing, model tuning, and validation using Python, Scikit-learn, and Pandas</li>
            <li>• Delivered insights that enabled stakeholders to mitigate financial risks effectively</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Jun 2025",
      content: (
        <div key="jun-2025-content">
          <h4 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">Python Foundation Intern</h4>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm font-medium mb-2">
            Finsol Consultancy (Jun 2025 - Jul 2025)
          </p>
          <ul className="text-neutral-700 dark:text-neutral-300 text-sm space-y-2">
            <li>• Architected a role-based user management system in Django, cutting admin processing time by 30%</li>
            <li>• Produced detailed technical documentation and enforced process adherence</li>
            <li>• Strengthened session handling, reducing unauthorized access incidents by 90%</li>
            <li>• Enhanced scalability by 3× through optimized queries, caching strategies, and automated testing</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Nov 2025",
      content: (
        <div key="nov-2025-content">
          <h4 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">Bataasari Startup</h4>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm font-medium mb-2">
            Technical Development Team (2 months ago - Present)
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-4">
            Currently working as a technical developer contributing to innovative solutions.
          </p>
        </div>
      ),
    },
  ]

  return (
    <section id="aboutme" className="scroll-mt-20 py-10">
      <div className="container mx-auto px-4">
        <GooeyText
          texts={["About Me", "My Journey"]}
          textClassName="text-4xl font-bold text-center text-black dark:text-white"
          className="h-20 mb-8"
        />
        <p className="text-lg text-gray-400 max-w-5xl mx-auto text-center leading-relaxed mb-8">
          Hello! I'm K. Sai Surya Subhash, a passionate Computer Science Engineering student at GITAM University,
          Visakhapatnam. With a strong foundation in programming and software development, I enjoy solving real-world
          problems using technology.
          <br />
          My expertise spans Python, Java, C and JavaScript, along with hands-on experience in web development, AI and
          data science. I've worked on projects like Speech-to-Text and Text-to-Speech conversion, leveraging deep
          learning and natural language processing techniques.
          <br />
          Beyond coding, I actively participate in sports events and enjoy problem-solving through competitions. I'm
          always looking for opportunities to collaborate and create impactful solutions.
          <br />
          Let's connect and build something amazing together!
        </p>

        <div className="max-w-5xl mx-auto mt-16">
          <h3 className="text-3xl font-bold text-center mb-12">Internship Experience</h3>
          <Timeline data={internshipData} />
        </div>
      </div>
    </section>
  )
}
