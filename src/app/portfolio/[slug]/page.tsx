"use client";

import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import { use } from "react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProjectDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const project = projects.find((p) => p.href === slug);

  if (!project) {
    notFound();
  }

  const handleDownloadPDF = () => {
    // Check if project has a PDF file specified
    if (!project.pdfPath) {
      alert("PDF file not available for this project");
      return;
    }

    // Create a temporary anchor element to trigger download
    const link = document.createElement("a");
    link.href = project.pdfPath;
    link.download = `${project.title}.pdf`;
    link.target = "_blank"; // Add target blank for better compatibility
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl md:w-fit lg:min-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-4">
          {project.title}
        </h1>

        <div className="mb-6">
          <Image
            src={project.path}
            alt={project.alt}
            width={800}
            height={640}
            className="rounded-2xl w-full object-contain"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <h3 className="text-lg font-medium mb-2">Technologies</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Project Details</h3>
            <div className="space-y-2">
              <p>
                <span className="font-medium">Status:</span> {project.status}
              </p>
              <p>
                <span className="font-medium">Category:</span> {project.tag}
              </p>
            </div>

            {/* Download PDF Button */}
            {project.pdfPath && (
              <div className="mt-4">
                <button
                  onClick={handleDownloadPDF}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download PDF
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
