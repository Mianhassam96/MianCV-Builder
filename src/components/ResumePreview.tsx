import React from "react";
import { Card } from "@/components/ui/card";

interface ResumePreviewProps {
  formData: any;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ formData }) => {
  return (
    <Card className="p-8 bg-white shadow-lg animate-fadeIn">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center border-b pb-6">
          <h1 className="text-3xl font-bold text-primary">{formData.fullName || "Your Name"}</h1>
          <div className="mt-2 text-gray-600 space-x-4">
            {formData.email && <span>{formData.email}</span>}
            {formData.phone && <span>• {formData.phone}</span>}
            {formData.location && <span>• {formData.location}</span>}
          </div>
        </div>

        {/* Summary */}
        {formData.summary && (
          <div>
            <h2 className="text-xl font-semibold text-primary mb-2">Professional Summary</h2>
            <p className="text-gray-700">{formData.summary}</p>
          </div>
        )}

        {/* Experience */}
        {formData.experience && formData.experience.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-primary mb-4">Work Experience</h2>
            <div className="space-y-4">
              {formData.experience.map((exp: any, index: number) => (
                <div key={index} className="border-l-2 border-primary pl-4">
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
      </div>
    </Card>
  );
};

export default ResumePreview;