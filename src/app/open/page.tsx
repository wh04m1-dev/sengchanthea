const SectionHeader = ({ title }: { title: string }) => (
  <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-start relative pb-2">
    {title}
    <span className="absolute bottom-0 left-0 w-16 h-1 bg-[#3d8ba6]"></span>
  </h2>
);

export default function Open() {
  return (
    <main className="min-h-screen w-full">
      <section className="w-full py-16">
        <div className="container mx-auto px-4 lg:px-24 max-w-4xl">
          <SectionHeader title="Skills & Expertise" />
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-lg leading-relaxed">
                I&apos;m a{" "}
                <span className="font-semibold">Spring Boot Specialist</span>{" "}
                and <span className="font-semibold">DevOps Engineer</span>{" "}
                focused on building robust business logic with clean
                architecture (MVC, Microservices) and automating delivery
                pipelines. I architect systems where software engineering meets
                operational excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-900 border-b pb-2">
                  Backend Expertise
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Spring Boot application development</li>
                  <li>Domain-driven design & clean architecture</li>
                  <li>RESTful APIs & microservices patterns</li>
                  <li>Database optimization & transaction management</li>
                  <li>Integration with frontend & external systems</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-900 border-b pb-2">
                  DevOps Competencies
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>CI/CD pipeline design (Jenkins/GitHub Actions)</li>
                  <li>Infrastructure as Code (Terraform/CDK)</li>
                  <li>Container orchestration (Kubernetes/Docker)</li>
                  <li>Monitoring & observability implementation</li>
                  <li>Cloud cost optimization strategies</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-900 border-b pb-2">
                  Employment Details
                </h2>
                <ul className="space-y-2">
                  <li>
                    <span className="font-medium">Focus:</span> Backend Systems
                    & DevOps
                  </li>
                  <li>
                    <span className="font-medium">Type:</span> Full-time
                  </li>
                  <li>
                    <span className="font-medium">Location:</span> On-site
                    (Phnom Penh) or Remote
                  </li>
                  <li>
                    <span className="font-medium">Notice:</span> 1 month
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 border-b pb-2">
                  Technical Values
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>SOLID principles in practice</li>
                  <li>Testable, maintainable code</li>
                  <li>Infrastructure as cattle, not pets</li>
                  <li>Automation-first mindset</li>
                  <li>Measurable system improvements</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 border-b pb-2">
                What I Deliver
              </h2>
              <p className="leading-relaxed">
                As a backend engineer, I build Spring Boot applications with
                proper layering (controller-service-repository), clean
                contracts, and business logic that stands the test of scale. As
                a DevOps practitioner, I eliminate manual toil through CI/CD
                pipelines that ensure reliable deployments.
              </p>
              <p className="leading-relaxed mt-4">
                I&apos;m seeking teams that value both{" "}
                <span className="font-medium">well-architected software</span>{" "}
                and <span className="font-medium">streamlined operations</span>.
                Whether it&apos;s implementing new microservices or automating
                their deployment, I focus on solutions that drive business value
                through technical excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
