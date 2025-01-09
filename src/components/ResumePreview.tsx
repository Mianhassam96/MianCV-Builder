import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ResumePreviewProps {
  formData: any;
  template?: "modern" | "professional" | "creative";
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ formData, template = "modern" }) => {
  const getTemplateStyles = () => {
    switch (template) {
      case "professional":
        return {
          headerClass: "bg-blue-900 text-white p-8",
          nameClass: "text-3xl font-serif",
          sectionClass: "border-l-4 border-blue-900 pl-4 my-4",
          containerClass: "max-w-4xl mx-auto bg-white shadow-lg",
          skillBadgeClass: "bg-blue-100 text-blue-900 hover:bg-blue-200",
        };
      case "creative":
        return {
          headerClass: "bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8",
          nameClass: "text-4xl font-bold",
          sectionClass: "border-l-4 border-pink-500 pl-4 my-4",
          containerClass: "max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden",
          skillBadgeClass: "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-900 hover:from-purple-200 hover:to-pink-200",
        };
      default: // modern
        return {
          headerClass: "bg-gradient-to-r from-gray-50 to-gray-100 p-8 border-b",
          nameClass: "text-3xl font-bold text-primary",
          sectionClass: "border-l-2 border-primary pl-4 my-4",
          containerClass: "max-w-4xl mx-auto bg-white shadow-md",
          skillBadgeClass: "bg-primary/10 text-primary hover:bg-primary/20",
        };
    }
  };

  const styles = getTemplateStyles();

  return (
    <Card className={`${styles.containerClass} animate-fadeIn print:shadow-none`} id="resume-preview">
      {/* Header */}
      <div className={styles.headerClass}>
        <h1 className={styles.nameClass}>{formData.fullName || "Your Name"}</h1>
        <div className="mt-2 space-y-2">
          <div className="flex flex-wrap gap-4 text-sm">
            {formData.email && <span>{formData.email}</span>}
            {formData.phone && <span>• {formData.phone}</span>}
            {formData.location && <span>• {formData.location}</span>}
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            {formData.linkedin && <span>LinkedIn: {formData.linkedin}</span>}
            {formData.website && <span>• Portfolio: {formData.website}</span>}
          </div>
        </div>
      </div>

      {/* Summary */}
      {formData.summary && (
        <div className="px-8">
          <h2 className="text-xl font-semibold text-primary mb-2">Professional Summary</h2>
          <p className="text-gray-700">{formData.summary}</p>
        </div>
      )}

      {/* Experience */}
      {formData.experience && formData.experience.length > 0 && (
        <div className="px-8">
          <h2 className="text-xl font-semibold text-primary mb-4">Work Experience</h2>
          <div className="space-y-4">
            {formData.experience.map((exp: any, index: number) => (
              <div key={index} className={styles.sectionClass}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{exp.position}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-500">{exp.duration}</span>
                </div>
                <p className="mt-2 text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {formData.education && formData.education.length > 0 && (
        <div className="px-8">
          <h2 className="text-xl font-semibold text-primary mb-4">Education</h2>
          <div className="space-y-4">
            {formData.education.map((edu: any, index: number) => (
              <div key={index} className={styles.sectionClass}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{edu.degree}</h3>
                    <p className="text-gray-600">{edu.institution}</p>
                  </div>
                  <span className="text-sm text-gray-500">{edu.year}</span>
                </div>
                {edu.gpa && <p className="mt-1 text-gray-600">GPA: {edu.gpa}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {formData.skills && formData.skills.length > 0 && (
        <div className="px-8 pb-8">
          <h2 className="text-xl font-semibold text-primary mb-4">Skills & Expertise</h2>
          <div className="flex flex-wrap gap-2">
            {formData.skills.map((skill: any, index: number) => (
              <Badge
                key={index}
                variant="secondary"
                className={`${styles.skillBadgeClass} text-sm py-1 px-3 rounded-full transition-colors`}
              >
                {skill.name}
                {skill.level && (
                  <span className="ml-1 opacity-75">• {skill.level}</span>
                )}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
};

export default ResumePreview;
